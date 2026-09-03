const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-navy"
        >
          Downtown Calgary
          <span className="text-electric">.</span> Office Cleaning
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-electric"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}
