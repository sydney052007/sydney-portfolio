"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
};

const noSaveProps = {
  draggable: false as const,
  onDragStart: (e: React.DragEvent) => e.preventDefault(),
  onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
  style: { WebkitTouchCallout: "none" as const },
};

export default function ArtworkImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in select-none"
        aria-label={`放大檢視：${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={90}
          className={className}
          {...noSaveProps}
        />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
            onClick={close}
            onContextMenu={(e) => e.preventDefault()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-3xl leading-none text-white/80 transition-colors hover:text-white"
              aria-label="關閉"
            >
              &times;
            </button>
            <div
              className="relative max-h-full max-w-full select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="90vw"
                quality={90}
                className="max-h-[90vh] w-auto rounded shadow-2xl"
                {...noSaveProps}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
