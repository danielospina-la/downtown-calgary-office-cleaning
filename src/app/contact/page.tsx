import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Request a free office cleaning quote in Downtown Calgary. Share a few details about your space and we'll follow up with a quote built around your schedule.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
      <Faq />
    </PageShell>
  );
}
