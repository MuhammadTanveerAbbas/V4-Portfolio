import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PROJECTS } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Software built by Muhammad Tanveer Abbas: business software, customer applications, workflow systems and AI assisted products, with the reasoning behind each build.",
  alternates: { canonical: absoluteUrl("/work") },
};

export default function WorkPage() {
  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
          Software
          <br />
          <span className="text-[#4a0dbc]">Built</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base text-white/70 mt-4 sm:mt-8 max-w-xl leading-relaxed">
          Real products and practical builds, created to solve realistic problems
          and to show how Muhammad approaches software development. Each
          page covers the problem, the decisions and what was left out.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden border-2 border-white/30 hover:border-[#4a0dbc] transition-colors"
            >
              <div className="aspect-video overflow-hidden bg-black flex items-center justify-center relative">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-end">
                <div className="p-3 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-xs text-[#4a0dbc] uppercase">
                    {project.category}
                  </span>
                  <h2 className="font-serif text-xl sm:text-3xl text-white uppercase tracking-tight mt-2">
                    {project.name}
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#4a0dbc] flex items-center justify-center shadow-lg shadow-[#4a0dbc]/50">
                    <ArrowUpRight className="text-white" size={20} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-white/5 border-t-2 border-white/30 group-hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-white/70" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase text-white/70 truncate">
                    {project.name}
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
            Have something to build?
          </h2>
          <p className="font-mono text-xs sm:text-sm md:text-base text-white/90 mt-4 max-w-xl leading-relaxed">
            Tell me about the problem you want solved. I will come back with a
            scope and a plan before any work starts.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors border-2 border-black shadow-lg shadow-[#4a0dbc]/40"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
