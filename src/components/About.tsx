import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="py-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {profile.affiliation}
      </p>

      <div className="mt-3 flex flex-wrap items-end gap-4">
        <h1 className="font-serif text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
          {profile.displayName}
        </h1>
        <span className="mb-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          {profile.status.badge}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">{profile.status.detail}</p>

      <div className="mt-10 max-w-2xl border-l-2 border-accent/40 pl-6">
        <div className="space-y-4 text-base leading-8 text-foreground/90">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
          >
            #{skill}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${profile.contact.email}`}
          className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
        >
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
