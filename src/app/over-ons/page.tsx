import Image from "next/image";
import type { Metadata } from "next";
import Closer from "@/components/Closer";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CheckItem, Section, SectionHead } from "@/components/ui";
import { breadcrumbs } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Paulus Cleaning: Jens Paulus uit Brecht",
  description:
    "Van ramenwasser in bijberoep naar reinigingsbedrijf voor dak, gevel, oprit en zonnepanelen. Het verhaal van Jens Paulus uit Brecht.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOnsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/about-hero2.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-25" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/75" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Over ons" }]} />
          <h1 className="mt-8 max-w-3xl text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
            Begonnen met een ladder en een emmer, in bijberoep
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Paulus Cleaning is Jens Paulus uit Brecht. Wie de offerte maakt, staat ook aan uw gevel.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl leading-snug sm:text-3xl">
              Van offshore windturbines naar daken in de Kempen
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Ik ben Jens Paulus, geboren en getogen in Brecht. In 2020 begon ik als ramenwasser in
                bijberoep, naast mijn job als offshore windturbinetechnieker.
              </p>
              <p>
                Die achtergrond komt nog elke week van pas. Wie jaren op zee aan een windturbine
                heeft gewerkt, kijkt anders naar een steil dak of een hoge gevel. Niet
                onvoorzichtiger: net omgekeerd. Veilig werken op hoogte is daar geen keuze maar een
                routine.
              </p>
              <p>
                Na vijf jaar heb ik van het bijberoep mijn hoofdberoep gemaakt.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-100 ring-1 ring-navy-900/10">
            <Image src="/img/content/about-1.webp" alt="Jens Paulus aan het werk op een dak" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-100 ring-1 ring-navy-900/10 lg:order-2">
            <Image src="/img/content/about-2.webp" alt="Reiniging van een grote zonnepaneleninstallatie" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <div className="lg:order-1">
            <h2 className="text-2xl leading-snug sm:text-3xl">
              Van tien panelen naar installaties met honderden
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Toen zonnepanelen overal op de daken verschenen, kwam de vraag om die te reinigen
                vanzelf. Eerst bij particulieren, daarna bij loodsen en stallen met honderden panelen
                tegelijk.
              </p>
              <p>
                Dat werk bracht me op steeds meer daken, en daar zag ik telkens hetzelfde: mos tussen
                de pannen, groene aanslag op de gevel, een oprit die grijs zag. Zo kwamen daar-, gevel-
                en opritreiniging bij.
              </p>
              <p>
                Vandaag is Paulus Cleaning een bedrijf dat de volledige buitenkant van een woning of
                bedrijfspand aanpakt, met materiaal en technieken die per ondergrond verschillen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            tone="light"
            eyebrow="Hoe we werken"
            title="Wat u van ons mag verwachten"
            intro="Geen beloftes die we niet kunnen waarmaken, en geen offerte met één regel erop."
          />
          <ul className="grid gap-4">
            {[
              "Eén aanspreekpunt van de eerste foto tot de oplevering",
              "De techniek volgt uit de inspectie, niet uit gewoonte",
              "Wat reiniging niet oplost, hoort u vóór de werken",
              "Elke post apart op de offerte, zodat u kunt kiezen",
              "Vaste prijs op voorhand, geen uurtarief achteraf",
              "Opgeruimd achtergelaten, met advies om het zo te houden",
            ].map((item) => (
              <CheckItem key={item} tone="light">{item}</CheckItem>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          align="center"
          eyebrow="Paulus Cleaning"
          title="De gegevens op een rij"
        />
        <dl className="mx-auto mt-10 grid max-w-3xl gap-x-10 gap-y-6 sm:grid-cols-2">
          {[
            { k: "Zaakvoerder", v: site.owner },
            { k: "Actief sinds", v: site.founded },
            { k: "Adres", v: `${site.address.street}, ${site.address.postalCode} ${site.address.city}` },
            { k: "Ondernemingsnummer", v: site.vat },
            { k: "Telefoon", v: site.phone },
            { k: "E-mail", v: site.email },
          ].map((row) => (
            <div key={row.k} className="border-t border-hairline pt-4">
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted">{row.k}</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-ink">{row.v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Closer />
      <JsonLd data={breadcrumbs([{ name: "Home", url: "/" }, { name: "Over ons", url: "/over-ons" }])} />
    </>
  );
}
