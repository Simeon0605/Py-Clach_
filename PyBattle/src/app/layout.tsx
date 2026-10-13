import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/components/auth-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pyclash.vercel.app"),
  title: {
    default: "PyClash – 1v1 Python Code Battles",
    template: "%s · PyClash",
  },
  description:
    "PyClash ist die 1v1-Plattform für Python-Coding-Battles: Solo-Mode mit Server-Timing und Anti-Cheat, Live-1v1-Battles per Matchmaking, ELO-Leaderboard und Match-Historie.",
  openGraph: {
    title: "PyClash – 1v1 Python Code Battles",
    description: "Solo gegen die Uhr oder live im Battle. Wer zuerst alle Tests besteht, gewinnt.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
};

const themeInit = `(function(){try{var t=localStorage.getItem("pyclash_theme");if(t==="light")document.documentElement.classList.add("light");}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <AuthProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
          <CookieBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
