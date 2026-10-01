import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SITE_URL = "https://downtown-calgary-office-cleaning.vercel.app";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: "Downtown Calgary Office Cleaning",
  url: SITE_URL,
  description:
    "Nightly janitorial, sanitizing and specialty office cleaning for offices in Downtown Calgary and surrounding areas. Insured and bonded, with flexible after-hours scheduling.",
  areaServed: [
    "Downtown Calgary",
    "Downtown Core",
    "Beltline",
    "Eau Claire",
    "East Village",
    "Mission",
    "Kensington",
    "Hillhurst",
    "Inglewood",
    "Chinatown",
    "Bridgeland",
    "Calgary, AB",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ServiceAreas />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
