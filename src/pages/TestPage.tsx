import { PageShell } from '../components/PageShell'
import { withBase } from '../utils'

const GOOGLE_PLAY_TEST_URL = 'https://play.google.com/apps/testing/com.miracle.quietsloth'

const testItems = [
  'App 是否能正常安裝與開啟',
  '第一次進入 App 的操作',
  '靜坐計時、暫停與繼續',
  '完成靜坐',
  '心情與身體感受紀錄',
  '靜坐心得／日記',
  '日曆與歷史紀錄',
  '心光年輪／心光成長',
  '設定與語言切換',
  '關閉 App 後重新開啟，資料是否正常保留',
  '是否出現閃退、文字被裁切或按鈕無法操作',
  '是否有其他不自然的使用體驗',
]

export function TestPage() {
  return (
    <PageShell>
      <header className="page-hero test-page__hero">
        <p className="eyebrow">CLOSED TESTING</p>
        <h1>一起陪靜靜走最後一段路</h1>
        <p>《靜靜樹懶靜坐日記》目前正在進行 Android 正式上架前的 Google Play 封閉測試。</p>
      </header>

      <div className="test-page">
        <div className="test-page__intro">
          <p>如果你願意，很歡迎成為我們的測試夥伴。</p>
          <p>實際使用 App，陪我們一起確認靜坐、日記、心光成長與其他功能，讓靜靜在正式與大家見面以前，變得更加穩定、安心。</p>
        </div>

        <ol className="test-steps" aria-label="封閉測試參加步驟">
          <li className="test-step" id="step-1">
            <span className="test-step__number" aria-hidden="true">01</span>
            <div>
              <p className="eyebrow">STEP 1</p>
              <h2>加入「靜靜樹懶靜坐日記 APP 封閉測試團」</h2>
              <p>測試資格目前透過 Google 群組管理。請先加入封閉測試團，再進入 Google Play 測試頁面。</p>
              <p className="test-step__detail"><strong>Google Group</strong><span>quiet-sloth-test@googlegroups.com</span></p>
              <a className="primary-button test-button" href="https://groups.google.com/g/quiet-sloth-test" target="_blank" rel="noopener noreferrer">加入封閉測試團</a>
            </div>
          </li>

          <li className="test-step" id="step-2">
            <span className="test-step__number" aria-hidden="true">02</span>
            <div>
              <p className="eyebrow">STEP 2</p>
              <h2>加入 Google Play 封閉測試</h2>
              <p>加入測試團後，請使用同一個 Google 帳號開啟 Google Play 測試頁面，並選擇加入測試。</p>
              <a className="primary-button test-button" href={GOOGLE_PLAY_TEST_URL} target="_blank" rel="noopener noreferrer">加入 Google Play 封閉測試</a>
            </div>
          </li>

          <li className="test-step" id="step-3">
            <span className="test-step__number" aria-hidden="true">03</span>
            <div>
              <p className="eyebrow">STEP 3</p>
              <h2>免費取得測試 App</h2>
              <p>正式 App 為付費 App。封閉測試期間，受邀測試者可以免費取得測試版本。</p>
              <p>完成前面的步驟後，請使用我們提供給你的專屬測試優惠碼，即可免費取得 App。</p>
              <p className="test-step__note">每組優惠碼僅提供給一位受邀測試夥伴使用，請不要公開分享。</p>
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
                <p>不需要特別努力測試。<br />就像平常一樣使用它就好。</p>
                <p>如果有任何讓你困惑、不方便，或覺得「這裡如果再好一點就好了」的地方，都很歡迎告訴我們。</p>
                <p>你的每一次實際使用，都在幫助靜靜準備好正式與大家見面。</p>
              </div>
            </div>
          </li>
        </ol>

        <section className="test-feedback" aria-labelledby="test-feedback-title">
          <p className="eyebrow">YOUR THOUGHTS</p>
          <h2 id="test-feedback-title">把你的感受，輕輕告訴我們</h2>
          <p>遇到任何疑問，或有想和我們分享的使用感受，都可以前往支援中心。</p>
          <a className="primary-button test-button" href={withBase('support/')}>前往支援中心</a>
        </section>
      </div>
    </PageShell>
  )
}
