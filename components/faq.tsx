"use client";

import { useState, useCallback, memo } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it actually take to build an MVP?",
    a: "2–3 weeks for a focused MVP. Week 1 is discovery and architecture, week 2 is core development, week 3 is QA, deployment, and onboarding. Scope creep is the only thing that extends this — which is why we lock scope before writing a single line of code.",
  },
  {
    q: "What does it cost?",
    a: "Projects typically start at $1,500 depending on scope and complexity. After our first call I'll send a fixed-price proposal — no hourly billing, no surprise invoices. You know the number before we start.",
  },
  {
    q: "What if I only have an idea and no technical background?",
    a: "That's the ideal starting point. I'll help you define what to build, what to cut, and what actually needs to exist for your first users. You don't need to know how to code — you need to know the problem you're solving.",
  },
  {
    q: "Do you do design too or just development?",
    a: "Both. I handle UI/UX design using Figma and implement it in code. The design is functional and clean — not award-winning agency work, but production-ready and user-tested patterns that convert.",
  },
  {
    q: "Will I own the code?",
    a: "100%. You get full ownership of the codebase, the repository, and all assets. I don't retain any rights. Once delivered, it's entirely yours to modify, hand off, or open-source.",
  },
  {
    q: "What tech stack will you use?",
    a: "Next.js 15, TypeScript, Tailwind CSS, Supabase (Postgres + Auth), Stripe for payments, and Vercel for deployment. This stack is fast to build, cheap to run, and easy to hand off to any developer later.",
  },
  {
    q: "Can you add features after launch?",
    a: "Yes. Most clients come back for a second phase after validating with real users. I offer ongoing development at a fixed monthly retainer or per-feature pricing — whatever fits your stage.",
  },
  {
    q: "What if the MVP doesn't get traction?",
    a: "That's valuable data, not failure. A good MVP is designed to give you a clear answer — yes or no — as cheaply as possible. If it doesn't work, you've saved months and tens of thousands of dollars finding out early.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. I sign an NDA before any detailed discussion of your idea. Your concept, business logic, and any proprietary information stays confidential.",
  },
  {
    q: "How do I get started?",
    a: "Hit the contact page, fill in a few details about your idea, and I'll reply within 24 hours to schedule a free 30-minute scoping call. No commitment, no pitch — just a conversation about what you're building.",
  },
];

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

/*
  Original: all 10 FAQ items lived inside Faq() and re-rendered together whenever
  `open` state changed — because the entire list was in one component.
  Every click re-rendered all 10 items even though only 1 changed.

  Fix: extract each item into a memoized FaqItem component. React.memo does a
  shallow prop comparison — only the item whose `isOpen` prop actually changed
  will re-render. The other 9 items are skipped entirely.
*/
const FaqItem = memo(function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-t border-white/10">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-start justify-between gap-4 py-5 md:py-7 text-left group"
      >
        <span className="font-serif text-base md:text-xl font-bold uppercase text-white group-hover:text-[#4a0dbc] transition-colors duration-200 leading-snug">
          {faq.q}
        </span>
        <span className="shrink-0 mt-0.5 text-[#4a0dbc]">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 md:pb-7 pr-6 md:pr-10">
          <p className="font-mono text-sm text-white/55 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
});

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  // useCallback ensures the toggle function reference is stable across renders,
  // so memo'd FaqItem children don't re-render due to a new function reference.
  const handleToggle = useCallback((index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="bg-black py-16 md:py-32 border-t border-white/10">
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
              key={i}
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
