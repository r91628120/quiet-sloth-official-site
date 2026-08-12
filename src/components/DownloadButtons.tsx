import { downloadLinks } from '../config/links'
import { useLanguage } from '../i18n/useLanguage'

export function DownloadButtons({ light = false }: { light?: boolean }) {
  const { currentLocale, t } = useLanguage()
  const labelFor = (link: (typeof downloadLinks)[number]) => link.id === 'lineStickers' && currentLocale === 'en' ? 'LINE Stickers' : link.label
  return (
    <div className={`download-buttons${light ? ' download-buttons--light' : ''}`} aria-label={t('footer.download')}>
      {downloadLinks.map((link) =>
        link.href ? (
          <a className="store-button" href={link.href} key={link.label} rel="noreferrer">
            <span>{labelFor(link)}</span>
          </a>
        ) : (
          <span className="store-button store-button--disabled" key={link.label} aria-disabled="true">
            <span>{labelFor(link)}</span>
            <small>{t('common.comingSoon')}</small>
          </span>
        ),
      )}
    </div>
  )
}
