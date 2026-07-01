import { Team } from "@/components/sections/Team";
import SplitWords from "@/components/ui/SplitWords";

export default function OurTeamPage() {
  return (
    <main>
      <section className="container-main flex min-h-[50vh] flex-col items-center justify-center py-[var(--pad-y)] text-center">
        <SplitWords
          text="The People Behind the Projects"
          as="h1"
          className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-normal text-ink md:text-8xl"
        />
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-500">
          We are a team of developers, analysts, and designers dedicated to pushing boundaries and building impactful solutions.
        </p>
      </section>
      <Team />
    </main>
  );
}
