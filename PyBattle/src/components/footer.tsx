"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { openConsentDialog } from "@/lib/consent";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const t = setTimeout(() => setYear(new Date().getFullYear()), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <footer className="border-t border-ink bg-paper-alt">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-[10px] tracking-[0.25em] text-ink">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-wide text-base">
            pyclash<span className="sigil">✱</span>
          </p>
          <p>
            © <span>{year}</span> PYCLASH ✱ SUPABASE / VERCEL / RENDER
          </p>
        </div>
        <nav
          className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-ink pt-4"
          aria-label="Rechtliches und Navigation"
        >
          <Link href="/problems" className="link-pink">
            PROBLEME
          </Link>
          <Link href="/battle" className="link-pink">
            BATTLE
          </Link>
          <Link href="/leaderboard" className="link-pink">
            LIGA
          </Link>
          <Link href="/register" className="link-pink">
            ANMELDEN
          </Link>
          <Link href="/datenschutz" className="link-pink">
            DATENSCHUTZERKLÄRUNG
          </Link>
          <Link href="/impressum" className="link-pink">
            IMPRESSUM
          </Link>
          <button
            type="button"
            onClick={() => openConsentDialog()}
            className="link-pink text-[10px] tracking-[0.25em]"
          >
            COOKIE-EINSTELLUNGEN
          </button>
        </nav>
      </div>
    </footer>
  );
}
