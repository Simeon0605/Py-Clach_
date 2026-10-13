"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerSchema } from "@/lib/schemas";
import { useAuth } from "@/components/auth-provider";
import { Panel, ErrorMessage, SuccessMessage } from "@/components/ui";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(form: FormData) {
    setError(null);
    const parsed = registerSchema.safeParse({
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
      confirm: form.get("confirm"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Ungültige Eingabe");
      return;
    }
    setPending(true);
    const err = await register(parsed.data.username, parsed.data.email, parsed.data.password);
    setPending(false);
    if (err) {
      setError(err);
      return;
    }
    setSuccess("Account erstellt! Willkommen in der Arena…");
    setTimeout(() => router.push("/problems"), 700);
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-12">
      <Panel className="p-8">
        <h1 className="text-2xl font-semibold text-ink">Account erstellen</h1>
        <p className="mt-2 text-sm text-dim">Start-ELO 1000. Passwort wird später serverseitig gehasht.</p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmit(new FormData(e.currentTarget));
          }}
        >
          <label className="block text-sm">
            <span className="text-dim">Username</span>
            <input
              name="username"
              className="mt-1 w-full rounded-lg border border-line bg-bg/60 px-3 py-2 outline-none focus:border-emerald-400"
              required
            />
          </label>
          <label className="block text-sm">
            <span className="text-dim">E-Mail</span>
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-line bg-bg/60 px-3 py-2 outline-none focus:border-emerald-400"
              required
            />
          </label>
          <label className="block text-sm">
            <span className="text-dim">Passwort</span>
            <input
              name="password"
              type="password"
              className="mt-1 w-full rounded-lg border border-line bg-bg/60 px-3 py-2 outline-none focus:border-emerald-400"
              required
            />
          </label>
          <label className="block text-sm">
            <span className="text-dim">Passwort bestätigen</span>
            <input
              name="confirm"
              type="password"
              className="mt-1 w-full rounded-lg border border-line bg-bg/60 px-3 py-2 outline-none focus:border-emerald-400"
              required
            />
          </label>
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          {success ? <SuccessMessage>{success}</SuccessMessage> : null}
          <button
            disabled={pending}
            className="w-full rounded-lg bg-neon py-2.5 font-medium text-bg disabled:opacity-60"
          >
            {pending ? "Erstelle…" : "Registrieren"}
          </button>
        </form>
        <p className="mt-4 text-sm text-dim">
          Schon dabei?{" "}
          <Link href="/login" className="text-neon">
            Login
          </Link>
        </p>
      </Panel>
    </main>
  );
}
