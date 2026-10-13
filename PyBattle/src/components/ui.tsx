import type { Difficulty } from "@/lib/types";

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const cls =
    level === "easy"
      ? "bg-neon/10 text-neon"
      : level === "medium"
        ? "bg-amber/10 text-amber"
        : "bg-rose/10 text-rose";
  const label = level === "easy" ? "Easy" : level === "medium" ? "Medium" : "Hard";
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}>{label}</span>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`cyber-panel rounded-2xl ${className}`}>{children}</div>;
}

export function SuccessMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-neon/30 bg-neon/10 px-3 py-2 text-sm text-neon">
      {children}
    </p>
  );
}

export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-rose/30 bg-rose/10 px-3 py-2 text-sm text-rose">
      {children}
    </p>
  );
}
