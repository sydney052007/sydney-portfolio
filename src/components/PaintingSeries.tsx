import ArtworkImage from "@/components/ArtworkImage";
import CollapsibleSection from "@/components/CollapsibleSection";
import { solarTermsSeries } from "@/data/paintings";

export default function PaintingSeries() {
  return (
    <CollapsibleSection titleZh="系列作品">
      <p className="mt-2 text-sm text-muted">
        廿四節氣 / The Twenty-Four Solar Terms
      </p>

      <div className="mt-4 grid grid-cols-3 items-start gap-4 sm:grid-cols-6">
        {solarTermsSeries.map((item) => (
          <div key={item.file}>
            <ArtworkImage
              src={`/images/interests/painting/series/${item.file}`}
              alt={item.titleZh}
              width={item.width}
              height={item.height}
              sizes="(min-width: 640px) 16vw, 33vw"
              className="h-auto w-full rounded-lg"
            />
            <p className="mt-1.5 text-xs text-foreground/75">
              {item.titleZh} <span className="text-muted">{item.titleEn}</span>
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
