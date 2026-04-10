import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeSection } from "@/components/marquee-section";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { StatsBar } from "@/components/stats-bar";
import { FeaturedWork } from "@/components/featured-work";
import { Process } from "@/components/process";
import { TechStack } from "@/components/tech-stack";
import { WhyMe } from "@/components/why-me";
import { Faq } from "@/components/faq";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-black selection:bg-black selection:text-[#0066ff] relative flex flex-col">
      <div className="relative z-10 flex flex-col grow">
        <Navbar />
        <Hero />
        <StatsBar />
        <MarqueeSection />
        <Services />
        <FeaturedWork />
        <Process />
        <TechStack />
        <WhyMe />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
