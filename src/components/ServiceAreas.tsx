const AREAS = [
  "Downtown Core",
  "Beltline",
  "Eau Claire",
  "East Village",
  "Mission",
  "Kensington / Hillhurst",
  "Inglewood",
  "Chinatown",
  "Bridgeland",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-light-gray py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-lg">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric">
            Areas We Serve
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Downtown Calgary and the neighborhoods around it
          </h2>
          <p className="mt-4 text-lg leading-8 text-charcoal">
            Based in the core, cleaning offices across downtown and the
            surrounding communities.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {AREAS.map((area) => (
            <li
              key={area}
              className="rounded-md border border-steel bg-white px-4 py-2.5 text-sm font-medium text-navy"
            >
              {area}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-charcoal">
          Don&apos;t see your neighborhood?{" "}
          <a href="#contact" className="font-medium text-electric">
            Ask us
          </a>{" "}
          &mdash; we&apos;re expanding our service area regularly.
        </p>
      </div>
    </section>
  );
}
