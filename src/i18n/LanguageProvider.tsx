import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, normalizeLocale, translate, type LocaleCode } from '.'
import { LanguageContext, type LanguageContextValue } from './language-context'

function readSavedLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY))
  } catch {
    return DEFAULT_LOCALE
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<LocaleCode>(readSavedLocale)

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale)
    } catch {
      // The current page can still switch languages when storage is unavailable.
    }
    document.documentElement.lang = currentLocale
  }, [currentLocale])

  const value = useMemo<LanguageContextValue>(() => ({
    currentLocale,
    setLocale: setCurrentLocale,
    t: (key) => translate(currentLocale, key),
  }), [currentLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
