"use client";

import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { DarkVeil } from "./dark-veil";
import { siteConfig } from "@/lib/site";

function ScrollBadge() {
  const { scrollYProgress } = useScroll();
  /*
    useTransform returns a MotionValue, which is read directly by the motion.div
    through the style prop and does not trigger React re-renders. The rotation
    is scroll driven, so it mirrors user input rather than animating on its own.
  */
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{ rotate }}
      aria-hidden="true"
      className="flex items-center justify-center w-20 md:w-32 h-20 md:h-32 bg-linear-to-br from-white to-[#e6e6ff] rounded-full relative shadow-lg shadow-[#4a0dbc]/40 shrink-0"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" width="100" height="100" className="w-full h-full fill-black">
          <path
            id="hero-scroll-curve"
            d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
            fill="transparent"
          />
          <text className="text-[12px] font-mono font-bold uppercase tracking-widest">
            <textPath href="#hero-scroll-curve">Scroll Down &bull; Scroll Down &bull;</textPath>
          </text>
        </svg>
      </div>
      <ArrowDown className="text-black w-5 md:w-8 h-5 md:h-8" />
    </motion.div>
  );
}

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-6 sm:pt-24 pb-12 sm:pb-12 bg-[#0a0e27]">
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <DarkVeil speed={0.5} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[12vw] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-widest text-white text-center drop-shadow-lg"
          >
            Software&#10022;
            <br />
            Developer
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-6 sm:mt-8 md:mt-12 border-t-2 border-white/30 pt-4 sm:pt-4 gap-4 sm:gap-4 md:gap-0">
            <div className="font-mono text-sm md:text-lg font-bold uppercase text-center md:text-left text-white">
              Building for B2B businesses
            </div>

            <ScrollBadge />

            <div className="font-mono text-sm md:text-lg font-bold uppercase text-center md:text-right text-white">
              Understand. Build. Ship.
            </div>
          </div>
        </div>

        {/*
          blur-[120px] is an expensive paint, so the layer is promoted once via
          will-change instead of being repainted on every scroll tick.
        */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[40vw] h-[40vw] bg-[#4a0dbc] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        />
      </section>
    </MotionConfig>
  );
}
