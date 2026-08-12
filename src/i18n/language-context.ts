import { createContext } from 'react'
import type { LocaleCode } from '.'

export type LanguageContextValue = {
  currentLocale: LocaleCode
  setLocale: (locale: LocaleCode) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
