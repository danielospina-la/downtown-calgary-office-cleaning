import PillCTA from "./PillCTA";

const CORE_SERVICES: { name: string; desc: string; icon: string }[] = [
  {
    name: "Nightly Office Cleaning",
    desc: "After-hours janitorial cleaning that leaves your office spotless for every workday.",
    icon: "/icons/icon-nightly-office-cleaning.webp",
  },
  {
    name: "Trash & Recycling Removal",
    desc: "Daily waste and recycling pickup, sorted and handled responsibly.",
    icon: "/icons/icon-trash-recycling-removal.webp",
  },
  {
    name: "Kitchen & Breakroom Cleaning",
    desc: "Counters, appliances and floors kept fresh for your team.",
    icon: "/icons/icon-kitchen-breakroom-cleaning.webp",
  },
  {
    name: "Restroom Cleaning & Sanitizing",
    desc: "Thorough restroom cleaning and sanitizing for staff and visitors.",
    icon: "/icons/icon-restroom-cleaning-sanitizing.webp",
  },
  {
    name: "Vacuuming & Floor Mopping",
    desc: "Carpets vacuumed and hard floors mopped to a clean finish.",
    icon: "/icons/icon-vacuuming-floor-mopping.webp",
  },
  {
    name: "Dusting & Surface Wiping",
    desc: "Desks, shelves and surfaces dusted and wiped down.",
    icon: "/icons/icon-dusting-surface-wiping.webp",
  },
  {
    name: "High-Touch Disinfection",
    desc: "Doorknobs, switches and shared surfaces disinfected to cut germs.",
    icon: "/icons/icon-hightouch-disinfection.webp",
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

function ServiceCard({
  name,
  desc,
  icon,
}: {
  name: string;
  desc: string;
  icon: string;
}) {
  return (
    <a
      href="/contact"
      className="group flex flex-col items-center rounded-3xl border border-steel/60 bg-white p-5 text-center transition-colors hover:border-navy sm:p-8"
    >
      <img
        src={icon}
        alt=""
        width={96}
        height={96}
        className="h-20 w-20 shrink-0 rounded-full ring-2 ring-navy/15 sm:h-24 sm:w-24"
      />
      <h3 className="mt-4 block font-heading text-base font-semibold text-navy sm:text-xl">
        {name}
      </h3>
      <span className="mt-2 block text-sm leading-6 text-navy">{desc}</span>
    </a>
  );
}

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

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6">
          {CORE_SERVICES.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              desc={service.desc}
              icon={service.icon}
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
