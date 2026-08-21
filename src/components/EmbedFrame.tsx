import type { ExperienceEmbed } from "@/data/experiences";

export default function EmbedFrame({ embed }: { embed: ExperienceEmbed }) {
  const src =
    embed.kind === "p5"
      ? embed.url
      : `https://www.youtube.com/embed/${embed.videoId}`;

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-accent/20 bg-accent-soft/40 p-2 shadow-[0_1px_2px_rgba(28,26,23,0.06),0_8px_20px_-8px_rgba(28,26,23,0.15)]">
      <div
        className={`relative overflow-hidden rounded-lg bg-black ${
          embed.kind === "p5" ? "aspect-square" : "aspect-video"
        }`}
      >
        <iframe
          src={src}
          title={embed.kind === "p5" ? "p5.js 互動作品" : "YouTube 影片"}
          loading="lazy"
          allow={
            embed.kind === "youtube"
              ? "accelerometer; encrypted-media; gyroscope; picture-in-picture"
              : undefined
          }
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
