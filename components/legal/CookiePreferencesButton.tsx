"use client";

import { useCookieConsent } from "@/lib/cookie-consent";

export default function CookiePreferencesButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      onClick={openPreferences}
      className="btn btn-primary"
      style={{ padding: "10px 20px", fontSize: 14 }}
    >
      Configurar cookies
    </button>
  );
}
