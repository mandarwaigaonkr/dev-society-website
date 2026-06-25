"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";
import ArrowButton from "@/components/ui/ArrowButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="section-pad pt-4">
      <div className="container-main">
        <SectionHeader
          eyebrow="Projects"
          title="Designed, Built & Deployed"
          subtitle="Selected projects that reflect my approach to design, development, and execution."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.slug}
              variants={reveal}
              href={`/project-details/${project.slug}`}
              className="group relative h-[430px] overflow-hidden rounded-[28px] bg-zinc-200 transition duration-300 hover:-translate-y-2 hover:scale-[1.01] md:h-[590px] [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
            >
              <Image src={project.cover} alt={`${project.title} project mockup`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-[28px] transition duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between">
                <span className="inline-flex min-h-12 items-center gap-5 rounded-pill bg-white px-6 text-sm font-bold">
                  {project.title}
                  <span>/</span>
                  {project.year}
                </span>
                <span className="grid size-12 place-items-center rounded-pill bg-white text-accent transition group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </div>
              <span className="absolute bottom-24 left-8 translate-y-4 rounded-pill bg-black px-4 py-2 text-xs font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                View project →
              </span>
              <span className="absolute right-8 top-8 font-display text-4xl font-bold text-white/70 transition group-hover:-translate-y-1">{String(index + 1).padStart(2, "0")}</span>
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <ArrowButton href="/all-projects" label="View All Projects" variant="ghost" />
        </div>
      </div>
    </section>
  );
}
