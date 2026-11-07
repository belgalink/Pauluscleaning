import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { site, serviceAreas, waDefault } from "@/lib/site";
import { Mail, Phone, Pin, WhatsApp } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Image src="/logo-light.png" alt="Paulus Cleaning" width={420} height={120} unoptimized className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
              Gevel-, dak-, oprit- en glasreiniging voor particulieren en bedrijven in Brecht
              en de Noorderkempen. Eén aanspreekpunt, van offerte tot oplevering.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <WhatsApp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Diensten">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Diensten</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/diensten/${s.slug}`} className="text-navy-200 transition-colors hover:text-sky-300">
                    {s.card}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Werkgebied">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Werkgebied</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/werkgebied/${a.slug}`} className="text-navy-200 transition-colors hover:text-sky-300">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <address className="not-italic text-navy-200">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                  <br />
                  {site.address.country}
                </address>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <a href={`mailto:${site.email}`} className="text-navy-200 transition-colors hover:text-sky-300">
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-navy-300">{site.vat}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacybeleid" className="transition-colors hover:text-sky-300">Privacybeleid</Link>
            <Link href="/realisaties" className="transition-colors hover:text-sky-300">Realisaties</Link>
            <Link href="/contact" className="transition-colors hover:text-sky-300">Offerte aanvragen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
