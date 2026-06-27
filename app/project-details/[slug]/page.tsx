import Image from "next/image";
import { notFound } from "next/navigation";
import ArrowButton from "@/components/ui/ArrowButton";
import SplitWords from "@/components/ui/SplitWords";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <main>
      <section className="container-main py-[var(--pad-y)]">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.45fr]">
          <div>
            <p className="mb-5 rounded-pill bg-white px-5 py-2 text-sm font-bold text-accent w-fit">{project.category}</p>
            <SplitWords
              text={project.title}
              as="h1"
              className="font-display text-6xl font-bold leading-none text-ink md:text-8xl"
            />
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-zinc-500">{project.summary}</p>
          </div>
          <dl className="grid gap-4 rounded-[28px] bg-white p-7 text-sm">
            {[
              ["Client", project.client],
              ["Role", project.role],
              ["Year", project.year]
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-5 border-b border-zinc-100 pb-4 last:border-none last:pb-0">
                <dt className="text-zinc-400">{label}</dt>
                <dd className="font-bold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-14 h-[520px] overflow-hidden rounded-[34px] bg-transparent">
          <Image src={project.cover} alt={`${project.title} case study cover`} fill sizes="100vw" className="object-contain" priority />
        </div>
      </section>

      <section className="container-main grid gap-5 pb-[var(--pad-y)] md:grid-cols-3">
        {[
          ["Problem", project.problem],
          ["Approach", project.approach],
          ["Outcome", project.outcome]
        ].map(([title, copy]) => (
          <article key={title} className="rounded-[28px] bg-white p-8">
            <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-500">{copy}</p>
          </article>
        ))}
      </section>

      <nav className="container-main flex flex-wrap items-center justify-between gap-4 pb-[var(--pad-y)]">
        <ArrowButton href="/all-projects" label="Back to all projects" variant="ghost" />
        <div className="flex flex-wrap gap-3">
          {previous ? <ArrowButton href={`/project-details/${previous.slug}`} label={`Previous: ${previous.title}`} variant="ghost" /> : null}
          {next ? <ArrowButton href={`/project-details/${next.slug}`} label={`Next: ${next.title}`} /> : null}
        </div>
      </nav>
    </main>
  );
}
