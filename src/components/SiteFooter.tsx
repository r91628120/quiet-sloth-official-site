import { downloadLinks, MIRACLE_MIND_URL, SUPPORT_EMAIL } from '../config/links'
import { locales } from '../i18n'
import { useLanguage } from '../i18n/useLanguage'
import { withBase } from '../utils'
import { QuietSlothLogo } from './QuietSlothLogo'

export function SiteFooter() {
  const { currentLocale, t } = useLanguage()
  const contactHref = SUPPORT_EMAIL ? `mailto:${SUPPORT_EMAIL}` : withBase('support/')
  const labelFor = (link: (typeof downloadLinks)[number]) => link.id === 'lineStickers' && currentLocale === 'en' ? 'LINE Stickers' : link.label

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand__identity">
            <QuietSlothLogo placement="footer" />
            <div>
              <strong>{t('brand.name')}</strong>
              <span>{t('brand.englishName')}</span>
            </div>
          </div>
          {MIRACLE_MIND_URL ? <a href={MIRACLE_MIND_URL}>{t('brand.parent')}</a> : <p>{t('brand.parent')}</p>}
        </div>
        <div>
          <h2>{t('footer.explore')}</h2>
          <a href={withBase('guide/')}>{t('footer.guide')}</a>
          <a href={withBase('support/')}>{t('footer.support')}</a>
          <a href={withBase('privacy/')}>{t('footer.privacy')}</a>
          <a href={withBase('terms/')}>{t('footer.terms')}</a>
          <a href={withBase('health/')}>{t('footer.health')}</a>
          <a href={contactHref}>{t('footer.contact')}</a>
        </div>
        <div>
          <h2>{t('footer.download')}</h2>
          {downloadLinks.map((link) =>
            link.href ? <a href={link.href} key={link.id}>{labelFor(link)}</a> : <span key={link.id}>{labelFor(link)} · {t('common.comingSoon')}</span>,
          )}
        </div>
        <div>
          <h2>{t('language.heading')}</h2>
          {locales.map((locale) => (
            <span key={locale.code} lang={locale.code}>
              {locale.label}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t('footer.rights1')}</span>
        <span>{t('footer.rights2')}</span>
      </div>
    </footer>
  )
}
