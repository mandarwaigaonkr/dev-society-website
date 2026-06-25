"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type MediaItem = {
  src: string;
  alt: string;
  wide?: boolean;
};

const FULL_SPEED = 34;

export function HeroMediaMarquee({ items }: { items: MediaItem[] }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="mt-16 flex snap-x gap-5 overflow-x-auto pb-3 md:mt-20">
        {items.map((item) => (
          <HeroMediaCard key={item.src} item={item} />
        ))}
      </div>
    );
  }

  const track = [...items, ...items];

  return (
    <div className="group/marquee -mx-[30px] mt-16 overflow-hidden pb-3 md:mt-20 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className="marquee-track flex w-max gap-5 px-[30px] group-hover/marquee:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${FULL_SPEED}s` } as React.CSSProperties}
      >
        {track.map((item, index) => (
          <HeroMediaCard key={`${item.src}-${index}`} item={item} eager={index === 0} />
        ))}
      </div>
    </div>
  );
}

function HeroMediaCard({ item, eager = false }: { item: MediaItem; eager?: boolean }) {
  return (
    <div
      className={`group/card relative h-[260px] shrink-0 overflow-hidden rounded-[24px] bg-zinc-200 shadow-[0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-300 hover:-translate-y-1.5 md:h-[370px] [-webkit-mask-image:-webkit-radial-gradient(white,black)] ${item.wide ? "w-[280px] md:w-[360px]" : "w-[220px] md:w-[280px]"}`}
    >
      <div className="absolute inset-0 transition-transform duration-300 group-hover/card:scale-[1.04]">
        <img
          src={item.src}
          alt={item.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
