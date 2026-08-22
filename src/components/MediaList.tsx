import type { MediaItem } from "@/data/media";

export default function MediaList({ items }: { items: MediaItem[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <li key={item.name} className="py-3">
          <p className="text-sm font-medium text-foreground">{item.name}</p>
          {item.images && item.images.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.images.map((src) => (
                // next/image needs a fixed remote host or a static import; kept as
                // a plain <img> since these paths are added ad hoc per item later
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
