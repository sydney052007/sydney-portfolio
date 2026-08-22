import Link from "next/link";

const previews = [
  {
    title: "作品集",
    href: "/projects",
    description:
      "五個主要全端專案，涵蓋交易平台、資料分析、語音導覽與企業系統。",
  },
  {
    title: "更多經歷",
    href: "/experiences",
    description:
      "四段自主學習與跨領域經歷，橫跨空間科技、生態設計與生成藝術。",
  },
  {
    title: "興趣",
    href: "/interests",
    description: "這裡是我生活中的另一面，有許多我創作的痕跡。",
  },
] as const;

export default function PagePreviews() {
  return (
    <section className="pb-20">
      <div className="flex items-baseline gap-2.5">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          More
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {previews.map((item, index) => (
          <div key={item.href} className="border-t border-dashed border-border pt-5">
            <span className="font-serif text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-serif text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
            >
              前往
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
