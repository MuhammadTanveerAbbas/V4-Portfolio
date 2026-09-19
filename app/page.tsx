import { Capabilities } from "@/components/capabilities";
import { Faq } from "@/components/faq";
import { FeaturedWork } from "@/components/featured-work";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MarqueeSection } from "@/components/marquee-section";
import { Navbar } from "@/components/navbar";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { WhyMe } from "@/components/why-me";

/*
  Home tells one story in order: who Muhammad is, what he builds, why the work
  matters, examples of the work, how projects run, why the process is
  trustworthy, answers to common questions, then contact.
*/
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#4a0dbc] selection:text-white relative flex flex-col">
      <div className="relative z-10 flex flex-col grow">
        <Navbar />
        <main id="main" className="flex flex-col grow">
          <Hero />
          <Capabilities />
          <MarqueeSection />
          <Services />
          <FeaturedWork />
          <Process />
          <WhyMe />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
}
