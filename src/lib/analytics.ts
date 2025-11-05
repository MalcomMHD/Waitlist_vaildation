// Lightweight GA4 event helper that works with gtag.js or GTM dataLayer
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params);
      return;
    }

    // Fallback: push to dataLayer if running through GTM
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: eventName, ...params });
      return;
    }

    // No GA found; silently ignore in development
    if (import.meta.env.DEV) {
      console.warn(`[GA4] trackEvent skipped: ${eventName}`, params);
    }
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error("[GA4] trackEvent error", e);
    }
  }
}