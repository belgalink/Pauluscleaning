"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { isLockedPath } from "@/lib/demo";
import { site } from "@/lib/site";
import { Phone } from "./icons";

/**
 * Vangt klikken op vergrendelde links af en toont in de plaats daarvan een
 * venster. De luisteraar staat in de capture-fase op document, zodat hij
 * vóór de router van Next.js aan de beurt komt.
 */
export default function DemoLock() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Laat modificatieklikken (nieuw tabblad) en rechtermuisknop met rust.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href") ?? "";
      if (!isLockedPath(href)) return;

      e.preventDefault();
      e.stopPropagation();
      lastFocused.current = anchor;
      setOpen(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-navy-950/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-lock-titel"
        aria-describedby="demo-lock-tekst"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-20px_rgba(1,10,43,.7)]"
      >
        <div className="bg-navy-900 px-7 pb-6 pt-7 text-center">
          <Image
            src="/logo-light.png"
            alt="Paulus Cleaning"
            width={420}
            height={120}
            unoptimized
            className="mx-auto h-8 w-auto"
          />
        </div>

        <div className="px-7 pb-7 pt-6 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="15.5" r="1.4" fill="currentColor" />
            </svg>
          </span>

          <h2 id="demo-lock-titel" className="mt-4 font-display text-xl font-semibold text-ink">
            Dit is een demoversie van uw website
          </h2>
          <p id="demo-lock-tekst" className="mt-3 text-[15px] leading-relaxed text-muted">
            In de demo tonen we de homepagina, de realisaties en het offerteformulier.
          </p>

          <div className="mt-6 grid gap-2.5">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-sky-400 px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-sky-300"
            >
              Terug naar de demo
            </button>
            <Link
              href="/realisaties"
              onClick={() => setOpen(false)}
              className="w-full rounded-full border border-hairline px-6 py-3 font-semibold text-ink transition-colors hover:border-navy-900"
            >
              Bekijk de realisaties
            </Link>
          </div>

          <p className="mt-5 text-[13px] text-muted">
            Vragen over dit voorstel? Bel{" "}
            <a href={site.phoneHref} className="font-semibold text-sky-700 underline underline-offset-4">
              {site.phone}
            </a>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          <span className="sr-only">Sluiten</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
