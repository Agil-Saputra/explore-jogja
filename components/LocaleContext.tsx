"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

import enMessages from "@/messages/en.json";
import idMessages from "@/messages/id.json";

export type Locale = "en" | "id";

const messages: Record<Locale, Record<string, unknown>> = {
  en: enMessages,
  id: idMessages,
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

/**
 * Resolve a dot-notated key from a nested object.
 * e.g. t("navbar.nav.home") → messages.navbar.nav.home
 */
function resolve(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // fallback: return the key itself
    }
  }
  return typeof current === "string" ? current : path;
}

const STORAGE_KEY = "explore-jogja-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");
  const [mounted, setMounted] = useState(false);

  // Read persisted locale on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "id") {
        setTimeout(() => setLocaleState(stored as Locale), 0);
      }
    } catch {
      // localStorage unavailable (SSR / private browsing) — use default
    }
    setTimeout(() => setMounted(true), 0);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    // Update <html lang="..."> attribute
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string): string => resolve(messages[locale], key),
    [locale]
  );

  // Update <html lang> on mount as well
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a <LocaleProvider>");
  }
  return ctx;
}
