"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Banner bei jedem frischen Besuch zeigen (nur sessionStorage merken)
  useEffect(() => {
    const t = setTimeout(() => {
      if (!readConsent()) setOpen(true);
    }, 0);
    function onOpen() {
      const c = readConsent();
      if (c) {
        setAnalytics(c.analytics);
        setMarketing(c.marketing);
      }
      setOpen(true);
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
    };
  }, []);

  // Focus in den Dialog + Fokus-Falle
  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const focusables = dialog.querySelectorAll<HTMLElement>(
      "button, a[href], input"
    );
    focusables[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return; // Esc ist KEINE Einwilligung
      if (e.key !== "Tab") return;
      const list = Array.from(
        dialog.querySelectorAll<HTMLElement>("button, a[href], input")
      ).filter((el) => el.offsetParent !== null);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [open]);

  const decide = useCallback(
    (a: boolean, m: boolean) => {
      writeConsent(a, m);
      setOpen(false);
      setShowSettings(false);
    },
    []
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
    >
      <div
        ref={dialogRef}
        className="panel chamfer max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto bg-paper p-6 sm:p-8"
      >
        <p className="kicker">
          <span className="sigil">✱</span> EINWILLIGUNG / § 25 TDDDG
        </p>

        <div className="mt-4 flex items-start gap-4">
          {/* Pixel-Cookie */}
          <svg
            viewBox="0 0 9 9"
            shapeRendering="crispEdges"
            className="mt-1 h-9 w-9 flex-shrink-0"
            aria-hidden="true"
          >
            <g fill="#3B1FE0">
              <rect x="2" y="0" width="5" height="1" />
              <rect x="1" y="1" width="7" height="1" />
              <rect x="0" y="2" width="9" height="5" />
              <rect x="1" y="7" width="7" height="1" />
              <rect x="2" y="8" width="5" height="1" />
            </g>
            <g fill="#F5F5F5">
              <rect x="2" y="2" width="1" height="1" />
              <rect x="5" y="3" width="1" height="1" />
              <rect x="3" y="5" width="1" height="1" />
              <rect x="6" y="6" width="1" height="1" />
            </g>
          </svg>
          <h2 id="consent-title" className="font-pixel text-lg text-accent">
            COOKIES
          </h2>
        </div>

        <p className="mt-4 text-xs leading-6 tracking-[0.1em] text-ink">
          Wir verwenden technisch notwendige Cookies bzw. Speicher für Login
          und Betrieb der Seite. optionale Dienste (Statistik, Marketing)
          laden erst nach deiner Einwilligung. Details:{" "}
          <Link href="/datenschutz" className="link-pink">
            DATENSCHUTZERKLÄRUNG
          </Link>
          .
        </p>

        {showSettings ? (
          <div className="mt-6 border border-ink">
            <label className="flex items-center justify-between border-b border-ink px-4 py-3 text-[11px] tracking-[0.2em]">
              NOTWENDIG
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Notwendige Cookies (immer aktiv)"
                className="h-5 w-5 accent-[#3B1FE0]"
              />
            </label>
            <label className="flex items-center justify-between border-b border-ink px-4 py-3 text-[11px] tracking-[0.2em]">
              STATISTIK
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Statistik-Cookies erlauben"
                className="h-5 w-5 accent-[#3B1FE0]"
              />
            </label>
            <label className="flex items-center justify-between px-4 py-3 text-[11px] tracking-[0.2em]">
              MARKETING
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Marketing-Cookies erlauben"
                className="h-5 w-5 accent-[#3B1FE0]"
              />
            </label>
          </div>
        ) : null}

        {/* Zwei gleichwertige Buttons */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="btn btn-pink w-full py-4"
            onClick={() => decide(true, true)}
          >
            ALLE AKZEPTIEREN
          </button>
          <button
            type="button"
            className="btn btn-black w-full py-4"
            onClick={() => decide(analytics, marketing)}
          >
            NUR NOTWENDIGE
          </button>
        </div>

        <button
          type="button"
          className="link-pink mt-5 text-[10px] tracking-[0.25em]"
          onClick={() => setShowSettings((v) => !v)}
        >
          {showSettings ? "EINSTELLUNGEN SCHLIESSEN" : "EINSTELLUNGEN"}
        </button>
      </div>
    </div>
  );
}
