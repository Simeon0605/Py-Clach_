import type { Metadata } from "next";

export const metadata: Metadata = { title: "Registrieren" };

export default function Layout({ children }: LayoutProps<"/register">) {
  return children;
}

