"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({ images, alts }: { images: string[]; alts?: Record<string, string> }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((name, i) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-navy-100 ring-1 ring-navy-900/10"
            >
              <Image
                src={`/img/gallery/gal-${name}.webp`}
                alt={alts?.[name] ?? "Uitgevoerde reiniging door Paulus Cleaning"}
                fill
                sizes="(min-width: 640px) 30vw, 46vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/20" />
              <span className="sr-only">Foto vergroten</span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto vergroot weergegeven"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span className="sr-only">Sluiten</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                <span className="sr-only">Vorige foto</span>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M12.5 4 6.5 10l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                <span className="sr-only">Volgende foto</span>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7.5 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          ) : null}
          <div className="relative h-[82vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/img/gallery/gal-${images[open]}.webp`}
              alt={alts?.[images[open]] ?? "Uitgevoerde reiniging door Paulus Cleaning"}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
