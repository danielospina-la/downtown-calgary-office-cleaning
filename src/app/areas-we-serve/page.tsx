import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBand from "@/components/CtaBand";

const SITE_URL = "https://downtown-calgary-office-cleaning.vercel.app";
const TITLE = "Office Cleaning Areas in Calgary | Beltline, Eau Claire";
const DESCRIPTION =
  "Office cleaning in Downtown Calgary, Beltline, Eau Claire, East Village, Mission & more. Insured, after-hours service. Get a free quote.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/areas-we-serve" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areas-we-serve",
    siteName: "Downtown Calgary Office Cleaning",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL + "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Areas We Serve",
      item: SITE_URL + "/areas-we-serve",
    },
  ],
};

export default function AreasPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-areas.webp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceAreas />
      <CtaBand />
    </PageShell>
  );
}
