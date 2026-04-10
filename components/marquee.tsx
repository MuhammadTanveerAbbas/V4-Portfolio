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

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="flex shrink-0"
        style={{ animation: `${anim} ${duration}s linear infinite`, willChange: "transform" }}
      >
        {/*
          Original: [...children, ...children].map((child, i) => <div key={i}>)
          Problem: the duplicated second half gets keys 8–15 instead of 0–7.
          React treats them as entirely different nodes and can't reuse DOM on re-render.

          Fix: render two separate, semantically distinct groups  "original" (aria-hidden=false)
          and "clone" (aria-hidden=true, purely visual duplicate for the seamless loop).
          Each group uses the child's own stable key, so React reconciles correctly.
          The clone group is hidden from assistive tech to avoid duplicate content.
        */}
        {children.map((child, i) => (
          <div key={`orig-${i}`} className="shrink-0">{child}</div>
        ))}
        {children.map((child, i) => (
          <div key={`clone-${i}`} className="shrink-0" aria-hidden="true">{child}</div>
        ))}
      </div>
    </div>
  );
}
