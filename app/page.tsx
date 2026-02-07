import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeSection } from "@/components/marquee-section";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import { DarkVeil } from "@/components/dark-veil";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-black selection:bg-black selection:text-[#0066ff] relative flex flex-col">
      <div className="absolute inset-0 w-full h-full">
        <DarkVeil speed={0.5} />
      </div>
      <div className="relative z-10 flex flex-col grow">
        <Navbar />
        <Hero />
        <MarqueeSection />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
