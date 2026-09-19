"use client";

import { memo, useCallback, useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "What kind of software do you build?",
    a: "Business software: internal tools for a team, customer facing applications, workflow systems that replace manual processes, and SaaS products. Most of it is web based, so it runs in a browser on any device.",
  },
  {
    q: "How do we start?",
    a: "Send a message describing the problem you want solved. I will reply with a few questions, then we have a short call. After that you get a written scope with stages and a fixed price before any work begins.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A focused first version is usually a matter of weeks rather than months, and you get a realistic plan with stages before we start. If something would take longer than it is worth, I will say so.",
  },
  {
    q: "I am not technical. Does that matter?",
    a: "No. Most of this work starts with a business problem rather than a technical specification. Technical decisions are explained in plain language, and you will always know what is being built and why.",
  },
  {
    q: "I only have an idea. Can you help with the product thinking too?",
    a: "Yes. Working out what to build first, what to leave out and what success looks like is part of the job. You do not need to arrive with a specification.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Full ownership of the codebase, the repository and everything produced during the project. Nothing is retained and nothing is locked to a proprietary platform.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. An NDA can be signed before any detailed discussion of your business.",
  },
  {
    q: "Can you improve or take over existing software?",
    a: "Yes. That starts with a review of what exists, a short written summary of its state, and a plan to stabilise or extend it. If the honest answer is that a rebuild would be cheaper than patching it, you will hear that.",
  },
  {
    q: "What happens after launch?",
    a: "The software is handed over with documentation. Fixes and improvements can continue either as a monthly arrangement or as one off pieces of work, whichever fits how you prefer to operate.",
  },
  {
    q: "What technologies do you use?",
    a: "Whatever fits the problem, usually a modern web stack: TypeScript, React, PostgreSQL, and cloud hosting with continuous deployment. The project pages show the stack behind each product and the reason it was chosen.",
  },
];

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

/*
  Each item is memoised so opening one question does not re-render the others.
  The button carries the expanded state for assistive technology.
*/
const FaqItem = memo(function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start justify-between gap-4 py-5 md:py-7 text-left group"
      >
        <span className="font-serif text-base md:text-xl font-bold uppercase text-white group-hover:text-[#4a0dbc] transition-colors duration-200 leading-snug">
          {faq.q}
        </span>
        <span className="shrink-0 mt-0.5 text-[#4a0dbc]" aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div
        id={panelId}
        hidden={!isOpen}
        className="pb-5 md:pb-7 pr-6 md:pr-10"
      >
        <p className="font-mono text-sm text-white/55 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
});

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="bg-black py-16 md:py-32 border-t border-white/10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20 text-center">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">Got Questions</p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-none">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={handleToggle}
            />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
