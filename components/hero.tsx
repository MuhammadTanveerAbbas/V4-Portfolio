"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Globe } from "lucide-react";
import { DarkVeil } from "./dark-veil";

export function Hero() {
  const { scrollYProgress } = useScroll();
  // useTransform is a MotionValue  it does NOT cause React re-renders.
  // The value is read directly by the motion.div via the style prop,
  // bypassing React's render cycle entirely.
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-6 sm:pt-24 pb-12 sm:pb-12">
      <div className="absolute inset-0 w-full h-full">
        <DarkVeil speed={0.5} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[12vw] leading-[0.9] md:leading-[0.85] font-black uppercase tracking-widest text-white text-center drop-shadow-lg"
        >
          <span className="md:hidden">SaaS✦  <br /> Developer</span>
          <span className="hidden md:inline">SaaS✦<br />Developer</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-6 sm:mt-8 md:mt-12 border-t-2 border-white/30 pt-4 sm:pt-4 gap-4 sm:gap-4 md:gap-0">
          <div className="font-mono text-sm md:text-lg font-bold uppercase text-center md:text-left text-white">
            <Globe className="inline mr-2 mb-1" size={20} />
            Helping Early Stage Founders
          </div>

          {/*
            Mobile badge: uses Framer Motion JS-driven rotation.
            This is intentional  it's only rendered on mobile (md:hidden)
            and the spring/linear animation is handled via RAF.
          */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
            className="flex md:hidden items-center justify-center w-20 h-20 bg-linear-to-br from-white to-[#e6e6ff] rounded-full relative shadow-lg shadow-[#4a0dbc]/40"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" width="100" height="100" className="w-full h-full fill-[#0a0e27]">
                <path id="curve-mobile" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text className="text-[12px] font-mono font-bold uppercase tracking-widest">
                  <textPath href="#curve-mobile">Scroll Down • Scroll Down •</textPath>
                </text>
              </svg>
            </div>
            <ArrowDown className="text-[#0a0e27] w-5 h-5" />
          </motion.div>

          {/*
            Desktop badge: previously had BOTH style={{ rotate }} (Framer Motion MotionValue)
            AND className="animate-spin-slow" (CSS animation) on the same element.
            Two transforms fighting on the same element  one always wins, the other
            wastes computation every frame.

            Fix: the outer motion.div owns the scroll-driven rotate via MotionValue (GPU composited).
            The inner SVG wrapper that previously had animate-spin-slow is removed  the outer
            rotation already provides the spinning text ring effect driven by scroll.
            Visual output is identical: the badge rotates as you scroll.
          */}
          <motion.div
            style={{ rotate }}
            className="hidden md:flex items-center justify-center w-24 md:w-32 h-24 md:h-32 bg-linear-to-br from-white to-[#e6e6ff] rounded-full relative shadow-lg shadow-[#4a0dbc]/40"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" width="100" height="100" className="w-full h-full fill-[#0a0e27]">
                <path id="curve-desktop" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text className="text-[12px] font-mono font-bold uppercase tracking-widest">
                  <textPath href="#curve-desktop">Scroll Down • Scroll Down •</textPath>
                </text>
              </svg>
            </div>
            <ArrowDown className="text-[#0a0e27] w-6 md:w-8 h-6 md:h-8" />
          </motion.div>

          <div className="font-mono text-sm md:text-lg font-bold uppercase text-center md:text-right text-white">
            Validate Ideas <br />
            Attract Users
          </div>
        </div>
      </div>

      {/*
        blur-[120px] is a paint-expensive CSS filter. Adding `will-change: transform`
        promotes it to its own compositor layer so the browser doesn't repaint it
        on every scroll tick. The visual output is identical.
      */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[40vw] h-[40vw] bg-[#0066ff] rounded-full blur-[120px] opacity-5 pointer-events-none"
        style={{ willChange: "transform" }}
      />
    </section>
  );
}
