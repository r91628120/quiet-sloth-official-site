import { downloadLinks } from '../config/links'

export function DownloadButtons({ light = false }: { light?: boolean }) {
  return (
    <div className={`download-buttons${light ? ' download-buttons--light' : ''}`} aria-label="下載選項">
      {downloadLinks.map((link) =>
        link.href ? (
          <a className="store-button" href={link.href} key={link.label} rel="noreferrer">
            <span>{link.label}</span>
          </a>
        ) : (
          <span className="store-button store-button--disabled" key={link.label} aria-disabled="true">
            <span>{link.label}</span>
            <small>即將推出</small>
          </span>
        ),
      )}
    </div>
  )
}
