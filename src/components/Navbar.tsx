import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "關於我" },
  { href: "#projects", label: "作品集" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.displayName}
        </a>
        <ul className="flex gap-6 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
