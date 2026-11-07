"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  slug: string;
  title: string;
  caption?: string;
  tag?: string;
  aspect?: "4/3" | "3/4";
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** "light" zet de bijschrifttekst in lichte kleuren voor donkere secties. */
  tone?: "dark" | "light";
  showCaption?: boolean;
};

export default function BeforeAfter({
  slug,
  title,
  caption,
  tag,
  aspect = "4/3",
  priority = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className = "",
  tone = "dark",
  showCaption = true,
}: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  // Zodra de bezoeker zelf sleept, mag de hint-animatie niets meer overschrijven.
  const touchedRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  // One-time nudge when the frame first scrolls into view, so people
  // understand the bar is draggable without reading the label.
  useEffect(() => {
    const el = frameRef.current;
    if (!el || hinted) return;
    if (typeof IntersectionObserver === "undefined") return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          setHinted(true);
          if (reduced || touchedRef.current) return;
          [58, 64, 58, 50].forEach((v, i) => {
            timers.push(
              window.setTimeout(() => {
                if (touchedRef.current) return;
                setPos(v);
              }, 420 + i * 230),
            );
          });
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, [hinted]);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [dragging, setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    touchedRef.current = true;
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") { setPos((p) => Math.max(0, p - step)); e.preventDefault(); }
    if (e.key === "ArrowRight") { setPos((p) => Math.min(100, p + step)); e.preventDefault(); }
    if (e.key === "Home") { setPos(0); e.preventDefault(); }
    if (e.key === "End") { setPos(100); e.preventDefault(); }
  };

  const ratio = aspect === "4/3" ? "aspect-[4/3]" : "aspect-[3/4]";

  return (
    <figure className={`group ${className}`}>
      <div
        ref={frameRef}
        onPointerDown={(e) => {
          touchedRef.current = true;
          setHinted(true);
          setDragging(true);
          setFromClientX(e.clientX);
        }}
        className={`relative ${ratio} w-full select-none overflow-hidden rounded-2xl bg-navy-900 shadow-[0_1px_2px_rgba(10,23,51,.06),0_12px_32px_-12px_rgba(10,23,51,.28)] ring-1 ring-navy-900/10 ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* NA — onderste laag, rechts van de greep zichtbaar */}
        <Image
          src={`/img/ba/${slug}-na.webp`}
          alt={`${title}: na de reiniging door Paulus Cleaning`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          draggable={false}
        />

        {/* VOOR — bovenste laag, links van de greep zichtbaar */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={`/img/ba/${slug}-voor.webp`}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span
          className={`pointer-events-none absolute left-3 top-3 rounded-full bg-navy-950/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-opacity duration-200 ${
            pos < 14 ? "opacity-0" : "opacity-100"
          }`}
        >
          Voor
        </span>
        <span
          className={`pointer-events-none absolute right-3 top-3 rounded-full bg-sky-400/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-900 transition-opacity duration-200 ${
            pos > 86 ? "opacity-0" : "opacity-100"
          }`}
        >
          Na
        </span>

        {tag ? (
          <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur-sm">
            {tag}
          </span>
        ) : null}

        {/* Scheidingslijn + greep */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/95 shadow-[0_0_0_1px_rgba(1,19,77,.18)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Vergelijk voor en na: ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% voor-situatie zichtbaar`}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.stopPropagation();
            touchedRef.current = true;
            setHinted(true);
            setDragging(true);
          }}
          className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-[0_2px_10px_rgba(1,19,77,.3)] ring-1 ring-navy-900/10 transition-transform duration-150 hover:scale-105 active:scale-95"
          style={{ left: `${pos}%`, touchAction: "none" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 5 3.5 10 8 15M12 5l4.5 5-4.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {showCaption && (title || caption) ? (
        <figcaption className="mt-4">
          <p className={`font-display text-base font-semibold ${tone === "light" ? "text-white" : "text-ink"}`}>
            {title}
          </p>
          {caption ? (
            <p className={`mt-1 text-sm leading-relaxed ${tone === "light" ? "text-navy-200" : "text-muted"}`}>
              {caption}
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
