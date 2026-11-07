import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Closer from "@/components/Closer";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ServiceIcons } from "@/components/icons";
import { Breadcrumbs, Section, SectionHead } from "@/components/ui";
import { services } from "@/data/services";
import { breadcrumbs } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Onze diensten: gevel, dak, oprit, zonnepanelen en ramen",
  description:
    "Zes reinigingsdiensten voor woning en bedrijfspand in Brecht en de Noorderkempen: dakreiniging, gevelreiniging, crepi, oprit en terras, zonnepanelen en ramen wassen.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/svc-oprit.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Diensten" }]} />
          <h1 className="mt-8 max-w-3xl text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
            Alles aan de buitenkant van uw woning, door dezelfde man
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Zes diensten, één aanspreekpunt en één factuur. Laat u dak, gevel en oprit in dezelfde
            beurt aanpakken, dan betaalt u maar één keer voor de verplaatsing en het opzetten van
            het materiaal.
          </p>
        </div>
      </section>

      <Section tone="white">
        <ul className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => {
            const Icon = ServiceIcons[s.icon];
            return (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group grid h-full overflow-hidden rounded-3xl bg-white ring-1 ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_-22px_rgba(10,23,51,.35)] hover:ring-sky-300 sm:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-100 sm:aspect-auto sm:min-h-full">
                    <Image
                      src={s.heroImage}
                      alt={s.heroAlt}
                      fill
                      sizes="(min-width: 640px) 28vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-col p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 font-display text-xl font-semibold text-ink">{s.card}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.lead}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
                      Meer over {s.nav.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHead
          align="center"
          eyebrow="Combineren loont"
          title="Dak, gevel en oprit in één beurt"
          intro="Het grootste deel van de kost bij buitenreiniging zit in de verplaatsing, het opzetten van het materiaal en de wateraansluiting. Dat betaalt u maar één keer als alles tegelijk gebeurt. Elk onderdeel komt apart op de offerte, zodat u zelf kiest wat doorgaat."
        />
      </Section>

      <Closer />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", url: "/" },
          { name: "Diensten", url: "/diensten" },
        ])}
      />
    </>
  );
}
