import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (path) => readFile(join(root, path), 'utf8')

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

test('five-locale structure exposes only reviewed Traditional Chinese content', async () => {
  const source = await read('src/i18n/index.ts')
  for (const locale of ['zh-TW', 'en', 'ja', 'ko', 'th']) assert.ok(source.includes(`'${locale}'`))
  assert.match(source, /code: 'zh-TW', label: '繁體中文', ready: true/)
  assert.equal((source.match(/ready: false/g) ?? []).length, 4)
})

test('required brand and product principles are present', async () => {
  const home = await read('src/pages/HomePage.tsx')
  const footer = await read('src/components/SiteFooter.tsx')
  for (const phrase of ['不催促、不比較，也不要求每天打卡', '它不是獎盃', '安靜，也包含隱私', '今天，要不要一起坐一會兒']) {
    assert.ok(home.includes(phrase), `missing phrase: ${phrase}`)
  }
  assert.ok(footer.includes('© 2026 Miracle Mind 奇蹟心靈.'))
})

test('legal drafts carry source-only review markers', async () => {
  const source = await read('src/pages/ContentPages.tsx')
  assert.equal((source.match(/LEGAL COPY REVIEW REQUIRED/g) ?? []).length, 2)
  assert.ok(source.includes('不是醫療診斷或治療服務'))
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

test('header and footer share the official Quiet Sloth logo component', async () => {
  const header = await read('src/components/SiteHeader.tsx')
  const footer = await read('src/components/SiteFooter.tsx')
  const logo = await read('src/components/QuietSlothLogo.tsx')
  assert.ok(header.includes('<QuietSlothLogo placement="header" />'))
  assert.ok(footer.includes('<QuietSlothLogo placement="footer" />'))
  assert.ok(logo.includes("images/quiet-sloth-logo.webp"))
  assert.ok(logo.includes('alt="靜靜樹懶"'))
  assert.doesNotMatch(`${header}\n${footer}`, /brand-mark|>葉</)
})

test('accessibility and motion contracts are present', async () => {
  const shell = await read('src/components/PageShell.tsx')
  const css = await read('src/styles.css')
  const home = await read('src/pages/HomePage.tsx')
  assert.ok(shell.includes('跳至主要內容'))
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
