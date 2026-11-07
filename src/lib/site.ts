export const site = {
  name: "Paulus Cleaning",
  legalName: "Paulus Cleaning BV",
  url: "https://pauluscleaning.be",
  tagline: "Gevel-, dak-, oprit- en glasreiniging in Brecht en de Noorderkempen",
  phone: "+32 474 47 32 47",
  phoneHref: "tel:+32474473247",
  whatsapp: "32474473247",
  email: "info@pauluscleaning.be",
  vat: "BE 1026.805.673",
  founded: "2020",
  owner: "Jens Paulus",
  address: {
    street: "Heiakker 23",
    postalCode: "2960",
    city: "Brecht",
    country: "België",
    countryCode: "BE",
  },
  geo: { lat: 51.3503, lng: 4.6383 },
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const waDefault = waLink(
  "Hallo Paulus Cleaning, ik wil graag een prijs voor het reinigen van mijn woning. Hierbij enkele foto's:",
);

export const serviceAreas = [
  { slug: "brecht", name: "Brecht", postal: "2960", intro: "Onze thuisbasis. Van Sint-Job-in-'t-Goor tot Overbroek en Sint-Lenaarts." },
  { slug: "brasschaat", name: "Brasschaat", postal: "2930", intro: "Villawijken met veel groen, en dus veel mos op dak en oprit." },
  { slug: "wuustwezel", name: "Wuustwezel", postal: "2990", intro: "Inclusief Gooreind en Loenhout." },
  { slug: "essen", name: "Essen", postal: "2910", intro: "Tot tegen de Nederlandse grens." },
  { slug: "zoersel", name: "Zoersel", postal: "2980", intro: "Halle, Zoersel en Sint-Antonius." },
  { slug: "kalmthout", name: "Kalmthout", postal: "2920", intro: "Heide, Nieuwmoer en Kalmthout-centrum." },
  { slug: "rijkevorsel", name: "Rijkevorsel", postal: "2310", intro: "Inclusief Sint-Jozef Rijkevorsel." },
  { slug: "hoogstraten", name: "Hoogstraten", postal: "2320", intro: "Meer, Meerle, Minderhout en Wortel." },
  { slug: "malle", name: "Malle", postal: "2390", intro: "Oostmalle en Westmalle." },
] as const;

export const navigation = [
  { label: "Diensten", href: "/diensten" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;
