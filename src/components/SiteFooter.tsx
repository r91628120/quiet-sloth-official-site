import { downloadLinks, MIRACLE_MIND_URL, SUPPORT_EMAIL } from '../config/links'
import { locales, messages } from '../i18n'
import { withBase } from '../utils'
import { QuietSlothLogo } from './QuietSlothLogo'

const t = messages['zh-TW']

export function SiteFooter() {
  const contactHref = SUPPORT_EMAIL ? `mailto:${SUPPORT_EMAIL}` : withBase('support/')

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand__identity">
            <QuietSlothLogo placement="footer" />
            <div>
              <strong>{t.brand.name}</strong>
              <span>{t.brand.englishName}</span>
            </div>
          </div>
          {MIRACLE_MIND_URL ? <a href={MIRACLE_MIND_URL}>{t.brand.parent}</a> : <p>{t.brand.parent}</p>}
        </div>
        <div>
          <h2>網站</h2>
          <a href={withBase('guide/')}>使用說明</a>
          <a href={withBase('support/')}>支援中心</a>
          <a href={withBase('privacy/')}>隱私權政策</a>
          <a href={withBase('terms/')}>使用條款</a>
          <a href={withBase('health/')}>健康聲明</a>
          <a href={contactHref}>聯絡我們</a>
        </div>
        <div>
          <h2>下載</h2>
          {downloadLinks.map((link) =>
            link.href ? <a href={link.href} key={link.label}>{link.label}</a> : <span key={link.label}>{link.label} · 即將推出</span>,
          )}
        </div>
        <div>
          <h2>語言</h2>
          {locales.map((locale) => (
            <span key={locale.code} lang={locale.code}>
              {locale.label}{locale.ready ? '' : ' · Coming soon'}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Miracle Mind 奇蹟心靈.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}
