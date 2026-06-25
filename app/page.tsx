import dynamic from "next/dynamic";
import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

const Kpis = dynamic(() => import("@/components/sections/Kpis").then((m) => ({ default: m.Kpis })));
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Process = dynamic(() => import("@/components/sections/Process").then((m) => ({ default: m.Process })));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })));
const Faq = dynamic(() => import("@/components/sections/Faq").then((m) => ({ default: m.Faq })));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Brands />
      <Projects />
      <Kpis />
      <Testimonials />
      <Process />
      <Services />
      <Faq />
      <Contact />
    </main>
  );
}
