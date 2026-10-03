import VintageButton from "./VintageButton";

type PillCTAProps = {
  label: string;
  href: string;
};

/**
 * Signature CTA: a vintage tag button. Used across hero and section CTAs.
 */
export default function PillCTA({ label, href }: PillCTAProps) {
  return <VintageButton href={href}>{label}</VintageButton>;
}
