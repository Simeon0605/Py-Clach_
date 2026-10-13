import type { Metadata } from "next";

export const metadata: Metadata = { title: "Leaderboard" };

export default function Layout({ children }: LayoutProps<"/leaderboard">) {
  return children;
}

