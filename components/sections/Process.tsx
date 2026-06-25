"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  ["01", "Requirements Analysis", "We gather and document all system requirements to clearly define the scope and goals."],
  ["02", "System Design", "We create the architecture and design the system based on the defined requirements."],
  ["03", "Implementation", "The design is translated into code, building the actual software components."],
  ["04", "Testing", "We rigorously test the developed software to ensure it meets requirements and is free of bugs."],
  ["05", "Deployment", "The final product is released to the production environment for users to access."],
  ["06", "Maintenance", "We provide ongoing support, fixing issues and adding enhancements as needed."]
];

export function Process() {
  return (
    <section className="section-pad">
      <div className="container-main grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <SectionHeader eyebrow="Process" title="How things get built together" className="lg:sticky lg:top-32 lg:self-start lg:text-left" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5">
          {steps.map(([num, title, description], index) => (
            <motion.article key={title} variants={reveal} className="rounded-[28px] p-8 md:p-10 bg-white">
              <span className="inline-flex min-h-11 items-center gap-4 rounded-pill px-6 font-display text-lg font-bold bg-accent text-white shadow-orange">
                {num}—
                {title}
              </span>
              <h3 className="sr-only">{title}</h3>
              <p className="mt-7 text-2xl leading-relaxed text-ink">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
