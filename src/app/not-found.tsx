import Link from "next/link";
import { Button, Section } from "@/components/ui";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <Section tone="white">
      <div className="mx-auto max-w-2xl py-10 text-center">
        <p className="eyebrow justify-center">Foutmelding 404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Deze pagina bestaat niet (meer)</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Mogelijk is de link verouderd. Hieronder vindt u waar u waarschijnlijk naar op zoek was.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">Naar de startpagina</Button>
          <Button href="/contact" variant="ghost" size="lg">Prijs aanvragen</Button>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-2.5">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/diensten/${s.slug}`}
                className="inline-block rounded-full border border-hairline px-4 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-sky-400 hover:text-sky-700"
              >
                {s.card}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
