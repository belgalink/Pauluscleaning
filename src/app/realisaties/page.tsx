import Image from "next/image";
import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Closer from "@/components/Closer";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, Section, SectionHead } from "@/components/ui";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { breadcrumbs } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Realisaties: voor- en nafoto's van onze reinigingen",
  description:
    "Bekijk de voor- en nabeelden van daken, gevels, crepi, opritten en terrassen in Brecht en de Noorderkempen. Sleep de balk en zie het verschil.",
  alternates: { canonical: "/realisaties" },
};

const groups = [
  { key: "dakreiniging", title: "Dakreiniging en ontmossen" },
  { key: "gevelreiniging", title: "Gevelreiniging" },
  { key: "crepi-reinigen", title: "Crepi en sierpleister" },
  { key: "oprit-en-terras-reinigen", title: "Opritten en terrassen" },
];

const workGallery = [
  "ramen-14", "zon-01", "oprit-17", "gevel-19", "dak-11", "ramen-04",
  "zon-11", "oprit-05", "gevel-21", "dak-07", "ramen-06", "zon-10",
];

export default function RealisatiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/svc-gevel.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Realisaties" }]} />
          <h1 className="mt-8 max-w-3xl text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
            {cases.length} keer hetzelfde huis, een paar dagen later
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Geen stockfoto&apos;s, geen bewerkte beelden. Elk paar hieronder is dezelfde woning,
            gefotografeerd voor en na de behandeling. Sleep de balk om te vergelijken.
          </p>
        </div>
      </section>

      {groups.map((group, gi) => {
        const items = cases.filter((c) => c.service === group.key);
        if (!items.length) return null;
        const service = services.find((s) => s.slug === group.key);
        return (
          <Section key={group.key} tone={gi % 2 === 0 ? "white" : "surface"}>
            <SectionHead
              eyebrow={`${items.length} ${items.length === 1 ? "realisatie" : "realisaties"}`}
              title={group.title}
              intro={service?.cardSub}
            />
            <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
              {items.map((c, i) => (
                <BeforeAfter
                  className="mb-10 break-inside-avoid"
                  key={c.slug}
                  slug={c.slug}
                  title={c.title}
                  caption={c.caption}
                  tag={c.tag}
                  aspect={c.aspect}
                  priority={gi === 0 && i === 0}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                />
              ))}
            </div>
          </Section>
        );
      })}

      <Section tone="white">
        <SectionHead
          eyebrow="Aan het werk"
          title="Zonnepanelen, ramen en de rest van het werk"
          intro="Niet elke dienst leent zich tot een voor- en nabeeld. Een gereinigd raam fotografeert nu eenmaal slecht. Dit is hoe het werk er in de praktijk uitziet."
        />
        <div className="mt-10">
          <Gallery images={workGallery} />
        </div>
      </Section>

      <Closer
        title="Zo kan uw woning er binnenkort ook bijstaan"
        intro="Stuur een paar foto's door van uw dak, gevel of oprit. U krijgt een vaste prijs terug, vrijblijvend."
      />

      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Realisaties", url: "/realisaties" },
        ])}
      />
    </>
  );
}
