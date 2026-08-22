import { paintingMedia } from "@/data/media";
import MediaList from "@/components/MediaList";

export default function PaintingPanel() {
  return (
    <div className="max-w-xl">
      <MediaList items={paintingMedia} />
    </div>
  );
}
