import { textileIntro, textileWorks } from "@/data/media";
import MediaList from "@/components/MediaList";

export default function TextilePanel() {
  return (
    <div className="max-w-xl">
      <p className="text-sm leading-relaxed text-foreground/85">{textileIntro}</p>
      <div className="mt-4">
        <MediaList items={textileWorks} />
      </div>
    </div>
  );
}
