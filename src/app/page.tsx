import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Closer from "@/components/Closer";
import FaqList from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, Phone, ServiceIcons } from "@/components/icons";
import { Button, Section, SectionHead } from "@/components/ui";
import { cases, getCase } from "@/data/cases";
import { homeFaq, steps, valueProps } from "@/data/home";
import { services } from "@/data/services";
import { faqPage } from "@/lib/jsonld";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gevel-, dak- en opritreiniging in Brecht | Paulus Cleaning",
  description:
    "Gevel, dak, oprit, zonnepanelen en ramen reinigen in Brecht en de Noorderkempen. Techniek afgestemd op uw ondergrond. Stuur foto's door voor een vaste prijs.",
  alternates: { canonical: "/" },
};

const heroCase = getCase("dak-landelijke-woning")!;

const featured = [
  "oprit-klinkers",
  "gevel-zijgevel",
  "terras-hardhout",
  "crepi-moderne-woning",
  "dak-moderne-woning",
  "gevel-witte-gevel",
].map((s) => getCase(s)!);

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src="/img/hero/svc-dak.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/94 to-navy-900/80"
        />
        <div className="container-page relative py-10 sm:py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="pc-reveal">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-sky-200 ring-1 ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                Brecht &amp; de Noorderkempen
              </p>

              <h1 className="mt-4 text-[1.9rem] leading-[1.08] sm:mt-5 sm:text-5xl lg:text-[3.6rem]">
                Weer trots op uw woning,{" "}
                <span className="text-sky-400">van dakpan tot oprit</span>
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-100 sm:mt-6 sm:text-lg">
                Mos op het dak, groene aanslag op de gevel, een oprit die grijs ziet? Wij reinigen met
                de techniek die bij úw ondergrond past: stoom, softwash of osmosewater. Stuur een paar
                foto&apos;s door en u krijgt een vaste prijs, vrijblijvend.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button href="/contact" size="lg">
                  Ontvang uw prijs op maat
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>

              <p className="mt-3.5 text-[13px] text-navy-200 sm:text-sm">
                Vrijblijvend &middot; Vaste prijs op voorhand &middot; Vaak volstaan foto&apos;s
              </p>

              {/* Social proof, twee vormen, zonder scrollen zichtbaar */}
              <dl className="mt-6 grid max-w-lg grid-cols-3 gap-4 border-t border-white/12 pt-5 sm:mt-10 sm:pt-7">
                {[
                  { k: "Sinds 2020", v: "actief in de regio" },
                  { k: "6 diensten", v: "één aanspreekpunt" },
                  { k: "Particulier", v: "& bedrijven" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-display text-lg font-semibold text-white sm:text-xl">{s.k}</dt>
                    <dd className="mt-0.5 text-[13px] leading-snug text-navy-200">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pc-reveal mt-10 lg:mt-0">
              <BeforeAfter
                slug={heroCase.slug}
                title="Pannendak in de Noorderkempen"
                tag="Dakreiniging"
                aspect="4/3"
                priority
                showCaption={false}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <p className="mt-4 flex items-center gap-2 text-sm text-navy-200">
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-sky-400" aria-hidden="true">
                  <path d="M8 5 3.5 10 8 15M12 5l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Sleep de balk en zie het verschil. Dit is een echt dak uit ons archief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SOCIAL PROOF: VOOR & NA ---------------- */}
      <Section tone="white">
        <SectionHead
          eyebrow="Voor en na"
          title={
            <>
              Sleep de balk en zie{" "}
              <span className="text-sky-600">wat er onder de aanslag zat</span>
            </>
          }
          intro="Geen stockfoto's en geen bewerkte beelden. Dit zijn woningen uit Brecht en omgeving, gefotografeerd voor en na de behandeling."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
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

        <div className="mt-12">
          <Button href="/realisaties" variant="ghost" size="lg">
            Bekijk alle {cases.length} voor- en nabeelden
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* ---------------- PIJNPUNT / VERLIESAVERSIE ---------------- */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              tone="light"
              eyebrow="Waarom niet wachten"
              title="Groene aanslag wacht niet tot het u uitkomt"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-100">
              <p>
                Mos op een dak is geen laagje bovenop uw pannen. Het groeit in de overlappingen en
                houdt daar regenwater vast dat eigenlijk moest weglopen. Bij vorst zet dat vocht uit.
              </p>
              <p>
                Op de oprit is het probleem directer: algen maken klinkers glad zodra het regent. Dat
                merkt u meestal precies één keer te laat, op de helling of op het trapje naar het
                terras.
              </p>
              <p>
                En een gevel die jaren in het vuil staat, laat los wat er zit. Hoe langer u wacht,
                hoe dieper het vuil in de steen trekt en hoe zwaarder de behandeling nadien moet
                zijn.
              </p>
            </div>
            <div className="mt-9">
              <Button href="/contact" variant="primary" size="lg">
                Laat het nakijken
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { img: "/img/gallery/gal-dak-01.webp", label: "Mos tussen de pannen", alt: "Dakpannen bedekt met mos voor de reiniging" },
              { img: "/img/gallery/gal-oprit-08.webp", label: "Algen op de klinkers", alt: "Terras met zwarte aanslag tussen de tegels" },
              { img: "/img/gallery/gal-gevel-17.webp", label: "Aanslag op de schaduwzijde", alt: "Gevel met groene aanslag aan de noordzijde" },
              { img: "/img/gallery/gal-crepi-01.webp", label: "Regenstrepen op crepi", alt: "Crepigevel met grijze regenstrepen" },
            ].map((item) => (
              <figure key={item.img} className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <div className="relative aspect-[4/3]">
                  <Image src={item.img} alt={item.alt} fill sizes="(min-width: 640px) 24vw, 46vw" className="object-cover" />
                </div>
                <figcaption className="bg-white/[0.07] px-4 py-3 text-[13px] font-medium text-navy-100">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- DIENSTEN ---------------- */}
      <Section tone="surface" id="diensten">
        <SectionHead
          eyebrow="Wat we doen"
          title={<>Zes diensten, één aanspreekpunt <span className="text-sky-600">en één factuur</span></>}
          intro="Dak, gevel en oprit in dezelfde beurt scheelt verplaatsingen en dus kosten. Elk onderdeel komt apart op uw offerte, zodat u kiest wat wel en niet doorgaat."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ServiceIcons[s.icon];
            return (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-hairline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-20px_rgba(10,23,51,.35)] hover:ring-sky-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
                    <Image
                      src={s.heroImage}
                      alt={s.heroAlt}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">{s.card}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.cardSub}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
                      Meer over {s.nav.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ---------------- VALUE PROPS ---------------- */}
      <Section tone="white">
        <SectionHead
          eyebrow="Waarom Paulus"
          title={<>Waarom mensen in de Noorderkempen <span className="text-sky-600">Jens bellen</span></>}
          intro="Geen lijstje met kwaliteit, service en ervaring. Dit zijn de dingen die in de praktijk het verschil maken."
        />
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {valueProps.map((v, i) => (
            <li key={v.title} className="flex gap-5">
              <span className="font-display text-sm font-bold text-sky-600" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-hairline pl-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- HOE HET WERKT ---------------- */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Zo gaat het"
              title={<>Van eerste foto tot proper huis <span className="text-sky-600">in vier stappen</span></>}
              intro="U hoeft geen offertes te gaan vergelijken op basis van een vaag uurtarief. Dit is het hele traject."
            />
            <ol className="mt-10 space-y-7">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl bg-navy-100 lg:min-h-full">
            <Image
              src="/img/gallery/gal-oprit-17.webp"
              alt="Jens Paulus reinigt een terras met stoom"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ---------------- WERKGEBIED ---------------- */}
      <Section tone="white">
        <SectionHead
          eyebrow="Werkgebied"
          title={<>Vanuit Brecht, <span className="text-sky-600">in heel de Noorderkempen</span></>}
          intro="Korte verplaatsingen houden de prijs scherp. Staat uw gemeente er niet bij maar zit u in de buurt? Vraag het gerust."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {serviceAreas.map((a) => (
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

      {/* ---------------- FAQ ---------------- */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Veelgestelde vragen"
            title="Wat mensen ons vooraf vragen"
            intro={
              <>
                Staat uw vraag er niet bij? Bel{" "}
                <a href={site.phoneHref} className="font-semibold text-sky-700 underline underline-offset-4">
                  {site.phone}
                </a>{" "}
                of stuur een bericht.
              </>
            }
          />
          <FaqList items={homeFaq} />
        </div>
      </Section>

      <Closer />
      <JsonLd data={faqPage(homeFaq)} />
    </>
  );
}
