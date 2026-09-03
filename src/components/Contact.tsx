import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:px-10 md:grid-cols-2 md:gap-8">
        <div className="max-w-md">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric">
            Get a Quote
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Tell us about your space
          </h2>
          <p className="mt-4 text-lg leading-8 text-steel">
            Share a few details and we&apos;ll follow up with a quote built
            around your office and schedule.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
