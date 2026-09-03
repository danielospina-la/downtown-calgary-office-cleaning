type SkylineProps = {
  className?: string;
  strokeColor?: string;
};

/**
 * Thin geometric line-drawing of the Downtown Calgary skyline.
 * Used as a recurring structural motif (header divider, hero backdrop, footer).
 * Deliberately abstract — not a literal photo, just building silhouettes.
 */
export default function Skyline({
  className = "",
  strokeColor = "currentColor",
}: SkylineProps) {
  return (
    <svg
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke={strokeColor} strokeWidth="1.5">
        {/* baseline */}
        <line x1="0" y1="139" x2="1200" y2="139" />

        {/* buildings, left to right */}
        <rect x="20" y="90" width="40" height="49" />
        <rect x="70" y="60" width="30" height="79" />
        <rect x="112" y="100" width="26" height="39" />
        <rect x="150" y="45" width="34" height="94" />
        <line x1="167" y1="20" x2="167" y2="45" />
        <rect x="196" y="75" width="28" height="64" />
        <rect x="236" y="30" width="38" height="109" />
        <rect x="248" y="15" width="14" height="15" />
        <rect x="286" y="95" width="24" height="44" />
        <rect x="322" y="65" width="32" height="74" />
        <rect x="366" y="20" width="30" height="119" />
        <line x1="381" y1="4" x2="381" y2="20" />
        <rect x="408" y="85" width="26" height="54" />
        <rect x="446" y="50" width="36" height="89" />
        <rect x="494" y="105" width="22" height="34" />
        <rect x="528" y="70" width="30" height="69" />
        <rect x="570" y="10" width="40" height="129" />
        <line x1="590" y1="-6" x2="590" y2="10" />
        <rect x="622" y="55" width="28" height="84" />
        <rect x="662" y="90" width="24" height="49" />
        <rect x="698" y="35" width="34" height="104" />
        <rect x="744" y="75" width="30" height="64" />
        <rect x="786" y="25" width="32" height="114" />
        <line x1="802" y1="8" x2="802" y2="25" />
        <rect x="830" y="95" width="26" height="44" />
        <rect x="868" y="60" width="30" height="79" />
        <rect x="910" y="40" width="36" height="99" />
        <rect x="958" y="88" width="24" height="51" />
        <rect x="994" y="65" width="28" height="74" />
        <rect x="1034" y="100" width="22" height="39" />
        <rect x="1068" y="55" width="30" height="84" />
        <rect x="1110" y="85" width="26" height="54" />
        <rect x="1148" y="70" width="28" height="69" />
      </g>
    </svg>
  );
}
