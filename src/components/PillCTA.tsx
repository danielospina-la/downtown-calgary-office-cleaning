import VintageButton from "./VintageButton";

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

type PillCTAProps = {
  label: string;
  href: string;
  /** Show the diagonal arrow pointer to the left of the button. */
  pointer?: boolean;
};

/**
 * Signature CTA: an optional diagonal arrow pointing at a vintage tag
 * button. Used across hero and section CTAs.
 */
export default function PillCTA({ label, href, pointer = true }: PillCTAProps) {
  return (
    <div className="flex items-center gap-4">
      {pointer && <DiagonalArrowIcon />}
      <VintageButton href={href}>{label}</VintageButton>
    </div>
  );
}
