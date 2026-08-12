import { DownloadButtons } from '../components/DownloadButtons'
import { PageShell } from '../components/PageShell'
import { withBase } from '../utils'

const timerOptions = ['10', '15', '20', '30', '45', '60']
const planetStages = [
  ['尚未甦醒', 'heart-planet-outline.webp'],
  ['春', 'heart-planet-spring.webp'],
  ['春夏', 'heart-planet-spring-summer.webp'],
  ['春夏秋', 'heart-planet-spring-summer-autumn.webp'],
  ['四季圓滿', 'heart-planet-complete.webp'],
] as const

export function HomePage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={withBase('images/quiet-sloth-garden-hero-941.webp')} srcSet={`${withBase('images/quiet-sloth-garden-hero-480.webp')} 480w, ${withBase('images/quiet-sloth-garden-hero-941.webp')} 941w`} sizes="100vw" width="941" height="1672" fetchPriority="high" alt="靜靜樹懶在晨光花園的大樹下安靜靜坐" />
        <div className="hero-shade" />
        <div className="hero-content reveal">
          <p className="eyebrow">Quiet Sloth Meditation Journal</p>
          <h1 id="hero-title">慢慢坐下來，<br />回到自己。</h1>
          <p>不催促、不比較，也不要求每天打卡。<br />找一段屬於自己的時間，<br />讓靜靜陪你一起安靜坐一會兒。</p>
          <DownloadButtons light />
        </div>
        <a className="scroll-cue" href="#meet" aria-label="往下認識靜靜">慢慢往下</a>
      </section>

      <section className="section meet" id="meet" aria-labelledby="meet-title">
        <div className="section-copy reveal">
          <p className="eyebrow">Meet Quiet Sloth</p>
          <h2 id="meet-title">嗨，我是靜靜。</h2>
          <p>我不會提醒你今天還沒有完成任務，<br />也不會問你已經連續靜坐幾天。</p>
          <p>想坐的時候，就回來坐坐。<br />今天沒有來，也沒有關係。</p>
          <p className="gentle-line">我會一直在這裡。</p>
        </div>
        <div className="portrait-card reveal">
          <img loading="lazy" src={withBase('images/quiet-sloth-garden-hero-941.webp')} width="941" height="1672" alt="閉著眼睛、雙手輕放的靜靜樹懶" />
          <span>Just breathe.<br />Slow is beautiful.</span>
        </div>
      </section>

      <section className="section feature-story" id="features" aria-labelledby="timer-title">
        <div className="phone-frame reveal">
          <img loading="lazy" src={withBase('images/app-ready-screen.webp')} width="426" height="921" alt="靜坐前的準備開始畫面，提示先讓身體找到舒服的位置" />
        </div>
        <div className="section-copy reveal">
          <p className="eyebrow">Meditation Timer</p>
          <h2 id="timer-title">找一段屬於自己的時間。</h2>
          <p>不必準備得很完美。</p>
          <p>選一段適合自己的時間，<br />慢慢坐下，就可以開始。</p>
          <div className="time-pills" aria-label="可選擇的靜坐時間">
            {timerOptions.map((time) => <span key={time}>{time}<small>分鐘</small></span>)}
            <span>自訂<small>時間</small></span>
          </div>
          <ul className="soft-list">
            <li>精確倒數，讓時間安穩流過</li>
            <li>安靜分鐘，保留一段純粹的空白</li>
            <li>隱藏時間，不必一直看著數字</li>
          </ul>
        </div>
      </section>

      <section className="section reminder" aria-labelledby="reminder-title">
        <div className="reminder-orbit" aria-hidden="true"><span>靜</span></div>
        <div className="section-copy reveal">
          <p className="eyebrow">A Gentle Reminder</p>
          <h2 id="reminder-title">安靜坐著，<br />不需要一直看時間。</h2>
          <p>在支援的 iPhone 系統上，<br />可使用更可靠的完成提醒，<br />讓你在背景或鎖定畫面下，<br />也能知道靜坐時間已經結束。</p>
        </div>
      </section>

      <section className="section closing" aria-labelledby="closing-title">
        <div className="section-copy reveal">
          <p className="eyebrow">Gentle Closing</p>
          <h2 id="closing-title">坐完，不需要立刻站起來。</h2>
          <p>慢慢呼吸，感受身體，看看此刻的心情。</p>
          <p>想寫，就留下一句。<br />不想寫，也可以直接離開。</p>
        </div>
        <div className="closing-steps reveal" aria-label="收功步驟">
          {['慢慢呼吸', '感受身體', '此刻心情', '身體感受', '日記', '可略過'].map((step, index) => (
            <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>
          ))}
        </div>
      </section>

      <section className="section journal" aria-labelledby="journal-title">
        <div className="journal-visual reveal">
          <img loading="lazy" src={withBase('images/app-growth-overview.webp')} width="1000" height="800" alt="靜靜樹懶 App 的日曆、記錄與花園成長畫面概覽" />
        </div>
        <div className="section-copy reveal">
          <p className="eyebrow">Journal &amp; Calendar</p>
          <h2 id="journal-title">每一次安靜，<br />都留下痕跡。</h2>
          <p>有些日子，不需要記得多完整。</p>
          <p className="gentle-line">只要知道——<br />你曾經回來過。</p>
          <div className="feature-tags" aria-label="記錄功能">
            {['日曆', '靜坐紀錄', '搜尋', '收藏', '心情', '身體感受', '日記'].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="growth" id="growth" aria-labelledby="growth-title">
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">Heart-Light Growth</p>
            <h2 id="growth-title">時間沒有消失。<br />它慢慢長成了一道年輪。</h2>
            <p>每一次願意坐下來，都會在心裡留下一點心光。<br />不追趕，也不比較。</p>
          </div>
          <img className="ring-overview reveal" loading="lazy" src={withBase('images/heart-ring-overview.webp')} width="1200" height="800" alt="心光年輪從第零階到第十八階的四季成長概覽" />
          <div className="season-row" aria-label="心光年輪四季">
            {[
              ['春', 'heart-ring-spring.webp'],
              ['夏', 'heart-ring-summer.webp'],
              ['秋', 'heart-ring-autumn.webp'],
              ['冬', 'heart-ring-winter.webp'],
            ].map(([season, image]) => (
              <figure key={season}><img loading="lazy" src={withBase(`images/${image}`)} width="600" height="600" alt={`${season}季心光年輪`} /><figcaption>{season}</figcaption></figure>
            ))}
          </div>
          <p className="fine-print">每 300 分鐘，年輪向前生長一階。</p>
        </div>
      </section>

      <section className="planet" aria-labelledby="planet-title">
        <div className="stars" aria-hidden="true" />
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">Heart Planet</p>
            <h2 id="planet-title">四季走過，心光成星。</h2>
            <p>每一次坐下，都讓這個世界多了一點光。</p>
            <p>完成春、夏、秋、冬，<br />一顆屬於你的心光星球就會誕生。</p>
            <p className="planet-whisper">它不是獎盃。<br />它只是靜靜記得——<br />你曾經一次又一次，回到自己身邊。</p>
          </div>
          <div className="planet-stages" aria-label="心光星球五個成長階段">
            {planetStages.map(([stage, image], index) => (
              <figure key={stage} className={index === 4 ? 'planet-stage planet-stage--complete' : 'planet-stage'}>
                <img loading="lazy" src={withBase(`images/${image}`)} width="600" height="600" alt={`心光星球階段 ${index + 1}：${stage}`} />
                <figcaption><small>0{index + 1}</small>{stage}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section privacy-preview" aria-labelledby="privacy-title">
        <div className="privacy-symbol" aria-hidden="true"><span>心</span></div>
        <div className="section-copy reveal">
          <p className="eyebrow">Privacy · Local First</p>
          <h2 id="privacy-title">安靜，也包含隱私。</h2>
          <p>你的靜坐紀錄、日記與個人設定，<br />以裝置端保存為核心。</p>
          <p className="gentle-line">你的內心，<br />不需要交給另一個人閱讀。</p>
          <a className="text-link" href={withBase('privacy/')}>了解隱私權政策 <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="world" aria-labelledby="world-title">
        <div className="section section--stacked">
          <div className="section-heading reveal">
            <p className="eyebrow">Quiet Sloth World</p>
            <h2 id="world-title">靜靜的世界，<br />還會慢慢長大。</h2>
          </div>
          <div className="world-cards">
            <article><span>01</span><h3>Quiet Sloth App</h3><p>iPhone / Android</p><small>即將推出</small></article>
            <article><span>02</span><h3>靜靜 LINE 貼圖</h3><p>把一點安靜帶進日常對話。</p><small>即將推出</small></article>
            <article><span>03</span><h3>靜靜小物</h3><p>貼紙、玩偶與更多陪伴。</p><small>即將推出</small></article>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <img loading="lazy" src={withBase('images/quiet-sloth-garden-hero-941.webp')} width="941" height="1672" alt="晨光裡，靜靜樹懶在大樹下等待陪伴你靜坐" />
        <div className="final-cta__shade" />
        <div className="final-cta__content reveal">
          <h2 id="final-title">今天，要不要一起坐一會兒？</h2>
          <p>不需要做得很好。</p>
          <p>找一個舒服的位置，<br />就可以開始。</p>
          <p>靜靜會陪你。</p>
          <DownloadButtons light />
        </div>
      </section>
    </PageShell>
  )
}
