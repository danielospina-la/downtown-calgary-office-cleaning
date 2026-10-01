const FAQS: { q: string; a: string }[] = [
  {
    q: "What office cleaning services do you offer in Calgary?",
    a: "We offer nightly office cleaning, trash and recycling removal, kitchen and breakroom cleaning, restroom cleaning and sanitizing, vacuuming and floor mopping, dusting and surface wiping, and high-touch disinfection. Specialty services include carpet cleaning, window washing, and post-construction cleanup.",
  },
  {
    q: "Do you clean offices outside business hours?",
    a: "Yes. We offer flexible after-hours scheduling, so cleaning happens around your business — not during it. Your office is spotless when your team arrives in the morning.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we are fully insured and bonded, so you can hand over keys and access with confidence.",
  },
  {
    q: "Which Calgary neighbourhoods do you serve?",
    a: "We serve the Downtown Core, Beltline, Eau Claire, East Village, Mission, Kensington / Hillhurst, Inglewood, Chinatown, and Bridgeland — and we're expanding our service area regularly.",
  },
  {
    q: "How do I get a quote?",
    a: "Share a few details about your space through our contact form and we'll follow up with a free quote built around your office and schedule.",
  },
  {
    q: "Will the same crew clean our office each time?",
    a: "Yes. A consistent crew gets to know your space and your standards, so quality stays the same visit after visit.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          Frequently
          <br />
          Asked Questions
        </h2>

        <div className="mt-14 max-w-2xl">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="border-b border-steel/60 py-6 first:border-t"
            >
              <h3 className="font-heading text-lg font-semibold text-navy sm:text-xl">
                {faq.q}
              </h3>
              <p className="mt-2 leading-7 text-charcoal">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
