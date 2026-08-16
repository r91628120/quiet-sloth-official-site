export const localeCodes = ['zh-TW', 'en', 'ja', 'ko', 'th'] as const

export type LocaleCode = (typeof localeCodes)[number]
export type TranslationTree = { readonly [key: string]: string | TranslationTree }
export type PartialTranslationTree = { readonly [key: string]: string | PartialTranslationTree }
export type TranslationShape<T> = {
  readonly [K in keyof T as K extends `philosophy${string}` ? never : K]: T[K] extends string ? string : TranslationShape<T[K]>
} & {
  readonly [K in keyof T as K extends `philosophy${string}` ? K : never]?: T[K] extends string ? string : TranslationShape<T[K]>
}
