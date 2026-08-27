import Image from "next/image";
import { solarTermsSeries } from "@/data/paintings";

export default function PaintingSeries() {
  return (
    <div>
      <div className="flex items-baseline gap-2.5">
        <span className="font-serif text-sm italic text-accent">系列作品</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <p className="mt-2 text-sm text-muted">
        廿四節氣 / The Twenty-Four Solar Terms
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {solarTermsSeries.map((item) => (
          <div key={item.file}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-foreground/5">
              <Image
                src={`/images/interests/painting/series/${item.file}`}
                alt={item.titleZh}
                fill
                sizes="(min-width: 640px) 16vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="mt-1.5 text-xs text-foreground/75">
              {item.titleZh} <span className="text-muted">{item.titleEn}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
