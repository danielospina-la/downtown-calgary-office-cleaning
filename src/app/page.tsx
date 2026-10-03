import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";

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

const TEASERS: { title: string; desc: string; href: string }[] = [
  {
    title: "Our Services",
    desc: "Nightly janitorial, sanitizing and specialty cleaning — see everything we do for Calgary offices.",
    href: "/services",
  },
  {
    title: "Areas We Serve",
    desc: "Downtown Core, Beltline, Kensington and more neighbourhoods across Calgary.",
    href: "/areas-we-serve",
  },
  {
    title: "Why Us",
    desc: "Insured & bonded, flexible after-hours scheduling, and a consistent local crew.",
    href: "/why-us",
  },
];

function TeaserCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-3xl border border-steel bg-white p-8 transition-colors hover:border-navy"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
        {title}
      </h2>
      <p className="mt-3 flex-1 leading-7 text-navy">{desc}</p>
      <span className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-navy">
        Learn more <span aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <img
        src="/backgrounds/cleaner-home.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed right-3 bottom-3 z-20 w-64 select-none opacity-[0.08] sm:w-80 lg:w-96"
      />
      <div className="relative z-10 flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="bg-light-gray py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <h2 className="font-heading text-5xl font-extrabold tracking-tight text-navy sm:text-6xl">
              Explore
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {TEASERS.map((t) => (
                <TeaserCard key={t.href} {...t} />
              ))}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
      <Footer />
      </div>
    </div>
  );
}
