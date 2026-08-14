import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import test from 'node:test'
import ts from 'typescript'

const root = process.cwd()
const read = (path) => readFile(join(root, path), 'utf8')

function localeEntries(source, variableName) {
  const file = ts.createSourceFile(`${variableName}.ts`, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  let initializer
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === variableName) initializer = node.initializer
    ts.forEachChild(node, visit)
  }
  visit(file)
  while (initializer && (ts.isAsExpression(initializer) || ts.isSatisfiesExpression(initializer))) initializer = initializer.expression
  assert.ok(initializer && ts.isObjectLiteralExpression(initializer), `${variableName} must be an object literal`)
  const entries = new Map()
  const walk = (object, prefix = '') => {
    for (const property of object.properties) {
      assert.ok(ts.isPropertyAssignment(property), `${variableName} contains an unsupported property`)
      const name = property.name.getText(file).replace(/^['"]|['"]$/g, '')
      const path = prefix ? `${prefix}.${name}` : name
      if (ts.isObjectLiteralExpression(property.initializer)) walk(property.initializer, path)
      else {
        assert.ok(ts.isStringLiteral(property.initializer), `${path} must be a string literal`)
        entries.set(path, property.initializer.text)
      }
    }
  }
  walk(initializer)
  return entries
}

test('all formal static routes have an HTML entry', async () => {
  const routes = ['index.html', 'support/index.html', 'privacy/index.html', 'terms/index.html', 'health/index.html', 'guide/index.html', '404.html']
  for (const route of routes) {
    const html = await read(route)
    assert.match(html, /<div id="root"><\/div>/)
    assert.match(html, /src="\/src\/main\.tsx"/)
  }
})

test('download URLs are centralized and unannounced links remain empty', async () => {
  const config = await read('src/config/links.ts')
  for (const name of ['APP_STORE_URL', 'GOOGLE_PLAY_URL', 'LINE_STICKERS_URL', 'SUPPORT_EMAIL', 'MIRACLE_MIND_URL']) {
    assert.match(config, new RegExp(`export const ${name} = ''`))
  }
  const source = await read('src/pages/HomePage.tsx')
  assert.doesNotMatch(source, /apps\.apple\.com|play\.google\.com|line\.me/)
})

test('five-locale structure exposes reviewed Traditional Chinese, English, Japanese, and Korean content', async () => {
  const source = await read('src/i18n/index.ts')
  for (const locale of ['zh-TW', 'en', 'ja', 'ko', 'th']) assert.ok(source.includes(`'${locale}'`))
  assert.match(source, /code: 'zh-TW', label: '繁體中文', shortLabel: '繁中', ready: true/)
  assert.match(source, /code: 'en', label: 'English', shortLabel: 'EN', ready: true/)
  assert.equal((source.match(/ready: false/g) ?? []).length, 1)
})

test('required brand and product principles are present', async () => {
  const home = await read('src/pages/HomePage.tsx')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  const footer = await read('src/components/SiteFooter.tsx')
  const zhTWText = zhTW.replace(/['"],?\s*\n\s*\w+:\s*['"]/g, '')
  for (const phrase of ['不催促、不比較，也不要求每天打卡', '它不是獎盃', '安靜，也包含隱私', '今天，要不要一起坐一會兒']) {
    assert.ok(zhTWText.includes(phrase), `missing phrase: ${phrase}`)
  }
  assert.ok(home.includes("useLanguage()"))
  assert.ok(footer.includes("t('footer.rights1')"))
})

test('legal drafts carry source-only review markers', async () => {
  const source = await read('src/pages/ContentPages.tsx')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  assert.equal((source.match(/LEGAL COPY REVIEW REQUIRED/g) ?? []).length, 2)
  assert.ok(zhTW.includes('不是醫療診斷或治療服務'))
})

test('required artwork is present and non-empty', async () => {
  const images = [
    'quiet-sloth-garden-hero.jpg', 'app-growth-overview.webp', 'app-ready-screen.webp',
    'heart-planet-outline.webp', 'heart-planet-spring.webp', 'heart-planet-spring-summer.webp',
    'heart-planet-spring-summer-autumn.webp', 'heart-planet-complete.webp',
  ]
  for (const image of images) {
    const info = await stat(join(root, 'public/images', image))
    assert.ok(info.size > 10_000, `${image} is unexpectedly small`)
  }
  const logo = await stat(join(root, 'public/images/quiet-sloth-logo.webp'))
  assert.ok(logo.size > 10_000, 'quiet-sloth-logo.webp is unexpectedly small')
})

test('journal section uses the six-step mobile guide with a desktop semantic title break', async () => {
  const home = await read('src/pages/HomePage.tsx')
  const css = await read('src/styles.css')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  const guide = await stat(join(root, 'public/images/quiet-sloth-mobile-guide.png'))
  assert.ok(guide.size > 10_000, 'quiet-sloth-mobile-guide.png is unexpectedly small')
  assert.ok(home.includes("withBase('images/quiet-sloth-mobile-guide.png')"))
  assert.ok(home.includes("alt={t('home.journalImageAlt')}"))
  assert.ok(zhTW.includes("journalImageAlt: '靜靜樹懶靜坐日記手機使用教學'"))
  assert.ok(home.includes("t('home.journalTitleLine1')"))
  assert.ok(css.includes('.journal-visual img { width: 100%; height: auto; object-fit: contain; }'))
})

test('major home section headings share desktop semantic breaks and responsive typography', async () => {
  const home = await read('src/pages/HomePage.tsx')
  const css = await read('src/styles.css')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  for (const key of ['reminderTitleLine1', 'reminderTitleLine2', 'journalTitleLine1', 'journalTitleLine2', 'privacyTitleLine1', 'privacyTitleLine2']) assert.ok(home.includes(`t('home.${key}')`))
  for (const phrase of ['安靜坐著，', '不需要一直看時間。', '每一次安靜，', '都留下痕跡。', '安靜，', '也包含隱私。']) assert.ok(zhTW.includes(phrase))
  assert.ok(css.includes(".section h2, .section-heading h2 { margin-bottom: 1.6rem; color: var(--brown); font-size: clamp(2.15rem, 4.5vw, 4rem); line-height: 1.3; }"))
  assert.ok(css.includes('.desktop-heading-line { white-space: normal; }'))
  assert.ok(css.includes('.desktop-heading-break { display: block; }'))
  assert.ok(css.includes('@media (max-width: 900px)'))
  assert.ok(css.includes('  .desktop-heading-line { white-space: normal; }'))
  assert.ok(css.includes('  .desktop-heading-break { display: none; }'))
  assert.equal(css.includes('.journal h2 { font-size:'), false)
  assert.equal(css.includes('.journal h2 { white-space:'), false)
})

test('header and footer share the official Quiet Sloth logo component', async () => {
  const header = await read('src/components/SiteHeader.tsx')
  const footer = await read('src/components/SiteFooter.tsx')
  const logo = await read('src/components/QuietSlothLogo.tsx')
  assert.ok(header.includes('<QuietSlothLogo placement="header" />'))
  assert.ok(footer.includes('<QuietSlothLogo placement="footer" />'))
  assert.ok(logo.includes("images/quiet-sloth-avatar.png"))
  assert.ok(logo.includes("alt={t('brand.name')}"))
  assert.doesNotMatch(`${header}\n${footer}`, /brand-mark|>葉</)
})

test('accessibility and motion contracts are present', async () => {
  const shell = await read('src/components/PageShell.tsx')
  const css = await read('src/styles.css')
  const home = await read('src/pages/HomePage.tsx')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  assert.ok(shell.includes("t('accessibility.skipToMain')"))
  assert.ok(zhTW.includes("skipToMain: '跳至主要內容'"))
  assert.ok(css.includes('prefers-reduced-motion'))
  assert.doesNotMatch(home, /<img(?![^>]*alt=)/)
})

test('GitHub Pages workflow uses official Pages actions', async () => {
  const workflow = await read('.github/workflows/deploy-pages.yml')
  assert.ok(workflow.includes('actions/configure-pages@v5'))
  assert.ok(workflow.includes('actions/upload-pages-artifact@v3'))
  assert.ok(workflow.includes('actions/deploy-pages@v4'))
  assert.ok(workflow.includes('branches: [main]'))
})

test('i18n runtime contracts provide safe fallback, persistence, and five language options', async () => {
  const index = await read('src/i18n/index.ts')
  const provider = await read('src/i18n/LanguageProvider.tsx')
  const switcher = await read('src/components/LanguageSwitcher.tsx')
  const main = await read('src/main.tsx')
  assert.ok(index.includes("DEFAULT_LOCALE: LocaleCode = 'zh-TW'"))
  assert.ok(index.includes("LOCALE_STORAGE_KEY = 'quiet-sloth-locale'"))
  assert.ok(index.includes('return isLocaleCode(value) ? value : DEFAULT_LOCALE'))
  assert.ok(index.includes('findMessage(messages[locale], key) ?? findMessage(zhTW, key) ??'))
  assert.ok(provider.includes('window.localStorage.getItem(LOCALE_STORAGE_KEY)'))
  assert.ok(provider.includes('window.localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale)'))
  assert.ok(provider.includes('document.documentElement.lang = currentLocale'))
  assert.ok(switcher.includes('aria-label={t(\'language.label\')}'))
  assert.ok(switcher.includes('onChange={(event) => setLocale'))
  assert.ok(main.includes('<LanguageProvider><App /></LanguageProvider>'))
})

test('English, Japanese, and Korean locales are complete while Thai stays a phase-one placeholder', async () => {
  const zhTW = localeEntries(await read('src/i18n/locales/zh-TW.ts'), 'zhTW')
  const english = localeEntries(await read('src/i18n/locales/en.ts'), 'en')
  const japanese = localeEntries(await read('src/i18n/locales/ja.ts'), 'ja')
  const korean = localeEntries(await read('src/i18n/locales/ko.ts'), 'ko')
  assert.deepEqual([...english.keys()], [...zhTW.keys()])
  assert.equal([...english.values()].filter((value) => value.trim().length === 0).length, 0)
  assert.equal([...english.keys()].filter((key) => !zhTW.has(key)).length, 0)
  assert.equal([...zhTW.keys()].filter((key) => !english.has(key)).length, 0)
  assert.deepEqual([...english].filter(([, value]) => /[\u3400-\u9fff]/u.test(value)), [])
  assert.equal(english.get('brand.name'), 'Quiet Sloth Meditation Journal')
  assert.equal(english.get('home.closingEyebrow'), 'Gentle Closing')
  assert.equal(english.get('home.reminderEyebrow'), 'A Gentle Reminder')
  assert.equal(english.get('home.growthEyebrow'), 'Heart-Light Growth')
  assert.equal(english.get('home.planetEyebrow'), 'Heart Planet')
  assert.equal(english.get('content.healthTitle'), 'Health Disclaimer')
  assert.match(english.get('home.journalImageAlt'), /Traditional Chinese/)
  assert.deepEqual([...japanese.keys()], [...zhTW.keys()])
  assert.equal([...japanese.values()].filter((value) => value.trim().length === 0).length, 0)
  assert.equal([...japanese.keys()].filter((key) => !zhTW.has(key)).length, 0)
  assert.equal([...zhTW.keys()].filter((key) => !japanese.has(key)).length, 0)
  assert.deepEqual([...japanese].filter(([, value]) => /靜|樹懶|繁體|隱私權|裝置端/u.test(value)), [])
  assert.deepEqual([...korean.keys()], [...zhTW.keys()])
  assert.equal([...korean.values()].filter((value) => value.trim().length === 0).length, 0)
  assert.equal([...korean.keys()].filter((key) => !zhTW.has(key)).length, 0)
  assert.equal([...zhTW.keys()].filter((key) => !korean.has(key)).length, 0)
  assert.deepEqual([...korean].filter(([, value]) => /[\u3040-\u30ff]|靜|樹懶|奇蹟|心/u.test(value)), [])
  for (const locale of ['th']) {
    const source = await read(`src/i18n/locales/${locale}.ts`)
    assert.match(source, new RegExp(`export const ${locale} = \\{\\}`))
  }
  const switcher = await read('src/components/LanguageSwitcher.tsx')
  assert.doesNotMatch(switcher, /location|history|navigate|reload/)
  const footer = await read('src/components/SiteFooter.tsx')
  assert.doesNotMatch(footer, /Coming soon/)
  const downloads = await read('src/components/DownloadButtons.tsx')
  assert.ok(downloads.includes("currentLocale === 'en' ? 'LINE Stickers'"))
})

test('home and content pages read Traditional Chinese copy from the locale source of truth', async () => {
  const home = await read('src/pages/HomePage.tsx')
  const content = await read('src/pages/ContentPages.tsx')
  const zhTW = await read('src/i18n/locales/zh-TW.ts')
  assert.ok(home.includes("t('home.heroTitleLine1')"))
  assert.ok(content.includes("t('content.supportTitle')"))
  assert.ok(content.includes("t('content.privacyTitle')"))
  assert.ok(content.includes("t('content.termsTitle')"))
  assert.ok(content.includes("t('content.healthTitle')"))
  for (const phrase of ['靜靜樹懶靜坐日記｜支援中心', '陪自己坐一會兒', '隱私權政策', '使用條款', '健康聲明']) assert.ok(zhTW.includes(phrase))
})
