"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { site, waDefault, waLink } from "@/lib/site";
import { WhatsApp } from "./icons";

type State = "idle" | "sending" | "done" | "error" | "fallback";

const field =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15";
const label = "block text-sm font-semibold text-ink";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState(waDefault);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setState("sending");
    try {
      const res = await fetch("/api/offerte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.ok) {
        setState("done");
        form.reset();
        return;
      }

      // 503 = de mailkoppeling staat (nog) niet ingesteld. Laat de bezoeker
      // niet in de kou staan: alles wat ingevuld is, gaat mee naar WhatsApp.
      if (res.status === 503) {
        setFallbackHref(
          waLink(
            [
              "Hallo Paulus Cleaning, ik vroeg een prijs aan via de website.",
              "",
              `Naam: ${data.naam ?? ""}`,
              `Telefoon: ${data.telefoon ?? ""}`,
              `E-mail: ${data.email ?? ""}`,
              `Postcode en gemeente: ${data.postcode ?? ""}`,
              `Dienst: ${data.dienst || "Niet opgegeven"}`,
              data.bericht ? `Bericht: ${data.bericht}` : "",
            ]
              .filter(Boolean)
              .join("\n"),
          ),
        );
        setState("fallback");
        return;
      }

      throw new Error(json?.error ?? "Versturen mislukt");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Er ging iets mis.");
    }
  }

  if (state === "fallback") {
    return (
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-white">
          <WhatsApp className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">
          Nog één tik en uw aanvraag is onderweg
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted">
          Alles wat u invulde staat klaar in een WhatsApp-bericht. Open het en verstuur,
          dan komt uw aanvraag rechtstreeks bij Jens terecht. Foto&apos;s kunt u er meteen bij voegen.
        </p>
        <a
          href={fallbackHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-sky-300"
        >
          <WhatsApp className="h-5 w-5" />
          Openen in WhatsApp
        </a>
        <p className="mt-5 text-sm text-muted">
          Liever bellen?{" "}
          <a href={site.phoneHref} className="font-semibold text-sky-700 underline underline-offset-4">
            {site.phone}
          </a>
        </p>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sky-400 text-navy-900">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">Uw aanvraag is binnen</h3>
        <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted">
          Jens neemt zo snel mogelijk contact met u op. Heeft u foto&apos;s van de gevel, het dak of
          de oprit? Stuur ze gerust door via WhatsApp, dan gaat het nog sneller.
        </p>
        <a
          href={waDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
        >
          <WhatsApp className="h-5 w-5" />
          Foto&apos;s doorsturen
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      {/* honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={label}>Naam</label>
          <input id="naam" name="naam" required autoComplete="name" className={`mt-1.5 ${field}`} placeholder="Jan Peeters" />
        </div>
        <div>
          <label htmlFor="telefoon" className={label}>Telefoon</label>
          <input id="telefoon" name="telefoon" required type="tel" autoComplete="tel" className={`mt-1.5 ${field}`} placeholder="0470 00 00 00" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>E-mail</label>
          <input id="email" name="email" required type="email" autoComplete="email" className={`mt-1.5 ${field}`} placeholder="jan@voorbeeld.be" />
        </div>
        <div>
          <label htmlFor="postcode" className={label}>
            Postcode en gemeente
          </label>
          <input id="postcode" name="postcode" required autoComplete="postal-code" className={`mt-1.5 ${field}`} placeholder="2960 Brecht" />
        </div>
      </div>

      <div>
        <label htmlFor="dienst" className={label}>Wat mag er gereinigd worden?</label>
        <select id="dienst" name="dienst" defaultValue={defaultService} className={`mt-1.5 ${field}`}>
          <option value="">Maak een keuze</option>
          {services.map((s) => (
            <option key={s.slug} value={s.card}>{s.card}</option>
          ))}
          <option value="Combinatie van meerdere diensten">Combinatie van meerdere diensten</option>
          <option value="Iets anders">Iets anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="bericht" className={label}>
          Uw vraag <span className="font-normal text-muted">(niet verplicht)</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          className={`mt-1.5 resize-y ${field}`}
          placeholder="Bijvoorbeeld: oppervlakte in m², type ondergrond, of wanneer het mag doorgaan."
        />
      </div>

      {state === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {message} Bel gerust naar{" "}
          <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> of stuur een
          WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-4 text-base font-semibold text-navy-900 shadow-[0_8px_24px_-8px_rgba(87,202,244,.9)] transition-all hover:-translate-y-0.5 hover:bg-sky-300 disabled:translate-y-0 disabled:opacity-60"
      >
        {state === "sending" ? "Bezig met versturen…" : "Ontvang mijn prijs op maat"}
      </button>

      <p className="text-center text-[13px] leading-relaxed text-muted">
        Vrijblijvend en gratis. Uw gegevens gebruiken we alleen voor deze aanvraag.
      </p>
    </form>
  );
}
