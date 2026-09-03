"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-heading text-lg font-bold tracking-tight text-navy"
        >
          Downtown Calgary
          <span className="text-electric">.</span> Office Cleaning
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-charcoal transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA: navy pill + electric arrow */}
        <a
          href="#contact"
          className="group hidden items-center gap-3 rounded-full bg-navy py-1.5 pr-1.5 pl-5 md:flex"
        >
          <span className="font-heading text-sm font-medium text-white">
            Get a Quote
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-electric text-white transition-colors group-hover:bg-white group-hover:text-navy">
            <ArrowRightIcon />
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-steel bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-steel/60 py-3 font-heading text-base font-medium text-navy last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-navy py-3 text-center font-heading text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
