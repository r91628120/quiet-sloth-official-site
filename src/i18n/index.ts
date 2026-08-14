import { en } from './locales/en'
import { ja } from './locales/ja'
import { ko } from './locales/ko'
import { th } from './locales/th'
import { zhTW } from './locales/zh-TW'
import { localeCodes, type LocaleCode, type PartialTranslationTree } from './types'

export { localeCodes, type LocaleCode }
export const DEFAULT_LOCALE: LocaleCode = 'zh-TW'
export const LOCALE_STORAGE_KEY = 'quiet-sloth-locale'

export const locales = [
  { code: 'zh-TW', label: '繁體中文', shortLabel: '繁中', ready: true },
  { code: 'en', label: 'English', shortLabel: 'EN', ready: true },
  { code: 'ja', label: '日本語', shortLabel: '日本語', ready: true },
  { code: 'ko', label: '한국어', shortLabel: '한국어', ready: true },
  { code: 'th', label: 'ภาษาไทย', shortLabel: 'ไทย', ready: true },
] as const

export const messages: Record<LocaleCode, PartialTranslationTree> = {
  'zh-TW': zhTW,
  en,
  ja,
  ko,
  th,
}

export function isLocaleCode(value: unknown): value is LocaleCode {
  return typeof value === 'string' && localeCodes.includes(value as LocaleCode)
}

export function normalizeLocale(value: unknown): LocaleCode {
  return isLocaleCode(value) ? value : DEFAULT_LOCALE
}

function findMessage(tree: PartialTranslationTree, key: string) {
  let current: string | PartialTranslationTree = tree
  for (const segment of key.split('.')) {
    if (typeof current === 'string' || !(segment in current)) return undefined
    current = current[segment]
  }
  return typeof current === 'string' && current.length > 0 ? current : undefined
}

export function translate(locale: LocaleCode, key: string) {
  return findMessage(messages[locale], key) ?? findMessage(zhTW, key) ?? ''
}
