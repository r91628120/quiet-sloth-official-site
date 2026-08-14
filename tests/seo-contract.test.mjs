import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const baseUrl = 'https://r91628120.github.io/quiet-sloth-official-site/'
const socialImage = `${baseUrl}images/quiet-sloth-garden-hero.jpg`
const pages = [
  ['index.html', '', '靜靜樹懶靜坐日記｜靜靜靜坐・簡單安靜的靜坐與冥想 App'],
  ['guide/index.html', 'guide/', '使用說明｜靜靜樹懶靜坐日記'],
  ['support/index.html', 'support/', '支援中心｜靜靜樹懶靜坐日記'],
  ['privacy/index.html', 'privacy/', '隱私權政策｜靜靜樹懶靜坐日記'],
  ['terms/index.html', 'terms/', '使用條款｜靜靜樹懶靜坐日記'],
  ['health/index.html', 'health/', '健康聲明｜靜靜樹懶靜坐日記'],
]

const read = (path) => readFile(join(root, path), 'utf8')

test('six Traditional Chinese pages expose complete search and social metadata', async () => {
  for (const [file, route, title] of pages) {
    const html = await read(file)
    const canonical = `${baseUrl}${route}`
    assert.match(html, /<html lang="zh-TW">/)
    assert.ok(html.includes(`<title>${title}</title>`))
    assert.match(html, /<meta name="description" content="[^"]+" \/>/)
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}" />`))
    assert.ok(html.includes(`<meta property="og:title" content="${title}" />`))
    assert.match(html, /<meta property="og:description" content="[^"]+" \/>/)
    assert.ok(html.includes('<meta property="og:type" content="website" />'))
    assert.ok(html.includes(`<meta property="og:url" content="${canonical}" />`))
    assert.ok(html.includes('<meta property="og:site_name" content="Quiet Sloth Meditation Journal" />'))
    assert.ok(html.includes(`<meta property="og:image" content="${socialImage}" />`))
    assert.ok(html.includes('<meta name="twitter:card" content="summary_large_image" />'))
    assert.ok(html.includes(`<meta name="twitter:title" content="${title}" />`))
    assert.match(html, /<meta name="twitter:description" content="[^"]+" \/>/)
    assert.ok(html.includes(`<meta name="twitter:image" content="${socialImage}" />`))
    assert.doesNotMatch(html, /meta name="keywords"|noindex|hreflang/i)
  }
})

test('home page WebSite JSON-LD identifies all formal brand names', async () => {
  const html = await read('index.html')
  const match = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/)
  assert.ok(match, 'missing JSON-LD')
  const data = JSON.parse(match[1])
  assert.equal(data['@context'], 'https://schema.org')
  assert.equal(data['@type'], 'WebSite')
  assert.equal(data.name, 'Quiet Sloth Meditation Journal')
  assert.deepEqual(data.alternateName, ['靜靜樹懶靜坐日記', '靜靜靜坐'])
  assert.equal(data.url, baseUrl)
})

test('sitemap and robots expose exactly the six crawlable primary-site pages', async () => {
  const sitemap = await read('public/sitemap.xml')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls.sort(), pages.map(([, route]) => `${baseUrl}${route}`).sort())
  assert.equal(urls.some((url) => /\/(en|ja|ko|th)\//.test(url)), false)
  const robots = await read('public/robots.txt')
  assert.match(robots, /User-agent: \*/)
  assert.match(robots, /Allow: \//)
  assert.doesNotMatch(robots, /Disallow:/)
  assert.ok(robots.includes(`Sitemap: ${baseUrl}sitemap.xml`))
})
