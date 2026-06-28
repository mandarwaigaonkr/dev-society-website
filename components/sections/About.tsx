"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const roles = [
  ["First Year Inauguration", "2026"],
  ["First Year Orientation", "2026"],
  ["More Events", "Coming Soon"]
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-main">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-3xl text-center">
          <Badge>About us</Badge>
          <h2 className="mt-5 font-display text-5xl font-bold leading-[1] tracking-normal md:text-7xl">
            Our Mission, Vision,
            <br />& Legacy
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto mt-12 grid max-w-[940px] gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              What we do
            </div>
            <p className="text-2xl leading-relaxed text-zinc-800">
              We empower students to explore technology, build impactful projects, and grow as developers.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              Our Community
            </div>
            <p className="text-2xl leading-relaxed text-zinc-800">
              Based at Christ University, we are a thriving community of passionate coders, designers, and innovators building solutions for the future.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              Our Approach
            </div>
            <p className="text-2xl leading-relaxed text-zinc-800">
              We believe in hands-on learning and collaboration. Through hackathons, workshops, and open-source projects, we bridge the gap between theory and practice.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              Key Events
            </div>
            <div className="grid gap-0">
              {roles.map(([role, year]) => (
                <div key={role} className="flex items-center justify-between border-b border-zinc-100 py-3 last:border-none">
                  <span className="text-xl font-medium text-ink md:text-2xl">{role}</span>
                  <span className="font-display text-xl font-bold text-zinc-600 md:text-2xl">{year}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
