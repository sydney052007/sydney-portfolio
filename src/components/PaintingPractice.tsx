"use client";

import { useState } from "react";
import ArtworkImage from "@/components/ArtworkImage";
import CollapsibleSection from "@/components/CollapsibleSection";
import { paintingPractice } from "@/data/paintingPractice";

export default function PaintingPractice() {
  const [activeId, setActiveId] = useState(paintingPractice[0].id);
  const category = paintingPractice.find((c) => c.id === activeId)!;

  return (
    <CollapsibleSection titleZh="色鉛筆練習">
      <p className="mt-2 text-sm text-muted">Small Practice</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        {paintingPractice.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            aria-pressed={activeId === c.id}
            className={`border-b-2 pb-1 text-sm transition-colors ${
              activeId === c.id
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-accent"
            }`}
          >
            {c.labelZh} <span className="text-xs">{c.labelEn}</span>
          </button>
        ))}
      </div>

      <div key={category.id} className="page-fade-in mt-6 space-y-8">
        {category.items.map((item) => (
          <div key={item.id}>
            <p className="font-serif text-sm text-foreground">
              {item.labelZh}{" "}
              <span className="text-xs text-muted">{item.labelEn}</span>
            </p>
            <div className="mt-3 grid grid-cols-3 items-start gap-3">
              {item.files.map((f) => (
                <ArtworkImage
                  key={f.file}
                  src={`/images/interests/painting/practice/${category.id}/${item.id}/${f.file}`}
                  alt={`${item.labelZh} practice`}
                  width={f.width}
                  height={f.height}
                  sizes="33vw"
                  className="h-auto w-full rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
