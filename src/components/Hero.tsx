"use client";

import { useState } from "react";
import Image from "next/image";
import PillCTA from "./PillCTA";
import QuoteCalculator from "./QuoteCalculator";
import VintageButton from "./VintageButton";

export default function Hero() {
  const [calcOpen, setCalcOpen] = useState(false);
  return (
    <section id="top" className="border-b border-steel bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-14 pb-20 sm:px-10 md:grid-cols-2 md:gap-12 md:pt-20 md:pb-28">
        <div className="order-1 md:order-2">
          <Image
            src="/logo-full.webp"
            alt="D.C.O.C. — Downtown Calgary Office Cleaning"
            width={1412}
            height={1435}
            className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>
        <div className="order-2 md:order-1">
          <p className="mb-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-electric">
            Downtown Calgary &amp; Surrounding Areas
          </p>
          <h1 className="font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            We clean your office in Downtown Calgary.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-navy">
            Nightly janitorial, sanitizing, and specialty cleaning for offices
            across the core &mdash; reliable, insured, and built around your
            schedule.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <PillCTA label="Get a free quote" href="/contact" />
            <VintageButton onClick={() => setCalcOpen(true)} color="bright">
              Calculate your cost
            </VintageButton>
          </div>
          <QuoteCalculator open={calcOpen} onClose={() => setCalcOpen(false)} />
        </div>
      </div>
    </section>
  );
}
