const stats = [
  { value: "6", label: "SaaS Products Shipped" },
  { value: "2–3", label: "Weeks to Launch" },
  { value: "100%", label: "Hands-On Execution" },
  { value: "USA / UK", label: "Clients Targeted" },
];

export function StatsBar() {
  return (
    <section className="border-t border-b border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 md:py-8 px-4 flex flex-col items-center text-center ${
                i === 1 ? "border-r-0 md:border-r border-white/10" :
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <span className="font-serif text-2xl md:text-5xl font-black text-[#4a0dbc] leading-none">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase text-white/50 mt-2 tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
