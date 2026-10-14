import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — PyClash",
  description:
    "Impressum der Plattform PyClash: Angaben gemäß § 5 DDG (ehem. TMG), Kontakt und Verantwortlichkeit.",
};

function Red({ children }: { children: React.ReactNode }) {
  return <strong className="text-signal">[PLATZHALTER: {children}]</strong>;
}

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
      <p className="kicker">
        <span className="sigil">✱</span> RECHT / ANGABEN
      </p>
      <h1 className="font-pixel mt-4 text-xl text-ink">IMPRESSUM</h1>

      <section className="panel mt-8 p-6">
        <h2 className="font-pixel text-sm text-accent">ANGABEN GEMÄSS § 5 DDG</h2>
        <p className="mt-4 text-xs leading-7 tracking-[0.1em] text-ink">
          Simeon Feil
          <br />
          <Red>Anschrift (Straße, Hausnummer, PLZ, Ort)</Red>
          <br />
          <br />
          E-Mail:{" "}
          <a href="mailto:Simeon5feil@gmail.com" className="link-pink">
            Simeon5feil@gmail.com
          </a>
          <br />
          Telefon: <Red>optional, falls vorhanden</Red>
        </p>
      </section>

      <section className="panel mt-4 p-6">
        <h2 className="font-pixel text-sm text-accent">
          VERANTWORTLICH FÜR DEN INHALT NACH § 18 ABS. 2 MStV
        </h2>
        <p className="mt-4 text-xs leading-7 tracking-[0.1em] text-ink">
          Simeon Feil
          <br />
          <Red>Anschrift wie oben</Red>
        </p>
      </section>

      <section className="panel mt-4 p-6">
        <h2 className="font-pixel text-sm text-accent">STREITSCHLICHTUNG</h2>
        <p className="mt-4 text-xs leading-6 tracking-[0.1em] text-ink">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung bereit. Wir sind nicht bereit oder verpflichtet,
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <section className="panel mt-4 p-6">
        <h2 className="font-pixel text-sm text-accent">HAFTUNG FÜR INHALTE</h2>
        <p className="mt-4 text-xs leading-6 tracking-[0.1em] text-ink">
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
          von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt.
        </p>
      </section>

      <p className="mt-8">
        <Link href="/" className="btn btn-line px-4 py-3">
          ZURÜCK ZUM START_
        </Link>
      </p>
    </main>
  );
}
