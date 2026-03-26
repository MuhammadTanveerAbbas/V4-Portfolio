"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}

export function Marquee({ children, direction = "left", duration = 40, className }: MarqueeProps) {
  const anim = direction === "left" ? "marquee-rtl" : "marquee-ltr";
  const track = [...children, ...children]; // duplicate for seamless loop

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="flex shrink-0"
        style={{ animation: `${anim} ${duration}s linear infinite`, willChange: "transform" }}
      >
        {track.map((child, i) => (
          <div key={i} className="shrink-0">{child}</div>
        ))}
      </div>
    </div>
  );
}
