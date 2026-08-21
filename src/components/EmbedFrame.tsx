import type { ExperienceEmbed } from "@/data/experiences";

const frameClass =
  "mt-4 overflow-hidden rounded-xl border border-accent/20 bg-accent-soft/40 p-2 shadow-[0_1px_2px_rgba(28,26,23,0.06),0_8px_20px_-8px_rgba(28,26,23,0.15)]";

export default function EmbedFrame({ embed }: { embed: ExperienceEmbed }) {
  if (embed.kind === "p5") {
    const displayWidth = embed.displayWidth ?? 300;
    const scale = displayWidth / embed.nativeWidth;
    const displayHeight = embed.nativeHeight * scale;

    return (
      <div className={frameClass}>
        <div
          className="relative mx-auto overflow-hidden rounded-lg bg-black"
          style={{ width: displayWidth, height: displayHeight }}
        >
          <div
            style={{
              width: embed.nativeWidth,
              height: embed.nativeHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <iframe
              src={embed.url}
              title="p5.js 互動作品"
              loading="lazy"
              allowFullScreen
              style={{ width: embed.nativeWidth, height: embed.nativeHeight, border: 0 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${embed.videoId}`}
          title="YouTube 影片"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
