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
      {/* Compacte kop: geen grote herosectie, zodat de beelden meteen in beeld komen. */}
      <div className="border-b border-hairline bg-white">
        <div className="container-page pb-5 pt-5 sm:pb-8 sm:pt-7">
          <Breadcrumbs tone="dark" items={[{ label: "Home", href: "/" }, { label: "Realisaties" }]} />
          <h1 className="mt-3 max-w-3xl text-[1.55rem] leading-[1.14] text-ink sm:mt-4 sm:text-[2.1rem]">
            {cases.length} keer hetzelfde huis, een paar dagen later
          </h1>
          <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-muted sm:mt-3 sm:text-base">
            Elk paar is dezelfde woning, voor en na de behandeling. Sleep de balk om te vergelijken.
          </p>
        </div>
      </div>

      {groups.map((group, gi) => {
        const items = cases.filter((c) => c.service === group.key);
        if (!items.length) return null;
        const service = services.find((s) => s.slug === group.key);
        return (
          <Section key={group.key} tone={gi % 2 === 0 ? "surface" : "white"} tightTop={gi === 0}>
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

      <Section tone="surface">
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
