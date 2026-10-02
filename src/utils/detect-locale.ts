import type { Locale } from "@/constants/locale-resume";
import { LOCALES } from "@/constants/locale-resume";

export const LOCALE_STORAGE_KEY = "portfolio-locale";

const HTML_LANG: Record<Locale, string> = {
  en: "en",
  id: "id",
  jp: "ja",
};

export const isLocale = (value: string | null | undefined): value is Locale =>
  !!value && (LOCALES as string[]).includes(value);

export const detectLocaleFromNavigator = (
  language = typeof navigator !== "undefined" ? navigator.language : "en",
): Locale => {
  const normalized = language.toLowerCase();

  if (normalized.startsWith("id")) {
    return "id";
  }

  if (normalized.startsWith("ja")) {
    return "jp";
  }

  return "en";
};

export const readStoredLocale = (): Locale | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
};

export const persistLocale = (locale: Locale): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore quota / private-mode failures.
  }
};

export const resolveInitialLocale = (): Locale =>
  readStoredLocale() ?? detectLocaleFromNavigator();

export const applyDocumentLang = (locale: Locale): void => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = HTML_LANG[locale];
};
