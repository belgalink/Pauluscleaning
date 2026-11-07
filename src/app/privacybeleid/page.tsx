import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Hoe Paulus Cleaning omgaat met uw persoonsgegevens bij een offerteaanvraag via deze website.",
  alternates: { canonical: "/privacybeleid" },
  robots: { index: false, follow: true },
};

const blocks: { h: string; p: string[] }[] = [
  {
    h: "Wie verwerkt uw gegevens?",
    p: [
      `${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}. Ondernemingsnummer ${site.vat}. U bereikt ons op ${site.phone} of via ${site.email}.`,
    ],
  },
  {
    h: "Welke gegevens verzamelen we?",
    p: [
      "Enkel wat u zelf invult in het contactformulier: uw naam, telefoonnummer, e-mailadres, postcode en gemeente, de gekozen dienst en uw bericht. Stuurt u ons foto's via WhatsApp of e-mail, dan ontvangen we die ook.",
      "Deze website gebruikt geen trackingcookies en geen advertentiecookies.",
    ],
  },
  {
    h: "Waarvoor gebruiken we ze?",
    p: [
      "Uitsluitend om uw aanvraag te behandelen: u een prijs bezorgen, een afspraak maken en de werken uitvoeren. We sturen u geen nieuwsbrief tenzij u daar uitdrukkelijk om vraagt, en we verkopen uw gegevens niet door.",
      "De rechtsgrond is de uitvoering van een overeenkomst of de stappen die daaraan voorafgaan, op uw verzoek.",
    ],
  },
  {
    h: "Hoelang bewaren we ze?",
    p: [
      "Aanvragen die niet tot een opdracht leiden, bewaren we maximaal twee jaar. Gegevens die bij een uitgevoerde opdracht horen, houden we bij zolang de wettelijke bewaartermijnen voor facturatie en boekhouding dat vereisen.",
    ],
  },
  {
    h: "Met wie delen we ze?",
    p: [
      "Met de dienstverleners die nodig zijn om deze website en onze administratie te laten werken, zoals onze hostingpartij en onze e-maildienst. Zij mogen uw gegevens enkel in onze opdracht verwerken.",
    ],
  },
  {
    h: "Uw rechten",
    p: [
      "U kunt uw gegevens opvragen, laten verbeteren of laten verwijderen. Stuur daarvoor een bericht naar " +
        site.email +
        ". Bent u het niet eens met hoe we met uw gegevens omgaan, dan kunt u klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl">Privacybeleid</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Kort en zonder omwegen: wat we met uw gegevens doen als u dit formulier invult.
        </p>
        <div className="mt-12 space-y-10">
          {blocks.map((b) => (
            <section key={b.h}>
              <h2 className="font-display text-xl font-semibold text-ink">{b.h}</h2>
              {b.p.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
