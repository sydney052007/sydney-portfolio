import type { Experience } from "@/data/experiences";
import EmbedFrame from "@/components/EmbedFrame";

export default function ExperienceItem({
  item,
  index,
  align,
}: {
  item: Experience;
  index: number;
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div className="relative pl-12 md:pl-0">
      <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent md:left-1/2" />

      <div className="md:grid md:grid-cols-2 md:gap-x-14">
        <div className={isRight ? "md:col-start-2" : "md:col-start-1"}>
          <div className="rounded-2xl border border-border bg-background p-6">
            <span className="font-serif text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {item.description}
            </p>

            {item.embeds?.map((embed, i) => (
              <EmbedFrame key={i} embed={embed} />
            ))}

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
