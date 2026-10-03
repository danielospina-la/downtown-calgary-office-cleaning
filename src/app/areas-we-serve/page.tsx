import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Office cleaning across Downtown Calgary and nearby neighbourhoods: Downtown Core, Beltline, Eau Claire, East Village, Mission, Kensington, Inglewood, Chinatown, Bridgeland.",
};

export default function AreasPage() {
  return (
    <PageShell bgImage="/backgrounds/cleaner-areas.webp">
      <ServiceAreas />
      <CtaBand />
    </PageShell>
  );
}
