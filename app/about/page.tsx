import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Muhammad Tanveer Abbas",
  description:
    "Learn about Muhammad Tanveer Abbas  SaaS developer, MVP builder, and technical partner for early-stage founders in USA, UK, and Europe.",
  alternates: { canonical: "https://muhammadtanveerabbas.vercel.app/about" },
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

      <section className="pt-20 sm:pt-32 pb-0 px-4 md:px-8">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter mb-8">
          About <span className="text-[#4a0dbc]">Me</span>
        </h1>
        <p className="font-serif text-lg sm:text-2xl md:text-4xl leading-tight max-w-3xl mb-6 sm:mb-8">
          I build SaaS MVPs to sharpen my craft and demonstrate how to validate ideas quickly with real, working products.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            I'm from Faisalabad, Punjab, Pakistan. I got into SaaS because I realized that the fastest way to learn full-stack development is by building real products under pressure. Every constraint teaches you something new. I've built 6 projects from scratch, each one pushing me to solve harder problems, master new technologies, and understand what users actually need. This hands-on approach has made me comfortable working across the entire stackfrom database design to frontend polish.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            Right now, my goal is to build SaaS MVPs for founders and startups to maximize my skillset and help validate ideas that could become real businesses. I want to work with early-stage founders who have a vision but need someone who can move fast, think strategically, and execute flawlessly. I don't just codeI think about your market, your users, your competition, and what actually matters for growth. I ask the right questions, challenge assumptions, and build only what's necessary to validate your core hypothesis. This is how I'll become the best at what I do, and how you'll get a product that resonates with your market.
          </p>
          <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">
            I combine strategic thinking with proven development practices to deliver functional, market-ready products in 2-3 weeks. Every project is tailored to your specific market assumptions and growth goals. I use modern tech stacks (Next.js, TypeScript, Tailwind, Supabase), focus on performance and user experience, and build with scalability in mind from day one. You get a product that works, scales, and is ready for real users. More importantly, you get a founder who understands your business and can help you navigate the next phasewhether that's raising capital, acquiring users, or iterating based on feedback.
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
        <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight mb-4 sm:mb-6">Technology Stack & Infrastructure</h2>
        <p className="font-mono text-xs sm:text-sm text-white/70 mb-8 sm:mb-12">Enterprise grade tools and frameworks for scalable applications.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Frontend & UI</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Next.js, TypeScript, Tailwind CSS, shadcn/ui</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Backend & Database</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Supabase, tRPC, Zod, Resend</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Payments & Analytics</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Stripe, PostHog, Sentry, Mixpanel</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Testing & Quality</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Playwright, Vitest, ESLint, Prettier</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">Deploy & DevOps</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Vercel, GitHub, Linear, CodeRabbit</p>
          </div>
          <div className="border-2 border-white/30 p-4 sm:p-8">
            <h3 className="font-mono text-xs uppercase text-[#4a0dbc] mb-3 sm:mb-4">AI Tool Workflow</h3>
            <p className="font-mono text-xs sm:text-sm text-white/70">Claude, OpenAI, Groq API, Cursor</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
