import type { MetadataRoute } from "next";

const SITE_URL = "https://downtown-calgary-office-cleaning.vercel.app";

const PAGES = ["/", "/services", "/areas-we-serve", "/why-us", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path, i) => ({
    url: SITE_URL + path,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: i === 0 ? 1 : 0.8,
  }));
}
