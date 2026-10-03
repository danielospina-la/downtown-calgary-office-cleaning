import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import VintageButton from "@/components/VintageButton";
import { getAreaGuide, AREA_SLUGS } from "../guides";

const SITE_URL = "https://downtown-calgary-office-cleaning.vercel.app";

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAreaGuide(slug);
  if (!guide) return {};
  const url = `/areas-we-serve/${guide.slug}`;
  return {
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      siteName: "Downtown Calgary Office Cleaning",
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function AreaGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getAreaGuide(slug);
  if (!guide) notFound();

  const pageUrl = `${SITE_URL}/areas-we-serve/${guide.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: SITE_URL + "/areas-we-serve",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.name,
        item: pageUrl,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "Downtown Calgary Office Cleaning",
    url: pageUrl,
    description: guide.metaDescription,
    areaServed: {
      "@type": "Place",
      name: `${guide.name}, Calgary, AB`,
    },
  };

  return (
    <PageShell bgImage="/backgrounds/cleaner-areas.webp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-navy">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span aria-hidden="true" className="mx-2">
              &gt;
            </span>
            <a href="/areas-we-serve" className="hover:underline">
              Areas We Serve
            </a>
            <span aria-hidden="true" className="mx-2">
              &gt;
            </span>
            <span aria-current="page" className="font-semibold">
              {guide.name}
            </span>
          </nav>

          <h1 className="mt-8 font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
            Office Cleaning in {guide.name}, Calgary
          </h1>

          <p className="mt-6 max-w-2xl font-heading text-xl font-medium text-navy">
            {guide.tagline}
          </p>

          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-navy">
            {guide.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <VintageButton href="/contact">Get a free quote</VintageButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            What We Clean in {guide.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {guide.spaceTypes.map((space) => (
              <div key={space.title}>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {space.title}
                </h3>
                <p className="mt-2 leading-7 text-navy">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Cleaning Services for {guide.name} Offices
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-navy">
            {guide.servicesIntro}
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 text-lg leading-8 text-navy">
            {guide.services.map((service) => (
              <li key={service} className="flex gap-3">
                <span aria-hidden="true" className="text-navy">
                  ★
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            After-Hours Service in {guide.name}
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-navy">
            {guide.afterHours.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {guide.landmarksTitle}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-navy">
            {guide.landmarks}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-navy">
            Not in {guide.name}?{" "}
            <a
              href="/areas-we-serve"
              className="font-medium text-electric underline underline-offset-4"
            >
              See all the neighbourhoods we serve
            </a>
            .
          </p>
        </div>
      </section>

      <Faq items={guide.faqs} />
      <CtaBand />
    </PageShell>
  );
}
