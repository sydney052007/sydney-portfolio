import type { Metadata } from "next";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "作品集 — 陳詠歆 / Sydney Chen",
};

// Lays out cards in source order (no CSS grid-auto-flow: dense, which fills
// gaps by pulling later cards up and breaks the 01/02/03 reading order).
// A compact (no livePreview) card only takes half width if the very next
// card is compact too, so it can pair with it without leaving a gap.
function layoutProjects(items: Project[]) {
  const layout: { project: Project; index: number; wide: boolean }[] = [];
  let i = 0;
  while (i < items.length) {
    const project = items[i];
    const next = items[i + 1];
    if (!project.livePreview && next && !next.livePreview) {
      layout.push({ project, index: i, wide: false });
      layout.push({ project: next, index: i + 1, wide: false });
      i += 2;
    } else {
      layout.push({ project, index: i, wide: true });
      i += 1;
    }
  }
  return layout;
}

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Selected Work
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
        作品集
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        五個主要全端專案，涵蓋交易平台、資料分析與生成式 AI、語音導覽、企業內部系統與行動應用。
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {layoutProjects(projects).map(({ project, index, wide }) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            wide={wide}
          />
        ))}
      </div>
    </section>
  );
}
