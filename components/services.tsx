import Link from "next/link";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <section className="bg-black py-20 md:py-32 relative">
      <div className="container mx-auto px-4 mb-12 md:mb-20">
        <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-3">What I Build</p>
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-none text-white uppercase font-black">
          Services
        </h2>
      </div>

      <div className="flex flex-col">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/contact?service=${service.slug}`}
            className="group border-t border-white/20 py-8 md:py-12 hover:bg-white/5 transition-colors duration-500"
          >
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
              <div className="font-mono text-sm md:text-xl text-[#4a0dbc] shrink-0">({service.number})</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-white mb-4 group-hover:translate-x-4 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-white/50 leading-relaxed max-w-2xl">
                  {service.summary}
                </p>
                <div className="flex gap-2 md:gap-4 flex-wrap mt-4">
                  {service.deliverables.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-3 py-1 border border-white/30 rounded-full text-white/60 font-mono text-xs md:text-sm uppercase whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="hidden md:flex md:self-center font-mono text-xs uppercase text-white/40 group-hover:text-[#4a0dbc] transition-colors shrink-0"
                aria-hidden="true"
              >
                Discuss this &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
