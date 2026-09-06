import { useLanguage } from '../i18n/useLanguage'
import './SubtractionMeditation.css'

const copy = {
  'zh-TW': {
    eyebrow: 'SUBTRACTIVE MEDITATION · 減法靜坐',
    title: '讓靜坐，回到簡單。',
    lead1: '很多冥想工具，正在努力為你增加更多內容。',
    lead2: '《靜靜樹懶》選擇另一條路：不是在你的靜坐裡加入更多，而是拿掉不需要的東西。',
    statement: '靜坐，是減法，不是加法。',
    dailyTitle: '一天已經夠滿了',
    dailyBody: '工作的壓力、生活的煩惱、人際的情緒，還有腦中停不下來的念頭——我們常常帶著太多東西回來。靜坐，不需要再增加更多刺激；有時真正需要的，只是坐下來，讓一切慢慢沉澱。',
    lessTitle: '少一點內容，多一點安靜',
    lessBody: '沒有一定要聽的音樂，沒有一定要跟隨的語音引導，也沒有排行榜與連續打卡的壓力。選一個時間，坐下來，就可以開始。',
    supportTitle: '輔助可以幫助開始，但不一定要永遠留下',
    supportBody: '音樂、自然聲與語音引導，對剛開始練習的人可能很有幫助。當練習逐漸成熟，我們也可能發現：原本的輔助，開始成為注意力停留的地方。那時候，把聲音關掉，也是一種練習。',
    freedomTitle: '你仍然可以照自己的方式坐',
    freedomBody: '如果你喜歡音樂，就播放自己真正喜歡的音樂。《靜靜樹懶》不替你決定該聽什麼；想安靜時，就讓它安靜地陪在旁邊。',
    practiceEyebrow: 'THE QUIET FLOW',
    practiceTitle: '選時間。坐下來。溫柔收功。留下紀錄。',
    step1: '選擇時間',
    step2: '安靜坐下',
    step3: '溫柔收功',
    step4: '記下此刻',
    practiceNote: '其他的，留給你的練習。',
    question: '修行，不一定是問：「我又得到了什麼？」',
    answer: '也可以問：「我又放下了什麼？」',
    release: '少一點煩惱。少一點壓力。少一點執著。少一點被情緒拉著走。真正的輕鬆，也許不是擁有得更多，而是終於不需要背著那麼多東西前進。',
    why: '這就是《靜靜樹懶》為什麼刻意保持簡單。少，不是少做了功能；少，就是我們的功能。',
    purchase1: '一次買斷',
    purchase2: '無訂閱',
    purchase3: '無廣告',
    closing1: '少一點內容，多一點安靜。',
    closing2: '選一個時間，坐下來。',
    closing3: '剩下的，交給安靜。',
  },
  en: {
    eyebrow: 'SUBTRACTIVE MEDITATION',
    title: 'Let meditation return to simple.',
    lead1: 'Many meditation tools keep adding more content.',
    lead2: 'Quiet Sloth takes another path: instead of adding more to your meditation, we remove what you do not need.',
    statement: 'Meditation is subtraction, not addition.',
    dailyTitle: 'Your day is already full',
    dailyBody: 'Work pressure, everyday worries, emotions, and thoughts that will not stop—we often arrive carrying too much. Meditation does not need to add more stimulation. Sometimes what we need is simply to sit and let everything settle.',
    lessTitle: 'Less content. More quiet.',
    lessBody: 'No music you have to choose, no voice you have to follow, no leaderboard, and no streak pressure. Choose a time, sit down, and begin.',
    supportTitle: 'Support can help you begin. It does not have to stay forever.',
    supportBody: 'Music, nature sounds, and guided voices can be helpful when you are starting. As practice matures, the support itself may become where attention keeps landing. Turning the sound off can become part of the practice too.',
    freedomTitle: 'Your practice is still yours',
    freedomBody: 'If you enjoy music, play the music you truly like. Quiet Sloth does not decide what you should hear. When you want silence, it simply stays quietly beside you.',
    practiceEyebrow: 'THE QUIET FLOW',
    practiceTitle: 'Choose a time. Sit. Close gently. Leave a record.',
    step1: 'Choose time',
    step2: 'Sit quietly',
    step3: 'Close gently',
    step4: 'Record this moment',
    practiceNote: 'Leave the rest to your practice.',
    question: 'Practice does not always ask, “What did I gain?”',
    answer: 'It can also ask, “What did I let go of?”',
    release: 'A little less worry. A little less pressure. A little less grasping. A little less being pulled by emotion. Lightness may not come from having more, but from no longer carrying so much.',
    why: 'That is why Quiet Sloth is intentionally simple. Less is not a missing feature. Less is the feature.',
    purchase1: 'One-time purchase',
    purchase2: 'No subscription',
    purchase3: 'No ads',
    closing1: 'Less content. More quiet.',
    closing2: 'Choose a time. Sit down.',
    closing3: 'Leave the rest to quiet.',
  },
  ja: {
    eyebrow: 'SUBTRACTIVE MEDITATION · 引き算の瞑想',
    title: '瞑想を、もっとシンプルに。',
    lead1: '多くの瞑想ツールは、より多くのコンテンツを加えていきます。',
    lead2: 'Quiet Sloth は別の道を選びました。瞑想に何かを足すのではなく、必要のないものを少しずつ減らします。',
    statement: '瞑想は、足し算ではなく引き算。',
    dailyTitle: '一日は、もう十分にいっぱいです',
    dailyBody: '仕事のプレッシャー、暮らしの悩み、人との間に生まれた感情、止まらない思考。私たちはたくさんのものを抱えて戻ってきます。瞑想の時間まで刺激を増やす必要はありません。ただ座り、ゆっくり沈んでいくのを待つ。それだけでいい日もあります。',
    lessTitle: 'コンテンツを少なく。静けさを多く。',
    lessBody: '必ず聴く音楽も、必ず従う音声ガイドも、ランキングも連続記録のプレッシャーもありません。時間を選び、座れば始められます。',
    supportTitle: '補助は始める助けになる。でも、ずっと必要とは限らない',
    supportBody: '音楽、自然音、音声ガイドは、練習を始めるときの助けになります。けれど練習が深まるにつれ、その音自体に注意が留まり続けることもあります。音を消すことも、ひとつの練習です。',
    freedomTitle: '自分のやり方で座っていい',
    freedomBody: '音楽が好きなら、本当に好きな音楽を流してください。Quiet Sloth は何を聴くべきか決めません。静かにしたいときは、ただそばで静かに待っています。',
    practiceEyebrow: 'THE QUIET FLOW',
    practiceTitle: '時間を選ぶ。座る。やさしく戻る。記録する。',
    step1: '時間を選ぶ',
    step2: '静かに座る',
    step3: 'やさしく戻る',
    step4: '今を記録する',
    practiceNote: 'あとは、あなたの練習に任せます。',
    question: '修行は、いつも「何を得たか」を問うものではありません。',
    answer: '「何を手放せたか」を問うこともできます。',
    release: '悩みを少し。プレッシャーを少し。執着を少し。感情に引っぱられることを少し。軽さとは、より多くを持つことではなく、もうそれほど多くを背負わなくていいことなのかもしれません。',
    why: 'だから Quiet Sloth は意図的にシンプルです。「少ない」のは機能不足ではありません。「少ない」こと自体が、このアプリの機能です。',
    purchase1: '買い切り',
    purchase2: 'サブスクなし',
    purchase3: '広告なし',
    closing1: 'コンテンツを少なく。静けさを多く。',
    closing2: '時間を選び、座る。',
    closing3: 'あとは、静けさに任せて。',
  },
  ko: {
    eyebrow: 'SUBTRACTIVE MEDITATION · 덜어내는 명상',
    title: '명상을 다시 단순하게.',
    lead1: '많은 명상 도구는 더 많은 콘텐츠를 더해 갑니다.',
    lead2: 'Quiet Sloth는 다른 길을 선택했습니다. 명상에 무언가를 더하기보다, 필요하지 않은 것을 덜어냅니다.',
    statement: '명상은 더하기보다 덜어내기입니다.',
    dailyTitle: '하루는 이미 충분히 가득합니다',
    dailyBody: '일의 압박, 생활의 걱정, 관계에서 생긴 감정, 멈추지 않는 생각까지 우리는 너무 많은 것을 안고 돌아옵니다. 명상 시간에 또 다른 자극을 더할 필요는 없습니다. 때로는 그냥 앉아서 모든 것이 천천히 가라앉도록 두는 것만으로 충분합니다.',
    lessTitle: '콘텐츠는 조금 덜고, 고요함은 조금 더',
    lessBody: '꼭 들어야 하는 음악도, 꼭 따라야 하는 음성 안내도, 순위표도 연속 기록의 압박도 없습니다. 시간을 고르고 앉으면 바로 시작할 수 있습니다.',
    supportTitle: '도움은 시작을 돕지만, 언제나 필요할 필요는 없습니다',
    supportBody: '음악, 자연의 소리, 음성 안내는 처음 연습할 때 도움이 될 수 있습니다. 하지만 연습이 익숙해지면 그 소리 자체가 주의가 머무는 곳이 되기도 합니다. 소리를 끄는 것 역시 하나의 연습이 될 수 있습니다.',
    freedomTitle: '당신의 명상은 당신의 방식대로',
    freedomBody: '음악을 좋아한다면 정말 좋아하는 음악을 들으세요. Quiet Sloth는 무엇을 들어야 하는지 대신 결정하지 않습니다. 조용히 있고 싶은 날에는 그저 곁에서 조용히 함께합니다.',
    practiceEyebrow: 'THE QUIET FLOW',
    practiceTitle: '시간을 고르고. 앉고. 부드럽게 마치고. 기록합니다.',
    step1: '시간 선택',
    step2: '조용히 앉기',
    step3: '부드럽게 마치기',
    step4: '지금 기록하기',
    practiceNote: '나머지는 당신의 연습에 맡깁니다.',
    question: '수행은 늘 “무엇을 얻었는가?”를 묻는 일이 아닙니다.',
    answer: '“무엇을 내려놓았는가?”를 물을 수도 있습니다.',
    release: '걱정을 조금 덜고, 압박을 조금 덜고, 집착을 조금 덜고, 감정에 끌려가는 일을 조금 덜어냅니다. 가벼움은 더 많이 가지는 데서가 아니라, 더 이상 그렇게 많이 짊어지지 않아도 되는 데서 올지도 모릅니다.',
    why: '그래서 Quiet Sloth는 의도적으로 단순합니다. 적다는 것은 기능이 빠졌다는 뜻이 아닙니다. 적음 자체가 우리의 기능입니다.',
    purchase1: '한 번 구매',
    purchase2: '구독 없음',
    purchase3: '광고 없음',
    closing1: '콘텐츠는 조금 덜고, 고요함은 조금 더.',
    closing2: '시간을 고르고, 앉으세요.',
    closing3: '나머지는 고요함에 맡기세요.',
  },
  th: {
    eyebrow: 'SUBTRACTIVE MEDITATION · การนั่งสมาธิแบบลดทอน',
    title: 'ให้การนั่งสมาธิกลับมาเรียบง่าย',
    lead1: 'เครื่องมือทำสมาธิจำนวนมากพยายามเพิ่มเนื้อหาให้มากขึ้น',
    lead2: 'Quiet Sloth เลือกอีกเส้นทางหนึ่ง ไม่ได้เพิ่มสิ่งต่าง ๆ เข้าไปในการนั่งสมาธิ แต่ค่อย ๆ นำสิ่งที่ไม่จำเป็นออกไป',
    statement: 'การนั่งสมาธิคือการลด ไม่ใช่การเพิ่ม',
    dailyTitle: 'หนึ่งวันของเราก็เต็มมากพอแล้ว',
    dailyBody: 'ความกดดันจากงาน ความกังวลในชีวิต อารมณ์จากความสัมพันธ์ และความคิดที่ไม่ยอมหยุด เรามักกลับมาพร้อมสิ่งที่แบกไว้มากเกินไป การนั่งสมาธิไม่จำเป็นต้องเพิ่มสิ่งกระตุ้นอีก บางครั้งสิ่งที่ต้องการมีเพียงการนั่งลง แล้วปล่อยให้ทุกอย่างค่อย ๆ สงบลง',
    lessTitle: 'เนื้อหาน้อยลง ความเงียบมากขึ้น',
    lessBody: 'ไม่มีเพลงที่จำเป็นต้องเลือก ไม่มีเสียงนำที่จำเป็นต้องทำตาม ไม่มีอันดับ และไม่มีแรงกดดันจากการรักษาสถิติต่อเนื่อง เลือกเวลา นั่งลง แล้วเริ่มได้เลย',
    supportTitle: 'ตัวช่วยช่วยให้เริ่มต้นได้ แต่ไม่จำเป็นต้องอยู่ตลอดไป',
    supportBody: 'เพลง เสียงธรรมชาติ และเสียงนำสมาธิอาจช่วยได้มากในช่วงเริ่มต้น แต่เมื่อฝึกจนคุ้นเคย สิ่งที่เคยช่วยอาจกลายเป็นจุดที่ความสนใจไปเกาะอยู่ การปิดเสียงก็เป็นส่วนหนึ่งของการฝึกได้เช่นกัน',
    freedomTitle: 'การนั่งสมาธิยังเป็นของคุณ',
    freedomBody: 'ถ้าคุณชอบเพลง ก็เปิดเพลงที่คุณชอบจริง ๆ Quiet Sloth ไม่ตัดสินแทนว่าคุณควรฟังอะไร เมื่ออยากเงียบ แอปก็เพียงอยู่ข้าง ๆ อย่างเงียบ ๆ',
    practiceEyebrow: 'THE QUIET FLOW',
    practiceTitle: 'เลือกเวลา นั่งลง จบอย่างอ่อนโยน แล้วบันทึกไว้',
    step1: 'เลือกเวลา',
    step2: 'นั่งอย่างเงียบ ๆ',
    step3: 'จบอย่างอ่อนโยน',
    step4: 'บันทึกช่วงเวลานี้',
    practiceNote: 'ส่วนที่เหลือ ปล่อยให้เป็นการฝึกของคุณ',
    question: 'การปฏิบัติไม่จำเป็นต้องถามเสมอว่า “ฉันได้อะไรเพิ่มขึ้น?”',
    answer: 'เราอาจถามได้ว่า “ฉันวางอะไรลงได้บ้าง?”',
    release: 'ความกังวลน้อยลง ความกดดันน้อยลง ความยึดติดน้อยลง และถูกอารมณ์ดึงไปน้อยลง ความเบาอาจไม่ได้มาจากการมีมากขึ้น แต่อยู่ที่เราไม่ต้องแบกมากเท่าเดิมอีกต่อไป',
    why: 'นี่คือเหตุผลที่ Quiet Sloth ตั้งใจให้เรียบง่าย สิ่งที่น้อยลงไม่ใช่ฟังก์ชันที่ขาดหายไป ความน้อยนี่แหละคือฟังก์ชันของเรา',
    purchase1: 'ซื้อครั้งเดียว',
    purchase2: 'ไม่มีค่าสมาชิก',
    purchase3: 'ไม่มีโฆษณา',
    closing1: 'เนื้อหาน้อยลง ความเงียบมากขึ้น',
    closing2: 'เลือกเวลา แล้วนั่งลง',
    closing3: 'ที่เหลือ ปล่อยให้ความเงียบทำหน้าที่',
  },
} as const

export function SubtractionMeditation() {
  const { currentLocale } = useLanguage()
  const c = copy[currentLocale]

  return (
    <section className="subtraction" aria-labelledby="subtraction-title">
      <div className="subtraction__inner">
        <header className="subtraction__header reveal">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="subtraction-title">{c.title}</h2>
          <p>{c.lead1}</p>
          <p>{c.lead2}</p>
          <p className="subtraction__statement">{c.statement}</p>
        </header>

        <div className="subtraction__principles">
          <article className="subtraction__card reveal">
            <span className="subtraction__number" aria-hidden="true">01</span>
            <h3>{c.dailyTitle}</h3>
            <p>{c.dailyBody}</p>
          </article>
          <article className="subtraction__card reveal">
            <span className="subtraction__number" aria-hidden="true">02</span>
            <h3>{c.lessTitle}</h3>
            <p>{c.lessBody}</p>
          </article>
          <article className="subtraction__card reveal">
            <span className="subtraction__number" aria-hidden="true">03</span>
            <h3>{c.supportTitle}</h3>
            <p>{c.supportBody}</p>
          </article>
          <article className="subtraction__card reveal">
            <span className="subtraction__number" aria-hidden="true">04</span>
            <h3>{c.freedomTitle}</h3>
            <p>{c.freedomBody}</p>
          </article>
        </div>

        <div className="subtraction__flow reveal">
          <p className="eyebrow">{c.practiceEyebrow}</p>
          <h3>{c.practiceTitle}</h3>
          <div className="subtraction__steps" aria-label={c.practiceTitle}>
            {[c.step1, c.step2, c.step3, c.step4].map((step, index) => (
              <span key={step}><small>{String(index + 1).padStart(2, '0')}</small>{step}</span>
            ))}
          </div>
          <p className="subtraction__flow-note">{c.practiceNote}</p>
        </div>

        <blockquote className="subtraction__reflection reveal">
          <p>{c.question}</p>
          <strong>{c.answer}</strong>
          <p>{c.release}</p>
        </blockquote>

        <div className="subtraction__closing reveal">
          <p>{c.why}</p>
          <div className="subtraction__purchase" aria-label={`${c.purchase1} · ${c.purchase2} · ${c.purchase3}`}>
            <span>{c.purchase1}</span>
            <span>{c.purchase2}</span>
            <span>{c.purchase3}</span>
          </div>
          <p className="subtraction__quiet">{c.closing1}<br />{c.closing2}<br /><strong>{c.closing3}</strong></p>
        </div>
      </div>
    </section>
  )
}
