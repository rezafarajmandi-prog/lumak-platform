"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  defaultLanguage,
  getDirection,
  translations,
  type Language,
  type Translations,
  type Direction,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: Direction;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR-safe initial state
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return defaultLanguage;

    const stored = localStorage.getItem("lumak-language") as Language | null;

    return stored ?? (navigator.language.startsWith("fa") ? "fa" : "en");
  });

  // sync HTML + localStorage
  useEffect(() => {
    const dir = getDirection(language);

    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    localStorage.setItem("lumak-language", language);
  }, [language]);

  // context value
  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      direction: getDirection(language),
      t: translations[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// hooks
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