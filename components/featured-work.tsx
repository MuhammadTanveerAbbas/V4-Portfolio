import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

/**
 * The portfolio itself. Four products, driven entirely by the project source
 * of truth so this section can never list something the detail pages do not
 * know about.
 */
export function FeaturedWork() {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white leading-none">
            The
            <br />
            <span className="text-[#4a0dbc]">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden border border-white/10 hover:border-[#4a0dbc] transition-colors duration-300 bg-white/2"
            >
              <div className="aspect-video overflow-hidden bg-black/50">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[#4a0dbc] uppercase mb-1">{project.category}</p>
                  <h3 className="font-serif text-2xl md:text-3xl uppercase text-white font-bold">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-white/50 mt-2 leading-relaxed max-w-sm">
                    {project.summary}
                  </p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#4a0dbc] group-hover:border-[#4a0dbc] transition-colors duration-300">
                  <ArrowUpRight
                    size={16}
                    className="text-white/60 group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors duration-200"
          >
            View All Projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <p className="sr-only">Projects built by {siteConfig.name}.</p>
      </div>
    </section>
  );
}
