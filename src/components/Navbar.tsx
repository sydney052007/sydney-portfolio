"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "關於我" },
  { href: "/interests", label: "興趣" },
  { href: "/projects", label: "作品集" },
  { href: "/experiences", label: "更多經歷" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="whitespace-nowrap font-serif text-base font-semibold tracking-tight hover:text-accent"
        >
          {profile.displayName}
        </Link>
        <ul className="flex gap-4 whitespace-nowrap text-sm text-muted sm:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b-2 pb-0.5 transition-colors ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
