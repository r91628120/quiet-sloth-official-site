import type { ReactNode } from 'react'
import { PageShell } from '../components/PageShell'
import { SUPPORT_EMAIL } from '../config/links'
import { withBase } from '../utils'
import { useLanguage } from '../i18n/useLanguage'

type ContentSection = {
  title: string
  body: ReactNode
}

function ContentPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: ContentSection[] }) {
  const { t } = useLanguage()
  return (
    <PageShell>
      <header className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="content-layout">
        <aside aria-label={t('content.pageNavigation')}>
          <p>{t('content.onThisPage')}</p>
          {sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>)}
        </aside>
        <div className="content-body">
          {sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  )
}

const Paragraphs = ({ children }: { children: ReactNode }) => <div className="prose">{children}</div>

export function SupportPage() {
  const { currentLocale, t } = useLanguage()
  const sentenceEnd = currentLocale === 'en' ? '.' : '。'
  const contact = SUPPORT_EMAIL ? <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> : <span>{t('content.supportEmailSoon')}</span>
  const sections: ContentSection[] = [
    { title: t('content.supportStartTitle'), body: <Paragraphs><p>{t('content.supportStartBody')}</p></Paragraphs> },
    { title: t('content.supportReminderTitle'), body: <Paragraphs><p>{t('content.supportReminderBody')}</p></Paragraphs> },
    { title: t('content.supportIphoneTitle'), body: <Paragraphs><p>{t('content.supportIphoneBody')}</p></Paragraphs> },
    { title: t('content.supportAndroidTitle'), body: <Paragraphs><p>{t('content.supportAndroidBody')}</p></Paragraphs> },
    { title: t('content.supportPauseTitle'), body: <Paragraphs><p>{t('content.supportPauseBody')}</p></Paragraphs> },
    { title: t('content.supportEarlyTitle'), body: <Paragraphs><p>{t('content.supportEarlyBody')}</p></Paragraphs> },
    { title: t('content.supportJournalTitle'), body: <Paragraphs><p>{t('content.supportJournalBody')}</p></Paragraphs> },
    { title: t('content.supportBackupTitle'), body: <Paragraphs><p>{t('content.supportBackupBody')}</p></Paragraphs> },
    { title: t('content.supportFaqTitle'), body: <Paragraphs><h3>{t('content.supportFaqDailyQuestion')}</h3><p>{t('content.supportFaqDailyAnswer')}</p><h3>{t('content.supportFaqJournalQuestion')}</h3><p>{t('content.supportFaqJournalAnswer')}</p><h3>{t('content.supportFaqMedicalQuestion')}</h3><p>{t('content.supportFaqMedicalAnswer')}<a href={withBase('health/')}>{t('content.supportFaqMedicalLink')}</a>{sentenceEnd}</p></Paragraphs> },
    { title: t('content.supportContactTitle'), body: <Paragraphs><p>{t('content.supportContactLine1')}{contact}{sentenceEnd}</p><p>{t('content.supportContactLine2')}</p></Paragraphs> },
  ]
  return <ContentPage eyebrow={t('content.supportEyebrow')} title={t('content.supportTitle')} intro={t('content.supportIntro')} sections={sections} />
}

export function GuidePage() {
  const { t } = useLanguage()
  const sections: ContentSection[] = [
    { title: t('content.guideFirstTitle'), body: <Paragraphs><p>{t('content.guideFirstBody')}</p></Paragraphs> },
    { title: t('content.guideDuringTitle'), body: <Paragraphs><p>{t('content.guideDuringBody')}</p></Paragraphs> },
    { title: t('content.guideFinishTitle'), body: <Paragraphs><p>{t('content.guideFinishBody')}</p></Paragraphs> },
    { title: t('content.guideRecordsTitle'), body: <Paragraphs><p>{t('content.guideRecordsBody')}</p></Paragraphs> },
    { title: t('content.guideGrowthTitle'), body: <Paragraphs><p>{t('content.guideGrowthBody')}</p></Paragraphs> },
    { title: t('content.guideDataTitle'), body: <Paragraphs><p>{t('content.guideDataBody')}</p></Paragraphs> },
  ]
  return <ContentPage eyebrow={t('content.guideEyebrow')} title={t('content.guideTitle')} intro={t('content.guideIntro')} sections={sections} />
}

// LEGAL COPY REVIEW REQUIRED: must be reviewed against the final shipping app and jurisdiction before production publication.
export function PrivacyPage() {
  const { t } = useLanguage()
  const sections: ContentSection[] = [
    { title: t('content.privacyPrincipleTitle'), body: <Paragraphs><p>{t('content.privacyPrincipleBody')}</p></Paragraphs> },
    { title: t('content.privacyDeviceTitle'), body: <Paragraphs><p>{t('content.privacyDeviceBody')}</p></Paragraphs> },
    { title: t('content.privacyUseTitle'), body: <Paragraphs><p>{t('content.privacyUseBody')}</p></Paragraphs> },
    { title: t('content.privacyTransferTitle'), body: <Paragraphs><p>{t('content.privacyTransferBody')}</p></Paragraphs> },
    { title: t('content.privacyCloudTitle'), body: <Paragraphs><p>{t('content.privacyCloudBody')}</p></Paragraphs> },
    { title: t('content.privacyNotificationTitle'), body: <Paragraphs><p>{t('content.privacyNotificationBody')}</p></Paragraphs> },
    { title: t('content.privacySecurityTitle'), body: <Paragraphs><p>{t('content.privacySecurityBody')}</p></Paragraphs> },
    { title: t('content.privacyUpdateTitle'), body: <Paragraphs><p>{t('content.privacyUpdateBody')}</p><p className="legal-date">{t('content.draftDate')}</p></Paragraphs> },
  ]
  return <ContentPage eyebrow={t('content.privacyEyebrow')} title={t('content.privacyTitle')} intro={t('content.privacyIntro')} sections={sections} />
}

// LEGAL COPY REVIEW REQUIRED: this product copy is a structured draft, not jurisdiction-specific legal advice.
export function TermsPage() {
  const { t } = useLanguage()
  const sections: ContentSection[] = [
    { title: t('content.termsAcceptanceTitle'), body: <Paragraphs><p>{t('content.termsAcceptanceBody')}</p></Paragraphs> },
    { title: t('content.termsNatureTitle'), body: <Paragraphs><p>{t('content.termsNatureBody')}</p></Paragraphs> },
    { title: t('content.termsUseTitle'), body: <Paragraphs><p>{t('content.termsUseBody')}</p></Paragraphs> },
    { title: t('content.termsIpTitle'), body: <Paragraphs><p>{t('content.termsIpBody')}</p></Paragraphs> },
    { title: t('content.termsChangesTitle'), body: <Paragraphs><p>{t('content.termsChangesBody')}</p></Paragraphs> },
    { title: t('content.termsLiabilityTitle'), body: <Paragraphs><p>{t('content.termsLiabilityBody')}</p></Paragraphs> },
    { title: t('content.termsContactTitle'), body: <Paragraphs><p>{t('content.termsContactBody')}</p><p className="legal-date">{t('content.draftDate')}</p></Paragraphs> },
  ]
  return <ContentPage eyebrow={t('content.termsEyebrow')} title={t('content.termsTitle')} intro={t('content.termsIntro')} sections={sections} />
}

export function HealthPage() {
  const { t } = useLanguage()
  const sections: ContentSection[] = [
    { title: t('content.healthPositionTitle'), body: <Paragraphs><p>{t('content.healthPositionBody')}</p></Paragraphs> },
    { title: t('content.healthBodyTitle'), body: <Paragraphs><p>{t('content.healthBodyBody')}</p></Paragraphs> },
    { title: t('content.healthHelpTitle'), body: <Paragraphs><p>{t('content.healthHelpBody')}</p></Paragraphs> },
    { title: t('content.healthEmotionTitle'), body: <Paragraphs><p>{t('content.healthEmotionBody')}</p></Paragraphs> },
  ]
  return <ContentPage eyebrow={t('content.healthEyebrow')} title={t('content.healthTitle')} intro={t('content.healthIntro')} sections={sections} />
}

export function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <PageShell>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>{t('content.notFoundTitle')}</h1>
        <p>{t('content.notFoundDescription')}</p>
        <a className="primary-button" href={withBase()}>{t('common.backHome')}</a>
      </section>
    </PageShell>
  )
}
