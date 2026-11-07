"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { Phone } from "./icons";

const links = [
  { label: "Realisaties", href: "/realisaties" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/92 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "border-hairline shadow-[0_1px_18px_-6px_rgba(10,23,51,.18)]" : "border-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex h-18 items-center justify-between gap-6 py-3">
          <Link href="/" className="shrink-0" aria-label="Paulus Cleaning, naar de startpagina">
            <Image
              src="/logo-dark.png"
              alt="Paulus Cleaning"
              width={420}
              height={120}
              priority
              unoptimized
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link
                href="/diensten"
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive("/diensten") ? "text-sky-700" : "text-ink hover:text-sky-700"
                }`}
              >
                Diensten
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform group-hover:rotate-180">
                  <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="invisible absolute left-0 top-full w-80 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-hairline bg-white p-2 shadow-[0_18px_44px_-16px_rgba(10,23,51,.3)]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/diensten/${s.slug}`}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
                    >
                      <span className="block text-[15px] font-semibold text-ink">{s.card}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted">{s.cardSub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive(l.href) ? "text-sky-700" : "text-ink hover:text-sky-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[15px] font-semibold text-navy-900 transition-colors hover:text-sky-700 md:flex"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-full bg-sky-400 px-5 py-2.5 text-[15px] font-semibold text-navy-900 shadow-[0_6px_18px_-6px_rgba(87,202,244,.85)] transition-all hover:-translate-y-0.5 hover:bg-sky-300 sm:inline-flex"
            >
              Prijs aanvragen
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-navy-900 lg:hidden"
            >
              <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobiel-menu" className="border-t border-hairline bg-white lg:hidden">
          <div className="container-page max-h-[calc(100dvh-5rem)] overflow-y-auto py-5">
            <p className="eyebrow mb-3">Diensten</p>
            <div className="grid gap-1.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  className="rounded-xl bg-surface px-4 py-3 text-[15px] font-semibold text-ink"
                >
                  {s.card}
                </Link>
              ))}
            </div>
            <div className="mt-5 grid gap-1">
              {[{ label: "Alle diensten", href: "/diensten" }, ...links].map((l) => (
                <Link key={l.href} href={l.href} className="rounded-xl px-4 py-3 text-base font-medium text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href={site.phoneHref}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3.5 font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
