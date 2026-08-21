import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium leading-snug">{project.name}</h3>
        {project.statusLabel && (
          <span className="shrink-0 rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted">
            {project.statusLabel}
          </span>
        )}
      </div>

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
          className="font-medium underline underline-offset-4 hover:text-muted"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-muted"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
