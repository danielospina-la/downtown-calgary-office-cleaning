import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";

const DESCRIPTION =
  "Why Calgary offices choose D.C.O.C.: insured & bonded, flexible after-hours scheduling, a consistent crew, and a local Calgary-owned team.";

export const metadata: Metadata = {
  title: "Why Us",
  description: DESCRIPTION,
  alternates: { canonical: "/why-us" },
  openGraph: {
    title: "Why Us | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
    url: "/why-us",
    siteName: "Downtown Calgary Office Cleaning",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
  },
};

export default function WhyUsPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-whyus.webp">
      <WhyUs />
      <CtaBand />
    </PageShell>
  );
}
