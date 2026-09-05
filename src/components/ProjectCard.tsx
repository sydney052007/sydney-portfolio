import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  const featured = Boolean(project.livePreview);
  const number = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background md:col-span-2 md:flex-row">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`前往 ${project.name}`}
          className="relative aspect-[16/10] w-full shrink-0 md:aspect-auto md:w-1/2"
        >
          <div className="absolute inset-3 overflow-hidden rounded-xl border border-accent/20 shadow-[0_1px_2px_rgba(28,26,23,0.06),0_8px_20px_-8px_rgba(28,26,23,0.15)]">
            {/* Live, always-up-to-date preview of the deployed demo, shrunk down
                (250% size scaled to 40%) so more of the page is visible than a
                1:1 iframe would show. The iframe itself stays non-interactive
                (pointer-events-none) so clicks fall through to the surrounding
                <a>, which opens the real site — same destination as "Demo" below. */}
            <div className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4]">
              <iframe
                src={project.demo}
                title={`${project.name} 即時預覽`}
                tabIndex={-1}
                aria-hidden="true"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </a>

        <div className="flex flex-1 flex-col p-6 md:w-1/2">
          <div className="flex items-start justify-between gap-3">
            <span className="font-serif text-xs text-accent">{number}</span>
            {project.statusLabel && (
              <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted">
                {project.statusLabel}
              </span>
            )}
          </div>

          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">
            {project.name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-5 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
            >
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`flex flex-col border-t border-dashed border-border pt-5 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-serif text-xs text-muted">{number}</span>
        {project.statusLabel && (
          <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted">
            {project.statusLabel}
          </span>
        )}
      </div>

      <h3 className="mt-2 font-serif text-base font-semibold leading-snug">
        {project.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/75">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-5 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
