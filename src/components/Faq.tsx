import type { Faq } from "@/data/services";

export default function FaqList({ items, className = "" }: { items: Faq[]; className?: string }) {
  return (
    <div className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
            <span className="font-display text-[17px] font-semibold leading-snug text-ink">{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline text-navy-900 transition-all duration-200 group-open:rotate-45 group-open:border-sky-400 group-open:bg-sky-400"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5v10M1.5 6.5h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-10 text-[15px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
