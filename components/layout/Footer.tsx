"use client";

import { motion } from "framer-motion";
import { ArrowRight, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { iconPop, reveal, socialChild, stagger } from "@/lib/animations";
import RollingText from "@/components/ui/RollingText";

export function Footer() {
  return (
    <motion.footer
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-zinc-100 bg-[#f6f6f7] px-[15px] py-20 text-ink md:px-[30px]"
    >
      <div className="container-main">
        <div className="grid gap-10 p-0 md:grid-cols-[1.2fr_0.9fr_1.3fr]">
          <div>
            <h2 className="font-display text-lg font-bold">Socials</h2>
            <div className="mt-7 flex max-w-[300px] gap-3 rounded-[28px] bg-white p-3 text-zinc-700">
              <div className="flex h-[178px] w-[136px] items-center justify-center rounded-2xl bg-zinc-100 p-4">
                <img
                  src="/devs-logo-static.svg"
                  alt="Developer Society logo"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="grid content-start gap-2 pt-1"
              >
                {[
                  ["LinkedIn", "https://linkedin.com", <Linkedin key="li" size={16} />],
                  ["GitHub", "https://github.com", <Github key="gh" size={16} />],
                  ["Instagram", "https://instagram.com", <Instagram key="ig" size={16} />],
                  ["Facebook", "https://facebook.com", <Facebook key="fb" size={16} />]
                ].map(([label, href, icon]) => (
                  <motion.a
                    key={String(label)}
                    href={String(href)}
                    target="_blank"
                    rel="noreferrer"
                    variants={socialChild}
                    className="group inline-flex min-h-9 items-center gap-2 rounded-pill border border-zinc-200 px-4 text-sm font-semibold transition hover:bg-accent hover:text-white"
                  >
                    {icon}
                    <RollingText>{String(label)}</RollingText>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">Links</h2>
            <div className="mt-7 grid max-w-[180px] gap-1 rounded-[24px] bg-white p-3 text-sm font-semibold text-zinc-500">
              {[
                ["All Projects", "/all-projects"],
                ["Contact", "/contact"],
                ["About", "/about"],
                ["404", "/404"]
              ].map(([item, href]) => (
                <a key={item} href={href} className="rounded-2xl px-4 py-3 transition hover:bg-zinc-100 hover:text-ink">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">Newsletter</h2>
            <p className="mt-7 max-w-[430px] text-lg leading-relaxed text-zinc-500">
              Subscribe to get early access to special offers, design discounts, and exclusive project updates.
            </p>
            <form className="mt-5 flex gap-4">
              <label className="sr-only" htmlFor="footer-email">Email</label>
              <input
                id="footer-email"
                type="email"
                placeholder="jane@brand.com"
                className="min-h-14 flex-1 rounded-2xl border border-zinc-200 bg-white px-5 text-sm text-ink outline-none transition focus:border-accent"
              />
              <button className="grid size-14 place-items-center rounded-pill bg-white text-accent transition hover:-translate-y-0.5" type="submit" aria-label="Subscribe">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 rounded-[60px] bg-white px-8 py-6 text-sm text-zinc-500 shadow-[0_1px_0_rgba(24,24,27,0.04)]">
          <a href="/legal/privacy" className="transition hover:text-ink">Privacy Policy</a>
          <a href="/legal/terms" className="transition hover:text-ink">Terms of Service</a>
          <span>© 2026 Developer Society, Christ University. Built for launch.</span>
        </div>
      </div>
    </motion.footer>
  );
}
