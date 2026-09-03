const CORE_SERVICES = [
  {
    num: "01",
    name: "Nightly Office Cleaning",
    desc: "Recurring evening or after-hours cleaning built around your building's schedule.",
  },
  {
    num: "02",
    name: "Trash & Recycling Removal",
    desc: "Bins emptied, liners replaced, and waste sorted every visit.",
  },
  {
    num: "03",
    name: "Kitchen & Breakroom Cleaning",
    desc: "Counters, sinks, appliance exteriors, and shared surfaces sanitized.",
  },
  {
    num: "04",
    name: "Restroom Cleaning & Sanitizing",
    desc: "Full sanitizing, restocking, and odor control on every visit.",
  },
  {
    num: "05",
    name: "Vacuuming & Floor Mopping",
    desc: "Carpeted and hard-surface floors cleaned throughout your space.",
  },
  {
    num: "06",
    name: "Dusting & Surface Wiping",
    desc: "Desks, shelves, sills, and common-area furniture wiped down.",
  },
  {
    num: "07",
    name: "High-Touch Disinfection",
    desc: "Door handles, light switches, elevator buttons, and shared equipment.",
  },
];

const SPECIALTY_SERVICES = [
  "Carpet Cleaning",
  "Window Washing",
  "Post-Construction Cleanup",
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-lg">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric">
            Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built like a floor directory
          </h2>
          <p className="mt-4 text-lg leading-8 text-charcoal">
            Every core service, floor by floor.
          </p>
        </div>

        <div className="mt-14 border-t border-steel">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.num}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-steel py-6 sm:grid-cols-[4rem_1fr_2fr] sm:items-center sm:gap-8"
            >
              <span className="font-heading text-sm font-medium text-steel">
                {service.num}
              </span>
              <h3 className="font-heading text-lg font-semibold text-navy">
                {service.name}
              </h3>
              <p className="col-span-2 text-sm leading-6 text-charcoal sm:col-span-1">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-steel">
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
