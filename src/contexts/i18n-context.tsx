"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import enTranslations from "@/locales/en.json";
import esTranslations from "@/locales/es.json";

export type Locale = "en" | "es";

export type TranslationKey = keyof typeof enTranslations;

type Translations = Record<string, string | Record<string, string>>;

interface I18nContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string;
  tHtml: (key: TranslationKey, replacements?: Record<string, string | number>) => ReactNode;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null;
    let browserLang: Locale | undefined;
    if (typeof window !== "undefined") {
      browserLang = navigator.language.split('-')[0] as Locale;
    }
    
    if (storedLocale && (storedLocale === 'en' || storedLocale === 'es')) {
      setLocaleState(storedLocale);
    } else if (browserLang === 'es') {
      setLocaleState('es');
    } else {
      setLocaleState('en');
    }
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("locale", locale);
      if (typeof document !== "undefined") {
        document.documentElement.lang = locale;
      }
    }
  }, [locale, isLoaded]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = useCallback(
    (key: TranslationKey, replacements?: Record<string, string | number>): string => {
      let translation = translations[locale]?.[key] || translations['en']?.[key] || String(key); 
      if (typeof translation !== 'string') { 
        console.warn(`Translation for key "${String(key)}" in locale "${locale}" is not a string or not found. Key: ${String(key)}, Found: ${JSON.stringify(translation)}`);
        translation = translations['en']?.[key]; 
        if (typeof translation !== 'string') {
            console.warn(`Translation for key "${String(key)}" in locale "en" is also not a string or not found. Returning key.`);
            return String(key);
        }
      }
      if (replacements) {
        Object.keys(replacements).forEach((placeholder) => {
          translation = (translation as string).replace(
            new RegExp(`{${placeholder}}`, "g"),
            String(replacements[placeholder])
          );
        });
      }
      return translation as string;
    },
    [locale]
  );

  const tHtml = useCallback(
    (key: TranslationKey, replacements?: Record<string, string | number>): ReactNode => {
      const rawHtml = t(key, replacements);
      const sanitizedHtml = rawHtml.replace(/<span class='([^']+)'>/g, "<span class=\"$1\">");

      if (rawHtml.includes("<span")) { 
        return <span dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
      }
      return rawHtml;
    },
    [t]
  );

  if (!isLoaded) {
    return null; 
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tHtml }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}