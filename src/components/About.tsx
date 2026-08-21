import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <p className="text-sm text-muted">{profile.affiliation}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {profile.displayName}
      </h1>

      <p className="mt-4 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted">
        {profile.status}
      </p>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-foreground/5 px-3 py-1 text-sm text-foreground/80"
          >
            #{skill}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${profile.contact.email}`}
          className="text-foreground underline underline-offset-4 hover:text-muted"
        >
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-muted"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
