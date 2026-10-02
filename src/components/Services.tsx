import PillCTA from "./PillCTA";

const CORE_SERVICES: { name: string; desc: string }[] = [
  {
    name: "Nightly Office Cleaning",
    desc: "After-hours janitorial cleaning that leaves your office spotless for every workday.",
  },
  {
    name: "Trash & Recycling Removal",
    desc: "Daily waste and recycling pickup, sorted and handled responsibly.",
  },
  {
    name: "Kitchen & Breakroom Cleaning",
    desc: "Counters, appliances and floors kept fresh for your team.",
  },
  {
    name: "Restroom Cleaning & Sanitizing",
    desc: "Thorough restroom cleaning and sanitizing for staff and visitors.",
  },
  {
    name: "Vacuuming & Floor Mopping",
    desc: "Carpets vacuumed and hard floors mopped to a clean finish.",
  },
  {
    name: "Dusting & Surface Wiping",
    desc: "Desks, shelves and surfaces dusted and wiped down.",
  },
  {
    name: "High-Touch Disinfection",
    desc: "Doorknobs, switches and shared surfaces disinfected to cut germs.",
  },
];

const SPECIALTY_SERVICES: { name: string; desc: string }[] = [
  {
    name: "Carpet Cleaning",
    desc: "Deep carpet cleaning that lifts stains and refreshes high-traffic areas.",
  },
  {
    name: "Window Washing",
    desc: "Streak-free interior window washing for a brighter office.",
  },
  {
    name: "Post-Construction Cleanup",
    desc: "Dust and debris removal after renovations or build-outs.",
  },
];

function ServiceRow({
  name,
  desc,
}: {
  name: string;
  desc: string;
}) {
  return (
    <a
      href="/contact"
      className="group flex items-center justify-between gap-4 border-b border-steel/60 py-5 first:border-t"
    >
      <span className="flex items-start gap-4">
        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
        <span>
          <h3 className="block font-heading text-lg font-semibold text-navy sm:text-xl">
            {name}
          </h3>
          <span className="mt-1 block text-sm leading-6 text-navy">
            {desc}
          </span>
        </span>
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0 text-steel transition-colors group-hover:text-electric"
        aria-hidden="true"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}

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
          <PillCTA label="Not sure what you need?" href="/contact" />
        </div>

        <div className="mt-14 max-w-2xl">
          {CORE_SERVICES.map((service) => (
            <ServiceRow
              key={service.name}
              name={service.name}
              desc={service.desc}
            />
          ))}
        </div>

        <div className="mt-12">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-navy">
            Also Available
          </p>
          <div className="mt-8 max-w-2xl">
            {SPECIALTY_SERVICES.map((service) => (
              <ServiceRow
                key={service.name}
                name={service.name}
                desc={service.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
