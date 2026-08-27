"use client";

import { useState } from "react";
import Image from "next/image";
import { paintingPractice } from "@/data/paintingPractice";

export default function PaintingPractice() {
  const [activeId, setActiveId] = useState(paintingPractice[0].id);
  const set = paintingPractice.find((p) => p.id === activeId)!;

  return (
    <div>
      <div className="flex items-baseline gap-2.5">
        <span className="font-serif text-sm italic text-accent">
          色鉛筆練習
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <p className="mt-2 text-sm text-muted">Small Practice</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {paintingPractice.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            aria-pressed={activeId === p.id}
            className={`border-b-2 pb-1 text-sm transition-colors ${
              activeId === p.id
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-accent"
            }`}
          >
            {p.labelZh} <span className="text-xs">{p.labelEn}</span>
          </button>
        ))}
      </div>

      <div
        key={set.id}
        className="page-fade-in mt-6 grid grid-cols-3 items-start gap-3 sm:grid-cols-4 md:grid-cols-5"
      >
        {set.files.map((f) => (
          <Image
            key={f.file}
            src={`/images/interests/painting/practice/${set.id}/${f.file}`}
            alt={`${set.labelZh} practice`}
            width={f.width}
            height={f.height}
            sizes="(min-width: 768px) 20vw, 33vw"
            className="h-auto w-full rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
