import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    id: "repurpose-ai",
    title: "Repurpose AI",
    tag: "SaaS · 2025",
    image: "/projects/Repurpose AI.png",
    desc: "Transform one video transcript into six platform-ready content pieces automatically.",
  },
  {
    id: "kanbi-board",
    title: "Kanbi Board",
    tag: "SaaS · 2025",
    image: "/projects/Kanbi-Board.png",
    desc: "AI-powered task extraction with drag-and-drop Kanban and Stripe subscriptions.",
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white leading-none">
            Featured<br />
            <span className="text-[#4a0dbc]">Work</span>
          </h2>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 font-mono text-sm uppercase text-white/60 hover:text-white transition-colors group"
          >
            View All
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group relative overflow-hidden border border-white/10 hover:border-[#4a0dbc] transition-colors duration-300 bg-white/2"
            >
              <div className="aspect-video overflow-hidden bg-black/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ willChange: "transform" }}
                />
              </div>
              <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[#4a0dbc] uppercase mb-1">{project.tag}</p>
                  <h3 className="font-serif text-2xl md:text-3xl uppercase text-white font-bold">{project.title}</h3>
                  <p className="font-mono text-xs text-white/50 mt-2 leading-relaxed max-w-sm">{project.desc}</p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#4a0dbc] group-hover:border-[#4a0dbc] transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase text-white/60 hover:text-white transition-colors"
          >
            View All Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
