import type { MetadataRoute } from "next";

const SITE_URL = "https://dcoc.ca";

const PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/areas-we-serve", priority: 0.8 },
  { path: "/areas-we-serve/downtown-core", priority: 0.7 },
  { path: "/areas-we-serve/beltline", priority: 0.7 },
  { path: "/areas-we-serve/eau-claire", priority: 0.7 },
  { path: "/areas-we-serve/east-village", priority: 0.7 },
  { path: "/why-us", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: SITE_URL + path,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
