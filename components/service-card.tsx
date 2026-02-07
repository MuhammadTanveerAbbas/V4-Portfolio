"use client"

import { ArrowUpRight } from "lucide-react"

interface ServiceCardProps {
  number: string
  title: string
  tags: string[]
}

export function ServiceCard({ number, title, tags }: ServiceCardProps) {
  return (
    <div className="group border-t border-white/20 py-8 md:py-12 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
        <div className="font-mono text-sm md:text-xl text-[#4a0dbc] flex-shrink-0">({number})</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-white mb-4 group-hover:translate-x-4 transition-transform duration-300 break-words">
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
        <div className="hidden md:flex md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45 flex-shrink-0">
          <ArrowUpRight className="w-16 md:w-20 h-16 md:h-20 text-[#4a0dbc]" />
        </div>
      </div>
    </div>
  )
}
