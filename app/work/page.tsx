import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | SaaS MVP Projects | Muhammad Tanveer Abbas",
  description:
    "View case studies of SaaS MVPs built in 2-3 weeks. Real products, real traction, real results.",
  keywords:
    "SaaS portfolio, MVP case studies, startup projects, product development",
};

const projects = [
  {
    id: 1,
    title: "Kanbi Board",
    category: "SaaS",
    year: "2024",
    image: "/projects/Kanbi-Board.webp",
    description: "Visual project management with kanban workflows",
  },
  {
    id: 2,
    title: "Clario Hub",
    category: "SaaS",
    year: "2024",
    image: "/projects/Clario-Hub.webp",
    description: "Unified data hub for streamlined business operations",
  },
  {
    id: 3,
    title: "Subsight Tracker",
    category: "SaaS",
    year: "2024",
    image: "/projects/Subsight-Tracker.webp",
    description: "Real-time subscription analytics and insights",
  },
  {
    id: 4,
    title: "Reckoner Cal",
    category: "SaaS",
    year: "2024",
    image: "/projects/Reckoner-Cal.webp",
    description: "Smart scheduling and calendar management",
  },
  {
    id: 5,
    title: "Founder Pitch",
    category: "SaaS",
    year: "2024",
    image: "/projects/Founder-Pitch.webp",
    description: "Investor-ready pitch deck creation tool",
  },
  {
    id: 6,
    title: "Cortexreach Mail",
    category: "SaaS",
    year: "2024",
    image: "/projects/Cortexreach-Mail.webp",
    description: "AI-powered email marketing automation platform",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
          SaaS MVP
          <br />
          <span className="text-[#4a0dbc]">Projects</span>
        </h1>
        <p className="font-mono text-white/70 mt-8 max-w-xl">
          Case studies of SaaS MVPs built in 2-3 weeks. Real products that
          attracted users and impressed investors.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-xs text-[#4a0dbc] uppercase">
                    {project.category} — {project.year}
                  </span>
                  <h3 className="font-serif text-3xl text-white uppercase tracking-tight mt-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-white/70 mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#4a0dbc] flex items-center justify-center shadow-lg shadow-[#4a0dbc]/50">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white/5 border-t-2 border-white/30 group-hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm uppercase text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm uppercase text-white/70">
                    {project.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="bg-[#4a0dbc] p-8 md:p-16 shadow-lg shadow-[#4a0dbc]/40">
          <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight text-white">
            Your MVP Next?
          </h2>
          <p className="font-mono text-white/90 mt-4 max-w-xl">
            Let's build your SaaS MVP in 2-3 weeks and validate your idea with
            real users.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-black text-white font-mono uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors border-2 border-black shadow-lg shadow-[#4a0dbc]/40"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
