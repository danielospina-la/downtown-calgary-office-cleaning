import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

const DESCRIPTION =
  "Request a free office cleaning quote in Downtown Calgary. Share a few details about your space and we'll follow up with a quote built around your schedule.";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Get a Free Quote | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
    url: "/contact",
    siteName: "Downtown Calgary Office Cleaning",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Get a Free Quote | Downtown Calgary Office Cleaning",
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-contact.webp">
      <Contact />
      <Faq />
    </PageShell>
  );
}
