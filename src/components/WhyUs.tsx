const POINTS = [
  {
    num: "01",
    title: "Insured & Bonded",
    desc: "Full coverage so you can hand over keys and access with confidence.",
  },
  {
    num: "02",
    title: "Flexible After-Hours Scheduling",
    desc: "Cleaning happens around your business, not the other way around.",
  },
  {
    num: "03",
    title: "Consistent Crew, Consistent Quality",
    desc: "The same team gets to know your space and your standards.",
  },
  {
    num: "04",
    title: "Local & Calgary-Owned",
    desc: "Based downtown, responsive, and easy to reach when you need us.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-lg">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric">
            Why Us
          </p>
          <h2 className="mt-3 font-heading text-5xl font-bold leading-[0.95] tracking-tight text-navy sm:text-6xl">
            Structured, precise, unfussy
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div key={point.num} className="border-t border-steel pt-5">
              <span className="font-heading text-sm font-medium text-steel">
                {point.num}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-navy">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-charcoal">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
