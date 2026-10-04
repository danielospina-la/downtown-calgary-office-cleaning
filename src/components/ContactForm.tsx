"use client";

import { useState } from "react";
import VintageButton from "./VintageButton";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-[3px] border border-steel bg-white px-5 py-3.5 font-heading text-navy placeholder:text-navy/50 focus:border-electric focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          botcheck: formData.get("botcheck"),
        }),
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
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className={inputClass}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell us about your office and cleaning needs"
        required
        rows={4}
        className={inputClass}
      />
      {/* Honeypot field to reduce spam */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mt-2">
        <VintageButton submit color="orange" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Request a Quote"}
        </VintageButton>
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700">
          Thanks! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong. Please try again or reach out directly.
        </p>
      )}
    </form>
  );
}
