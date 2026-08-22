"use client";

import { useState } from "react";
import Image from "next/image";
import { recipes } from "@/data/recipes";

export default function BakingPanel() {
  const [selected, setSelected] = useState(recipes[0]?.name ?? null);
  const active = recipes.find((recipe) => recipe.name === selected);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {recipes.map((recipe) => (
          <button
            key={recipe.name}
            type="button"
            onClick={() => setSelected(recipe.name)}
            aria-pressed={selected === recipe.name}
            className={`overflow-hidden rounded-xl border text-left transition-colors ${
              selected === recipe.name
                ? "border-accent"
                : "border-border hover:border-accent/40"
            }`}
          >
            <div className="relative aspect-square w-full overflow-hidden bg-foreground/5">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                sizes="(min-width: 768px) 18vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="p-2 text-xs font-medium leading-snug text-foreground">
              {recipe.name}
            </p>
          </button>
        ))}
      </div>

      {active && (
        <div
          key={active.name}
          className="page-fade-in mt-8 max-w-2xl rounded-2xl border border-accent/20 bg-accent-soft/40 p-6"
        >
          <h3 className="font-serif text-lg font-semibold">{active.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            {active.description}
          </p>
          <p className="mt-3 text-xs text-muted">{active.meta}</p>
        </div>
      )}
    </div>
  );
}
