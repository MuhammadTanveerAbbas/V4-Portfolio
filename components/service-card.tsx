"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { memo } from "react"

interface ServiceCardProps {
  number: string
  title: string
  tags: string[]
}

// serviceMap is static — defined outside the component so it's never recreated.
const serviceMap: Record<string, string> = {
  "Idea Validation": "validation",
  "Rapid Development": "development",
  "User Acquisition": "acquisition",
  "Investor Ready": "investor",
}

// memo prevents re-renders when the parent Services component re-renders,
// since these props never change at runtime.
export const ServiceCard = memo(function ServiceCard({ number, title, tags }: ServiceCardProps) {
  return (
    <Link href={`/contact?service=${serviceMap[title] || "general"}`}>
      <div className="group border-t border-white/20 py-8 md:py-12 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
          <div className="font-mono text-sm md:text-xl text-[#4a0dbc] shrink-0">({number})</div>
          <div className="flex-1 min-w-0">
            {/*
              Original had style={{ willChange: "transform" }} statically on every h3.
              This permanently allocated a compositor layer for each card even when idle.
              Fix: removed the static inline style. The CSS transition-transform class
              already signals to the browser that a transform will happen on hover,
              which is sufficient for the browser to promote the layer at the right time.
              The translate-x-4 hover animation is GPU-composited via CSS — no change needed.
            */}
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-white mb-4 group-hover:translate-x-4 transition-transform duration-300 wrap-break-word">
              {title}
            </h3>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 md:px-3 py-1 border border-white/30 rounded-full text-white/60 font-mono text-xs md:text-sm uppercase whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45 shrink-0">
            <ArrowUpRight className="w-16 md:w-20 h-16 md:h-20 text-[#4a0dbc]" />
          </div>
        </div>
      </div>
    </Link>
  )
})
