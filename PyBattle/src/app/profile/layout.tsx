import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profil" };

export default function Layout({ children }: LayoutProps<"/profile">) {
  return children;
}

