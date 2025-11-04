// Lightweight GA helper utilities
// Safe to call in server or client; no-ops if GA is unavailable.

export type GAEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params: GAEventParams = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (!gtag) return;
  try {
    gtag('event', action, params);
  } catch {
    // Swallow to avoid impacting UX
  }
}

export function updateConsent(consent: Partial<Record<string, 'granted' | 'denied'>>): void {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (!gtag) return;
  try {
    gtag('consent', 'update', consent);
  } catch {
    // Ignore errors
  }
}