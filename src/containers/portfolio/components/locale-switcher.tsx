"use client";

import { LOCALES, type Locale } from "@/constants/locale-resume";
import { useLocale } from "@/context/locale-context";
import { cn } from "@/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  id: "ID",
  jp: "JP",
};

export const LocaleSwitcher = () => {
  const { locale, setLocale, ui } = useLocale();

  return (
    <div
      role="group"
      aria-label={ui.hero.languageLabel}
      className="fixed right-4 top-4 z-50 inline-flex items-center rounded-full border border-slate-200 bg-white/90 p-1 shadow-md backdrop-blur sm:right-6"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.12em] transition",
            locale === code
              ? "bg-theme text-white"
              : "text-slate-600 hover:text-slate-900",
          )}
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
};
