import { DownloadButtons } from '../components/DownloadButtons'
import { PageShell } from '../components/PageShell'
import { withBase } from '../utils'
import { useLanguage } from '../i18n/useLanguage'

const timerOptions = ['10', '15', '20', '30', '45', '60']
export function HomePage() {
  const { t } = useLanguage()
  const planetStages = [
    [t('home.planetStage1'), 'heart-planet-outline.webp'],
    [t('home.planetStage2'), 'heart-planet-spring.webp'],
    [t('home.planetStage3'), 'heart-planet-spring-summer.webp'],
    [t('home.planetStage4'), 'heart-planet-spring-summer-autumn.webp'],
    [t('home.planetStage5'), 'heart-planet-complete.webp'],
  ] as const
  return (
    <PageShell>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={withBase('images/quiet-sloth-garden-hero-941.webp')} srcSet={`${withBase('images/quiet-sloth-garden-hero-480.webp')} 480w, ${withBase('images/quiet-sloth-garden-hero-941.webp')} 941w`} sizes="100vw" width="941" height="1672" fetchPriority="high" alt={t('home.heroImageAlt')} />
        <div className="hero-shade" />
        <div className="hero-content reveal">
          <p className="eyebrow">{t('home.heroEyebrow')}</p>
          <h1 id="hero-title">{t('home.heroTitleLine1')}<br />{t('home.heroTitleLine2')}</h1>
          <p>{t('home.heroDescriptionLine1')}<br />{t('home.heroDescriptionLine2')}<br />{t('home.heroDescriptionLine3')}</p>
          <DownloadButtons light />
        </div>
        <a className="scroll-cue" href="#meet" aria-label={t('home.scrollLabel')}>{t('home.scrollText')}</a>
      </section>

      <section className="section meet" id="meet" aria-labelledby="meet-title">
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.meetEyebrow')}</p>
          <h2 id="meet-title">{t('home.meetTitle')}</h2>
          <p>{t('home.meetDescriptionLine1')}<br />{t('home.meetDescriptionLine2')}</p>
          <p>{t('home.meetDescriptionLine3')}<br />{t('home.meetDescriptionLine4')}</p>
          <p className="gentle-line">{t('home.meetQuote')}</p>
        </div>
        <div className="portrait-card reveal">
          <img loading="lazy" src={withBase('images/quiet-sloth-garden-hero-941.webp')} width="941" height="1672" alt={t('home.meetImageAlt')} />
          <span>Just breathe.<br />Slow is beautiful.</span>
        </div>
      </section>

      <section className="section feature-story" id="features" aria-labelledby="timer-title">
        <div className="phone-frame reveal">
          <img loading="lazy" src={withBase('images/app-ready-screen.webp')} width="426" height="921" alt={t('home.timerImageAlt')} />
        </div>
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.timerEyebrow')}</p>
          <h2 id="timer-title">{t('home.timerTitle')}</h2>
          <p>{t('home.timerDescription1')}</p>
          <p>{t('home.timerDescriptionLine2')}<br />{t('home.timerDescriptionLine3')}</p>
          <div className="time-pills" aria-label={t('home.timerLabel')}>
            {timerOptions.map((time) => <span key={time}>{time}<small>{t('home.minutes')}</small></span>)}
            <span>{t('home.custom')}<small>{t('home.time')}</small></span>
          </div>
          <ul className="soft-list">
            <li>{t('home.timerBenefit1')}</li>
            <li>{t('home.timerBenefit2')}</li>
            <li>{t('home.timerBenefit3')}</li>
          </ul>
        </div>
      </section>

      <section className="section reminder" aria-labelledby="reminder-title">
        <div className="reminder-orbit" aria-hidden="true"><span>{t('home.reminderSymbol')}</span></div>
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.reminderEyebrow')}</p>
          <h2 id="reminder-title"><span className="desktop-heading-line">{t('home.reminderTitleLine1')}</span><br className="desktop-heading-break" />{' '}<span className="desktop-heading-line">{t('home.reminderTitleLine2')}</span></h2>
          <p>{t('home.reminderDescriptionLine1')}<br />{t('home.reminderDescriptionLine2')}<br />{t('home.reminderDescriptionLine3')}<br />{t('home.reminderDescriptionLine4')}</p>
        </div>
      </section>

      <section className="section closing" aria-labelledby="closing-title">
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.closingEyebrow')}</p>
          <h2 id="closing-title">{t('home.closingTitle')}</h2>
          <p>{t('home.closingDescription1')}</p>
          <p>{t('home.closingDescriptionLine2')}<br />{t('home.closingDescriptionLine3')}</p>
        </div>
        <div className="closing-steps reveal" aria-label={t('home.closingStepsLabel')}>
          {['closingStep1', 'closingStep2', 'closingStep3', 'closingStep4', 'closingStep5', 'closingStep6'].map((stepKey, index) => (
            <div key={stepKey}><span>{String(index + 1).padStart(2, '0')}</span><p>{t(`home.${stepKey}`)}</p></div>
          ))}
        </div>
      </section>

      <section className="section journal" aria-labelledby="journal-title">
        <div className="journal-visual reveal">
          <img loading="lazy" src={withBase('images/quiet-sloth-mobile-guide.png')} width="1024" height="1536" alt={t('home.journalImageAlt')} />
        </div>
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.journalEyebrow')}</p>
          <h2 id="journal-title"><span className="desktop-heading-line">{t('home.journalTitleLine1')}</span><br className="desktop-heading-break" />{' '}<span className="desktop-heading-line">{t('home.journalTitleLine2')}</span></h2>
          <p>{t('home.journalDescription')}</p>
          <p className="gentle-line">{t('home.journalQuoteLine1')}<br />{t('home.journalQuoteLine2')}</p>
          <div className="feature-tags" aria-label={t('home.journalFeaturesLabel')}>
            {['journalTag1', 'journalTag2', 'journalTag3', 'journalTag4', 'journalTag5', 'journalTag6', 'journalTag7'].map((tag) => <span key={tag}>{t(`home.${tag}`)}</span>)}
          </div>
        </div>
      </section>

      <section className="growth" id="growth" aria-labelledby="growth-title">
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">{t('home.growthEyebrow')}</p>
            <h2 id="growth-title">{t('home.growthTitleLine1')}<br />{t('home.growthTitleLine2')}</h2>
            <p>{t('home.growthDescriptionLine1')}<br />{t('home.growthDescriptionLine2')}</p>
          </div>
          <img className="ring-overview reveal" loading="lazy" src={withBase('images/heart-ring-overview.webp')} width="1200" height="800" alt={t('home.growthOverviewAlt')} />
          <div className="season-row" aria-label={t('home.growthSeasonsLabel')}>
            {[
              [t('home.spring'), 'heart-ring-spring.webp'],
              [t('home.summer'), 'heart-ring-summer.webp'],
              [t('home.autumn'), 'heart-ring-autumn.webp'],
              [t('home.winter'), 'heart-ring-winter.webp'],
            ].map(([season, image]) => (
              <figure key={season}><img loading="lazy" src={withBase(`images/${image}`)} width="600" height="600" alt={`${season}${t('home.seasonAltSuffix')}`} /><figcaption>{season}</figcaption></figure>
            ))}
          </div>
          <p className="fine-print">{t('home.growthFinePrint')}</p>
        </div>
      </section>

      <section className="planet" aria-labelledby="planet-title">
        <div className="stars" aria-hidden="true" />
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">{t('home.planetEyebrow')}</p>
            <h2 id="planet-title">{t('home.planetTitle')}</h2>
            <p>{t('home.planetDescription1')}</p>
            <p>{t('home.planetDescriptionLine2')}<br />{t('home.planetDescriptionLine3')}</p>
            <p className="planet-whisper">{t('home.planetWhisper1')}<br />{t('home.planetWhisper2')}<br />{t('home.planetWhisper3')}</p>
          </div>
          <div className="planet-stages" aria-label={t('home.planetStagesLabel')}>
            {planetStages.map(([stage, image], index) => (
              <figure key={stage} className={index === 4 ? 'planet-stage planet-stage--complete' : 'planet-stage'}>
                <img loading="lazy" src={withBase(`images/${image}`)} width="600" height="600" alt={`${t('home.planetImageAltPrefix')} ${index + 1}：${stage}`} />
                <figcaption><small>0{index + 1}</small>{stage}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section privacy-preview" aria-labelledby="privacy-title">
        <div className="privacy-symbol" aria-hidden="true"><span>{t('home.privacySymbol')}</span></div>
        <div className="section-copy reveal">
          <p className="eyebrow">{t('home.privacyEyebrow')}</p>
          <h2 id="privacy-title"><span className="desktop-heading-line">{t('home.privacyTitleLine1')}</span><br className="desktop-heading-break" />{' '}<span className="desktop-heading-line">{t('home.privacyTitleLine2')}</span></h2>
          <p>{t('home.privacyDescriptionLine1')}<br />{t('home.privacyDescriptionLine2')}</p>
          <p className="gentle-line">{t('home.privacyQuoteLine1')}<br />{t('home.privacyQuoteLine2')}</p>
          <a className="text-link" href={withBase('privacy/')}>{t('home.privacyLink')} <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="world" aria-labelledby="world-title">
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">{t('home.worldEyebrow')}</p>
            <h2 id="world-title">{t('home.worldTitleLine1')}<br />{t('home.worldTitleLine2')}</h2>
          </div>
          <div className="world-cards">
            <article><span>01</span><h3>{t('home.worldApp')}</h3><p>iPhone / Android</p><small>{t('common.comingSoon')}</small></article>
            <article><span>02</span><h3>{t('home.worldStickers')}</h3><p>{t('home.worldStickersDescription')}</p><small>{t('common.comingSoon')}</small></article>
            <article><span>03</span><h3>{t('home.worldGoods')}</h3><p>{t('home.worldGoodsDescription')}</p><small>{t('common.comingSoon')}</small></article>
          </div>
        </div>
      </section>

      <section className="section philosophy" aria-labelledby="philosophy-title">
        <div className="section-heading reveal">
          <p className="eyebrow">{t('home.philosophyEyebrow')}</p>
          <h2 id="philosophy-title">{t('home.philosophyTitle')}</h2>
          <p>{t('home.philosophyDescriptionLine1')}<br />{t('home.philosophyDescriptionLine2')}</p>
        </div>
        <div className="philosophy-grid">
          <article className="philosophy-card reveal">
            <span className="philosophy-card__number" aria-hidden="true">01</span>
            <h3>{t('home.philosophyCard1Title')}</h3>
            <p>{t('home.philosophyCard1Description1')}</p>
            <p>{t('home.philosophyCard1Description2')}</p>
            <p>{t('home.philosophyCard1Description3')}</p>
            <p>{t('home.philosophyCard1Description4')}</p>
          </article>
          <article className="philosophy-card reveal">
            <span className="philosophy-card__number" aria-hidden="true">02</span>
            <h3>{t('home.philosophyCard2Title')}</h3>
            <p>{t('home.philosophyCard2Description1')}</p>
            <p>{t('home.philosophyCard2Description2')}</p>
            <p>{t('home.philosophyCard2Description3')}</p>
            <p>{t('home.philosophyCard2Description4')}</p>
            <p className="philosophy-card__emphasis">{t('home.philosophyCard2Emphasis')}</p>
          </article>
          <article className="philosophy-card reveal">
            <span className="philosophy-card__number" aria-hidden="true">03</span>
            <h3>{t('home.philosophyCard3Title')}</h3>
            <p>{t('home.philosophyCard3Description1')}</p>
            <p>{t('home.philosophyCard3Description2')}</p>
            <p>{t('home.philosophyCard3Description3')}</p>
            <p>{t('home.philosophyCard3Description4')}</p>
            <div className="philosophy-flow" aria-label={t('home.philosophyCard3FlowLabel')}>
              {[t('home.philosophyCard3Flow1'), t('home.philosophyCard3Flow2'), t('home.philosophyCard3Flow3'), t('home.philosophyCard3Flow4')].map((step, index) => (
                <span key={step}>{index > 0 && <i aria-hidden="true">→</i>}{step}</span>
              ))}
            </div>
            <p className="philosophy-card__emphasis">{t('home.philosophyCard3Emphasis')}</p>
          </article>
          <article className="philosophy-card reveal">
            <span className="philosophy-card__number" aria-hidden="true">04</span>
            <h3>{t('home.philosophyCard4Title')}</h3>
            <p>{t('home.philosophyCard4Description1')}</p>
            <p>{t('home.philosophyCard4Description2')}</p>
            <p>{t('home.philosophyCard4Description3')}</p>
            <p>{t('home.philosophyCard4Description4')}</p>
            <p className="philosophy-card__emphasis">{t('home.philosophyCard4Emphasis')}</p>
          </article>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <img loading="lazy" src={withBase('images/quiet-sloth-garden-hero-941.webp')} width="941" height="1672" alt={t('home.finalImageAlt')} />
        <div className="final-cta__shade" />
        <div className="final-cta__content reveal">
          <h2 id="final-title">{t('home.finalTitle')}</h2>
          <p>{t('home.finalDescription1')}</p>
          <p>{t('home.finalDescriptionLine2')}<br />{t('home.finalDescriptionLine3')}</p>
          <p>{t('home.finalClosing')}</p>
          <DownloadButtons light />
        </div>
      </section>
    </PageShell>
  )
}
