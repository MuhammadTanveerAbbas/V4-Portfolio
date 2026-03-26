import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "I ship in 2–3 weeks",
    desc: "Not months. Not sprints that drag on. You get a live, working product in 2–3 weeks — fast enough to validate before you run out of runway.",
  },
  {
    number: "02",
    title: "Full-stack, no handoffs",
    desc: "Design, frontend, backend, database, payments, deployment — I handle all of it. No agency overhead, no miscommunication between teams.",
  },
  {
    number: "03",
    title: "I think like a founder",
    desc: "I don't just execute tickets. I ask why, challenge assumptions, and build only what's needed to test your core hypothesis. Less waste, more signal.",
  },
  {
    number: "04",
    title: "Production-grade from day one",
    desc: "Auth, RLS, error tracking, analytics, CI/CD — every project is built like it's going to scale. Because it might.",
  },
];

const others = [
  { headline: "Too Slow", body: "Agencies charge $20k+ and take 3–6 months" },
  { headline: "Unreliable", body: "Freelancers disappear mid-project" },
  { headline: "Hit a Wall", body: "No-code tools break the moment you need real logic" },
  { headline: "Too Expensive", body: "Hiring in-house takes months and burns equity" },
  { headline: "No Strategy", body: "Most devs just execute tickets — no product thinking" },
];

export function WhyMe() {
  return (
    <section className="bg-black py-16 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">The Honest Answer</p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-none">
            Why Me
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-px lg:bg-white/10">
          {/* Left — reasons */}
          <div className="bg-black lg:p-10 flex flex-col">
            {reasons.map((r, i) => (
              <div
                key={r.number}
                className={`flex gap-4 md:gap-6 py-6 md:py-8 ${i < reasons.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span className="font-mono text-xs text-[#4a0dbc] shrink-0 pt-1">{r.number}</span>
                <div>
                  <h3 className="font-serif text-xl md:text-3xl font-bold uppercase text-white mb-2 leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-mono text-sm text-white/50 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — comparison + CTA */}
          <div className="bg-black lg:p-10 flex flex-col justify-between gap-8 md:gap-12 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
            <div>
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">The alternatives</p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {others.map((o) => (
                  <li key={o.headline} className="flex items-start gap-3 font-mono text-sm text-white/40">
                    <span className="text-red-500/60 shrink-0 mt-0.5">✗</span>
                    <span>
                      <span className="text-white/70 font-bold">{o.headline} — </span>
                      {o.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 p-5 md:p-8">
              <p className="font-serif text-2xl md:text-4xl font-black uppercase text-white leading-tight mb-5 md:mb-6">
                Ready to stop planning and start building?
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors duration-200 shadow-lg shadow-[#4a0dbc]/40"
              >
                Let's Talk →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
