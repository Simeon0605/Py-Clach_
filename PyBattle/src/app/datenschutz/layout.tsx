import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Einwilligung & Datenschutz",
  description:
    "Informationen zur Cookie-Einwilligung, Datenverarbeitung und deinen Rechten nach der DSGVO auf PyClash.",
};

export default function RouteLayout({ children }: LayoutProps<"/">) {
  return children;
}
