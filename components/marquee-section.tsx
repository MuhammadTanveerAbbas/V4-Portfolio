"use client";

import type { CSSProperties } from "react";
import { Marquee } from "./marquee";

const WORD_CLS = "font-serif text-[18vw] sm:text-[13vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter pr-[5vw]";
const GHOST_CLS = `${WORD_CLS} text-transparent`;
const GHOST_STYLE: CSSProperties = { WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" };

const Star = () => (
  <span
    className="font-serif text-[8vw] md:text-[5vw] text-[#4a0dbc] pr-[5vw] self-center leading-none"
    aria-hidden="true"
  >
    &#10022;
  </span>
);

const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center shrink-0 px-4 md:px-5 py-1.5 rounded-full border border-[#4a0dbc]/60 text-[#4a0dbc] font-mono text-[2.5vw] sm:text-xs md:text-sm uppercase tracking-widest mr-[5vw]">
    {label}
  </span>
);

// Row 1: outlined words, scrolling right.
const row1 = [
  <span key="tools" className={GHOST_CLS} style={GHOST_STYLE}>Internal tools</span>,
  <Star key="s1" />,
  <span key="portals" className={GHOST_CLS} style={GHOST_STYLE}>Customer portals</span>,
  <Star key="s2" />,
  <span key="automation" className={GHOST_CLS} style={GHOST_STYLE}>Workflow automation</span>,
  <Star key="s3" />,
  <span key="saas" className={GHOST_CLS} style={GHOST_STYLE}>SaaS products</span>,
  <Star key="s4" />,
];

// Row 2: solid words with service pills, scrolling right.
const row2 = [
  <span key="software" className={`${WORD_CLS} text-white`}>Business software</span>,
  <Pill key="p1" label="B2B" />,
  <span key="dashboards" className={`${WORD_CLS} text-white`}>Dashboards</span>,
  <Pill key="p2" label="Reporting" />,
  <span key="integrations" className={`${WORD_CLS} text-white`}>Integrations</span>,
  <Pill key="p3" label="Systems that talk" />,
  <span key="ai" className={`${WORD_CLS} text-white`}>AI features</span>,
  <Pill key="p4" label="Where useful" />,
];

export function MarqueeSection() {
  return (
    <section className="bg-black overflow-hidden py-4 md:py-8 flex flex-col gap-6 md:gap-10" aria-hidden="true">
      <div className="overflow-hidden">
        <Marquee direction="right" duration={55} className="items-center h-[18vw] sm:h-[13vw] md:h-[9vw]">
          {row1}
        </Marquee>
      </div>
      <div className="overflow-hidden">
        <Marquee direction="right" duration={50} className="items-center h-[18vw] sm:h-[13vw] md:h-[9vw]">
          {row2}
        </Marquee>
      </div>
    </section>
  );
}
