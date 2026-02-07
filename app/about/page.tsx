import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Muhammad Tanveer Abbas | SaaS MVP Builder",
  description: "Learn about Muhammad Tanveer Abbas and how he helps early stage SaaS founders validate ideas and build MVPs in 2-3 weeks.",
  keywords: "Muhammad Tanveer Abbas, SaaS founder, MVP builder, startup consultant",
}

const stats = [
  { value: "50+", label: "MVPs Built" },
  { value: "2-3", label: "Week Timeline" },
  { value: "80%", label: "Success Rate" },
  { value: "100%", label: "Founder Focused" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
          About
          <br />
          <span className="text-[#4a0dbc]">Me</span>
        </h1>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-serif text-2xl md:text-4xl leading-tight">
              I help early stage SaaS founders validate ideas and build functional products that attract users and investors.
            </p>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-white/70">
              With expertise in modern web technologies and rapid development processes, I specialize in building SaaS MVPs that deliver real value. My focus is on helping founders avoid common pitfalls and create scalable products that convert users into paying customers.
            </p>
            <p className="font-mono text-white/70">
              I combine strategic thinking with proven development practices to deliver functional, market-ready products in 2-3 weeks. Every project is tailored to your specific market assumptions and growth goals.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-white/30 p-6 md:p-8">
              <span className="font-serif text-4xl md:text-6xl text-[#4a0dbc]">{stat.value}</span>
              <p className="font-mono text-xs uppercase mt-2 text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="bg-white text-[#0a0e27] p-8 md:p-16">
          <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Validate",
                description: "We start by understanding your market assumptions and defining clear success metrics.",
              },
              {
                title: "Build",
                description: "Using modern technologies, we rapidly develop a functional MVP that solves real problems.",
              },
              {
                title: "Launch",
                description: "We help you attract early users, gather feedback, and prepare for investor conversations.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="font-serif text-2xl text-[#4a0dbc] uppercase">{value.title}</h3>
                <p className="font-mono text-sm mt-4 opacity-70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-mono text-sm uppercase text-[#4a0dbc] mb-4">Frontend</h3>
            <p className="font-mono text-white/70">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
          </div>
          <div>
            <h3 className="font-mono text-sm uppercase text-[#4a0dbc] mb-4">Backend & Tools</h3>
            <p className="font-mono text-white/70">Node.js, PostgreSQL, Supabase, Stripe, Authentication</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
