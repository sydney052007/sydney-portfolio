"use client";

import { useState } from "react";
import Image from "next/image";
import { paintingMediums } from "@/data/paintings";

export default function PaintingMediums() {
  const [activeId, setActiveId] = useState(paintingMediums[0].id);
  const medium = paintingMediums.find((m) => m.id === activeId)!;

  return (
    <div>
      <div className="flex items-baseline gap-2.5">
        <span className="font-serif text-sm italic text-accent">媒材作品集</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {paintingMediums.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActiveId(m.id)}
            aria-pressed={activeId === m.id}
            className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
              activeId === m.id
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-accent"
            }`}
          >
            {m.labelZh} <span className="text-xs">{m.labelEn}</span>
          </button>
        ))}
      </div>

      <div
        key={medium.id}
        className="page-fade-in mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
      >
        {medium.works.map((work) => (
          <div key={work.file}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-foreground/5">
              <Image
                src={`/images/interests/painting/${medium.folder}/${work.file}`}
                alt={work.titleZh}
                fill
                sizes="(min-width: 640px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              {work.titleZh} <span className="text-muted">{work.titleEn}</span>
            </p>
            {work.mediaNote && (
              <p className="text-xs italic text-muted">{work.mediaNote}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
