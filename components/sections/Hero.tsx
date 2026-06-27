"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import ArrowButton from "@/components/ui/ArrowButton";
import { HeroMediaMarquee } from "@/components/sections/HeroMediaMarquee";

const media = [
  { src: "/mockups/cu-nav.jpg", alt: "CU Nav App Mockup", wide: false },
  { src: "/mockups/cu-now.jpg", alt: "CU Now App Mockup", wide: false },
  { src: "/mockups/cu-nav.jpg", alt: "CU Nav App Mockup", wide: false },
  { src: "/mockups/cu-now.jpg", alt: "CU Now App Mockup", wide: false },
  { src: "/mockups/cu-nav.jpg", alt: "CU Nav App Mockup", wide: false }
];

export function Hero() {
  return (
    <section className="container-main pt-28 md:pt-32">
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid items-start gap-12 pt-4 lg:grid-cols-[auto_1fr] lg:gap-20">

          {/* Floating brand card — left */}
          <motion.div
            variants={reveal}
            className="flex w-fit flex-col items-center gap-5 rounded-[32px] bg-white p-6 shadow-[0_4px_48px_rgba(0,0,0,0.07)] md:p-8 mt-2"
          >
            <div className="grid size-[140px] place-items-center rounded-2xl bg-zinc-50 p-4 md:size-[180px]">
              <Image src="/devs-logo.svg" alt="Developer Society logo" width={180} height={180} className="h-full w-full object-contain" priority />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-lg font-bold text-ink md:text-xl">Dev<span className="text-[#A8872E]">·</span>Soc</span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">Ideas Into Impact</span>
            </div>
          </motion.div>

          {/* Title + buttons — right */}
          <div>
            <motion.h1 variants={reveal} className="font-display text-[clamp(4.5rem,8vw,9.5rem)] font-bold leading-[0.95] tracking-tight text-ink">
              Developer&apos;s Society
              <br />
              <span className="text-[clamp(2rem,4vw,4rem)] font-medium text-zinc-400">Christ University</span>
            </motion.h1>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap items-center gap-4">
              <ArrowButton href="/contact" label="Start a Project" />
              <ArrowButton href="/all-projects" label="See Projects" variant="ghost" />
            </motion.div>
          </div>

        </motion.div>

      <HeroMediaMarquee items={media} />
    </section>
  );
}
