import type { Metadata } from "next";
import Link from "next/link";
import { LegalDate } from "@/components/legal-date";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — PyClash",
  description:
    "Datenschutzerklärung der Plattform PyClash: Datenverarbeitung, Cookies, Rechtsgrundlagen, Betroffenenrechte und Aufsichtsbehörde.",
};

const toc = [
  ["verantwortlicher", "1. VERANTWORTLICHER"],
  ["hosting", "2. HOSTING & SERVER-LOGFILES"],
  ["rechtsgrundlagen", "3. RECHTSGRUNDLAGEN"],
  ["cookies", "4. COOKIES & EINWILLIGUNG"],
  ["kontakt", "5. E-MAIL-KONTAKT"],
  ["drittanbieter", "6. DRITTANBIETER & FONTS"],
  ["speicherdauer", "7. SPEICHERDAUER"],
  ["rechte", "8. RECHTE DER BETROFFENEN"],
  ["aufsicht", "9. BESCHWERDERECHT"],
  ["ssl", "10. SSL/TLS"],
  ["aktualitaet", "11. AKTUALITÄT"],
];

function Red({ children }: { children: React.ReactNode }) {
  return (
    <strong className="text-signal">[PLATZHALTER: {children}]</strong>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-ink pt-8 mt-8">
      <h2 className="font-pixel text-sm text-accent">{title}</h2>
      <div className="mt-4 space-y-4 text-xs leading-6 tracking-[0.1em] text-ink">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
      <p className="kicker">
        <span className="sigil">✱</span> RECHT / DATENSCHUTZ
      </p>
      <h1 className="font-pixel mt-4 text-xl text-ink">DATENSCHUTZERKLÄRUNG</h1>
      <p className="mt-3 text-[11px] tracking-[0.15em] text-ink opacity-70">
        STAND: <LegalDate />
      </p>

      {/* Inhaltsverzeichnis */}
      <nav className="panel mt-8 p-5" aria-label="Inhaltsverzeichnis">
        <p className="text-[10px] tracking-[0.25em] text-accent">INHALT /</p>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
          {toc.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="link-pink">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <Section id="verantwortlicher" title="1. VERANTWORTLICHER">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Simeon Feil
          <br />
          <Red>Anschrift (Straße, PLZ, Ort)</Red>
          <br />
          E-Mail:{" "}
          <a href="mailto:Simeon5feil@gmail.com" className="link-pink">
            Simeon5feil@gmail.com
          </a>
          <br />
          Telefon: <Red>optional, falls vorhanden</Red>
        </p>
      </Section>

      <Section id="hosting" title="2. HOSTING & SERVER-LOGFILES">
        <p>
          Diese Website wird auf <Red>Hosting-Anbieter, z. B. Vercel Inc.</Red>{" "}
          gehostet. Beim Aufruf der Seite werden durch den Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles gespeichert:
        </p>
        <ul className="list-disc pl-5">
          <li>IP-Adresse (ggf. gekürzt/anonymisiert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite und übertragene Datenmenge</li>
          <li>Browser, Betriebssystem und Referrer-URL</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (sicherer, stabiler Betrieb). Die Logfiles werden vom
          Hosting-Anbieter nach dessen Löschfristen entfernt{" "}
          <Red>Löschfrist laut Anbieter-Dokumentation</Red>. Die Backend-API
          läuft zusätzlich auf <Red>Render / weiterer Anbieter</Red>.
        </p>
      </Section>

      <Section id="rechtsgrundlagen" title="3. RECHTSGRUNDLAGEN">
        <p>
          Diese Website verarbeitet personenbezogene Daten auf Grundlage
          folgender Rechtsgrundlagen:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> — Einwilligung
            (optionale Cookies, Statistik, Marketing)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Vertragserfüllung
            (Accounts, Battles, ELO-Ranking)
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — berechtigtes
            Interesse (Server-Logfiles, Sicherheit)
          </li>
          <li>
            <strong>§ 25 TDDDG</strong> — Einwilligung bei Speicherung von
            Informationen auf Endgeräten (Cookies/Session-Storage)
          </li>
        </ul>
      </Section>

      <Section id="cookies" title="4. COOKIES & EINWILLIGUNG">
        <p>
          Beim ersten Besuch erscheint ein Cookie-Banner. Nicht notwendige
          Dienste werden erst nach Einwilligung geladen. Der Auswahlzustand
          wird ausschließlich für den laufenden Besuch im sessionStorage
          gespeichert — bei jedem neuen Besuch fragt der Banner erneut. Genutzt
          werden folgende Kategorien:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Notwendig:</strong> Session-Storage für Login-Token
            (pyclash_access_token) und Cookie-Consent-Zustand. Diese Daten sind
            für den Betrieb zwingend erforderlich (§ 25 Abs. 2 TDDDG).
          </li>
          <li>
            <strong>Statistik:</strong> <Red>aktuell nicht im Einsatz</Red>
          </li>
          <li>
            <strong>Marketing:</strong> <Red>aktuell nicht im Einsatz</Red>
          </li>
        </ul>
        <p>
          Du kannst deine Einwilligung jederzeit über den Footer-Link
          „Cookie-Einstellungen“ widerrufen. Ein Widerruf wirkt ab diesem
          Zeitpunkt für den laufenden Besuch.
        </p>
      </Section>

      <Section id="kontakt" title="5. E-MAIL-KONTAKT">
        <p>
          Es gibt kein Kontaktformular. Bei Kontaktaufnahme per E-Mail
          verarbeiten wir deine E-Mail-Adresse und die in der Nachricht
          enthaltenen Daten zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b
          bzw. f DSGVO). Die Daten werden gelöscht, sobald der Zweck entfällt
          und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </Section>

      <Section id="drittanbieter" title="6. DRITTANBIETER & FONTS">
        <p>
          Diese Website lädt <strong>keine</strong> externen Werbe- oder
          Tracking-Netzwerke. Konkret im Einsatz:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Schriften:</strong> werden über Next.js selbst gehostet
            (next/font) — es findet keine Verbindung zu Google-Fonts-Servern
            statt.
          </li>
          <li>
            <strong>Supabase:</strong> <Red>Projekt-Region/Eigentümer ergänzen</Red>{" "}
            — Datenbank und Auth-Dienst für Accounts und Spielstand.
          </li>
          <li>
            <strong>Code-Ausführung:</strong> eingereichter Python-Code wird{" "}
            <Red>Ausführungsumgebung, z. B. Piston auf eigener Infrastruktur</Red>{" "}
            ausgewertet.
          </li>
          <li>
            <strong>Externe Embeds (Maps, Videos):</strong> nicht vorhanden.
          </li>
        </ul>
      </Section>

      <Section id="speicherdauer" title="7. SPEICHERDAUER">
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es der
          jeweilige Zweck erfordert oder gesetzliche Pflichten es verlangen.
          Account-Daten (Username, E-Mail, Passwort-Hash, ELO, Match-Historie)
          bleiben bestehen, solange der Account existiert. Auf Wunsch kannst du
          die Löschung per E-Mail beantragen.
        </p>
      </Section>

      <Section id="rechte" title="8. RECHTE DER BETROFFENEN">
        <p>Du hast gegenüber dem Verantwortlichen folgende Rechte:</p>
        <ul className="list-disc pl-5">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>
            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) — z. B. über
            „Cookie-Einstellungen“
          </li>
        </ul>
        <p>
          Anfragen richte an{" "}
          <a href="mailto:Simeon5feil@gmail.com" className="link-pink">
            Simeon5feil@gmail.com
          </a>
          . Ein Auskunftsrecht besteht nicht, soweit es gegen gesetzliche
          Geheimhaltungspflichten verstößt oder andere Rechte Dritter
          entgegenstehen.
        </p>
      </Section>

      <Section id="aufsicht" title="9. BESCHWERDERECHT BEI EINER AUFSICHTSBEHÖRDE">
        <p>
          Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über
          die Verarbeitung deiner Daten zu beschweren (Art. 77 DSGVO).
          Zuständig ist insbesondere die Behörde deines Wohnsitzes:{" "}
          <Red>
            zuständige Aufsichtsbehörde (z. B. Der Landesbeauftragte für den
            Datenschutz und die Informationsfreiheit Rheinland-Pfalz)
          </Red>
          .
        </p>
      </Section>

      <Section id="ssl" title="10. SSL/TLS-VERSCHLÜSSELUNG">
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung
          (HTTPS). Eine verschlüsselte Verbindung erkennst du am Schloss-Symbol
          in deiner Browserzeile. Über die verschlüsselte Verbindung übertragene
          Daten können Dritte nicht mitlesen.
        </p>
      </Section>

      <Section id="aktualitaet" title="11. AKTUALITÄT UND ÄNDERUNG">
        <p>
          Diese Datenschutzerklärung ist aktuell datiert und kann bei
          Änderungen dieser Website oder gesetzlicher Vorgaben angepasst
          werden. Es gilt die jeweils veröffentlichte Fassung.
        </p>
        <p className="mt-6">
          <Link href="/" className="btn btn-line px-4 py-3">
            ZURÜCK ZUM START_
          </Link>
        </p>
      </Section>
    </main>
  );
}
