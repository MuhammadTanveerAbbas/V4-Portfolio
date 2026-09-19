const steps = [
  {
    number: "01",
    title: "Understand",
    desc: "I start with the business problem rather than the code. How the work happens today, who is affected, what success looks like, and the smallest version worth building.",
    items: [
      "A conversation about the problem",
      "How the work happens today",
      "Scope and priorities",
      "A written plan and fixed price",
    ],
  },
  {
    number: "02",
    title: "Build",
    desc: "The solution is designed and built in working increments, so progress is visible early and direction can change before it becomes expensive.",
    items: [
      "Solution design and structure",
      "Working software in increments",
      "Plain language updates as it goes",
      "A link you can open at any time",
    ],
  },
  {
    number: "03",
    title: "Ship and support",
    desc: "The software goes in front of real users, issues are fixed as they surface, and the work is documented so it can be maintained long after launch.",
    items: [
      "Launch and onboarding",
      "Fixes as issues surface",
      "Documentation and handover",
      "Improvements after launch",
    ],
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
                <span className="font-mono text-xs text-[#4a0dbc] uppercase tracking-widest">Step {step.number}</span>
                <span className="font-serif text-4xl md:text-5xl font-black text-white/10 leading-none" aria-hidden="true">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-5xl font-black uppercase text-white leading-none group-hover:text-[#4a0dbc] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-mono text-sm text-white/50 leading-relaxed">{step.desc}</p>
              <ul className="flex flex-col gap-2 mt-auto pt-5 border-t border-white/10">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs text-white/40 uppercase tracking-wide flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4a0dbc] shrink-0" aria-hidden="true" />
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
