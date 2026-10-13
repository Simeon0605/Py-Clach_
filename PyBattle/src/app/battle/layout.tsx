import type { Metadata } from "next";

export const metadata: Metadata = { title: "Battle" };

export default function Layout({ children }: LayoutProps<"/battle">) {
  return children;
}

