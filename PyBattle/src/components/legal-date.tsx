"use client";

import { useEffect, useState } from "react";

/** Statisches Fallback-Datum im HTML, per JS auf heute aktualisiert. */
export function LegalDate() {
  const FALLBACK = "14.10.2026";
  const [date, setDate] = useState(FALLBACK);

  useEffect(() => {
    const t = setTimeout(() => {
      setDate(
        new Date().toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return <span>{date}</span>;
}
