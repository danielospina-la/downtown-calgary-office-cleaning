import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-steel bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <a href="#top" className="inline-block">
          <Image
            src="/logo-full.webp"
            alt="D.C.O.C. — Downtown Calgary Office Cleaning"
            width={320}
            height={326}
            className="h-44 w-auto"
          />
        </a>
        <p className="mt-4 text-sm text-charcoal">
          Downtown Calgary Office Cleaning — nightly janitorial, sanitizing and
          specialty cleaning for offices across the core.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
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

        <div className="mt-12 border-t border-steel pt-6">
          <p className="text-xs text-charcoal/70">
            &copy; {new Date().getFullYear()} Downtown Calgary Office Cleaning.
            Serving downtown and surrounding communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
