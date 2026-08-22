"use client";

import { useState } from "react";
import PaintingPanel from "@/components/PaintingPanel";
import MusicPanel from "@/components/MusicPanel";
import TextilePanel from "@/components/TextilePanel";
import BakingPanel from "@/components/BakingPanel";

const categories = [
  { id: "painting", label: "繪畫" },
  { id: "music", label: "音樂" },
  { id: "textile", label: "織品手作" },
  { id: "baking", label: "烘焙" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export default function InterestsExplorer() {
  const [active, setActive] = useState<CategoryId>("painting");

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            aria-pressed={active === category.id}
            className={`rounded-2xl border px-5 py-4 text-left font-serif text-lg font-semibold transition-colors ${
              active === category.id
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-foreground hover:border-accent/40"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div key={active} className="page-fade-in mt-8">
        {active === "painting" && <PaintingPanel />}
        {active === "music" && <MusicPanel />}
        {active === "textile" && <TextilePanel />}
        {active === "baking" && <BakingPanel />}
      </div>
    </div>
  );
}
