"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations } from "@/i18n/translations";

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof translations.en;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  setLocale: () => { },
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("acctual-lang") as Locale | null;
      if (saved === "en" || saved === "id") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage not available (SSR)
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("acctual-lang", l);
    } catch {
      // localStorage not available
    }
  };

  return (
    <LangContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);