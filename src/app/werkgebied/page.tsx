import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Closer from "@/components/Closer";
import JsonLd from "@/components/JsonLd";
import { ArrowRight } from "@/components/icons";
import { Breadcrumbs, Section, SectionHead } from "@/components/ui";
import { breadcrumbs } from "@/lib/jsonld";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkgebied: Brecht en de Noorderkempen",
  description:
    "Paulus Cleaning reinigt gevels, daken, opritten en zonnepanelen in Brecht, Brasschaat, Wuustwezel, Essen, Zoersel, Kalmthout, Rijkevorsel, Hoogstraten en Malle.",
  alternates: { canonical: "/werkgebied" },
};

export default function WerkgebiedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/about-hero3.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Werkgebied" }]} />
          <h1 className="mt-8 max-w-3xl text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
            Vanuit Brecht, in heel de Noorderkempen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Een reinigingsbedrijf dat een uur moet rijden, rekent die rit door. Daarom werken we in
            een straal rond Brecht. Korte verplaatsingen houden uw prijs scherp.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHead
          eyebrow="Negen gemeenten"
          title="Waar we het vaakst komen"
          intro="Staat uw gemeente er niet bij maar zit u in de buurt? Vraag het gerust. Voor grotere opdrachten rijden we verder."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/werkgebied/${a.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-hairline p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_40px_-20px_rgba(10,23,51,.3)]"
              >
                <span className="text-sm font-semibold text-sky-700">{a.postal}</span>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">{a.name}</h2>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{a.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
                  Diensten in {a.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Closer />
      <JsonLd data={breadcrumbs([{ name: "Home", url: "/" }, { name: "Werkgebied", url: "/werkgebied" }])} />
    </>
  );
}
