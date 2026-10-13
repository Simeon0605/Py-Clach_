"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "pyclash_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-4 sm:max-w-md">
      <div className="cyber-panel rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-ink">Cookies & Datenschutz</p>
            <p className="mt-1 text-xs leading-5 text-dim">
              Wir nutzen technisch notwendige Cookies für Login-Sessions. optionale
              Präferenzen (Theme) speichern wir lokal in deinem Browser.
            </p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => decide("accepted")} className="cyber-btn rounded-lg px-3 py-1.5 text-xs">
                Akzeptieren
              </button>
              <button onClick={() => decide("declined")} className="cyber-btn-ghost rounded-lg px-3 py-1.5 text-xs">
                Nur notwendige
              </button>
              <Link href="/datenschutz" className="self-center text-xs text-cyan hover:underline">
                Mehr Infos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
