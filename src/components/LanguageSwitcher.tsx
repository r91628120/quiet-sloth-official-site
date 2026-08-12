import { locales, type LocaleCode } from '../i18n'
import { useLanguage } from '../i18n/useLanguage'

export function LanguageSwitcher() {
  const { currentLocale, setLocale, t } = useLanguage()
  const current = locales.find((locale) => locale.code === currentLocale) ?? locales[0]

  return (
    <label className="language-switcher">
      <span className="sr-only">{t('language.label')}</span>
      <span className="language-switcher__current" aria-hidden="true">{current.shortLabel}</span>
      <select
        aria-label={t('language.label')}
        value={currentLocale}
        onChange={(event) => setLocale(event.target.value as LocaleCode)}
      >
        {locales.map((locale) => <option key={locale.code} value={locale.code} lang={locale.code}>{locale.label}</option>)}
      </select>
    </label>
  )
}
