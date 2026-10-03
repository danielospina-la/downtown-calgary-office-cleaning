/**
 * HeroSweep — playful SVG background animation for the home hero.
 * A fully-drawn D.C.O.C. cleaner (head, torso, swinging arms, walking
 * legs, broom) walks in, sweeps a pile of brand-blue trash, and walks
 * off. Loops forever. Pure CSS, no JS.
 */
export default function HeroSweep() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
    >
      <div className="relative h-56 sm:h-64">
        <div className="absolute bottom-0 left-[2%] h-full w-[min(88vw,560px)]">
          {/* blue trash pile */}
          <div className="sw-trash absolute bottom-[6%] left-[30%] w-[24%] select-none">
            <svg viewBox="0 0 120 72" fill="none" className="h-auto w-full">
              <ellipse cx="60" cy="62" rx="48" ry="9" fill="#d9e8f8" />
              <polygon points="30,58 44,34 62,44 52,60" fill="#1e5aa8" />
              <polygon points="55,60 70,36 88,46 76,62" fill="#2f6dc2" />
              <polygon points="78,58 90,40 104,50 96,62" fill="#6b9bd2" />
              <circle cx="38" cy="52" r="7" fill="#1e5aa8" />
              <circle cx="94" cy="56" r="5" fill="#2f6dc2" />
              <polygon points="48,62 58,48 68,62" fill="#123c6e" />
            </svg>
          </div>
          {/* dust puff when the trash vanishes */}
          <div className="sw-puff absolute bottom-[26%] left-[32%] aspect-[2/1] w-[15%] rounded-full bg-[#6b9bd2] blur-[3px]" />
          {/* the cleaner */}
          <div className="absolute bottom-0 left-[36%] w-[38%] select-none">
            <svg viewBox="-50 0 300 300" fill="none" className="h-auto w-full">
              <g className="sw-body">
                <ellipse cx="112" cy="276" rx="54" ry="10" fill="#123c6e" opacity="0.14" />
                {/* back arm */}
                <g className="sw-arm-b">
                  <rect x="121" y="104" width="18" height="52" rx="9" fill="#1c4e8a" />
                  <circle cx="130" cy="160" r="9" fill="#2f6dc2" />
                </g>
                {/* back leg */}
                <g className="sw-leg-b">
                  <rect x="111" y="162" width="18" height="92" rx="9" fill="#1c4e8a" />
                  <rect x="103" y="248" width="32" height="15" rx="7.5" fill="#0d2a4f" />
                </g>
                {/* torso */}
                <g>
                  <rect x="84" y="94" width="54" height="68" rx="16" fill="#1e5aa8" />
                  <polygon points="100,94 110,108 120,94" fill="#d9e8f8" />
                  <circle cx="110" cy="122" r="2.6" fill="#d9e8f8" />
                  <circle cx="110" cy="134" r="2.6" fill="#d9e8f8" />
                  <rect x="120" y="120" width="12" height="10" rx="2" fill="#123c6e" opacity="0.6" />
                  <rect x="102" y="84" width="16" height="12" fill="#2f6dc2" />
                  <rect x="84" y="154" width="54" height="10" fill="#123c6e" />
                  <rect x="106" y="154" width="8" height="10" fill="#d9e8f8" />
                </g>
                {/* front leg */}
                <g className="sw-leg-f">
                  <rect x="91" y="162" width="18" height="92" rx="9" fill="#123c6e" />
                  <rect x="83" y="248" width="32" height="15" rx="7.5" fill="#0d2a4f" />
                </g>
                {/* head */}
                <g className="sw-head">
                  <circle cx="138" cy="60" r="6" fill="#2f6dc2" />
                  <circle cx="110" cy="58" r="30" fill="#2f6dc2" />
                  <path d="M80,58 A30,32 0 0 1 140,58 Z" fill="#123c6e" />
                  <rect x="56" y="54" width="28" height="9" rx="4.5" fill="#123c6e" />
                  <circle cx="110" cy="27" r="4.5" fill="#123c6e" />
                  <circle cx="97" cy="64" r="6.5" fill="#ffffff" />
                  <circle cx="111" cy="62" r="6.5" fill="#ffffff" />
                  <circle cx="95" cy="64" r="3" fill="#123c6e" />
                  <circle cx="109" cy="62" r="3" fill="#123c6e" />
                  <path
                    d="M95,76 Q105,84 117,78"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
                {/* front arm + broom */}
                <g className="sw-arm-f">
                  <rect x="81" y="104" width="18" height="58" rx="9" fill="#1e5aa8" />
                  <rect x="81" y="154" width="18" height="9" rx="3" fill="#d9e8f8" />
                  <g transform="rotate(22 90 170)">
                    <rect x="85.5" y="170" width="9" height="84" rx="4.5" fill="#123c6e" />
                    <rect x="73" y="249" width="34" height="9" rx="3" fill="#123c6e" />
                    <polygon points="74,258 106,258 99,280 81,280" fill="#6b9bd2" />
                    <line x1="82" y1="262" x2="82" y2="278" stroke="#123c6e" strokeWidth="2" />
                    <line x1="90" y1="262" x2="90" y2="278" stroke="#123c6e" strokeWidth="2" />
                    <line x1="98" y1="262" x2="98" y2="278" stroke="#123c6e" strokeWidth="2" />
                  </g>
                  <circle cx="90" cy="170" r="10" fill="#2f6dc2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <style>{`
        .sw-body, .sw-leg-f, .sw-leg-b, .sw-arm-f, .sw-arm-b, .sw-head { transform-box: view-box; }
        .sw-body { animation: swBody 12s ease-in-out infinite; }
        .sw-leg-f { transform-origin: 100px 164px; animation: swLegF 12s ease-in-out infinite; }
        .sw-leg-b { transform-origin: 120px 164px; animation: swLegB 12s ease-in-out infinite; }
        .sw-arm-f { transform-origin: 90px 106px; animation: swArmF 12s ease-in-out infinite; }
        .sw-arm-b { transform-origin: 130px 106px; animation: swArmB 12s ease-in-out infinite; }
        .sw-head { transform-origin: 110px 92px; animation: swHead 12s ease-in-out infinite; }
        .sw-trash { transform-origin: 50% 100%; animation: swTrash 12s ease-in-out infinite; }
        .sw-puff { opacity: 0; animation: swPuff 12s ease-in-out infinite; }
        @keyframes swBody {
          0% { transform: translateX(300%); }
          9% { transform: translateX(0); }
          16% { transform: translateX(-10px); }
          24% { transform: translateX(4px); }
          32% { transform: translateX(-10px); }
          40% { transform: translateX(4px); }
          48% { transform: translateX(0); }
          52% { transform: translate(0, -12px); }
          56% { transform: translate(0, 0); }
          64% { transform: translateX(-320%); }
          100% { transform: translateX(-320%); }
        }
        @keyframes swLegF {
          0% { transform: rotate(0deg); }
          2% { transform: rotate(22deg); }
          4% { transform: rotate(-22deg); }
          6% { transform: rotate(22deg); }
          8% { transform: rotate(0deg); }
          18% { transform: rotate(7deg); }
          30% { transform: rotate(-7deg); }
          42% { transform: rotate(7deg); }
          52% { transform: rotate(0deg); }
          60% { transform: rotate(-22deg); }
          62% { transform: rotate(22deg); }
          64% { transform: rotate(-22deg); }
          66% { transform: rotate(22deg); }
          68%, 100% { transform: rotate(0deg); }
        }
        @keyframes swLegB {
          0% { transform: rotate(0deg); }
          2% { transform: rotate(-22deg); }
          4% { transform: rotate(22deg); }
          6% { transform: rotate(-22deg); }
          8% { transform: rotate(0deg); }
          18% { transform: rotate(-7deg); }
          30% { transform: rotate(7deg); }
          42% { transform: rotate(-7deg); }
          52% { transform: rotate(0deg); }
          60% { transform: rotate(22deg); }
          62% { transform: rotate(-22deg); }
          64% { transform: rotate(22deg); }
          66% { transform: rotate(-22deg); }
          68%, 100% { transform: rotate(0deg); }
        }
        @keyframes swArmF {
          0%, 8% { transform: rotate(0deg); }
          16% { transform: rotate(28deg); }
          24% { transform: rotate(2deg); }
          32% { transform: rotate(28deg); }
          40% { transform: rotate(2deg); }
          48%, 100% { transform: rotate(0deg); }
        }
        @keyframes swArmB {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes swHead {
          0%, 8% { transform: rotate(0deg); }
          16% { transform: rotate(-7deg); }
          32% { transform: rotate(5deg); }
          48%, 100% { transform: rotate(0deg); }
        }
        @keyframes swTrash {
          0%, 36% { transform: scale(1); opacity: 1; }
          48% { transform: translateX(-30px) scale(0.1); opacity: 0; }
          82% { transform: translateX(-30px) scale(0.1); opacity: 0; }
          94%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes swPuff {
          0%, 38% { transform: scale(0.4); opacity: 0; }
          46% { transform: scale(1.2); opacity: 0.5; }
          56%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sw-body, .sw-leg-f, .sw-leg-b, .sw-arm-f, .sw-arm-b, .sw-head, .sw-trash { animation: none; }
          .sw-puff { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
