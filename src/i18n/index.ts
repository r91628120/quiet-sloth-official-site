import { zhTW } from './locales/zh-TW'

export const locales = [
  { code: 'zh-TW', label: '繁體中文', ready: true },
  { code: 'en', label: 'English', ready: false },
  { code: 'ja', label: '日本語', ready: false },
  { code: 'ko', label: '한국어', ready: false },
  { code: 'th', label: 'ไทย', ready: false },
] as const

export const messages = { 'zh-TW': zhTW } as const
export type LocaleCode = (typeof locales)[number]['code']
