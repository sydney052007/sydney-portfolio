import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.displayName}
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-accent"
          >
            {profile.contact.email}
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
