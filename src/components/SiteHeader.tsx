import { messages } from '../i18n'
import { withBase } from '../utils'
import { QuietSlothLogo } from './QuietSlothLogo'

const t = messages['zh-TW']

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href={withBase()}>
        <QuietSlothLogo placement="header" />
        <span>
          <strong>{t.brand.name}</strong>
          <small>{t.brand.englishName}</small>
        </span>
      </a>
      <nav aria-label="主要導覽">
        <a href={`${withBase()}#features`}>{t.nav.features}</a>
        <a href={`${withBase()}#growth`}>{t.nav.growth}</a>
        <a href={withBase('privacy/')}>{t.nav.privacy}</a>
        <a href={withBase('guide/')}>{t.nav.guide}</a>
        <a className="nav-support" href={withBase('support/')}>{t.nav.support}</a>
      </nav>
    </header>
  )
}
