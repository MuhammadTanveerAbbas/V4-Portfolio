"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  direction?: number
  className?: string
}

export function Marquee({ text, direction = 1, className }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap py-4", className)}>
      <motion.div
        className="flex gap-4 md:gap-8"
        animate={{ x: direction === 1 ? [0, -1920] : [-1920, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 30 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-black uppercase leading-none tracking-tighter font-serif flex-shrink-0">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
