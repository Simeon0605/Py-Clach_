"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./auth-provider";

const links = [
  { href: "/problems", label: "PROBLEME" },
  { href: "/battle", label: "BATTLE" },
  { href: "/leaderboard", label: "LIGA" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-wide text-xl leading-none">
          pyclash<span className="sigil">✱</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs tracking-[0.2em] text-ink md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname.startsWith(l.href)
                  ? "bg-accent px-2 py-1 text-white"
                  : "hover:bg-accent hover:text-white"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs">
          {user ? (
            <>
              <Link href="/profile" className="hidden items-center gap-2 sm:flex">
                <span className="text-ink">{user.username}</span>
                <span className="border border-ink px-2 py-0.5 text-[10px] text-accent">
                  {user.elo} ELO
                </span>
              </Link>
              <button
                type="button"
                onClick={() => void logout()}
                className="btn btn-line px-3 py-1.5"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="link-pink">
                LOGIN
              </Link>
              <Link href="/register" className="btn btn-pink px-3 py-1.5">
                REGISTRIEREN_
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
