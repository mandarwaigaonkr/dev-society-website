"use client";

import { Quote, Star } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: string;
  avatar: string;
};

const FULL_SPEED = 48;

export function TestimonialsMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    );
  }

  const track = [...testimonials, ...testimonials];

  return (
    <div className="group/marquee -mx-[30px] overflow-hidden px-[30px]">
      <div
        className="marquee-track flex w-max gap-5 group-hover/marquee:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${FULL_SPEED}s` } as React.CSSProperties}
      >
        {track.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="min-h-[320px] w-[280px] shrink-0 rounded-[28px] bg-white p-8 transition-transform duration-300 hover:-translate-y-1.5 sm:w-[370px]">
      <div className="flex items-start justify-between">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} portrait`}
          width={88}
          height={88}
          loading="lazy"
          decoding="async"
          className="rounded-xl"
        />
        <span className="inline-flex items-center gap-1 rounded-pill bg-zinc-50 px-3 py-2 text-xs font-semibold">
          <Star size={13} className="fill-accent text-accent" />
          {testimonial.rating}
        </span>
      </div>
      <Quote className="mt-6 fill-ink text-ink" size={32} />
      <p className="mt-8 text-xl leading-relaxed text-zinc-700">{testimonial.quote}</p>
      <div className="mt-8">
        <p className="font-bold text-ink">{testimonial.name}</p>
        <p className="text-sm text-zinc-500">{testimonial.role}</p>
      </div>
    </article>
  );
}
