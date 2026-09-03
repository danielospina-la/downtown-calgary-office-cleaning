import DotRow from "./DotRow";

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
        <h2 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          Areas We
          <br />
          Serve
        </h2>

        <div className="mt-14 max-w-2xl">
          {AREAS.map((area) => (
            <DotRow key={area} label={area} href="#contact" />
          ))}
        </div>

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
