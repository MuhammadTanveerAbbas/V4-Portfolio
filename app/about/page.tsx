import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Muhammad Tanveer Abbas | SaaS MVP Builder",
  description: "Learn about Muhammad Tanveer Abbas and how he helps early stage SaaS founders validate ideas and build MVPs in 2-3 weeks.",
  keywords: "Muhammad Tanveer Abbas, SaaS founder, MVP builder, startup consultant",
}

const stats = [
  { value: "6", label: "Personal Projects" },
  { value: "2-3", label: "Week Timeline" },
  { value: "3+", label: "Tech Stacks" },
  { value: "100%", label: "Hands-On" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8">
          About
          <br />
          <span className="text-[#4a0dbc]">Me</span>
        </h1>
        <p className="font-serif text-lg sm:text-2xl md:text-4xl leading-tight max-w-3xl">
          I build SaaS MVPs to sharpen my craft and demonstrate how to validate ideas quickly with real, working products.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            I'm from Faisalabad, Punjab, Pakistan. I got into SaaS because I realized that the fastest way to learn full-stack development is by building real products under pressure. Every constraint teaches you something new.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            Right now, my goal is to build SaaS MVPs for founders and startups to maximize my skillset. I want to work with early-stage founders who have an idea but need someone who can validate it quickly, build it right, and help them get traction. This is how I'll become the best at what I do.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            I combine strategic thinking with proven development practices to deliver functional, market-ready products in 2-3 weeks. Every project is tailored to your specific market assumptions and growth goals.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-white/30 p-3 sm:p-6 md:p-8 hover:border-[#4a0dbc] transition-colors">
              <span className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#4a0dbc]">{stat.value}</span>
              <p className="font-mono text-xs uppercase mt-2 sm:mt-4 text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight mb-8 sm:mb-12">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Validate",
              description: "I start by understanding your market assumptions and defining clear success metrics.",
            },
            {
              title: "Build",
              description: "Using modern technologies, I rapidly develop a functional MVP that solves real problems.",
            },
            {
              title: "Launch",
              description: "I help you attract early users, gather feedback, and prepare for investor conversations.",
            },
          ].map((approach) => (
            <div key={approach.title} className="border-2 border-white/30 p-4 sm:p-8 hover:border-[#4a0dbc] transition-colors">
              <h3 className="font-serif text-lg sm:text-2xl text-[#4a0dbc] uppercase mb-4">{approach.title}</h3>
              <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight mb-8 sm:mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-2xl">
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Frontend</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Backend & Tools</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Node.js, PostgreSQL, Supabase, Stripe, Authentication</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
