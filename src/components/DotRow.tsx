function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-steel transition-colors group-hover:text-electric"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

type DotRowProps = {
  label: string;
  sublabel?: string;
  href?: string;
};

/**
 * Shared "floor directory" row: electric dot + label (+ optional sublabel)
 * on the left, chevron on the right, hairline divider below.
 * Used across Services, Why Us, and Service Areas for one consistent list style.
 */
export default function DotRow({ label, sublabel, href }: DotRowProps) {
  const rowClass =
    "group flex items-center justify-between gap-4 border-b border-steel/60 py-5 first:border-t";

  const content = (
    <>
      <span className="flex items-start gap-4">
        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
        <span>
          <span className="block font-heading text-lg font-semibold text-navy sm:text-xl">
            {label}
          </span>
          {sublabel && (
            <span className="mt-1 block text-sm leading-6 text-charcoal">
              {sublabel}
            </span>
          )}
        </span>
      </span>
      <ChevronIcon />
    </>
  );

  if (href) {
    return (
      <a href={href} className={rowClass}>
        {content}
      </a>
    );
  }

  return <div className={rowClass}>{content}</div>;
}
