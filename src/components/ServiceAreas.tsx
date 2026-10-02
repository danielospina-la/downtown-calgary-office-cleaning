function AreaCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <a
      href="/contact"
      className="group flex flex-col items-center p-5 text-center sm:p-8"
    >
      <img
        src="/icons/bullet-area-pin.webp"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
      <h3 className="mt-3 block font-heading text-base font-semibold text-navy sm:text-xl">
        {name}
      </h3>
      <span className="mt-2 block text-sm leading-6 text-navy">{blurb}</span>
    </a>
  );
}

const AREAS: { name: string; blurb: string }[] = [
  {
    name: "Downtown Core",
    blurb: "Nightly janitorial for towers and offices in the heart of Calgary.",
  },
  {
    name: "Beltline",
    blurb: "Office cleaning for Beltline businesses, on your schedule.",
  },
  {
    name: "Eau Claire",
    blurb: "Reliable cleaning for Eau Claire offices and commercial spaces.",
  },
  {
    name: "East Village",
    blurb: "Janitorial services for East Village's growing office community.",
  },
  {
    name: "Mission",
    blurb: "Office cleaning for Mission businesses, after hours.",
  },
  {
    name: "Kensington / Hillhurst",
    blurb: "Cleaning services for Kensington and Hillhurst offices.",
  },
  {
    name: "Inglewood",
    blurb: "Trusted office cleaning for Inglewood's shops and workspaces.",
  },
  {
    name: "Chinatown",
    blurb: "Janitorial cleaning for Chinatown offices and storefronts.",
  },
  {
    name: "Bridgeland",
    blurb: "Office cleaning for Bridgeland businesses of every size.",
  },
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

        <p className="mt-8 max-w-2xl text-lg leading-8 text-navy">
          We provide office cleaning across Downtown Calgary and nearby
          neighbourhoods — from nightly janitorial in the Downtown Core to
          recurring cleaning for offices in Beltline, Kensington and beyond.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6">
          {AREAS.map((area) => (
            <AreaCard key={area.name} name={area.name} blurb={area.blurb} />
          ))}
        </div>

        <p className="mt-8 text-sm text-navy">
          Don&apos;t see your neighborhood?{" "}
          <a href="/contact" className="font-medium text-electric">
            Ask us
          </a>{" "}
          &mdash; we&apos;re expanding our service area regularly.
        </p>
      </div>
    </section>
  );
}
