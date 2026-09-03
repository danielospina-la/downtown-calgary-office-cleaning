"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="rounded-2xl border border-transparent bg-white px-5 py-3.5 font-heading text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="rounded-2xl border border-transparent bg-white px-5 py-3.5 font-heading text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="rounded-2xl border border-transparent bg-white px-5 py-3.5 font-heading text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tell us about your office and cleaning needs"
        required
        rows={4}
        className="rounded-2xl border border-transparent bg-white px-5 py-3.5 font-heading text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      {/* Honeypot field to reduce spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-2 flex items-center justify-between gap-6 rounded-full bg-electric py-2 pr-2 pl-6 transition-colors hover:bg-white disabled:opacity-60"
      >
        <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-navy sm:text-base">
          {status === "submitting" ? "Sending..." : "Request a Quote"}
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy transition-colors group-hover:bg-electric group-hover:text-white">
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
        </span>
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-white">
          Thanks! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-white">
          Something went wrong. Please try again or reach out directly.
        </p>
      )}
    </form>
  );
}
