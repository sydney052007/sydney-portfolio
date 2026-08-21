import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import ExperienceItem from "@/components/ExperienceItem";

export const metadata: Metadata = {
  title: "更多經歷 — 陳詠歆 / Sydney Chen",
};

export default function ExperiencesPage() {
  return (
    <section className="py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Beyond Engineering
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        更多經歷
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        四段自主學習與跨領域經歷，橫跨空間科技、生態設計與生成藝術，與前面的全端專案性質不同。
      </p>

      <div className="relative mt-16">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-accent/25 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-14">
          {experiences.map((item, index) => (
            <ExperienceItem
              key={item.title}
              item={item}
              index={index}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
