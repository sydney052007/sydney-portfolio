import type { Metadata } from "next";
import InterestsExplorer from "@/components/InterestsExplorer";

export const metadata: Metadata = {
  title: "興趣 — 陳詠歆 / Sydney Chen",
};

export default function InterestsPage() {
  return (
    <section className="py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Off Duty
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
        興趣
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        這裡是我生活中的另一面，有許多我創作的痕跡。
      </p>

      <InterestsExplorer />
    </section>
  );
}
