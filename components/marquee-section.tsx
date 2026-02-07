"use client"

import { Marquee } from "./marquee"

export function MarqueeSection() {
  return (
    <section className="bg-black text-[#4a0dbc] py-12 md:py-20 overflow-hidden -skew-y-2 origin-left">
      <Marquee text="VALIDATE • BUILD • LAUNCH • SCALE •" direction={1} className="opacity-80" />
      <Marquee text="MVP • FOUNDERS • TRACTION • INVESTORS •" direction={-1} className="text-white opacity-90" />
    </section>
  )
}
