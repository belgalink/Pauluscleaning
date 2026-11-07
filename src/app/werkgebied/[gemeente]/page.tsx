import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import Closer from "@/components/Closer";
import FaqList from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, Phone, ServiceIcons } from "@/components/icons";
import { Breadcrumbs, Button, CheckItem, Section, SectionHead } from "@/components/ui";
import { getCase } from "@/data/cases";
import { services } from "@/data/services";
import { breadcrumbs, serviceSchema } from "@/lib/jsonld";
import { serviceAreas, site } from "@/lib/site";

const featured = ["dak-landelijke-woning", "gevel-zijgevel", "oprit-klinkers"].map((s) => getCase(s)!);

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ gemeente: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gemeente: string }>;
}): Promise<Metadata> {
  const { gemeente } = await params;
  const area = serviceAreas.find((a) => a.slug === gemeente);
  if (!area) return {};
  return {
    title: `Gevel-, dak- en opritreiniging in ${area.name}`,
    description: `Gevel, dak, oprit, terras, zonnepanelen en ramen laten reinigen in ${area.name} (${area.postal}). Paulus Cleaning uit Brecht. Stuur foto's door voor een vaste prijs.`,
    alternates: { canonical: `/werkgebied/${area.slug}` },
  };
}

export default async function GemeentePage({
  params,
}: {
  params: Promise<{ gemeente: string }>;
}) {
  const { gemeente } = await params;
  const area = serviceAreas.find((a) => a.slug === gemeente);
  if (!area) notFound();

  const others = serviceAreas.filter((a) => a.slug !== area.slug);

  const faq = [
    {
      q: `Komen jullie in heel ${area.name}?`,
      a: `Ja. ${area.intro} Vanuit Brecht is dat een korte rit, wat de verplaatsingskost beperkt houdt.`,
    },
    {
      q: `Wat kost gevel- of dakreiniging in ${area.name}?`,
      a: "De prijs hangt af van de oppervlakte, het materiaal, de vervuiling en de bereikbaarheid, niet van uw gemeente. Stuur een paar foto's en uw adres door, dan krijgt u een vaste prijs.",
    },
    {
      q: "Moet ik thuis zijn als jullie langskomen?",
      a: "Voor buitenwerk meestal niet, zolang we aan een buitenkraan kunnen en de toegang vrij is. We spreken dat op voorhand af.",
    },
    {
      q: "Werken jullie ook voor bedrijven in de regio?",
      a: "Ja. Bedrijfsgevels, parkings, terreinen en zonnepaneelinstallaties op loodsen en stallen. De planning stemmen we af op uw werking.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/svc-gevel.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Werkgebied", href: "/werkgebied" },
              { label: area.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
              Gevel-, dak- en opritreiniging in {area.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              {area.intro} Paulus Cleaning zit in Brecht, op een boogscheut van {area.name} ({area.postal}).
              Dat scheelt in uw verplaatsingskost en maakt het makkelijk om snel even te komen kijken.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#offerte" size="lg">
                Vraag uw prijs in {area.name}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <SectionHead
          eyebrow={area.postal}
          title={<>Wat we in {area.name} komen doen</>}
          intro="Zes diensten voor de volledige buitenkant van uw woning of bedrijfspand. Combineert u er meerdere, dan betaalt u maar één keer voor de verplaatsing."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ServiceIcons[s.icon];
            return (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-hairline p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_40px_-20px_rgba(10,23,51,.3)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {s.nav} in {area.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.cardSub}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
                    Meer info
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Voor en na"
          title="Zo ziet het resultaat eruit"
          intro="Woningen uit Brecht en de omliggende gemeenten, gefotografeerd voor en na de behandeling. Sleep de balk om te vergelijken."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((c) => (
            <BeforeAfter
              key={c.slug}
              slug={c.slug}
              title={c.title}
              caption={c.caption}
              tag={c.tag}
              aspect={c.aspect}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
            />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            tone="light"
            eyebrow={`Waarom ${area.name}`}
            title={<>Een vakman uit de streek, geen bedrijf van ver</>}
            intro="Dat klinkt als een cliché tot u de factuur ziet van iemand die twee keer per dag heen en weer moet rijden."
          />
          <ul className="grid gap-4">
            {[
              `Korte rit vanuit Brecht naar ${area.name}, dus beperkte verplaatsingskost`,
              "Even langskomen om te kijken is geen halve dag werk",
              "De techniek wordt gekozen na het zien van uw gevel of dak",
              "Eén aanspreekpunt, van offerte tot oplevering",
            ].map((item) => (
              <CheckItem key={item} tone="light">{item}</CheckItem>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Veelgestelde vragen"
            title={`Reiniging in ${area.name}`}
          />
          <FaqList items={faq} />
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl sm:text-3xl">Ook actief in de buurgemeenten</h2>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {others.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/werkgebied/${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-2.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700"
              >
                {a.name}
                <span className="text-[13px] text-muted">{a.postal}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Closer
        title={`Wat kost het reinigen van uw woning in ${area.name}?`}
        intro="Stuur een paar foto's en uw adres door. U krijgt een vaste prijs terug, vrijblijvend."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: `Gevel-, dak- en opritreiniging in ${area.name}`,
            description: `Paulus Cleaning reinigt gevels, daken, opritten, terrassen, zonnepanelen en glaswerk in ${area.name}.`,
            url: `/werkgebied/${area.slug}`,
            areaName: area.name,
          }),
          breadcrumbs([
            { name: "Home", url: "/" },
            { name: "Werkgebied", url: "/werkgebied" },
            { name: area.name, url: `/werkgebied/${area.slug}` },
          ]),
        ]}
      />
    </>
  );
}
