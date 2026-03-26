const stack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 15", note: "App Router, server components, edge-ready" },
      { name: "TypeScript", note: "Strict mode, zero implicit any" },
      { name: "Tailwind CSS", note: "Utility-first, no CSS bloat" },
      { name: "shadcn/ui", note: "Copy-paste components, fully owned" },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Supabase", note: "Postgres + RLS + Auth + Storage" },
      { name: "tRPC", note: "End-to-end type-safe APIs" },
      { name: "Zod", note: "Runtime schema validation" },
      { name: "Resend", note: "Transactional email delivery" },
    ],
  },
  {
    category: "Payments & AI",
    items: [
      { name: "Stripe", note: "Subscriptions, webhooks, billing portal" },
      { name: "Groq", note: "800 tokens/s — fastest inference available" },
      { name: "Gemini", note: "Fallback AI with high accuracy" },
      { name: "OpenAI", note: "GPT-4 for complex reasoning tasks" },
    ],
  },
  {
    category: "Infra & Tooling",
    items: [
      { name: "Vercel", note: "Zero-config deploys, edge network" },
      { name: "PostHog", note: "Product analytics, session replay" },
      { name: "Sentry", note: "Error tracking, performance monitoring" },
      { name: "Playwright", note: "End-to-end testing, CI-ready" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-black py-16 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">What I Build With</p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-none">
            Tech Stack
          </h2>
        </div>

        {/* 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stack.map((col, i) => (
            <div key={col.category} className="bg-black p-5 md:p-10">
              <p className="font-mono text-[10px] md:text-xs uppercase text-[#4a0dbc] tracking-widest mb-5 md:mb-8">{col.category}</p>
              <ul className="flex flex-col gap-4 md:gap-6">
                {col.items.map((item) => (
                  <li key={item.name} className="group">
                    <p className="font-serif text-base md:text-2xl font-bold uppercase text-white group-hover:text-[#4a0dbc] transition-colors duration-200 leading-none mb-1">
                      {item.name}
                    </p>
                    <p className="font-mono text-[10px] md:text-xs text-white/35 leading-relaxed">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
