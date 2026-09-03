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

function DiagonalArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 shrink-0"
      aria-hidden="true"
    >
      <path d="M7 7l10 10M17 17H8M17 17V8" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ChevronIcon() {
  return (
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
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-light-gray py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          Our
          <br />
          Services
        </h2>

        <div className="mt-10 flex items-center gap-4">
          <DiagonalArrowIcon />
          <a
            href="#contact"
            className="group flex w-full max-w-md items-center justify-between gap-6 rounded-full bg-navy py-2 pr-2 pl-6 transition-colors hover:bg-navy/90"
          >
            <span className="text-sm font-medium text-white/80 sm:text-base">
              Not sure what you need?
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric text-white transition-colors group-hover:bg-white group-hover:text-navy">
              <ArrowRightIcon />
            </span>
          </a>
        </div>

        <div className="mt-14 max-w-2xl">
          {CORE_SERVICES.map((service) => (
            <a
              key={service}
              href="#contact"
              className="group flex items-center justify-between gap-4 border-b border-steel/60 py-5 first:border-t"
            >
              <span className="flex items-center gap-4">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
                <span className="font-heading text-lg font-semibold text-navy sm:text-xl">
                  {service}
                </span>
              </span>
              <ChevronIcon />
            </a>
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
