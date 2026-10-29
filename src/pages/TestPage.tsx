import { PageShell } from '../components/PageShell'
import { GOOGLE_PLAY_URL } from '../config/links'
import { useLanguage } from '../i18n/useLanguage'

export function TestPage() {
  const { t } = useLanguage()

  return (
    <PageShell>
      <header className="page-hero test-page__hero">
        <p className="eyebrow">{t('testRelease.eyebrow')}</p>
        <h1>{t('testRelease.title')}</h1>
        <p>{t('testRelease.description')}</p>
        <div className="test-hero-actions">
          <a className="primary-button test-button" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">{t('testRelease.cta')}</a>
        </div>
      </header>

      <main className="test-page">
        <section className="test-free-card" aria-labelledby="release-title">
          <div>
            <p className="eyebrow">{t('testRelease.cardEyebrow')}</p>
            <h2 id="release-title">{t('testRelease.cardTitle')}</h2>
            <p>{t('testRelease.cardDescription')}</p>
          </div>
          <div className="test-free-badges" aria-label="正式版本資訊">
            <span>{t('testRelease.androidBadge')}</span>
            <span>{t('testRelease.googlePlayBadge')}</span>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
