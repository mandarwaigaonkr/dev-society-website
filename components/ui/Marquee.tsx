"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
};

export default function Marquee({ children, speed = 30, gap = 56 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {children}
      </div>
    );
  }

  return (
    <div
      className="group/marquee relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      }}
    >
      <div
        className="marquee-track flex w-max items-center group-hover/marquee:[animation-play-state:paused]"
        style={{ gap, "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
