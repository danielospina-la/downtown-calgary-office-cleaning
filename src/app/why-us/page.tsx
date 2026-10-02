import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why Calgary offices choose D.C.O.C.: insured & bonded, flexible after-hours scheduling, a consistent crew, and a local Calgary-owned team.",
};

export default function WhyUsPage() {
  return (
    <PageShell>
      <WhyUs />
      <CtaBand />
    </PageShell>
  );
}
