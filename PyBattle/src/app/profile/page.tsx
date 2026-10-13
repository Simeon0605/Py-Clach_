"use client";

import { useEffect, useState } from "react";
import { Protected } from "@/components/protected";
import { useAuth } from "@/components/auth-provider";
import { Panel } from "@/components/ui";
import { api } from "@/lib/api";
import { formatMs } from "@/lib/format";
import type { MatchHistoryItem, SoloStats } from "@/lib/types";

function Profile() {
  const { user } = useAuth();
  const [stats, setStats] = useState<SoloStats | null>(null);
  const [history, setHistory] = useState<MatchHistoryItem[]>([]);

  useEffect(() => {
    void api.get<SoloStats>("/api/solo/stats").then((res) => {
      if (res.success) setStats(res.data);
    });
    void api.get<MatchHistoryItem[]>("/api/battle/history").then((res) => {
      if (res.success) setHistory(res.data);
    });
  }, []);

  if (!user) return null;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-ink">{user.username}</h1>
      <p className="mt-1 text-dim">{user.email}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Panel className="p-5">
          <p className="text-xs text-dim">ELO</p>
          <p className="mt-1 font-mono text-2xl text-neon">{user.elo}</p>
        </Panel>
        <Panel className="p-5">
          <p className="text-xs text-dim">Solo gelöst</p>
          <p className="mt-1 font-mono text-2xl text-ink">{stats?.solved ?? "—"}</p>
        </Panel>
        <Panel className="p-5">
          <p className="text-xs text-dim">Solo-Attempts</p>
          <p className="mt-1 font-mono text-2xl text-ink">{stats?.attempts ?? "—"}</p>
        </Panel>
      </div>
      <h2 className="mt-10 text-lg font-medium text-ink">Bestzeiten</h2>
      <div className="mt-3 space-y-2">
        {stats?.best_times.length ? (
          stats.best_times.map((t) => (
            <Panel key={t.problem_id} className="flex justify-between px-4 py-3 text-sm">
              <span>{t.title}</span>
              <span className="font-mono text-neon">{formatMs(t.duration_ms)}</span>
            </Panel>
          ))
        ) : (
          <p className="text-sm text-dim">Noch keine Solo-Bestzeiten.</p>
        )}
      </div>
      <h2 className="mt-10 text-lg font-medium text-ink">Match-Historie</h2>
      <div className="mt-3 space-y-2">
        {history.length ? (
          history.map((m) => (
            <Panel key={m.id} className="flex justify-between px-4 py-3 text-sm">
              <span>
                vs {m.opponent} · {m.problem_title}
              </span>
              <span className={m.result === "win" ? "text-neon" : "text-rose"}>
                {m.result === "win" ? "Win" : "Loss"} {m.elo_change >= 0 ? "+" : ""}
                {m.elo_change}
              </span>
            </Panel>
          ))
        ) : (
          <p className="text-sm text-dim">Noch keine Battles.</p>
        )}
      </div>
    </main>
  );
}

export default function ProfilePage() {
  return (
    <Protected>
      <Profile />
    </Protected>
  );
}
