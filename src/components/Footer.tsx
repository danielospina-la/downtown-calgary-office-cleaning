const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <p className="font-heading text-3xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-4xl">
          Downtown Calgary
          <span className="text-electric">.</span>
          <br />
          Office Cleaning
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-steel transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-steel">
            &copy; {new Date().getFullYear()} Downtown Calgary Office Cleaning.
            Serving downtown and surrounding communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
