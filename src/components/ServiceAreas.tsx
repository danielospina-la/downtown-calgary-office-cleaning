import Faq, { type FaqItem } from "./Faq";

type Area = {
  name: string;
  slug: string;
  blurb: string;
  guide: boolean;
};

function AreaCard({ name, slug, blurb, guide }: Area) {
  return (
    <a
      href={guide ? `/areas-we-serve/${slug}` : "/contact"}
      className="group flex flex-col items-center p-5 text-center sm:p-8"
    >
      <img
        src="/icons/bullet-area-pin.webp"
        alt={`${name} service area pin`}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <h3 className="mt-3 block font-heading text-base font-semibold text-navy sm:text-xl">
        {name}
      </h3>
      <span className="mt-2 block text-sm leading-6 text-navy">{blurb}</span>
      {guide && (
        <span className="mt-3 block font-heading text-xs font-semibold uppercase tracking-[0.15em] text-navy underline underline-offset-4">
          Read the area guide
        </span>
      )}
    </a>
  );
}

const AREAS: Area[] = [
  {
    name: "Downtown Core",
    slug: "downtown-core",
    blurb: "Nightly janitorial for towers and offices in the heart of Calgary.",
    guide: true,
  },
  {
    name: "Beltline",
    slug: "beltline",
    blurb: "Office cleaning for Beltline businesses, on your schedule.",
    guide: true,
  },
  {
    name: "Eau Claire",
    slug: "eau-claire",
    blurb: "Reliable cleaning for Eau Claire offices and commercial spaces.",
    guide: true,
  },
  {
    name: "East Village",
    slug: "east-village",
    blurb: "Janitorial services for East Village's growing office community.",
    guide: true,
  },
  {
    name: "Mission",
    slug: "mission",
    blurb: "Office cleaning for Mission businesses, after hours.",
    guide: false,
  },
  {
    name: "Kensington / Hillhurst",
    slug: "kensington-hillhurst",
    blurb: "Cleaning services for Kensington and Hillhurst offices.",
    guide: false,
  },
  {
    name: "Inglewood",
    slug: "inglewood",
    blurb: "Trusted office cleaning for Inglewood's shops and workspaces.",
    guide: false,
  },
  {
    name: "Chinatown",
    slug: "chinatown",
    blurb: "Janitorial cleaning for Chinatown offices and storefronts.",
    guide: false,
  },
  {
    name: "Bridgeland",
    slug: "bridgeland",
    blurb: "Office cleaning for Bridgeland businesses of every size.",
    guide: false,
  },
];

const AREA_FAQS: FaqItem[] = [
  {
    q: "Do you clean offices outside Downtown Calgary?",
    a: "Yes. Alongside the Downtown Core we serve Beltline, Eau Claire, East Village, Mission, Kensington / Hillhurst, Inglewood, Chinatown, and Bridgeland — and we're expanding our service area regularly. If your office is nearby, ask us.",
  },
  {
    q: "Do you offer after-hours cleaning in every neighbourhood?",
    a: "Yes. Every service area gets the same flexible after-hours scheduling: evenings after 6 pm, early mornings, and weekends. Your team arrives to a clean office without ever working around a crew.",
  },
  {
    q: "How quickly can you start cleaning our office?",
    a: "Most offices get a free quote within 24 hours of contacting us, and recurring service can usually start the same week. One-time deep cleans can often be scheduled within a few days.",
  },
  {
    q: "Do you bring your own cleaning supplies and equipment?",
    a: "Yes. We bring commercial-grade supplies and equipment to every visit, including disinfectants for high-touch surfaces. If your building requires specific products, we adapt to your requirements.",
  },
  {
    q: "Will the same crew clean our office each visit?",
    a: "Yes. A consistent, insured and bonded crew learns your space and your standards, so the quality stays the same visit after visit — in every neighbourhood we serve.",
  },
];

const CLIENT_TYPES: { title: string; desc: string }[] = [
  {
    title: "Office towers & corporate floors",
    desc: "Nightly janitorial for multi-tenant towers and full corporate floors in the Downtown Core — lobbies, elevators, boardrooms, and open-plan workstations.",
  },
  {
    title: "Medical & dental clinics",
    desc: "Detail-oriented cleaning and sanitizing for clinics and professional practices where hygiene standards are non-negotiable.",
  },
  {
    title: "Coworking spaces",
    desc: "High-traffic cleaning for shared desks, meeting rooms, kitchens, and restrooms that reset the space for every member, every morning.",
  },
  {
    title: "Retail & showrooms",
    desc: "After-hours cleaning for storefronts, showrooms, and street-level businesses across Beltline, Inglewood, Kensington, and beyond.",
  },
];

export default function ServiceAreas() {
  return (
    <>
      <section id="areas" className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h1 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
            Office Cleaning
            <br />
            Service Areas in Downtown Calgary
          </h1>

          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-navy">
            <p>
              D.C.O.C. is a Calgary-based office cleaning company serving the
              Downtown Core and surrounding neighbourhoods — from nightly
              janitorial in downtown office towers to recurring cleaning for
              Beltline agencies, Eau Claire professional offices, and growing
              businesses in East Village, Mission, Kensington, Inglewood,
              Chinatown, and Bridgeland.
            </p>
            <p>
              Every service area gets the same deal: a consistent, insured and
              bonded crew, commercial-grade supplies, and flexible after-hours
              scheduling built around your business — not the other way around.
            </p>
          </div>

          <h2 className="mt-16 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Neighbourhoods We Serve
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {AREAS.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>

          <p className="mt-8 text-sm text-navy">
            Don&apos;t see your neighbourhood?{" "}
            <a href="/contact" className="font-medium text-electric">
              Ask us
            </a>{" "}
            &mdash; we&apos;re expanding our service area regularly.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            How After-Hours Cleaning Works
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-navy">
            <p>
              Most of our cleaning happens after your workday ends. It starts
              with a walkthrough — in person or virtual — where we map your
              space, note priorities like boardrooms, kitchens, and restrooms,
              and agree on a checklist.
            </p>
            <p>
              From there, our insured crew arrives on your schedule: evenings
              after 6 pm, early mornings, or weekends. We handle keys, fobs,
              and alarm codes securely, work through the checklist top to
              bottom, and lock up behind us. Your team walks into a spotless
              office every morning — trash out, restrooms sanitized, desks
              dusted, floors vacuumed or mopped.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Who We Clean For
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CLIENT_TYPES.map((client) => (
              <div key={client.title}>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {client.title}
                </h3>
                <p className="mt-2 leading-7 text-navy">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Response Times
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-navy">
            <p>
              Free quotes go out within 24 hours of your request, and recurring
              service can usually start the same week. Need a one-time deep
              clean before a client visit or after a renovation? We can often
              schedule those within a few days, anywhere in our service area.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Where We Clean
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-navy">
            Our crews are based in the core and cover every neighbourhood on
            this map — nightly, weekly, or on whatever schedule your office
            needs.
          </p>
          <div className="mt-10 overflow-hidden rounded-[3px]">
            <iframe
              title="Map of the Downtown Calgary office cleaning service area"
              src="https://www.google.com/maps?q=Downtown+Calgary,+Alberta&z=13&output=embed"
              className="h-96 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Faq items={AREA_FAQS} />
    </>
  );
}
