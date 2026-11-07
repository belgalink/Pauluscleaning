import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";
  const sizes = {
    md: "px-5 py-2.5 text-[15px]",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-sky-400 text-navy-900 hover:bg-sky-300 shadow-[0_6px_20px_-6px_rgba(87,202,244,.8)] hover:shadow-[0_10px_28px_-8px_rgba(87,202,244,.9)] hover:-translate-y-0.5",
    secondary:
      "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_6px_20px_-8px_rgba(1,19,77,.6)] hover:-translate-y-0.5",
    white:
      "bg-white text-navy-900 hover:bg-sky-50 shadow-[0_6px_20px_-8px_rgba(0,0,0,.4)] hover:-translate-y-0.5",
    ghost:
      "border border-navy-200 bg-white text-navy-900 hover:border-navy-900 hover:bg-navy-50",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "navy";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    navy: "bg-navy-900 text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${isLight ? "text-sky-300" : ""}`}>
          <span aria-hidden="true" className={`h-px w-6 ${isLight ? "bg-sky-300" : "bg-sky-600"}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <div className={`mt-4 text-lg leading-relaxed ${isLight ? "text-navy-100" : "text-muted"}`}>
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function CheckItem({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <li className="flex gap-3">
      <svg
        className={`mt-0.5 h-5 w-5 shrink-0 ${tone === "light" ? "text-sky-400" : "text-sky-600"}`}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
        <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={tone === "light" ? "text-navy-100" : "text-muted"}>{children}</span>
    </li>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Kruimelpad" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-navy-200">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-navy-300/60">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/90" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
