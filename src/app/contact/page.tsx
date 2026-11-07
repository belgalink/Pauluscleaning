import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { Mail, Phone, Pin, WhatsApp } from "@/components/icons";
import { Breadcrumbs, Section, SectionHead } from "@/components/ui";
import { breadcrumbs } from "@/lib/jsonld";
import { serviceAreas, site, waDefault } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & offerte aanvragen",
  description:
    "Vraag een vrijblijvende prijs voor gevel-, dak-, oprit- of glasreiniging in Brecht en de Noorderkempen. Bel, mail of stuur foto's via WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image src="/img/hero/contact-hero1.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="mt-8 max-w-3xl text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.1rem]">
            Stuur een paar foto&apos;s door en u weet wat het kost
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            Een foto van de gevel, het dak of de oprit en uw adres volstaan meestal voor een vaste
            prijs. Vrijblijvend, en zonder dat u op een plaatsbezoek moet wachten.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Rechtstreeks"
              title="Liever meteen iemand aan de lijn?"
              intro="Bel of stuur een WhatsApp met uw foto's erbij. Dat is doorgaans de snelste weg naar een prijs."
            />

            <div className="mt-9 grid gap-3">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-hairline p-5 transition-all hover:border-sky-300 hover:bg-surface"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Bellen</span>
                  <span className="block font-display text-lg font-semibold text-ink">{site.phone}</span>
                </span>
              </a>

              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-hairline p-5 transition-all hover:border-sky-300 hover:bg-surface"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
                  <WhatsApp className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">WhatsApp, met foto&apos;s</span>
                  <span className="block font-display text-lg font-semibold text-ink">Chat openen</span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-hairline p-5 transition-all hover:border-sky-300 hover:bg-surface"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
                  <Mail className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">E-mail</span>
                  <span className="block font-display text-lg font-semibold text-ink">{site.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-hairline p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
                  <Pin className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-muted">Maatschappelijke zetel</span>
                  <address className="block font-display text-lg font-semibold not-italic text-ink">
                    {site.address.street}, {site.address.postalCode} {site.address.city}
                  </address>
                  <span className="mt-1 block text-sm text-muted">{site.vat}</span>
                </span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Werkgebied</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {serviceAreas.map((a) => a.name).join(", ")} en de omliggende gemeenten. Zit u net
                buiten dat lijstje? Vraag het gerust, vaak lukt het toch.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-hairline bg-white p-6 shadow-[0_18px_44px_-24px_rgba(10,23,51,.3)] sm:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">Vraag uw prijs aan</h2>
              <p className="mt-1.5 text-[15px] text-muted">
                Vul in wat u weet. Ontbreekt er iets, dan vragen we het gewoon na.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbs([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])} />
    </>
  );
}
