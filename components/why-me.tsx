import Link from "next/link";

/*
  Why someone should hand a business problem to Muhammad. Written for a
  non-technical decision maker, without comparisons to agencies, freelancers,
  no code tools or hiring.
*/
const reasons = [
  {
    number: "01",
    title: "The problem comes first",
    desc: "Before anything is built, I spend time understanding how your business runs and what actually needs to change. The goal is software that fits the way your team already works.",
  },
  {
    number: "02",
    title: "One person, end to end",
    desc: "Thinking through the product, designing the solution, building it and getting it live are all handled directly with the person writing the code. No handoffs and no account managers in between.",
  },
  {
    number: "03",
    title: "Built to be maintained",
    desc: "Readable code, sensible structure, documentation, and tests where mistakes would be expensive. Another developer can pick the project up later without a rewrite.",
  },
  {
    number: "04",
    title: "Clear communication",
    desc: "Updates in plain language, a working link you can open at any time, and honest conversations about trade offs and scope.",
  },
];

export function WhyMe() {
  return (
    <section className="bg-black py-16 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-20">
          <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">Working with me</p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-none">
            Why it works
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-px lg:bg-white/10">
          <div className="bg-black lg:p-10 flex flex-col">
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                className={`flex gap-4 md:gap-6 py-6 md:py-8 ${i < reasons.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span className="font-mono text-xs text-[#4a0dbc] shrink-0 pt-1" aria-hidden="true">
                  {reason.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-3xl font-bold uppercase text-white mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="font-mono text-sm text-white/50 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black lg:p-10 flex flex-col justify-between gap-8 md:gap-12 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-white/10 lg:border-t-0">
            <div>
              <p className="font-mono text-xs uppercase text-white/40 tracking-widest mb-5">
                What that means for your project
              </p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {[
                  "You understand what is being built and why, without translating engineering jargon.",
                  "You always know the current state, because you can open the software yourself.",
                  "You are never billed for hours you did not agree to.",
                  "You keep the code, the documentation and the ability to change it later.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-mono text-sm text-white/40">
                    <span className="text-[#4a0dbc] shrink-0 mt-0.5" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 p-5 md:p-8">
              <p className="font-serif text-2xl md:text-4xl font-black uppercase text-white leading-tight mb-5 md:mb-6">
                Have a problem worth solving?
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors duration-200 shadow-lg shadow-[#4a0dbc]/40"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
