import DotRow from "./DotRow";

const POINTS = [
  {
    title: "Insured & Bonded",
    desc: "Full coverage so you can hand over keys and access with confidence.",
  },
  {
    title: "Flexible After-Hours Scheduling",
    desc: "Cleaning happens around your business, not the other way around.",
  },
  {
    title: "Consistent Crew, Consistent Quality",
    desc: "The same team gets to know your space and your standards.",
  },
  {
    title: "Local & Calgary-Owned",
    desc: "Based downtown, responsive, and easy to reach when you need us.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight text-navy sm:text-7xl">
          Why
          <br />
          Us
        </h2>

        <div className="mt-14 max-w-2xl">
          {POINTS.map((point) => (
            <DotRow
              key={point.title}
              label={point.title}
              sublabel={point.desc}
              href="#contact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
