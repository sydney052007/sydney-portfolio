import ArtworkImage from "@/components/ArtworkImage";
import { textileIntro, textileWorks, type TextileWork } from "@/data/media";

type IndexedWork = { work: TextileWork; index: number };
type Group =
  | { type: "grid"; entries: IndexedWork[] }
  | { type: "wide"; entry: IndexedWork };

// Wide/panoramic pieces (e.g. 小精靈毯子) get squeezed too small inside the
// multi-column grid; group them into their own full-width row instead,
// while everything else stays in the responsive grid.
function groupTextileWorks(works: TextileWork[]): Group[] {
  const groups: Group[] = [];
  let i = 0;
  while (i < works.length) {
    if (works[i].wide) {
      groups.push({ type: "wide", entry: { work: works[i], index: i } });
      i++;
    } else {
      const run: IndexedWork[] = [];
      while (i < works.length && !works[i].wide) {
        run.push({ work: works[i], index: i });
        i++;
      }
      groups.push({ type: "grid", entries: run });
    }
  }
  return groups;
}

function WorkCaption({ work, index }: IndexedWork) {
  return (
    <>
      <span className="font-serif text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="mt-2 font-serif text-sm text-foreground">{work.titleZh}</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/75">
        {work.description}
      </p>
    </>
  );
}

export default function TextilePanel() {
  return (
    <div>
      <p className="max-w-xl text-sm leading-relaxed text-foreground/85">
        {textileIntro}
      </p>

      <div className="mt-6 space-y-8">
        {groupTextileWorks(textileWorks).map((group, groupIdx) => {
          if (group.type === "wide") {
            const { work, index } = group.entry;
            return (
              <article
                key={work.file}
                className="border-t border-dashed border-border pt-4"
              >
                <WorkCaption work={work} index={index} />
                <ArtworkImage
                  src={`/images/interests/textile/${work.file}`}
                  alt={work.titleZh}
                  width={work.width}
                  height={work.height}
                  sizes="90vw"
                  className="mt-3 h-auto w-full rounded-lg"
                />
              </article>
            );
          }

          return (
            <div
              key={`grid-${groupIdx}`}
              className="grid grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-3"
            >
              {group.entries.map(({ work, index }) => (
                <article
                  key={work.file}
                  className="border-t border-dashed border-border pt-4"
                >
                  <WorkCaption work={work} index={index} />
                  <ArtworkImage
                    src={`/images/interests/textile/${work.file}`}
                    alt={work.titleZh}
                    width={work.width}
                    height={work.height}
                    sizes="(min-width: 640px) 30vw, 45vw"
                    className="mt-3 h-auto w-full rounded-lg"
                  />
                </article>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
