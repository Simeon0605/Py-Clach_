import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — PyClash",
  description:
    "Impressum der Plattform PyClash: Angaben gemäß § 5 DDG, Kontakt und Verantwortlichkeit.",
};

export default function RouteLayout({ children }: LayoutProps<"/">) {
  return children;
}
