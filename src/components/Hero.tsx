import PillCTA from "./PillCTA";

export default function Hero() {
  return (
    <section id="top" className="border-b border-steel bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36">
        <p className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-electric">
          Downtown Calgary &amp; Surrounding Areas
        </p>
        <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          We clean your office in Downtown Calgary.
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-8 text-charcoal">
          Nightly janitorial, sanitizing, and specialty cleaning for offices
          across the core &mdash; reliable, insured, and built around your
          schedule.
        </p>
        <div className="mt-10">
          <PillCTA label="Get a free quote" href="#contact" />
        </div>
      </div>
    </section>
  );
}
