import type { Metadata } from "next";

export const metadata: Metadata = { title: "Probleme" };

export default function Layout({ children }: LayoutProps<"/problems">) {
  return children;
}

