function DiagonalArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 shrink-0 text-navy"
      aria-hidden="true"
    >
      <path d="M7 7l10 10M17 17H8M17 17V8" />
    </svg>
  );
}

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

type PillCTAProps = {
  label: string;
  href: string;
  /** Show the diagonal arrow pointer to the left of the pill. */
  pointer?: boolean;
};

/**
 * Signature CTA: an optional diagonal arrow pointing at a navy pill with an
 * electric-blue circular arrow button. Used across hero and section CTAs.
 */
export default function PillCTA({ label, href, pointer = true }: PillCTAProps) {
  return (
    <div className="flex items-center gap-4">
      {pointer && <DiagonalArrowIcon />}
      <a
        href={href}
        className="group flex w-full max-w-md items-center justify-between gap-6 rounded-full bg-navy py-2 pr-2 pl-6 transition-colors hover:bg-navy/90"
      >
        <span className="font-heading text-sm font-medium text-white sm:text-base">
          {label}
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric text-white transition-colors group-hover:bg-white group-hover:text-navy">
          <ArrowRightIcon />
        </span>
      </a>
    </div>
  );
}
