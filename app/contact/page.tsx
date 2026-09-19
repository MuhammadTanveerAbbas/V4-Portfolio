import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Muhammad Tanveer Abbas about the software your business needs. Fixed price projects, a written scope before work begins, and replies within one working day.",
  alternates: { canonical: absoluteUrl("/contact") },
};

function FormFallback() {
  return (
    <div className="px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8 animate-pulse" aria-hidden="true">
          <div className="h-4 w-24 bg-white/10 rounded" />
          <div className="h-12 w-full bg-white/10 rounded" />
          <div className="h-12 w-full bg-white/10 rounded" />
          <div className="h-32 w-full bg-white/10 rounded" />
        </div>
        <div className="space-y-8 animate-pulse" aria-hidden="true">
          <div className="h-4 w-32 bg-white/10 rounded" />
          <div className="h-40 w-full bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
          Let&apos;s
          <br />
          <span className="text-[#4a0dbc]">Talk</span>
        </h1>
        <p className="font-mono text-white/70 mt-8 max-w-xl leading-relaxed">
          Have a problem worth solving? Describe it below. I will come back with
          questions, a written scope and a fixed price before any work starts.
        </p>
      </section>

      <Suspense fallback={<FormFallback />}>
        <ContactForm />
      </Suspense>

      <Footer />
    </main>
  );
}
