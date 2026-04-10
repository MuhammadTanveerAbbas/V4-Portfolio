"use client";

import { Marquee } from "./marquee";

const WORD_CLS = "font-serif text-[18vw] sm:text-[13vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter pr-[5vw]";
const GHOST_CLS = `${WORD_CLS} text-transparent`;
const GHOST_STYLE = { WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" } as React.CSSProperties;

const Star = () => (
  <span className="font-serif text-[8vw] md:text-[5vw] text-[#4a0dbc] pr-[5vw] self-center leading-none">✦</span>
);

const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center shrink-0 px-4 md:px-5 py-1.5 rounded-full border border-[#4a0dbc]/60 text-[#4a0dbc] font-mono text-[2.5vw] sm:text-xs md:text-sm uppercase tracking-widest mr-[5vw] translate-y-0">
    {label}
  </span>
);

// Row 1  ghost outlined words, scrolls left
const row1 = [
  <span key="v" className={GHOST_CLS} style={GHOST_STYLE}>Validate</span>,
  <Star key="s1" />,
  <span key="b" className={GHOST_CLS} style={GHOST_STYLE}>Build</span>,
  <Star key="s2" />,
  <span key="l" className={GHOST_CLS} style={GHOST_STYLE}>Launch</span>,
  <Star key="s3" />,
  <span key="sc" className={GHOST_CLS} style={GHOST_STYLE}>Scale</span>,
  <Star key="s4" />,
];

// Row 2  solid white words + purple pills, scrolls right
const row2 = [
  <span key="mvp" className={`${WORD_CLS} text-white`}>MVP</span>,
  <Pill key="p1" label="SaaS Dev" />,
  <span key="fo" className={`${WORD_CLS} text-white`}>Founders</span>,
  <Pill key="p2" label="2–3 Weeks" />,
  <span key="tr" className={`${WORD_CLS} text-white`}>Traction</span>,
  <Pill key="p3" label="Next.js" />,
  <span key="inv" className={`${WORD_CLS} text-white`}>Investors</span>,
  <Pill key="p4" label="MVP Builder" />,
];

export function MarqueeSection() {
  return (
    <section className="bg-black overflow-hidden py-4 md:py-8 flex flex-col gap-6 md:gap-10">
      <div className="overflow-hidden">
        <Marquee direction="right" duration={55} className="items-center h-[18vw] sm:h-[13vw] md:h-[9vw]">{row1}</Marquee>
      </div>
      <div className="overflow-hidden">
        <Marquee direction="right" duration={50} className="items-center h-[18vw] sm:h-[13vw] md:h-[9vw]">{row2}</Marquee>
      </div>
    </section>
  );
}
