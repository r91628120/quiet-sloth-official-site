import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { useLanguage } from '../i18n/useLanguage'

export function PageShell({ children }: { children: ReactNode }) {
  const { t } = useLanguage()
  return (
    <>
      <a className="skip-link" href="#main-content">{t('accessibility.skipToMain')}</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  )
}
