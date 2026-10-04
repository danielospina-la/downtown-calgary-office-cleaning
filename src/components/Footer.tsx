import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-steel bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <a href="/" className="mx-auto block w-[min(20vw,400px)] min-w-36">
          <Image
            src="/logo-full.webp"
            alt="D.C.O.C. — Downtown Calgary Office Cleaning"
            width={320}
            height={326}
            className="h-auto w-full"
          />
        </a>
        <p className="mt-4 text-sm text-navy">
          Downtown Calgary Office Cleaning — nightly janitorial, sanitizing and
          specialty cleaning for offices across the core.
        </p>
        <p className="mt-3 text-sm text-navy">
          <a
            href="mailto:info@dcoc.ca"
            className="font-semibold underline-offset-4 hover:underline"
          >
            info@dcoc.ca
          </a>
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
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

        <div className="mt-12 border-t border-steel pt-6">
          <p className="text-xs text-navy">
            &copy; {new Date().getFullYear()} Downtown Calgary Office Cleaning.
            Serving downtown and surrounding communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
