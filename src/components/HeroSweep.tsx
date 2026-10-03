/**
 * HeroSweep — playful background animation for the home hero.
 * The D.C.O.C. cleaner walks in, sweeps a pile of brand-blue trash
 * with his broom, and walks off. Loops forever. Pure CSS, no JS.
 */
export default function HeroSweep() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
    >
      <div className="relative mx-auto h-44 max-w-6xl sm:h-52">
        {/* blue trash pile */}
        <div className="sweep-trash absolute bottom-3 left-[8%] w-20 select-none sm:left-[10%] sm:w-24">
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
        <div className="sweep-puff absolute bottom-8 left-[10%] h-8 w-16 rounded-full bg-[#6b9bd2] blur-[3px] sm:left-[12%]" />
        {/* the cleaner with his broom */}
        <div className="sweep-cleaner absolute bottom-0 left-[26%] w-36 select-none sm:left-[20%] sm:w-44">
          <img
            src="/backgrounds/cleaner-home.webp"
            alt=""
            draggable={false}
            className="h-auto w-full"
          />
        </div>
      </div>
      <style>{`
        .sweep-cleaner {
          transform-origin: 50% 100%;
          animation: sweep-walk 10s ease-in-out infinite;
        }
        .sweep-trash {
          transform-origin: 50% 100%;
          animation: sweep-trash 10s ease-in-out infinite;
        }
        .sweep-puff {
          opacity: 0;
          animation: sweep-puff 10s ease-in-out infinite;
        }
        @keyframes sweep-walk {
          0%   { transform: translateX(260%) rotate(-8deg); }
          12%  { transform: translateX(0) rotate(-10deg); }
          20%  { transform: translateX(-18px) rotate(-15deg); }
          28%  { transform: translateX(4px) rotate(-6deg); }
          36%  { transform: translateX(-18px) rotate(-15deg); }
          44%  { transform: translateX(4px) rotate(-6deg); }
          52%  { transform: translateX(0) rotate(-10deg); }
          58%  { transform: translateY(-8px) rotate(-10deg); }
          64%  { transform: translateY(0) rotate(-10deg); }
          78%  { transform: translateX(260%) rotate(-8deg); }
          100% { transform: translateX(260%) rotate(-8deg); }
        }
        @keyframes sweep-trash {
          0%, 42%  { transform: translateX(0) scale(1); opacity: 1; }
          56%      { transform: translateX(-42px) scale(0.12); opacity: 0; }
          84%      { transform: translateX(-42px) scale(0.12); opacity: 0; }
          96%, 100%{ transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes sweep-puff {
          0%, 44%  { transform: scale(0.4); opacity: 0; }
          52%      { transform: scale(1.15); opacity: 0.55; }
          62%, 100%{ transform: scale(1.45); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sweep-cleaner, .sweep-trash, .sweep-puff { animation: none; }
          .sweep-puff { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
