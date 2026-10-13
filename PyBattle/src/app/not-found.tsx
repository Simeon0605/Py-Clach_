import Link from "next/link";
import { Swords } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-7xl font-bold neon-text sm:text-8xl">404</p>
      <div className="cyber-panel mt-8 w-full rounded-2xl p-6 font-mono text-sm text-dim">
        <p>
          <span className="text-rose">Traceback (most recent call last):</span>
        </p>
        <p className="mt-1">
          PageNotFoundError: Die Seite <span className="text-cyan">existiert nicht</span> in dieser Arena.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="cyber-btn rounded-xl px-5 py-2.5 text-sm">
          Zur Startseite
        </Link>
        <Link href="/problems" className="cyber-btn-ghost rounded-xl px-5 py-2.5 text-sm">
          Probleme ansehen
        </Link>
      </div>
      <Swords className="mt-10 h-6 w-6 text-line" />
    </main>
  );
}
