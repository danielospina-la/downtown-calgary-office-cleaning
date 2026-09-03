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
        className="rounded-md border border-steel bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="rounded-md border border-steel bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="rounded-md border border-steel bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tell us about your office and cleaning needs"
        required
        rows={4}
        className="rounded-md border border-steel bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/50 focus:border-electric focus:outline-none"
      />
      {/* Honeypot field to reduce spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-electric px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-navy disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request a Quote"}
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
