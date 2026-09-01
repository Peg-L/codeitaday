// 驗證 build 產物：掃描所有 HTML，檢查站內連結與資源是否真的存在於靜態輸出中
// 用法：npm run build && node scripts/check-build.mjs
import { readdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'

const ROOT = resolve('.vercel/output/static')

const toUrl = f => '/' + f.slice(ROOT.length + 1).split(sep).join('/')

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, out)
    else out.push(p)
  }
  return out
}

// 一個站內路徑在靜態輸出裡算不算存在
function resolves(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0])
  if (!clean || clean === '/') return existsSync(join(ROOT, 'index.html'))
  const base = join(ROOT, clean)
  return existsSync(base)
    || existsSync(base + '.html')
    || existsSync(join(base, 'index.html'))
}

const files = await walk(ROOT)
const htmls = files.filter(f => f.endsWith('.html'))
const broken = []
const attrRe = /(?:href|src)="([^"]+)"/g

for (const f of htmls) {
  const html = await readFile(f, 'utf8')
  const page = toUrl(f)
  for (const [, url] of html.matchAll(attrRe)) {
    if (!url.startsWith('/') || url.startsWith('//')) continue
    if (!resolves(url)) broken.push({ page, url })
  }
}

const empties = []
for (const f of files) {
  if ((await stat(f)).size === 0) empties.push(toUrl(f))
}

console.log(`HTML 頁面：${htmls.length} / 總檔案：${files.length}`)
console.log(`空檔案：${empties.length}`)
empties.forEach(e => console.log('  EMPTY', e))

const uniq = [...new Map(broken.map(b => [b.url + b.page, b])).values()]
console.log(`失效站內連結：${uniq.length}`)
for (const b of uniq.slice(0, 50)) console.log(`  ${b.url}\n      <- ${b.page}`)
if (uniq.length > 50) console.log(`  ...(還有 ${uniq.length - 50} 筆)`)

process.exit(uniq.length || empties.length ? 1 : 0)
