import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "作品集 — 陳詠歆 / Sydney Chen",
};

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Selected Work
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        作品集
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        五個主要全端專案，涵蓋交易平台、資料分析與生成式 AI、語音導覽、企業內部系統與行動應用。
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:[grid-auto-flow:dense]">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
