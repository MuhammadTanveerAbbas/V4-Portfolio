import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Tanveer Abbas is a software developer who builds practical business software and SaaS products for B2B companies: internal tools, customer applications, workflow systems and AI assisted products.",
  alternates: { canonical: absoluteUrl("/about") },
};

const whatIDo = [
  {
    title: "Understand the problem",
    detail: "How the work happens today, where it slows down, and what success looks like.",
  },
  {
    title: "Design the solution",
    detail: "What gets built, what gets left out, and the trade offs behind both.",
  },
  {
    title: "Build the software",
    detail: "Working software in visible stages, with updates in plain language.",
  },
  {
    title: "Get it into production",
    detail: "Launch, documentation, a handover, and fixes as issues surface.",
  },
];

const waysToWork = [
  {
    title: "A fixed scope project",
    detail: "A defined piece of software with a written scope, clear stages and a fixed price.",
  },
  {
    title: "Ongoing development",
    detail: "A product that keeps evolving after launch, planned and delivered in stages.",
  },
  {
    title: "Improvements to existing software",
    detail: "A review of what you already have, then stabilising it or extending it.",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20 sm:pt-32 pb-0 px-4 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8">
          About <span className="text-[#4a0dbc]">Me</span>
        </h1>
        <p className="font-serif text-lg sm:text-2xl md:text-4xl leading-tight max-w-3xl mb-6 sm:mb-8">
          {siteConfig.headline}
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            I am {siteConfig.name}, a {siteConfig.role.toLowerCase()} based in
            Pakistan, working with businesses wherever they are. I build business
            software and SaaS products: the internal tools a team runs on, the
            applications customers log into, and the workflow systems that replace
            manual processes.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            Most software does not fail because of the code. It fails because the
            problem was never properly understood, or because it was built once and
            never adapted. So every project starts with how the work actually
            happens today: what is slow, what breaks, and what people do by hand
            that a system should do. From there I design the solution, build it in
            visible stages, and take it to a production ready state with
            documentation and a proper handover.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            The projects in my work are real products. They exist to solve
            realistic problems and to show how I approach software: understanding
            the problem, making sensible trade offs, deciding what not to build,
            and shipping something that holds up in use. That is the same approach
            I bring to your project.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight mb-8 sm:mb-12">
          What that means for your business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {whatIDo.map((item) => (
            <div
              key={item.title}
              className="border-2 border-white/30 p-4 sm:p-8 hover:border-[#4a0dbc] transition-colors"
            >
              <h3 className="font-serif text-lg sm:text-2xl text-[#4a0dbc] uppercase mb-4">
                {item.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight mb-8 sm:mb-12">
          Ways to work together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {waysToWork.map((item) => (
            <div key={item.title} className="border-2 border-white/30 p-4 sm:p-8">
              <h3 className="font-serif text-lg sm:text-2xl uppercase mb-4">{item.title}</h3>
              <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-block mt-10 px-8 py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors shadow-lg shadow-[#4a0dbc]/40"
        >
          Start a conversation
        </Link>
      </section>

      <Footer />
    </main>
  );
}
