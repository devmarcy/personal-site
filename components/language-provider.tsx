"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  labels,
  type Labels,
  type Locale,
} from "@/lib/i18n/labels";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Labels;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "site-locale";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in labels) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang =
      next === "pt-PT" ? "pt-PT" : next === "ja" ? "ja" : "en";
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: labels[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
