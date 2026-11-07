import { site, serviceAreas } from "./site";
import { services } from "@/data/services";

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#organisatie`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo-dark.png`,
  image: `${site.url}/og.jpg`,
  description:
    "Paulus Cleaning uit Brecht reinigt gevels, daken, opritten, terrassen, zonnepanelen en glaswerk voor particulieren en bedrijven in de Noorderkempen.",
  telephone: site.phone,
  email: site.email,
  vatID: site.vat,
  foundingDate: site.founded,
  priceRange: "€€",
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: serviceAreas.map((a) => ({
    "@type": "City",
    name: a.name,
    address: { "@type": "PostalAddress", postalCode: a.postal, addressCountry: "BE" },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigingsdiensten",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.card,
        url: `${site.url}/diensten/${s.slug}`,
      },
    })),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export const faqPage = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const breadcrumbs = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.url}`,
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: `${site.url}${opts.url}`,
  serviceType: opts.name,
  provider: { "@id": `${site.url}/#organisatie` },
  areaServed: opts.areaName
    ? { "@type": "City", name: opts.areaName }
    : serviceAreas.map((a) => ({ "@type": "City", name: a.name })),
});
