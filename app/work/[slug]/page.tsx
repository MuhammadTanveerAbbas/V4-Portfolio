import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectJsonLd } from "@/components/project-jsonld";
import { getProject, PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/* The four project pages are generated once at build time. */
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

/*
  Only the four known slugs exist. Any other slug misses the param list and
  produces a real 404 response instead of a page that looks like one.
*/
export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const url = `${siteConfig.url}/work/${project.slug}`;

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      url,
      type: "article",
      images: [{
        url: project.image.src,
        width: project.image.width,
        height: project.image.height,
        alt: project.image.alt,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      images: [project.image.src],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  /* Unknown slugs are a real 404, not a page that looks like one. */
  if (!project) notFound();

  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />
      <ProjectJsonLd project={project} />

      <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 md:px-8">
        <Link
          href="/work"
          className="flex items-center gap-2 text-[#4a0dbc] hover:text-white transition-colors mb-6 sm:mb-8 w-fit"
        >
          <ArrowLeft size={20} aria-hidden="true" />
          Back to projects
        </Link>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
          {project.name}
        </h1>
        <p className="font-mono text-xs sm:text-sm text-white/70 mt-4 sm:mt-8 max-w-2xl leading-relaxed">
          {project.category}. {project.summary}
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          priority
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="w-full rounded-lg border-2 border-white/30 mb-12 sm:mb-16"
        />

        <div className="max-w-4xl space-y-12 sm:space-y-16">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">1. The problem</h2>
            <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">
              2. Why the usual approaches fall short
            </h2>
            <ul className="space-y-2">
              {project.whyExistingApproachesFallShort.map((item) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-red-400 mt-1 shrink-0" aria-hidden="true">&#10007;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">3. What was built</h2>
            <ul className="space-y-2">
              {project.whatWasBuilt.map((item) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 mt-1 shrink-0" aria-hidden="true">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">4. How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.howItWorks.map((step, index) => (
                <div key={step.title} className="border-2 border-white/30 p-3 sm:p-4">
                  <p className="font-mono text-xs uppercase text-[#4a0dbc] mb-2">
                    Step {index + 1}: {step.title}
                  </p>
                  <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">5. How it was built</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.phases.map((phase) => (
                <div key={phase.phase} className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                  <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">
                    {phase.phase}: {phase.title}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="font-mono text-xs sm:text-sm text-white/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">6. Decisions and trade offs</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.decisions.map((decision) => (
                <div key={decision.title} className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                  <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">{decision.title}</p>
                  <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed mt-1">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">7. What was left out</h2>
            <ul className="space-y-2">
              {project.leftOut.map((item) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-yellow-400 mt-1 shrink-0" aria-hidden="true">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">8. Lessons learned</h2>
            <ul className="space-y-2">
              {project.lessons.map((item) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-[#4a0dbc] mt-1 shrink-0" aria-hidden="true">&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">9. Tools and why</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.tools.map((tool) => (
                <div key={tool.name} className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                  <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">{tool.name}</p>
                  <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">{tool.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="border-2 border-white/30 p-4 sm:p-8 md:p-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#4a0dbc] text-white font-mono text-xs sm:text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors text-center"
            >
              Open the product
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-mono text-xs sm:text-sm uppercase hover:bg-black hover:text-white transition-colors border-2 border-white text-center"
            >
              Source code
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="bg-[#4a0dbc] p-6 sm:p-8 md:p-16 shadow-lg shadow-[#4a0dbc]/40">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white">
            Need something like this?
          </h2>
          <p className="font-mono text-xs sm:text-sm md:text-base text-white/90 mt-4 max-w-xl leading-relaxed">
            Tell me about your business problem. I will come back with a scope
            and a plan before any work starts.
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
