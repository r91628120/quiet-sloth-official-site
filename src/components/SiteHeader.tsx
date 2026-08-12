import { useLanguage } from '../i18n/useLanguage'
import { withBase } from '../utils'
import { LanguageSwitcher } from './LanguageSwitcher'
import { QuietSlothLogo } from './QuietSlothLogo'

export function SiteHeader() {
  const { t } = useLanguage()
  return (
    <header className="site-header">
      <a className="brand" href={withBase()}>
        <QuietSlothLogo placement="header" />
        <span>
          <strong>{t('brand.name')}</strong>
          <small>{t('brand.englishName')}</small>
        </span>
      </a>
      <div className="header-actions">
        <nav aria-label={t('nav.label')}>
          <a href={`${withBase()}#features`}>{t('nav.features')}</a>
          <a href={`${withBase()}#growth`}>{t('nav.growth')}</a>
          <a href={withBase('privacy/')}>{t('nav.privacy')}</a>
          <a href={withBase('guide/')}>{t('nav.guide')}</a>
          <a className="nav-support" href={withBase('support/')}>{t('nav.support')}</a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
