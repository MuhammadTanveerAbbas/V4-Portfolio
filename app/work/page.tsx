import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Projects",
  description:
    "Explore SaaS products and MVPs built by Muhammad Tanveer Abbas for early-stage founders. Real projects, shipped in 2–3 weeks.",
  alternates: { canonical: "https://muhammadtanveerabbas.vercel.app/work" },
};

const projects = [
  {
    id: "kanbi-board",
    title: "Kanbi Board",
    category: "SaaS",
    year: "2025",
    image: "/projects/Kanbi-Board.png",
    description: "Visual project management with kanban workflows",
  },
  {
    id: "clario-hub",
    title: "Clario Hub",
    category: "SaaS",
    year: "2025",
    image: "/projects/Clario-Hub.png",
    description: "Unified data hub for streamlined business operations",
  },
  {
    id: "subsight-tracker",
    title: "Subsight Tracker",
    category: "SaaS",
    year: "2025",
    image: "/projects/Subsight-Tracker.png",
    description: "Real-time subscription analytics and insights",
  },
  {
    id: "repurpose-ai",
    title: "Repurpose AI",
    category: "SaaS",
    year: "2025",
    image: "/projects/Repurpose AI.png",
    description: "Transform one video transcript into six platform-ready content pieces automatically",
  },
  {
    id: "keyping",
    title: "KeyPing",
    category: "SaaS",
    year: "2025",
    image: "/projects/KeyPing.png",
    description: "Validate API keys across 10+ providers in seconds with health scores and rate limits",
  },
  {
    id: "crivox",
    title: "Crivox",
    category: "SaaS",
    year: "2025",
    image: "/projects/Crivox.png",
    description: "AI-powered comment generator for authentic, platform-aware social media engagement",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
          SaaS MVP
          <br />
          <span className="text-[#4a0dbc]">Projects</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base text-white/70 mt-4 sm:mt-8 max-w-xl">
          Personal SaaS projects built to sharpen my craft  each one a real, working product.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <Link
              href={`/work/${project.id}`}
              key={project.id}
              className="group relative overflow-hidden border-2 border-white/30 hover:border-[#4a0dbc] transition-colors"
            >
              <div className="aspect-video overflow-hidden bg-black flex items-center justify-center relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-end">
                <div className="p-3 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-xs text-[#4a0dbc] uppercase">
                    {project.category}  {project.year}
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl text-white uppercase tracking-tight mt-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-white/70 mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#4a0dbc] flex items-center justify-center shadow-lg shadow-[#4a0dbc]/50">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-white/5 border-t-2 border-white/30 group-hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase text-white/70 truncate">
                    {project.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="bg-[#4a0dbc] p-6 sm:p-8 md:p-16 shadow-lg shadow-[#4a0dbc]/40">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white">
            Your MVP Next?
          </h2>
          <p className="font-mono text-xs sm:text-sm md:text-base text-white/90 mt-4 max-w-xl">
            Let's build your SaaS MVP in 2-3 weeks and validate your idea with real users.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors border-2 border-black shadow-lg shadow-[#4a0dbc]/40"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
