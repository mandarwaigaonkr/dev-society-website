"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqItem } from "@/components/ui/FaqItem";

const faqs = [
  ["What is Developer Society?", "We are a student-run community at Christ University focused on building real-world projects, learning new technologies, and collaborating on innovative software solutions."],
  ["Who can join the society?", "We periodically recruit students who demonstrate exceptional technical aptitude, problem-solving skills, and a commitment to innovation and engineering excellence."],
  ["What kind of projects do you build?", "We build a wide range of projects, from university tools and web applications to open-source software and UI/UX design prototypes."],
  ["How can I collaborate with you?", "You can reach out to us during our regular meetings, participate in our hackathons, or contact our core team to pitch an idea for collaboration. You can also get in touch with us anytime via email, and we'll be happy to discuss potential opportunities."],
  ["Do I need prior coding experience?", "Basic coding knowledge is recommended. While prior project experience is not mandatory, familiarity with programming fundamentals and a genuine interest in technology will help you make the most of our technical initiatives."]
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad">
      <div className="container-main">
        <SectionHeader eyebrow="FAQ" title="Before you ask" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className="mx-auto mt-14 max-w-[820px]">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <motion.div key={question} variants={reveal}>
                <FaqItem
                  question={question}
                  answer={answer}
                  isOpen={active}
                  onToggle={() => setOpen(active ? null : index)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
