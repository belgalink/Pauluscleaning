import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import Closer from "@/components/Closer";
import FaqList from "@/components/Faq";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, Phone, ServiceIcons } from "@/components/icons";
import { Breadcrumbs, Button, CheckItem, Section, SectionHead } from "@/components/ui";
import { getCase } from "@/data/cases";
import { getService, serviceSlugs } from "@/data/services";
import { breadcrumbs, faqPage, serviceSchema } from "@/lib/jsonld";
import { serviceAreas, site } from "@/lib/site";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/diensten/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/diensten/${service.slug}`,
      images: [{ url: service.heroImage, width: 1600, height: 1000, alt: service.heroAlt }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = ServiceIcons[service.icon];
  const serviceCases = service.caseSlugs.map((s) => getCase(s)).filter(Boolean);
  const related = service.related.map((s) => getService(s)).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src={service.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/75" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Diensten", href: "/diensten" },
              { label: service.nav },
            ]}
          />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-sky-300 ring-1 ring-white/15">
                <Icon className="h-7 w-7" />
              </span>
              <h1 className="mt-5 text-[1.85rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
                {service.h1}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-100 sm:mt-5 sm:text-lg">{service.lead}</p>

              <ul className="mt-8 grid max-w-xl gap-3">
                {service.bullets.map((b) => (
                  <CheckItem key={b} tone="light">{b}</CheckItem>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#offerte" size="lg">
                  Vraag uw prijs
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </div>
              <p className="mt-4 text-sm text-navy-200">
                Vrijblijvend &middot; Vaste prijs op voorhand &middot; Vaak volstaan foto&apos;s
              </p>
            </div>

            {serviceCases.length > 0 ? (
              <div>
                <BeforeAfter
                  slug={serviceCases[0]!.slug}
                  title={serviceCases[0]!.title}
                  tag={serviceCases[0]!.tag}
                  aspect={serviceCases[0]!.aspect}
                  priority
                  showCaption={false}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
                <p className="mt-4 text-sm text-navy-200">
                  Sleep de balk. Echte foto&apos;s uit ons eigen archief.
                </p>
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={`/img/gallery/gal-${service.gallery[0]}.webp`}
                  alt={service.heroAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INHOUDELIJKE SECTIES */}
      <Section tone="white">
        <div className="space-y-20 lg:space-y-28">
          {service.sections.map((sec, i) => (
            <div
              key={sec.title}
              className={`grid items-center gap-10 lg:gap-16 ${sec.image ? "lg:grid-cols-2" : ""}`}
            >
              <div className={sec.image && i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl leading-snug sm:text-3xl">{sec.title}</h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                  {sec.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
              {sec.image ? (
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100 ring-1 ring-navy-900/10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={sec.image}
                    alt={sec.alt ?? sec.title}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* VOOR & NA */}
      {serviceCases.length > 1 ? (
        <Section tone="surface">
          <SectionHead
            eyebrow="Voor en na"
            title={<>Dit is wat er onder zat</>}
            intro={`Sleep de balk om het verschil te zien. Alle beelden komen uit het eigen archief van Paulus Cleaning.`}
          />
          <div className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {serviceCases.map((c) => (
              <BeforeAfter
                className="mb-10 break-inside-avoid"
                key={c!.slug}
                slug={c!.slug}
                title={c!.title}
                caption={c!.caption}
                tag={c!.tag}
                aspect={c!.aspect}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
              />
            ))}
          </div>
        </Section>
      ) : null}

      {/* STAPPENPLAN */}
      {service.steps ? (
        <Section tone="white">
          <SectionHead eyebrow="Werkwijze" title={service.steps.title} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.items.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-surface p-6 ring-1 ring-hairline">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {/* PRIJS */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              tone="light"
              eyebrow="Prijs"
              title={<>Wat bepaalt uw prijs?</>}
              intro="Wij noemen geen vast bedrag per m² zonder uw situatie gezien te hebben. Dat zou een slag in de lucht zijn. Dit zijn de factoren die meespelen."
            />
            <ul className="mt-8 grid gap-3">
              {service.priceFactors.map((f) => (
                <CheckItem key={f} tone="light">{f}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/[0.06] p-8 ring-1 ring-white/12">
            <h3 className="font-display text-xl font-semibold text-white">
              Een paar foto&apos;s volstaan meestal
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-100">
              Stuur foto&apos;s van wat er moet gebeuren plus uw adres via WhatsApp of het
              formulier. In de meeste gevallen kunnen we daarop een vaste prijs maken. Is uw
              situatie complexer, dan komen we langs. Ook dat kost u niets.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#offerte" size="md">Prijs aanvragen</Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-[15px] font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> Bel {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* GALERIJ */}
      {service.gallery.length ? (
        <Section tone="white">
          <SectionHead
            eyebrow="Uit de praktijk"
            title={`${service.card} in beeld`}
            intro="Klik op een foto om die groter te bekijken."
          />
          <div className="mt-10">
            <Gallery images={service.gallery} />
          </div>
        </Section>
      ) : null}

      {/* FAQ */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHead
            eyebrow="Veelgestelde vragen"
            title={`Vragen over ${service.nav.toLowerCase()}`}
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
          <FaqList items={service.faq} />
        </div>
      </Section>

      {/* WERKGEBIED + GERELATEERD */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl">Waar we {service.nav.toLowerCase()} uitvoeren</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vanuit Brecht in de hele Noorderkempen. Korte verplaatsingen houden de prijs scherp.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/werkgebied/${a.slug}`}
                    className="inline-block rounded-full border border-hairline px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-sky-400 hover:text-sky-700"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Vaak samen met</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Meerdere werken in één beurt scheelt verplaatsingen en dus kosten.
            </p>
            <ul className="mt-7 grid gap-3">
              {related.map((r) => {
                const RIcon = ServiceIcons[r!.icon];
                return (
                  <li key={r!.slug}>
                    <Link
                      href={`/diensten/${r!.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-hairline p-4 transition-all hover:border-sky-300 hover:bg-surface"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
                        <RIcon className="h-6 w-6" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-display font-semibold text-ink">{r!.card}</span>
                        <span className="mt-0.5 block text-sm text-muted">{r!.cardSub}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-sky-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <Closer
        title={`Benieuwd wat ${service.nav.toLowerCase()} bij u kost?`}
        intro="Stuur een paar foto's en uw adres door. U krijgt een vaste prijs terug, vrijblijvend en zonder verplichtingen."
        defaultService={service.card}
      />

      <JsonLd
        data={[
          serviceSchema({
            name: service.card,
            description: service.metaDescription,
            url: `/diensten/${service.slug}`,
          }),
          faqPage(service.faq),
          breadcrumbs([
            { name: "Home", url: "/" },
            { name: "Diensten", url: "/diensten" },
            { name: service.nav, url: `/diensten/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
