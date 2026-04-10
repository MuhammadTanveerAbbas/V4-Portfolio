import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact  Hire a SaaS Developer",
  description:
    "Get in touch with Muhammad Tanveer Abbas to discuss your SaaS idea, MVP scope, or development project. Fast response guaranteed.",
  alternates: { canonical: "https://muhammadtanveerabbas.vercel.app/contact" },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
          Let&apos;s
          <br />
          <span className="text-[#4a0dbc]">Build</span>
        </h1>
        <p className="font-mono text-white/70 mt-8 max-w-xl">
          Have a SaaS idea you want to validate? Let's discuss your project and create a plan to build your MVP.
        </p>
      </section>

      <ContactForm />

      <Footer />
    </main>
  )
}
