// src/components/LanguageProvider.tsx
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
  type Direction,
  type Language,
  type Translations,
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
  initialLocale, // پراپ جدید
}: {
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  // ✅ مستقیماً از مقدار سرور استفاده می‌کنیم
  const [language, setLanguage] = useState<Language>(
    initialLocale ?? defaultLanguage
  );

  useEffect(() => {
    const dir = getDirection(language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem("lumak-language", language);
  }, [language]);

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

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx.t;
}