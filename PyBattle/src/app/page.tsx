import Link from "next/link";
import { Swords, Shield, Timer, Trophy } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Solo-Mode",
    text: "Der Server besitzt die Zeit. Anti-Cheat, Bestzeiten, versteckte Tests.",
  },
  {
    icon: Swords,
    title: "1v1 Battles",
    text: "Matchmaking nach ELO, Live-Status – wer zuerst alle Tests knackt, gewinnt.",
  },
  {
    icon: Shield,
    title: "Sichere Auth",
    text: "JWT + Refresh-Cookie-Flow. Frontend spricht nur mit der API, nie mit der DB.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    text: "Globales Ranking, Match-Historie und Profil-Stats.",
  },
];

const stats = [
  { value: "1v1", label: "Live-Battles" },
  { value: "15min", label: "Server-Timer" },
  { value: "ELO", label: "Fair-Matchmaking" },
  { value: "100%", label: "Sandboxed" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neon">
            >_ Python Code Arena
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Schreib Code.
            <br />
            <span className="neon-text">Schlag den Gegner.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-dim">
            PyClash ist eine 1v1-Plattform für Python-Aufgaben. Solo gegen die Uhr
            oder live im Battle – geprüft gegen versteckte Test-Cases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="cyber-btn rounded-xl px-5 py-3">
              Jetzt starten
            </Link>
            <Link href="/problems" className="cyber-btn-ghost rounded-xl px-5 py-3">
              Probleme ansehen
            </Link>
          </div>
        </div>
        <div className="cyber-panel min-w-0 rounded-3xl p-6 font-mono text-sm">
          <div className="mb-4 flex items-center justify-between text-xs text-dim">
            <span>battle.py</span>
            <span className="text-neon">6/6 tests passed</span>
          </div>
          <pre className="overflow-x-auto text-[13px] leading-6 text-dim">{`def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i`}</pre>
          <div className="mt-4 border-t border-line pt-3 text-xs">
            <span className="text-neon">$</span> <span className="text-cyan">python</span> battle.py
            <span className="ml-2 inline-block h-3.5 w-2 animate-pulse bg-neon align-middle" />
          </div>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="cyber-panel rounded-xl px-4 py-3 text-center">
            <p className="font-mono text-lg text-neon">{s.value}</p>
            <p className="text-xs text-dim">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="cyber-panel min-w-0 rounded-2xl p-5">
            <f.icon className="mb-3 h-5 w-5 text-cyan" />
            <h2 className="font-medium text-ink">{f.title}</h2>
            <p className="mt-2 text-sm leading-6 text-dim">{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
