import { PageShell } from '../components/PageShell'
import { withBase } from '../utils'

const GOOGLE_GROUP_URL = 'https://groups.google.com/g/quiet-sloth-test'
const GOOGLE_PLAY_TEST_URL = 'https://play.google.com/apps/testing/com.miracle.quietsloth'

const testItems = [
  'App 是否能正常安裝與開啟',
  '第一次進入 App 的操作是否直覺',
  '靜坐計時、暫停與繼續',
  '完成靜坐與收功流程',
  '心情、身體感受與靜坐心得紀錄',
  '日曆與歷史紀錄',
  '心光年輪／心光成長',
  '七日靜坐提醒是否正常',
  '設定與語言切換',
  '關閉 App 後重新開啟，資料是否正常保留',
  '是否出現閃退、文字被裁切或按鈕無法操作',
  '是否有其他不自然或讓你困惑的使用體驗',
]

const fourteenDayPlan = [
  ['Day 1', '安裝 App、打開首頁，看看操作是否容易理解。'],
  ['Day 2', '完成一次 5～10 分鐘靜坐，留下簡單紀錄。'],
  ['Day 3', '設定一次今天稍後的靜坐提醒，確認是否收到通知。'],
  ['Day 4', '查看「記錄」頁，確認之前的紀錄是否存在。'],
  ['Day 5', '試試不同靜坐時間，例如 10、20 或 30 分鐘。'],
  ['Day 6', '試試精確倒數、安靜分鐘或隱藏時間。'],
  ['Day 7', '寫一則簡短心得，重新開啟 App 後確認仍存在。'],
  ['Day 8', '調整其中一天的提醒時間或開關。'],
  ['Day 9', '關閉 App 後，觀察預定提醒是否仍正常出現。'],
  ['Day 10', '留意提醒的聲音、震動與通知欄呈現。'],
  ['Day 11', '切換一個外語介面，看看是否有文字截斷或殘留。'],
  ['Day 12', '查看心光與累積紀錄是否正常。'],
  ['Day 13', '自由使用，不指定任務；有問題就記下來。'],
  ['Day 14', '再走一次完整流程：靜坐 → 完成 → 心得 → 查看紀錄。'],
] as const

const faqs = [
  ['為什麼 Google Play 還是顯示 NT$200？', '因為《靜靜樹懶靜坐日記》正式版是付費 App。受邀測試帳號會透過 Google Play 的授權測試流程完成「測試訂單」，商店仍可能顯示正式售價。'],
  ['測試時真的不會扣款嗎？', '已加入指定 Google 測試群組，並使用同一個 Google 帳號進入封閉測試後，付款頁應顯示 Google Play 的測試付款方式，例如「測試卡片，一律核准」。請確認畫面標示為測試訂單後再完成。'],
  ['我需要每天都測試嗎？', '不用。14 天期間有空時正常使用即可。我們更希望收到真實使用感受，而不是每天勉強完成任務。'],
  ['一定要完成全部 14 天任務嗎？', '不需要。下方任務只是建議，目的是幫你快速體驗主要功能。'],
  ['我要怎麼回饋？', '遇到看不懂、不方便、沒有提醒、畫面異常或其他問題，都可以透過支援中心告訴我們。'],
] as const

export function TestPage() {
  return (
    <PageShell>
      <header className="page-hero test-page__hero">
        <p className="eyebrow">ANDROID CLOSED TESTING</p>
        <h1>免費參加《靜靜樹懶》Android 封閉測試</h1>
        <p>一起實際使用 14 天，陪我們確認正式上架前的最後體驗。測試資格透過 Google 群組與 Google Play 授權測試管理。</p>
        <div className="test-hero-actions">
          <a className="primary-button test-button" href={GOOGLE_GROUP_URL} target="_blank" rel="noopener noreferrer">加入免費測試群組</a>
          <a className="test-secondary-button" href="#how-to-join">查看參加步驟</a>
        </div>
      </header>

      <main className="test-page">
        <section className="test-free-card" aria-labelledby="free-test-title">
          <div>
            <p className="eyebrow">FREE TEST ACCESS</p>
            <h2 id="free-test-title">正式版是付費 App，封閉測試資格免費</h2>
            <p>Google Play 商店仍可能顯示正式售價 <strong>NT$200</strong>，這是正常的。符合授權測試資格的帳號，付款頁會出現 Google Play 的測試付款方式；請確認畫面標示為測試訂單後再完成。</p>
          </div>
          <div className="test-free-badges" aria-label="測試重點">
            <span>Google Group 測試資格</span>
            <span>Google Play 封閉測試</span>
            <span>測試訂單不實際扣款</span>
          </div>
        </section>

        <div className="test-page__intro">
          <p>如果你願意，很歡迎成為我們的測試夥伴。</p>
          <p>不需要專業測試經驗，也不用每天花很多時間。像平常一樣靜坐、記錄、查看心得，再告訴我們哪裡不順就很好。</p>
        </div>

        <ol className="test-steps" id="how-to-join" aria-label="封閉測試參加步驟">
          <li className="test-step" id="step-1">
            <span className="test-step__number" aria-hidden="true">01</span>
            <div>
              <p className="eyebrow">STEP 1</p>
              <h2>加入「靜靜樹懶靜坐日記 APP 封閉測試團」</h2>
              <p>測試資格透過 Google 群組管理。請先加入群組，並使用你之後要在 Google Play 安裝 App 的同一個 Google 帳號。</p>
              <p className="test-step__detail"><strong>Google Group</strong><span>quiet-sloth-test@googlegroups.com</span></p>
              <a className="primary-button test-button" href={GOOGLE_GROUP_URL} target="_blank" rel="noopener noreferrer">加入封閉測試團</a>
            </div>
          </li>

          <li className="test-step" id="step-2">
            <span className="test-step__number" aria-hidden="true">02</span>
            <div>
              <p className="eyebrow">STEP 2</p>
              <h2>成為 Google Play 測試員</h2>
              <p>加入群組後，請使用同一個 Google 帳號開啟封閉測試頁面，按下「成為測試員」。</p>
              <a className="primary-button test-button" href={GOOGLE_PLAY_TEST_URL} target="_blank" rel="noopener noreferrer">前往 Google Play 封閉測試</a>
            </div>
          </li>

          <li className="test-step" id="step-3">
            <span className="test-step__number" aria-hidden="true">03</span>
            <div>
              <p className="eyebrow">STEP 3</p>
              <h2>確認「測試訂單」後安裝 App</h2>
              <p>進入 Google Play 後，商店仍可能顯示正式售價 NT$200。這不代表一定會實際扣款。</p>
              <p className="test-step__note"><strong>🌿 請先確認付款畫面</strong><br />符合授權測試資格的帳號，應可看到 Google Play 測試付款方式，例如「測試卡片，一律核准」或測試訂單相關提示。請確認是測試訂單後再完成安裝。</p>
              <p className="test-step__safety">若畫面只有你平常使用的信用卡／電信帳單等正式付款方式，且沒有任何測試字樣，請先不要付款，回到前一步確認是否使用了加入測試群組的同一個 Google 帳號。</p>
            </div>
          </li>

          <li className="test-step" id="step-4">
            <span className="test-step__number" aria-hidden="true">04</span>
            <div>
              <p className="eyebrow">STEP 4</p>
              <h2>開始體驗，告訴我們你的感受</h2>
              <ul className="test-checklist">
                {testItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="test-step__closing">
                <p>不需要特別努力測試，就像平常一樣使用它就好。</p>
                <p>如果有任何讓你困惑、不方便，或覺得「這裡如果再好一點就好了」的地方，都很歡迎告訴我們。</p>
              </div>
            </div>
          </li>
        </ol>

        <section className="test-plan" aria-labelledby="test-plan-title">
          <div className="test-plan__heading">
            <p className="eyebrow">14-DAY GENTLE TEST</p>
            <h2 id="test-plan-title">14 天，不用天天很用力</h2>
            <p>下面只是建議路線。每天花幾分鐘即可，也可以依自己的步調使用。</p>
          </div>
          <div className="test-plan__grid">
            {fourteenDayPlan.map(([day, task]) => (
              <article className="test-plan__item" key={day}>
                <span>{day}</span>
                <p>{task}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="test-faq" aria-labelledby="test-faq-title">
          <div className="test-plan__heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="test-faq-title">加入前，你可能會想問</h2>
          </div>
          <div className="test-faq__list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="test-feedback" aria-labelledby="test-feedback-title">
          <p className="eyebrow">YOUR THOUGHTS</p>
          <h2 id="test-feedback-title">把你的感受，輕輕告訴我們</h2>
          <p>遇到任何疑問，或有想和我們分享的使用感受，都可以前往支援中心。</p>
          <a className="primary-button test-button" href={withBase('support/')}>前往支援中心</a>
        </section>
      </main>
    </PageShell>
  )
}
