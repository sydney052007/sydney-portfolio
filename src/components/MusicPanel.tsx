import { musicText } from "@/data/media";

export default function MusicPanel() {
  return (
    <p className="max-w-xl text-sm leading-relaxed text-foreground/85">
      {musicText}
    </p>
  );
}
