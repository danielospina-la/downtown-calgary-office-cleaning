import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";

const DESCRIPTION =
  "Nightly janitorial, sanitizing & specialty office cleaning services in Downtown Calgary — insured & bonded, flexible after-hours scheduling. Get a free quote.";

export const metadata: Metadata = {
  title: "Office Cleaning Services",
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Office Cleaning Services | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
    url: "/services",
    siteName: "Downtown Calgary Office Cleaning",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Cleaning Services | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
  },
};

export default function ServicesPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-services.webp">
      <Services />
      <CtaBand />
    </PageShell>
  );
}
