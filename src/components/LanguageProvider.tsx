"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  defaultLanguage,
  getDirection,
  translations,
  type Language,
  type Translations,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: "rtl" | "ltr";
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // ✅ SSR-safe + localStorage init
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return defaultLanguage;

    const stored = localStorage.getItem("lumak-language") as Language | null;

    return stored ?? (navigator.language.startsWith("fa") ? "fa" : "en");
  });

  // sync DOM + localStorage
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = getDirection(language);

    localStorage.setItem("lumak-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      direction: getDirection(language) as "rtl" | "ltr",
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useTranslation must be used within LanguageProvider");
  return ctx.t;
}
