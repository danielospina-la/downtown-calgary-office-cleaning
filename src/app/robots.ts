import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap:
      "https://downtown-calgary-office-cleaning.vercel.app/sitemap.xml",
  };
}
