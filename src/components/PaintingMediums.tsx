"use client";

import { useState } from "react";
import ArtworkImage from "@/components/ArtworkImage";
import CollapsibleSection from "@/components/CollapsibleSection";
import { paintingMediums, type Painting } from "@/data/paintings";

function WorkCard({ work, folder }: { work: Painting; folder: string }) {
  return (
    <div>
      <ArtworkImage
        src={`/images/interests/painting/${folder}/${work.file}`}
        alt={work.titleZh}
        width={work.width}
        height={work.height}
        sizes="(min-width: 640px) 30vw, 45vw"
        className="h-auto w-full rounded-lg"
      />
      <p className="mt-2 text-sm text-foreground/80">
        {work.titleZh} <span className="text-muted">{work.titleEn}</span>
      </p>
      {work.mediaNote && (
        <p className="text-xs italic text-muted">{work.mediaNote}</p>
      )}
    </div>
  );
}

export default function PaintingMediums() {
  const [activeId, setActiveId] = useState(paintingMediums[0].id);
  const medium = paintingMediums.find((m) => m.id === activeId)!;

  // Group horizontally-oriented (landscape) works into their own row,
  // separate from vertical (portrait) works, so wide pieces sit together
  // instead of being interleaved with tall ones by plain array order.
  // `layoutGroup` lets a near-square piece override the automatic guess.
  const isLandscape = (w: Painting) =>
    w.layoutGroup ? w.layoutGroup === "landscape" : w.width > w.height;
  const landscapeWorks = medium.works.filter(isLandscape);
  const portraitWorks = medium.works.filter((w) => !isLandscape(w));

  return (
    <CollapsibleSection titleZh="媒材作品集">
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

      <div key={medium.id} className="page-fade-in mt-6">
        {landscapeWorks.length > 0 && (
          <div className="grid grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-3">
            {landscapeWorks.map((work) => (
              <WorkCard key={work.file} work={work} folder={medium.folder} />
            ))}
          </div>
        )}
        {portraitWorks.length > 0 && (
          <div
            className={`grid grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-3 ${
              landscapeWorks.length > 0 ? "mt-8" : ""
            }`}
          >
            {portraitWorks.map((work) => (
              <WorkCard key={work.file} work={work} folder={medium.folder} />
            ))}
          </div>
        )}
      </div>
    </CollapsibleSection>
  );
}
