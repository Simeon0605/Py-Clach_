"use client";

import { useEffect, useState } from "react";
import { Panel } from "@/components/ui";
import { api } from "@/lib/api";
import type { LeaderboardEntry } from "@/lib/types";

export default function LeaderboardPage() {
  const [rows, setRows] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void api.get<LeaderboardEntry[]>("/api/leaderboard").then((res) => {
      if (!res.success) setError(res.error);
      else setRows(res.data);
    });
  }, []);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-ink">Leaderboard</h1>
      <p className="mt-2 text-dim">Globales ELO-Ranking.</p>
      {error ? <p className="mt-6 text-rose">{error}</p> : null}
      <Panel className="mt-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
          <thead className="bg-panel2 text-dim">
            <tr>
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Spieler</th>
              <th className="px-4 py-3 font-medium">ELO</th>
              <th className="px-4 py-3 font-medium">W</th>
              <th className="px-4 py-3 font-medium">L</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.username} className="border-t border-line">
                <td className="px-4 py-3 font-mono text-dim">{r.rank}</td>
                <td className="px-4 py-3 text-ink">{r.username}</td>
                <td className="px-4 py-3 font-mono text-neon">{r.elo}</td>
                <td className="px-4 py-3">{r.wins}</td>
                <td className="px-4 py-3">{r.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Panel>
    </main>
  );
}
