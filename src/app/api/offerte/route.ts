import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = Record<string, unknown>;

const str = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot: stille 200 zodat bots niets leren.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const naam = str(body.naam, 120);
  const telefoon = str(body.telefoon, 40);
  const email = str(body.email, 160);
  const postcode = str(body.postcode, 120);
  const dienst = str(body.dienst, 120) || "Niet opgegeven";
  const bericht = str(body.bericht, 4000) || "—";

  if (!naam || !telefoon || !email || !postcode) {
    return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Dat e-mailadres lijkt niet te kloppen." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL;
  const from = process.env.LEAD_FROM ?? "Paulus Cleaning <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("offerte: RESEND_API_KEY of LEAD_EMAIL ontbreekt");
    return NextResponse.json(
      { error: "Het formulier kan uw bericht nu niet versturen." },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Naam", naam],
    ["Telefoon", telefoon],
    ["E-mail", email],
    ["Postcode en gemeente", postcode],
    ["Dienst", dienst],
    ["Bericht", bericht],
  ];

  const html = `<!doctype html><html lang="nl"><body style="margin:0;background:#f4f8fc;padding:24px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#0a1733">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e2e9f3">
<tr><td style="background:#01134d;padding:22px 26px;color:#fff">
<p style="margin:0;font-size:12px;letter-spacing:.09em;text-transform:uppercase;color:#57caf4">Nieuwe aanvraag</p>
<h1 style="margin:6px 0 0;font-size:21px;font-weight:600">Offerteaanvraag via pauluscleaning.be</h1>
</td></tr>
<tr><td style="padding:10px 26px 26px">
<table role="presentation" width="100%" style="border-collapse:collapse;font-size:15px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:12px 0;border-bottom:1px solid #eef2fa;color:#51607d;width:44%;vertical-align:top">${escape(k)}</td><td style="padding:12px 0;border-bottom:1px solid #eef2fa;font-weight:600;vertical-align:top;white-space:pre-wrap">${escape(v)}</td></tr>`,
  )
  .join("")}
</table>
<p style="margin:22px 0 0"><a href="tel:${escape(telefoon.replace(/\s/g, ""))}" style="display:inline-block;background:#57caf4;color:#01134d;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:999px">Bel ${escape(naam)}</a></p>
</td></tr></table></body></html>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Offerteaanvraag ${dienst} — ${naam} (${postcode})`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error("offerte: resend gaf", res.status, await res.text());
      return NextResponse.json(
        { error: "Het versturen lukte niet." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("offerte: netwerkfout", err);
    return NextResponse.json({ error: "Het versturen lukte niet." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
