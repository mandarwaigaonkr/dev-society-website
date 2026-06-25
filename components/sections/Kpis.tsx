"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import Counter from "@/components/ui/Counter";

const stats = [
  [98, "%", "Client Satisfaction Rate"],
  [2, "+", "Projects Completed"],
  [2, "x", "Client Growth"],
  [2, "+", "Years of Experience"]
];

export function Kpis() {
  return (
    <section className="py-12 md:py-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="container-main grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, suffix, label]) => (
          <motion.div key={label} variants={reveal} className="grid min-h-[220px] place-items-center rounded-[24px] bg-white p-8 text-center">
            <div>
              <strong className="font-display text-6xl font-bold text-accent md:text-7xl">
                <Counter to={Number(value)} suffix={String(suffix)} />
              </strong>
              <p className="mt-6 text-lg text-zinc-700">{label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
