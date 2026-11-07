import Image from "next/image";
import ContactForm from "./ContactForm";
import { site, waDefault } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";

const incentives = [
  "Vaste prijs op voorhand, geen uurtarief achteraf",
  "Vaak voldoende foto's, zonder dat u op een plaatsbezoek moet wachten",
  "Eerlijk advies over wat wél en niet nodig is",
  "Eén aanspreekpunt van offerte tot oplevering",
  "Vrijblijvend en gratis",
];

export default function Closer({
  title = "Stuur een paar foto's door en u weet wat het kost",
  intro = "Een foto van de gevel, het dak of de oprit en uw adres volstaan. U krijgt een vaste prijs terug, zonder dat u zich tot iets verbindt.",
  defaultService = "",
}: {
  title?: string;
  intro?: string;
  defaultService?: string;
}) {
  return (
    <section id="offerte" className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-28">
      <Image
        src="/img/hero/svc-gevel.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.13]"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/80"
      />
      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-16">
          <div>
            <p className="eyebrow text-sky-300">
              <span aria-hidden="true" className="h-px w-6 bg-sky-300" />
              Vraag uw prijs
            </p>
            <h2 className="mt-3 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">{intro}</p>

            <ul className="mt-8 space-y-3.5">
              {incentives.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-navy-100">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="currentColor" opacity=".16" />
                    <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/20"
              >
                <WhatsApp className="h-4 w-4" /> Foto&apos;s via WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-ink shadow-[0_28px_60px_-24px_rgba(0,0,0,.6)] sm:p-8">
            <ContactForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
