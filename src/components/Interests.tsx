import { interests } from "@/data/interests";

const widths = ["sm:w-[46%]", "sm:w-[30%]", "sm:w-[54%]", "sm:w-[38%]"];
const offsets = ["", "sm:mt-9", "sm:mt-2", "sm:mt-11"];

export default function Interests() {
  return (
    <section className="pb-20">
      <div className="flex items-baseline gap-2.5">
        <span className="font-serif text-sm italic text-accent">興趣</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="mt-6 flex flex-wrap items-start gap-4">
        {interests.map((item, i) => (
          <div
            key={item.title}
            className={`w-full rounded-2xl border border-accent/15 bg-accent-soft/50 p-4 ${
              widths[i % widths.length]
            } ${offsets[i % offsets.length]}`}
          >
            <h3 className="font-serif text-base font-semibold text-accent">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground/75">
              {item.description}
            </p>
            {item.image && (
              // next/image needs a fixed remote host or a static import; the
              // source is unknown until real photos are added, so a plain
              // <img> is used as a placeholder for now.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt={item.title}
                className="mt-3 w-full rounded-lg object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
