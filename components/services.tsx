"use client"

import { Star } from "lucide-react"
import { ServiceCard } from "./service-card"

const services = [
  { title: "Idea Validation", tags: ["Market Research", "MVP Scope", "User Feedback"] },
  { title: "Rapid Development", tags: ["2-3 Week Timeline", "Modern Stack", "Scalable Architecture"] },
  { title: "User Acquisition", tags: ["Early Traction", "Growth Strategy", "Conversion Optimization"] },
  { title: "Investor Ready", tags: ["Pitch Deck Support", "Metrics Dashboard", "Demo Preparation"] },
]

export function Services() {
  return (
    <section className="bg-black min-h-screen py-20 md:py-32 relative">
      <div className="container mx-auto px-4 mb-12 md:mb-20 flex items-end justify-between gap-4">
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[12vw] leading-none text-white uppercase font-black">Services</h2>
        <Star className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 text-[#4a0dbc] animate-pulse hidden md:block flex-shrink-0" fill="currentColor" />
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <ServiceCard key={i} number={`0${i + 1}`} title={s.title} tags={s.tags} />
        ))}
      </div>
    </section>
  )
}
