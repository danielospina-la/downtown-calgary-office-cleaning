import PillCTA from "./PillCTA";

/** Closing call-to-action band used on the home page and subpages. */
export default function CtaBand() {
  return (
    <section className="border-t border-steel bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="max-w-2xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
          Ready for a cleaner office?
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-navy">
          Get a free quote built around your office and your schedule.
        </p>
        <div className="mt-8">
          <PillCTA label="Get a free quote" href="/contact" />
        </div>
      </div>
    </section>
  );
}
