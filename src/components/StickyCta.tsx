import Link from "next/link";
import { site, waDefault } from "@/lib/site";
import { Phone, WhatsApp } from "./icons";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[12px] font-semibold text-navy-900"
        >
          <Phone className="h-5 w-5" />
          Bellen
        </a>
        <a
          href={waDefault}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[12px] font-semibold text-navy-900"
        >
          <WhatsApp className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-sky-400 py-2 text-[12px] font-semibold text-navy-900"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M4 5.5h12M4 10h12M4 14.5h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          Prijs
        </Link>
      </div>
    </div>
  );
}
