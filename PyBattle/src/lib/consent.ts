export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

export const CONSENT_KEY = "pyclash-consent";
export const CONSENT_EVENT = "pyclash:consent";
export const CONSENT_OPEN_EVENT = "pyclash:open-consent";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (typeof parsed.analytics !== "boolean") return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeConsent(
  analytics: boolean,
  marketing: boolean
): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    decidedAt: new Date().toISOString(),
  };
  sessionStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(
    new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state })
  );
  return state;
}

export function openConsentDialog() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

/** Consent-Hook für spätere nicht-notwendige Skripte:
 *  window.addEventListener(CONSENT_EVENT, (e) => { if (e.detail.analytics) … }) */
