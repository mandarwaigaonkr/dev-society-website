"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/animations";
import Marquee from "@/components/ui/Marquee";

const logos = [
  "ASCII",
  "CSA",
  "CAPS",
  "CASH",
  "CHOIR",
  "SWO",
  "Student council",
  "Sports department",
  "IEEE"
];

export function Brands() {
  return (
    <section aria-label="Clients & collaborators" className="pb-24">
      <div className="container-main">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="overflow-hidden rounded-[80px] bg-white py-20">
          <Marquee speed={28} gap={64}>
            {logos.map((logo) => (
              <span key={logo} className="font-display text-2xl font-bold text-zinc-600 opacity-75 transition hover:opacity-100">
                {logo}
              </span>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
