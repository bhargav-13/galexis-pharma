import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findPage, notFound } from '../data/seo'
import { company } from '../data/company'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Keeps <title>, description, canonical and social tags in sync with the current route.
// The same values are baked into static HTML at build time by scripts/prerender.mjs.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = findPage(pathname) || notFound
    const url = company.siteUrl + (page.path ? (page.path === '/' ? '/' : page.path) : pathname)

    document.title = page.title
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setCanonical(url)
  }, [pathname])

  return null
}
