"use client";

import { useState } from "react";
import VintageButton from "./VintageButton";

/* ------------------------------------------------------------------ */
/* Adjustable estimate rates (based on Calgary market ranges, 2026).    */
/* ------------------------------------------------------------------ */
const RATE_PER_SQFT = 0.12;
const RATE_PER_BATHROOM = 15;
const RATE_KITCHEN = 25;

const FLOORS = [
  { id: "carpet", label: "Carpet", mult: 1 },
  { id: "hardwood", label: "Hardwood", mult: 1 },
  { id: "tile", label: "Tile / Vinyl", mult: 1.05 },
  { id: "mixed", label: "Mixed", mult: 1.1 },
];

const FREQUENCIES = [
  { id: "once", label: "One-time", mult: 1.25, visits: 1 },
  { id: "weekly", label: "Weekly", mult: 1.0, visits: 4.33 },
  { id: "twice", label: "2–3× / week", mult: 0.9, visits: 10 },
  { id: "nightly", label: "Nightly", mult: 0.8, visits: 21.7 },
];

const SCHEDULES = ["After-hours", "Weekends", "Business hours"];

const CONDITIONS = [
  { id: "recent", label: "Recently cleaned", mult: 1 },
  { id: "awhile", label: "It's been a while", mult: 1.15 },
  { id: "deep", label: "Needs a deep clean first", mult: 1.35 },
];

const CORE_SERVICES = [
  { name: "Nightly Office Cleaning", icon: "/icons/icon-nightly-office-cleaning.webp" },
  { name: "Trash & Recycling Removal", icon: "/icons/icon-trash-recycling-removal.webp" },
  { name: "Kitchen & Breakroom Cleaning", icon: "/icons/icon-kitchen-breakroom-cleaning.webp" },
  { name: "Restroom Cleaning & Sanitizing", icon: "/icons/icon-restroom-cleaning-sanitizing.webp" },
  { name: "Vacuuming & Floor Mopping", icon: "/icons/icon-vacuuming-floor-mopping.webp" },
  { name: "Dusting & Surface Wiping", icon: "/icons/icon-dusting-surface-wiping.webp" },
  { name: "High-Touch Disinfection", icon: "/icons/icon-hightouch-disinfection.webp" },
];

const SPECIALTIES: { id: string; name: string; perSqFt?: number; flat?: number }[] = [
  { id: "carpet", name: "Carpet deep cleaning", perSqFt: 0.04 },
  { id: "windows", name: "Interior window washing", flat: 45 },
  { id: "post", name: "Post-construction cleanup", flat: 180 },
];

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-CA");
}

function QuestionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-navy">
      {children}
    </p>
  );
}

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 border-2 px-4 py-3 text-center font-heading text-sm font-semibold transition-colors ${
        selected
          ? "border-navy bg-navy text-white"
          : "border-steel/60 bg-white text-navy hover:border-navy"
      }`}
    >
      {children}
    </button>
  );
}

export default function QuoteCalculator({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [sqft, setSqft] = useState(1500);
  const [floor, setFloor] = useState("carpet");
  const [bathrooms, setBathrooms] = useState(2);
  const [kitchen, setKitchen] = useState(true);
  const [services, setServices] = useState<string[]>(
    CORE_SERVICES.map((s) => s.name)
  );
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [frequency, setFrequency] = useState("weekly");
  const [schedule, setSchedule] = useState(SCHEDULES[0]);
  const [condition, setCondition] = useState("recent");

  if (!open) return null;

  const floorMult = FLOORS.find((f) => f.id === floor)!.mult;
  const freq = FREQUENCIES.find((f) => f.id === frequency)!;
  const condMult = CONDITIONS.find((c) => c.id === condition)!.mult;

  const serviceFactor = 0.5 + 0.5 * (services.length / CORE_SERVICES.length);
  const base = sqft * RATE_PER_SQFT * floorMult * serviceFactor;
  const extras = bathrooms * RATE_PER_BATHROOM + (kitchen ? RATE_KITCHEN : 0);
  const specialtyCost = SPECIALTIES.reduce((sum, s) => {
    if (!specialties.includes(s.id)) return sum;
    return sum + (s.perSqFt ? sqft * s.perSqFt : s.flat ?? 0);
  }, 0);
  const perVisit = (base + extras) * condMult * freq.mult + specialtyCost * freq.mult;
  const monthly = perVisit * freq.visits;

  const toggle = (list: string[], id: string, set: (v: string[]) => void) =>
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const steps = ["Space", "Details", "Services", "Schedule"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quote calculator"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-electric">
              D.C.O.C. Quote Calculator
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              {step < 4 ? `Step ${step + 1} of 4 — ${steps[step]}` : "Your estimate"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close calculator"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-steel/60 text-navy hover:border-navy"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {step < 4 && (
          <div className="mt-4 flex gap-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 ${i <= step ? "bg-navy" : "bg-steel/40"}`}
              />
            ))}
          </div>
        )}

        <div className="mt-8">
          {step === 0 && (
            <div className="space-y-8">
              <div>
                <QuestionLabel>1. How big is your office? (sq ft)</QuestionLabel>
                <input
                  type="range"
                  min={500}
                  max={20000}
                  step={100}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="mt-4 w-full accent-[#1e5aa8]"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-navy/70">500</span>
                  <span className="font-heading text-2xl font-bold text-navy">
                    {sqft.toLocaleString()} sq ft
                  </span>
                  <span className="text-sm text-navy/70">20,000</span>
                </div>
              </div>
              <div>
                <QuestionLabel>2. What type of floors?</QuestionLabel>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {FLOORS.map((f) => (
                    <OptionCard key={f.id} selected={floor === f.id} onClick={() => setFloor(f.id)}>
                      {f.label}
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8">
              <div>
                <QuestionLabel>3. How many restrooms?</QuestionLabel>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                    className="flex h-12 w-12 items-center justify-center border-2 border-steel/60 font-heading text-2xl text-navy hover:border-navy"
                    aria-label="Fewer restrooms"
                  >
                    −
                  </button>
                  <span className="font-heading text-4xl font-bold text-navy">{bathrooms}</span>
                  <button
                    type="button"
                    onClick={() => setBathrooms(Math.min(20, bathrooms + 1))}
                    className="flex h-12 w-12 items-center justify-center border-2 border-steel/60 font-heading text-2xl text-navy hover:border-navy"
                    aria-label="More restrooms"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <QuestionLabel>4. Kitchen or breakroom?</QuestionLabel>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <OptionCard selected={kitchen} onClick={() => setKitchen(true)}>Yes</OptionCard>
                  <OptionCard selected={!kitchen} onClick={() => setKitchen(false)}>No</OptionCard>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <QuestionLabel>5. Which services do you need?</QuestionLabel>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {CORE_SERVICES.map((s) => {
                    const on = services.includes(s.name);
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => toggle(services, s.name, setServices)}
                        className={`flex items-center gap-3 border-2 px-3 py-2 text-left transition-colors ${
                          on ? "border-navy bg-navy/5" : "border-steel/40 opacity-70 hover:border-navy"
                        }`}
                      >
                        <img src={s.icon} alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-full" />
                        <span className="font-heading text-sm font-semibold text-navy">{s.name}</span>
                        <span className={`ml-auto flex h-5 w-5 shrink-0 items-center justify-center border-2 ${on ? "border-navy bg-navy text-white" : "border-steel/60 text-transparent"}`}>
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 13l4 4L19 7" /></svg>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.15em] text-navy/70">
                  Specialty add-ons
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {SPECIALTIES.map((s) => {
                    const on = specialties.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggle(specialties, s.id, setSpecialties)}
                        className={`flex items-center justify-between border-2 px-4 py-2.5 text-left transition-colors ${
                          on ? "border-navy bg-navy/5" : "border-steel/40 opacity-70 hover:border-navy"
                        }`}
                      >
                        <span className="font-heading text-sm font-semibold text-navy">{s.name}</span>
                        <span className="text-sm text-navy/70">
                          +{money(s.perSqFt ? sqft * s.perSqFt : s.flat ?? 0)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <QuestionLabel>6. How often?</QuestionLabel>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {FREQUENCIES.map((f) => (
                    <OptionCard key={f.id} selected={frequency === f.id} onClick={() => setFrequency(f.id)}>
                      {f.label}
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div>
                <QuestionLabel>7. Preferred schedule?</QuestionLabel>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {SCHEDULES.map((s) => (
                    <OptionCard key={s} selected={schedule === s} onClick={() => setSchedule(s)}>
                      {s}
                    </OptionCard>
                  ))}
                </div>
              </div>
              <div>
                <QuestionLabel>8. Current condition?</QuestionLabel>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {CONDITIONS.map((c) => (
                    <OptionCard key={c.id} selected={condition === c.id} onClick={() => setCondition(c.id)}>
                      {c.label}
                    </OptionCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="border-2 border-navy bg-navy/5 p-6 text-center sm:p-8">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                  Estimated per visit
                </p>
                <p className="mt-2 font-heading text-6xl font-extrabold text-navy">
                  {money(perVisit)}
                </p>
                <p className="mt-3 text-lg text-navy">
                  ≈ <strong>{money(monthly)}/month</strong> · {freq.label.toLowerCase()}
                </p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-navy">
                <div className="flex justify-between border-b border-steel/40 py-2">
                  <span>Base cleaning ({sqft.toLocaleString()} sq ft)</span>
                  <span className="font-semibold">{money(base * condMult * freq.mult)}</span>
                </div>
                <div className="flex justify-between border-b border-steel/40 py-2">
                  <span>Restrooms ({bathrooms}){kitchen ? " + kitchen" : ""}</span>
                  <span className="font-semibold">{money(extras * condMult * freq.mult)}</span>
                </div>
                {specialties.length > 0 && (
                  <div className="flex justify-between border-b border-steel/40 py-2">
                    <span>Specialty add-ons ({specialties.length})</span>
                    <span className="font-semibold">{money(specialtyCost * freq.mult)}</span>
                  </div>
                )}
                <div className="flex justify-between py-2">
                  <span>Frequency &amp; condition adjustments</span>
                  <span className="font-semibold">included</span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-navy/60">
                Ballpark estimate based on Calgary market rates — your formal
                quote after a walkthrough may vary.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3">
                <VintageButton href="/contact">Request formal quote</VintageButton>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="font-heading text-sm font-semibold text-navy underline underline-offset-4"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>

        {step < 4 && (
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
              className="font-heading text-sm font-semibold text-navy underline underline-offset-4"
            >
              {step === 0 ? "Cancel" : "← Back"}
            </button>
            <VintageButton onClick={() => setStep(step + 1)}>
              {step === 3 ? "See my estimate" : "Continue"}
            </VintageButton>
          </div>
        )}
      </div>
    </div>
  );
}
