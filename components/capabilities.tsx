/**
 * What Muhammad builds, in one band. Intentionally not statistics: the answer
 * to "what do you actually make" sits above the fold.
 */
const capabilities = [
  {
    title: "Business software",
    detail: "Internal tools for the work a team does every day.",
  },
  {
    title: "Customer applications",
    detail: "Portals and products your customers log into.",
  },
  {
    title: "Workflow systems",
    detail: "Automation that replaces manual processes.",
  },
  {
    title: "SaaS products",
    detail: "Subscription products, built to be maintained.",
  },
];

export function Capabilities() {
  return (
    <section
      aria-label="What Muhammad builds"
      className="border-t border-b border-white/10 bg-black/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {capabilities.map((capability, i) => (
            <div
              key={capability.title}
              className={`py-6 md:py-8 px-4 flex flex-col items-center text-center ${
                i < capabilities.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <span className="font-serif text-lg md:text-2xl font-black text-[#4a0dbc] leading-none uppercase">
                {capability.title}
              </span>
              <span className="font-mono text-xs uppercase text-white/50 mt-2 tracking-widest">
                {capability.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
