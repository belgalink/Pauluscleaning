# Paulus Cleaning

Nieuwe website voor [pauluscleaning.be](https://pauluscleaning.be) — gevel-, dak-, oprit-,
zonnepanelen- en glasreiniging in Brecht en de Noorderkempen.

Gebouwd als demo voor de lead door Belgalink.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- Statisch gegenereerd, gehost op Vercel
- Formulier via een Route Handler die de lead mailt met Resend

## Lokaal draaien

```bash
npm install
npm run dev
```

## Omgevingsvariabelen

| Variabele | Verplicht | Omschrijving |
|---|---|---|
| `RESEND_API_KEY` | ja | Resend API-sleutel met verzendrechten |
| `LEAD_EMAIL` | ja | Adres waar offerteaanvragen binnenkomen |
| `LEAD_FROM` | nee | Afzender, bv. `Paulus Cleaning <offerte@pauluscleaning.be>`. Standaard `onboarding@resend.dev` |

Zonder `RESEND_API_KEY` en `LEAD_EMAIL` geeft het formulier een nette foutmelding
met het telefoonnummer en de WhatsApp-link als alternatief.

## Structuur

```
src/
  app/            Pagina's (App Router) + sitemap, robots, API-route
  components/     Header, Footer, BeforeAfter-slider, formulier, FAQ, galerij
  data/           Alle copy: diensten, voor-en-na-cases, homepagina
  lib/            Bedrijfsgegevens en JSON-LD-schema's
public/img/
  ba/             Voor- en nafoto's per case (`<slug>-voor.webp` / `<slug>-na.webp`)
  gallery/        Werkfoto's per dienst
  hero/           Grote koptitelbeelden
  content/        Beelden binnen de tekstsecties
```

## Inhoud aanpassen

Alle teksten staan in `src/data/`. Een nieuwe dienst toevoegen gebeurt in
`src/data/services.ts`; de pagina, het sitemap-item en de JSON-LD volgen automatisch.

Een nieuw voor-en-na-paar: twee bestanden in `public/img/ba/` met dezelfde
beeldverhouding, plus een item in `src/data/cases.ts`.

## Nog door de klant aan te leveren

- Echte Google-reviews (er staat bewust geen verzonnen social proof op de site)
- Eventuele richtprijzen per m², als Paulus Cleaning die wil tonen
- Een eigen afzenderdomein in Resend voor het offerteformulier

## Demo versus livegang

Op de demo-omgeving staan twee extra variabelen:

| Variabele | Demo | Bij livegang |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | de Vercel-URL, zodat linkvoorbeelden werken | `https://pauluscleaning.be` of verwijderen |
| `NEXT_PUBLIC_NOINDEX` | `1`, zodat Google de demo niet indexeert | verwijderen |

Met `NEXT_PUBLIC_NOINDEX=1` krijgt elke pagina een `noindex`-meta en verbiedt
`robots.txt` alle crawlers. Vergeet die variabele dus niet weg te halen bij de
overstap naar het echte domein.
