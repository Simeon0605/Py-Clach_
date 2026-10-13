import Link from "next/link";
import { Mail, Swords } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line bg-panel/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neon text-bg">
              <Swords className="h-3.5 w-3.5" />
            </span>
            Py<span className="text-neon">Clash</span>
          </Link>
          <p className="mt-2 text-xs text-dim">
            © {year} PyClash · 1v1 Python Code Battles
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
          <Link href="/problems" className="hover:text-neon">Probleme</Link>
          <Link href="/leaderboard" className="hover:text-neon">Leaderboard</Link>
          <Link href="/datenschutz" className="hover:text-neon">Datenschutz</Link>
          <a href="mailto:contact@pyclash.dev" className="inline-flex items-center gap-1 hover:text-neon">
            <Mail className="h-3.5 w-3.5" />
            contact@pyclash.dev
          </a>
        </nav>
      </div>
    </footer>
  );
}
