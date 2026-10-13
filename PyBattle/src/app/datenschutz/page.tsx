export const metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-ink">Datenschutz</h1>
      <div className="mt-6 space-y-4 text-sm leading-6 text-dim">
        <p>
          PyClash verarbeitet personenbezogene Daten ausschließlich zur Bereitstellung
          der Plattform: Username, E-Mail und ein sicherer Passwort-Hash (bcrypt) für
          deinen Account sowie Spielstatistiken (ELO, Versuche, Matches).
        </p>
        <p>
          <span className="text-ink">Cookies:</span> Wir verwenden nur technisch
          notwendige Cookies. Der Refresh-Token für deinen Login liegt in einem
          httpOnly-Cookie und ist per JavaScript nicht auslesbar. Theme-Präferenzen
          speichern wir ausschließlich lokal in deinem Browser (localStorage).
        </p>
        <p>
          <span className="text-ink">Dritt-dienste:</span> Code-Ausführungen werden von
          der Piston-API (emkc.org) in einer Sandbox verarbeitet. Hosting erfolgt über
          Vercel (Frontend) und Render (Backend), die Datenbank (Supabase) ist in der EU
          gehostet.
        </p>
        <p>
          Fragen? Schreib uns an{" "}
          <a href="mailto:contact@pyclash.dev" className="text-cyan hover:underline">
            contact@pyclash.dev
          </a>
          .
        </p>
      </div>
    </main>
  );
}
