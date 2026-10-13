"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Swords, X, Zap } from "lucide-react";
import { useAuth } from "./auth-provider";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/problems", label: "Probleme" },
  { href: "/battle", label: "Battle" },
  { href: "/leaderboard", label: "Leaderboard" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const active = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="PyClash Startseite" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon text-bg shadow-[0_0_18px_rgba(61,255,154,0.45)]">
            <Swords className="h-4 w-4" />
          </span>
          <span>
            Py<span className="text-neon neon-text">Clash</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-dim md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={active(l.href) ? "text-ink" : "transition-colors hover:text-neon"}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          <ThemeToggle />
          {user ? (
            <>
              <Link href="/profile" className="hidden items-center gap-2 sm:flex">
                <span className="text-dim">{user.username}</span>
                <span className="rounded-full bg-neon/10 px-2 py-0.5 font-mono text-xs text-neon">
                  {user.elo} ELO
                </span>
              </Link>
              <button
                type="button"
                onClick={() => void logout()}
                className="cyber-btn-ghost hidden rounded-lg px-3 py-1.5 sm:block"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden text-dim transition hover:text-neon sm:block">
                Login
              </Link>
              <Link href="/register" className="cyber-btn inline-flex items-center gap-1 rounded-lg px-3 py-1.5">
                <Zap className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Registrieren</span>
                <span className="sm:hidden">Start</span>
              </Link>
            </>
          )}
          <button
            type="button"
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-dim md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-panel px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  active(l.href) ? "bg-neon/10 text-neon" : "text-dim"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-dim"
                >
                  Profil ({user.username} · {user.elo} ELO)
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    void logout();
                  }}
                  className="rounded-lg px-3 py-2.5 text-left text-sm text-rose"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-dim"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
