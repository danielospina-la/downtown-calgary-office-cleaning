export default function Hero() {
  return (
    <section
      id="top"
      className="border-b border-steel bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 sm:px-10 sm:pt-28 sm:pb-36">
        <div className="max-w-xl">
          <p className="mb-4 font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric">
            Downtown Calgary &amp; Surrounding Areas
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            Precision office cleaning for the buildings that define this
            city.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-charcoal">
            Nightly janitorial, sanitizing, and specialty cleaning for
            offices across the core &mdash; reliable, insured, and built
            around your schedule.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-navy px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-electric"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="rounded-full border border-steel px-7 py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:border-navy"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
