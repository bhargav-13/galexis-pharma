// Post-build step: writes one static HTML file per page (with its own title, description,
// canonical, social tags, JSON-LD and crawlable text), plus 404.html, sitemap.xml and robots.txt.
// Vercel serves /about from dist/about.html via "cleanUrls" in vercel.json.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, notFound } from '../src/data/seo.js'
import { company } from '../src/data/company.js'
import { buildSchema } from '../src/data/schema.js'

const dist = fileURLToPath(new URL('../dist', import.meta.url))
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const today = new Date().toISOString().slice(0, 10)

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const urlFor = (path) => company.siteUrl + (path === '/' ? '/' : path)

const navLinks = pages
  .filter(p => !['/privacy-policy', '/terms', '/disclaimer', '/safety-reporting'].includes(p.path))
  .map(p => `<li><a href="${p.path}">${esc(p.heading.split(' — ')[0])}</a></li>`)
  .join('')

// Crawlable text shown until React mounts (React replaces the contents of #root).
function fallbackBody(page) {
  return `<div class="prerender-fallback">
<header><a href="/"><img src="/brand/galexis-logo-640.png" alt="${esc(company.name)}" width="193" height="48"></a>
<nav aria-label="Primary"><ul>${navLinks}</ul></nav></header>
<main><h1>${esc(page.heading)}</h1><p>${esc(page.description)}</p>
<p>${esc(company.intro)} — ${esc(company.values.join(' • '))}.</p></main>
<footer><p><strong>${esc(company.name)}</strong>, ${esc(company.address.full)}, India.
Phone: ${company.phones.map(p => `<a href="tel:${p.tel}">${esc(p.display)}</a>`).join(', ')}.
Email: <a href="mailto:${company.email}">${company.email}</a>. GSTIN: ${company.gstin}.</p></footer>
</div>`
}

function headTags(page, { noindex = false } = {}) {
  const url = page.path ? urlFor(page.path) : null
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    url && `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    url && `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    !noindex && `<script type="application/ld+json">${JSON.stringify(buildSchema(page)).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n    ')
}

function render(page, opts = {}) {
  let html = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headTags(page, opts))
  if (opts.noindex) html = html.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, follow" />')
  return html.replace('<!--app-html-->', page.heading ? fallbackBody(page) : '')
}

for (const page of pages) {
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  writeFileSync(resolve(dist, file), render(page))
}
writeFileSync(resolve(dist, '404.html'), render(notFound, { noindex: true }))

writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${urlFor(p.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>
`)

writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${company.siteUrl}/sitemap.xml
`)

console.log(`prerendered ${pages.length} pages + 404.html, sitemap.xml, robots.txt`)
