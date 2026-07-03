"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "akka-cookie-consent";
const CONSENT_VERSION = 1;

export type ConsentChoices = {
  funcionales: boolean;
  analiticas: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentChoices & {
  version: number;
  updatedAt: string;
};

const DEFAULT_CHOICES: ConsentChoices = {
  funcionales: false,
  analiticas: false,
  marketing: false,
};

interface CookieConsentContextValue {
  /** null while reading localStorage on first render (avoids hydration flash) */
  hasDecided: boolean | null;
  choices: ConsentChoices;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (choices: ConsentChoices) => void;
  updateConsent: (partial: Partial<ConsentChoices>) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

function readStoredConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasDecided, setHasDecided] = useState<boolean | null>(null);
  const [choices, setChoices] = useState<ConsentChoices>(DEFAULT_CHOICES);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setChoices({
        funcionales: stored.funcionales,
        analiticas: stored.analiticas,
        marketing: stored.marketing,
      });
      setHasDecided(true);
    } else {
      setHasDecided(false);
    }
  }, []);

  const persist = useCallback((next: ConsentChoices) => {
    setChoices(next);
    setHasDecided(true);
    setIsPreferencesOpen(false);
    try {
      const toStore: StoredConsent = {
        ...next,
        version: CONSENT_VERSION,
        updatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    } catch {
      // localStorage unavailable (private mode, etc.) — consent still applies for this session
    }
  }, []);

  const acceptAll = useCallback(
    () => persist({ funcionales: true, analiticas: true, marketing: true }),
    [persist]
  );

  const rejectNonEssential = useCallback(
    () => persist({ ...DEFAULT_CHOICES }),
    [persist]
  );

  const savePreferences = useCallback(
    (next: ConsentChoices) => persist(next),
    [persist]
  );

  const updateConsent = useCallback(
    (partial: Partial<ConsentChoices>) =>
      persist({ ...choices, ...partial }),
    [choices, persist]
  );

  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  const value = useMemo(
    () => ({
      hasDecided,
      choices,
      isPreferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      updateConsent,
      openPreferences,
      closePreferences,
    }),
    [
      hasDecided,
      choices,
      isPreferencesOpen,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      updateConsent,
      openPreferences,
      closePreferences,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent debe usarse dentro de un CookieConsentProvider"
    );
  }
  return ctx;
}
