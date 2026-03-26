const steps = [
  {
    number: "01",
    title: "Validate",
    duration: "Days 1–3",
    desc: "We define your core assumption, map the market, and scope the exact MVP needed to test it. No bloat, no guessing.",
    items: ["Market research", "Competitor analysis", "MVP scope definition", "User flow mapping"],
  },
  {
    number: "02",
    title: "Build",
    duration: "Days 4–14",
    desc: "Full-stack development using Next.js, Supabase, and Stripe. You get daily updates and a staging link from day one.",
    items: ["Database + auth setup", "Core feature development", "Payment integration", "Daily progress updates"],
  },
  {
    number: "03",
    title: "Launch",
    duration: "Days 15–21",
    desc: "QA, deployment, analytics, and onboarding flow. You leave with a live product and a growth plan.",
    items: ["Testing & QA", "Production deployment", "Analytics setup", "User onboarding flow"],
  },
];

export function Process() {
  return (
    <section className="bg-black py-16 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">How I Work</p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-none">
            The Process
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-px md:bg-white/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`bg-black p-6 md:p-10 flex flex-col gap-5 group hover:bg-white/3 transition-colors duration-300 ${
                i < steps.length - 1 ? "border-b border-white/10 md:border-b-0" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#4a0dbc] uppercase tracking-widest">{step.duration}</span>
                <span className="font-serif text-4xl md:text-5xl font-black text-white/10 leading-none">{step.number}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-5xl font-black uppercase text-white leading-none group-hover:text-[#4a0dbc] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-mono text-sm text-white/50 leading-relaxed">{step.desc}</p>
              <ul className="flex flex-col gap-2 mt-auto pt-5 border-t border-white/10">
                {step.items.map((item) => (
                  <li key={item} className="font-mono text-xs text-white/40 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#4a0dbc] shrink-0" />
                    {item}
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
