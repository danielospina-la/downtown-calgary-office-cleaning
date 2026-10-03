import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Office Cleaning Services",
  description:
    "Nightly janitorial, sanitizing & specialty office cleaning services in Downtown Calgary — insured & bonded, flexible after-hours scheduling. Get a free quote.",
};

export default function ServicesPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-services.webp">
      <Services />
      <CtaBand />
    </PageShell>
  );
}
