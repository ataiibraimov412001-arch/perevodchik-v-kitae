import type { MetadataRoute } from "next";
import { BASE_URL, CITIES, SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: BASE_URL, priority: 1, changeFrequency: "weekly" as const },
    ...CITIES.map((c) => ({
      url: `${BASE_URL}${c.href}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE_URL}${s.href}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  return pages.map((page) => ({
    ...page,
    lastModified: now,
  }));
}
