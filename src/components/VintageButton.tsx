const COLORS = {
  blue: "#1e5aa8",
  orange: "#f97316",
} as const;

const CLIP =
  "polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%)";

type VintageButtonProps = {
  children: React.ReactNode;
  color?: keyof typeof COLORS;
  size?: "sm" | "md";
  className?: string;
} & ({ href: string } | { submit: true; disabled?: boolean } | { onClick: () => void });

/**
 * Vintage tag button: elongated hexagonal tag with pointed ends, a dashed
 * stitch inner border and stars flanking the label — matches the D.C.O.C.
 * vintage seal aesthetic. Orange is reserved for the contact-form submit.
 */
export default function VintageButton(props: VintageButtonProps) {
  const { children, color = "blue", size = "md", className = "" } = props;
  const bg = COLORS[color];
  const pad = size === "sm" ? "px-7 py-2.5" : "px-10 py-4";

  const inner = (
    <>
      <svg
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <polygon
          points="10,5 90,5 95.5,22 90,39 10,39 4.5,22"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative font-heading text-sm font-bold uppercase tracking-[0.22em] text-white">
        <span aria-hidden="true">{"\u2605\u00A0\u00A0"}</span>
        {children}
        <span aria-hidden="true">{"\u00A0\u00A0\u2605"}</span>
      </span>
    </>
  );

  const cls = `relative inline-flex items-center justify-center ${pad} transition-transform hover:scale-[1.03] active:scale-[0.98] ${className}`;
  const style = { clipPath: CLIP, backgroundColor: bg };

  if ("submit" in props) {
    return (
      <button
        type="submit"
        disabled={props.disabled}
        className={`${cls} disabled:opacity-60 disabled:hover:scale-100`}
        style={style}
      >
        {inner}
      </button>
    );
  }
  if ("onClick" in props) {
    return (
      <button type="button" onClick={props.onClick} className={cls} style={style}>
        {inner}
      </button>
    );
  }
  return (
    <a href={props.href} className={cls} style={style}>
      {inner}
    </a>
  );
}
