import type { ReactNode } from 'react'
import { PageShell } from '../components/PageShell'
import { SUPPORT_EMAIL } from '../config/links'
import { withBase } from '../utils'

type ContentSection = {
  title: string
  body: ReactNode
}

function ContentPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: ContentSection[] }) {
  return (
    <PageShell>
      <header className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="content-layout">
        <aside aria-label="本頁導覽">
          <p>在這一頁</p>
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
  const contact = SUPPORT_EMAIL ? <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> : <span>正式支援信箱即將公布</span>
  const sections: ContentSection[] = [
    { title: '開始靜坐', body: <Paragraphs><p>選擇 10、15、20、30、45、60 分鐘，或設定自己的時間。找到舒服的位置後，就可以開始。</p></Paragraphs> },
    { title: '提醒設定', body: <Paragraphs><p>你可以依需要開啟或關閉完成提醒。若要收到提醒，請確認裝置已允許通知。</p></Paragraphs> },
    { title: 'iPhone 可靠提醒', body: <Paragraphs><p>在支援的 iPhone 系統上，App 可在背景或鎖定畫面時提供更可靠的完成提醒。實際表現仍會受到系統版本、通知權限及裝置設定影響。</p></Paragraphs> },
    { title: 'Android 提醒', body: <Paragraphs><p>Android 會依裝置的通知權限與省電設定提供完成提醒。若提醒沒有出現，可先檢查通知權限與電池最佳化設定。</p></Paragraphs> },
    { title: '暫停、繼續與延長 +5', body: <Paragraphs><p>靜坐途中可以暫停，再從原本的位置繼續。需要多一點時間時，也可以延長五分鐘。</p></Paragraphs> },
    { title: '提早完成', body: <Paragraphs><p>如果今天想先停在這裡，可以提早完成。已安排的完成提醒會隨流程取消，避免之後重複提醒。</p></Paragraphs> },
    { title: '日記與記錄', body: <Paragraphs><p>完成靜坐後，可以留下心情、身體感受與日記，也可以全部略過。記錄頁提供日曆、搜尋與收藏。</p></Paragraphs> },
    { title: '備份、匯出與匯入', body: <Paragraphs><p>App 提供資料匯出與匯入，方便自行保存備份。匯入前請保留目前資料的備份，並確認使用由 App 產生的有效檔案。</p></Paragraphs> },
    { title: '常見問題', body: <Paragraphs><h3>一定要每天使用嗎？</h3><p>不用。想坐的時候再回來就好。</p><h3>一定要寫日記嗎？</h3><p>不用。所有收功記錄都可以略過。</p><h3>這是醫療服務嗎？</h3><p>不是。請閱讀我們的<a href={withBase('health/')}>健康聲明</a>。</p></Paragraphs> },
    { title: '聯絡我們', body: <Paragraphs><p>需要協助時，請透過支援信箱與我們聯絡：{contact}。</p><p>來信時可附上裝置型號、系統版本與問題發生步驟，但請不要寄送私人日記內容。</p></Paragraphs> },
  ]
  return <ContentPage eyebrow="Support" title="靜靜樹懶靜坐日記｜支援中心" intro="遇到問題時，我們慢慢來，一步一步找答案。" sections={sections} />
}

export function GuidePage() {
  const sections: ContentSection[] = [
    { title: '第一次開始', body: <Paragraphs><p>選一段舒服的時間，將手機放在不需要一直看見的位置。讓身體先安定下來，再開始倒數。</p></Paragraphs> },
    { title: '靜坐途中', body: <Paragraphs><p>不需要追求腦中完全安靜。注意力離開時，只要溫柔地回來。需要時可以暫停、繼續，或延長五分鐘。</p></Paragraphs> },
    { title: '完成與收功', body: <Paragraphs><p>時間結束後，先慢慢呼吸、感受身體，再決定是否留下心情、身體感受或一句日記。這些步驟都可以略過。</p></Paragraphs> },
    { title: '回看記錄', body: <Paragraphs><p>在日曆與記錄頁，可以查看曾經坐下的日子、搜尋日記，或收藏想保留的記錄。</p></Paragraphs> },
    { title: '心光成長', body: <Paragraphs><p>靜坐時間會慢慢成為心光年輪。走過春、夏、秋、冬後，形成一顆心光星球。這不是競賽，也沒有必須完成的期限。</p></Paragraphs> },
    { title: '保留自己的資料', body: <Paragraphs><p>重要記錄請定期使用匯出功能自行備份。更換裝置或重新安裝前，請先確認備份檔已安全保存。</p></Paragraphs> },
  ]
  return <ContentPage eyebrow="Guide" title="陪自己坐一會兒" intro="不必一次弄懂所有功能。從一段適合自己的時間開始，就很好。" sections={sections} />
}

// LEGAL COPY REVIEW REQUIRED: must be reviewed against the final shipping app and jurisdiction before production publication.
export function PrivacyPage() {
  const sections: ContentSection[] = [
    { title: '我們的原則', body: <Paragraphs><p>靜靜樹懶靜坐日記以 Local First 為核心設計。你的個人使用內容以裝置端保存為主。</p></Paragraphs> },
    { title: '裝置端保存的資料', body: <Paragraphs><p>依你的使用情況，App 可能在裝置端保存暱稱、靜坐記錄、設定、日記、心情、身體感受及心光成長資料。</p></Paragraphs> },
    { title: '資料的用途', body: <Paragraphs><p>這些資料用於呈現你的靜坐歷史、日曆、個人設定、日記與成長畫面，不用於排行榜或廣告追蹤。</p></Paragraphs> },
    { title: '匯出與匯入', body: <Paragraphs><p>你可以使用 App 提供的匯出功能建立備份，也可以選擇匯入有效的備份檔案。匯出的檔案由你自行保管與分享。</p></Paragraphs> },
    { title: '雲端與分析', body: <Paragraphs><p>目前正式架構不以帳號、雲端同步或第三方分析追蹤為基礎。若未來實際功能發生改變，本政策必須先依正式版本更新。</p></Paragraphs> },
    { title: '通知權限', body: <Paragraphs><p>若你開啟完成提醒，App 會使用裝置的通知能力。你可以隨時在系統設定中調整通知權限。</p></Paragraphs> },
    { title: '資料安全與刪除', body: <Paragraphs><p>裝置資料的安全也取決於你的裝置鎖定、備份與檔案保管方式。刪除 App 或清除瀏覽器／App 儲存空間，可能使尚未匯出的資料無法復原。</p></Paragraphs> },
    { title: '政策更新與聯絡', body: <Paragraphs><p>政策會在 App 功能或法規需求改變時更新。正式支援聯絡方式將於發佈前公布。</p><p className="legal-date">草案日期：2026 年 8 月 12 日</p></Paragraphs> },
  ]
  return <ContentPage eyebrow="Privacy" title="隱私權政策" intro="安靜，也包含讓自己的記錄留在自己身邊。" sections={sections} />
}

// LEGAL COPY REVIEW REQUIRED: this product copy is a structured draft, not jurisdiction-specific legal advice.
export function TermsPage() {
  const sections: ContentSection[] = [
    { title: '接受與適用範圍', body: <Paragraphs><p>使用靜靜樹懶靜坐日記，即表示你同意依本條款使用本 App 與官方網站。</p></Paragraphs> },
    { title: '服務性質', body: <Paragraphs><p>本產品提供靜坐計時、提醒、自我記錄與溫柔陪伴，不保證特定健康、情緒或生活結果。</p></Paragraphs> },
    { title: '適當使用', body: <Paragraphs><p>請勿以違法、侵害他人權利或干擾服務運作的方式使用本產品。你應自行妥善保存匯出的資料檔案。</p></Paragraphs> },
    { title: '智慧財產', body: <Paragraphs><p>靜靜角色、品牌名稱、圖像、文字、介面與相關內容，除另有標示外，均屬奇蹟心靈 Miracle Mind 或合法權利人所有。</p></Paragraphs> },
    { title: '服務調整', body: <Paragraphs><p>我們可能為安全、相容性或品質需要調整功能。重大變更會以適當方式說明，並尊重既有使用者資料。</p></Paragraphs> },
    { title: '責任限制', body: <Paragraphs><p>在法律允許範圍內，本產品依現況提供。使用者應依自身狀況判斷是否適合使用，並自行維護重要資料備份。</p></Paragraphs> },
    { title: '聯絡與更新', body: <Paragraphs><p>正式聯絡方式與最終適用條款將於商店發佈前完成審閱並公布。</p><p className="legal-date">草案日期：2026 年 8 月 12 日</p></Paragraphs> },
  ]
  return <ContentPage eyebrow="Terms" title="使用條款" intro="簡單、清楚，也尊重彼此。" sections={sections} />
}

export function HealthPage() {
  const sections: ContentSection[] = [
    { title: '產品定位', body: <Paragraphs><p>本 App 為靜坐陪伴與自我記錄工具，不是醫療診斷或治療服務，也不能取代醫師、心理師或其他專業人員的建議。</p></Paragraphs> },
    { title: '留意身體感受', body: <Paragraphs><p>請依自己的身體狀況選擇舒服的姿勢與時間。若使用期間出現明顯疼痛、暈眩、呼吸困難或其他不適，請停止使用。</p></Paragraphs> },
    { title: '尋求適當協助', body: <Paragraphs><p>若不適持續、加劇，或你對身心狀況有所擔心，請視需要尋求適當的醫療或專業協助。緊急情況請立即聯絡所在地的緊急服務。</p></Paragraphs> },
    { title: '情緒安全', body: <Paragraphs><p>靜坐時若出現強烈不安或難以承受的感受，可以睜開眼睛、停止練習，回到安全熟悉的環境，並向信任的人或專業人員求助。</p></Paragraphs> },
  ]
  return <ContentPage eyebrow="Health" title="健康聲明" intro="照顧自己，也包括知道什麼時候該停下來。" sections={sections} />
}

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>這裡好像太安靜了。</h1>
        <p>跟著靜靜回到花園吧。</p>
        <a className="primary-button" href={withBase()}>回到首頁</a>
      </section>
    </PageShell>
  )
}
