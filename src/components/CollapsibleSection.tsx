"use client";

import { useState, type ReactNode } from "react";

type Props = {
  titleZh: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export default function CollapsibleSection({
  titleZh,
  defaultOpen = true,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-baseline gap-2.5 text-left"
      >
        <span className="font-serif text-sm italic text-accent">
          {titleZh}
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
        <span className="shrink-0 text-xs text-muted">
          {open ? "收合 −" : "展開 +"}
        </span>
      </button>
      {open && <div className="page-fade-in">{children}</div>}
    </div>
  );
}
