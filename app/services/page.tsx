import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | SaaS MVP Development | Muhammad Tanveer Abbas",
  description: "SaaS MVP development services: idea validation, rapid development, user acquisition, and investor preparation. Build your MVP in 2-3 weeks.",
  keywords: "SaaS MVP services, MVP development, startup development, product validation, rapid development",
}

const services = [
  {
    number: "01",
    title: "Idea Validation",
    description:
      "We start by validating your core assumptions. Through market research, competitive analysis, and user interviews, we define the MVP scope that matters most.",
    deliverables: ["Market Research", "User Interviews", "Competitive Analysis", "MVP Scope Definition"],
  },
  {
    number: "02",
    title: "Rapid Development",
    description:
      "Using modern technologies and proven development processes, we build functional, scalable MVPs in 2-3 weeks. Speed without sacrificing quality.",
    deliverables: ["Full Stack Development", "Database Design", "API Development", "Deployment"],
  },
  {
    number: "03",
    title: "User Acquisition",
    description:
      "We help you attract early users through strategic positioning, growth tactics, and conversion optimization. Real traction matters to investors.",
    deliverables: ["Growth Strategy", "Landing Page", "User Onboarding", "Analytics Setup"],
  },
  {
    number: "04",
    title: "Investor Preparation",
    description:
      "Get your product and metrics ready for investor conversations. We help you build compelling demos and prepare your pitch materials.",
    deliverables: ["Metrics Dashboard", "Demo Preparation", "Pitch Support", "Documentation"],
  },
]

const process = [
  {
    phase: "Week 1",
    title: "Discovery & Planning",
    items: ["Define MVP scope", "Technical architecture", "User flows", "Design system"],
  },
  {
    phase: "Week 2",
    title: "Development",
    items: ["Backend development", "Frontend implementation", "Database setup", "Integration"],
  },
  {
    phase: "Week 3",
    title: "Launch & Optimize",
    items: ["Testing & QA", "Deployment", "User onboarding", "Analytics setup"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
          SaaS MVP
          <br />
          <span className="text-[#4a0dbc]">Services</span>
        </h1>
        <p className="font-mono text-white/70 mt-8 max-w-xl">
          End-to-end SaaS MVP development designed to validate your ideas, attract users, and showcase traction to investors.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="border-t-2 border-white/30">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-b-2 border-white/30 py-12 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="font-mono text-[#4a0dbc] text-sm">{service.number}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight">{service.title}</h2>
                    <ArrowRight
                      className="hidden md:block transform group-hover:translate-x-2 transition-transform"
                      size={32}
                    />
                  </div>
                  <p className="font-mono text-sm mt-6 max-w-2xl text-white/70">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-1 border border-white/30 rounded-full uppercase text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-12">The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((p) => (
            <div key={p.phase} className="border-2 border-white/30 p-8">
              <span className="font-mono text-[#4a0dbc] text-sm uppercase">{p.phase}</span>
              <h3 className="font-serif text-2xl uppercase mt-4 mb-6">{p.title}</h3>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-white/70 flex items-start">
                    <span className="text-[#4a0dbc] mr-3">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="bg-[#4a0dbc] p-8 md:p-16 shadow-lg shadow-[#4a0dbc]/40">
          <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight text-white">Ready to build?</h2>
          <p className="font-mono text-white/90 mt-4 max-w-xl">
            Let&apos;s discuss your idea and create a plan to validate it with a functional MVP.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-black text-white font-mono uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors border-2 border-black shadow-lg shadow-[#4a0dbc]/40"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
