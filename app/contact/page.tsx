import { Contact } from "@/components/sections/Contact";
import ArrowButton from "@/components/ui/ArrowButton";
import SplitWords from "@/components/ui/SplitWords";

export default function ContactPage() {
  return (
    <main>
      <section className="container-main flex flex-col items-center justify-center py-24 text-center">
        <SplitWords
          text="Let's build the useful thing together"
          as="h1"
          className="max-w-4xl font-display text-5xl font-bold leading-[0.98] text-ink md:text-8xl"
        />
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-500">
          Share what you are trying to create with us.
        </p>
      </section>
      <Contact />
    </main>
  );
}
