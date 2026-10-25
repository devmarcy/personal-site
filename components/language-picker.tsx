"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";
import { locales, type Locale } from "@/lib/i18n/labels";

export const LanguagePicker = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1.5 text-sm font-medium tracking-wide"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-muted-foreground/50" aria-hidden>
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "transition-colors",
              locale === code
                ? "text-bayside"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={locale === code}
          >
            {t.language[code as Locale]}
          </button>
        </span>
      ))}
    </div>
  );
};
