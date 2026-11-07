import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/data/services";
import { serviceAreas, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  return [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: url("/diensten"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...serviceSlugs.map((slug) => ({
      url: url(`/diensten/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: url("/realisaties"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/werkgebied"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...serviceAreas.map((a) => ({
      url: url(`/werkgebied/${a.slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: url("/over-ons"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: url("/privacybeleid"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
