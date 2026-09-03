import DotRow from "./DotRow";
import PillCTA from "./PillCTA";

const CORE_SERVICES = [
  "Nightly Office Cleaning",
  "Trash & Recycling Removal",
  "Kitchen & Breakroom Cleaning",
  "Restroom Cleaning & Sanitizing",
  "Vacuuming & Floor Mopping",
  "Dusting & Surface Wiping",
  "High-Touch Disinfection",
];

const SPECIALTY_SERVICES = [
  "Carpet Cleaning",
  "Window Washing",
  "Post-Construction Cleanup",
];

export default function Services() {
  return (
    <section id="services" className="bg-light-gray py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          Our
          <br />
          Services
        </h2>

        <div className="mt-10">
          <PillCTA label="Not sure what you need?" href="#contact" />
        </div>

        <div className="mt-14 max-w-2xl">
          {CORE_SERVICES.map((service) => (
            <DotRow key={service} label={service} href="#contact" />
          ))}
        </div>

        <div className="mt-12">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-steel">
            Also Available
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {SPECIALTY_SERVICES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-steel px-4 py-2 text-sm font-medium text-navy"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
