"use client";

import { useState } from "react";
import Image from "next/image";
import VintageButton from "./VintageButton";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-steel bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="/" className="flex items-center">
          <Image
            src="/logo-navbar.webp"
            alt="Downtown Calgary Office Cleaning"
            width={264}
            height={86}
            className="h-12 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-navy transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <VintageButton href="/contact" size="sm">
            Get a Quote
          </VintageButton>
        </div>

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

      {/* Mobile menu panel — fixed dropdown below the header bar */}
      {open && (
        <div className="fixed inset-x-0 top-[80px] z-40 border-t border-steel bg-white shadow-xl md:hidden">
          <nav className="mx-auto flex max-h-[calc(100dvh-80px)] max-w-6xl flex-col overflow-y-auto px-6 py-4">
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
            <div
              className="mt-4 flex justify-center pb-2"
              onClick={() => setOpen(false)}
            >
              <VintageButton href="/contact" size="sm">
                Get a Quote
              </VintageButton>
            </div>
          </nav>
        </div>
      )}
    </header>
    {/* Spacer so page content starts below the fixed header */}
    <div className="h-20" aria-hidden="true" />
    </>
  );
}
