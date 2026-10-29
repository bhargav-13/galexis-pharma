import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GalexisLogo from './GalexisLogo'
import Icon from './Icon'
import { company } from '../data/company'
import './Navbar.css'

const fullMenuLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Services', path: '/services' },
  { label: 'Export', path: '/export' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
]

// Shown inline in the header on wide screens
const headerLinks = fullMenuLinks.filter(l => !['/', '/contact', '/careers'].includes(l.path))

function MenuBtn({ open, onClick, light }) {
  return (
    <button
      className={`menu-btn${open ? ' menu-btn--open' : ''}${light ? ' menu-btn--light' : ''}`}
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <span className="menu-btn__text">
        <span className="menu-btn__lbl">Menu</span>
        <span className="menu-btn__lbl menu-btn__lbl--alt">Close</span>
      </span>
      <svg className="menu-btn__ring" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15.5" strokeWidth="1" />
        <line className="menu-btn__bar menu-btn__bar--a" x1="9" y1="13" x2="23" y2="13" strokeWidth="1.5" strokeLinecap="round" />
        <line className="menu-btn__bar menu-btn__bar--b" x1="9" y1="19" x2="23" y2="19" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

export default function Navbar({ isLoaded }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const location = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    doClose()
  }, [location]) // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const doOpen = () => {
    clearTimeout(closeTimer.current)
    setMenuMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)))
  }

  const doClose = () => {
    setMenuOpen(false)
    closeTimer.current = setTimeout(() => setMenuMounted(false), 900)
  }

  const toggle = () => menuOpen ? doClose() : doOpen()

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  return (
    <>
      {/* ── Header ── */}
      <header className={`phdr${transparent ? ' phdr--clear' : ' phdr--frosted'}${scrolled ? ' phdr--scrolled' : ''}${isLoaded ? ' phdr--in' : ''}`}>
        {/* Contact strip (desktop, hidden once scrolled) */}
        <div className="phdr__top">
          <div className="container phdr__top-inner">
            <span className="phdr__top-tag">{company.tagline}</span>
            <div className="phdr__top-links">
              <a href={`tel:${company.phones[0].tel}`}><Icon name="phone" />{company.phones[0].display}</a>
              <a href={`mailto:${company.email}`}><Icon name="mail" />{company.email}</a>
              <Link to="/safety-reporting">Report a side effect</Link>
            </div>
          </div>
        </div>

        <div className="container phdr__inner">
          <Link to="/" className="phdr__logo" aria-label="Galexis Pharmaceuticals — Home">
            <GalexisLogo light={transparent} size="md" />
          </Link>

          <nav className="phdr__nav" aria-label="Primary">
            {headerLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`phdr__link${location.pathname === l.path ? ' phdr__link--active' : ''}`}
                aria-current={location.pathname === l.path ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="phdr__right">
            <Link to="/contact" className={`phdr-cta${transparent ? ' phdr-cta--ghost' : ''}`}>Get in Touch</Link>
            <MenuBtn open={menuOpen} onClick={toggle} light={transparent} />
          </div>
        </div>
      </header>

      {/* ── Full-screen menu ── */}
      {menuMounted && (
        <aside className={`fmenu${menuOpen ? ' fmenu--open' : ''}`} role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="fmenu__bg" onClick={doClose} />
          <div className="fmenu__panel">
            {/* Left: photo panel (desktop only) */}
            <div className="fmenu__left">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=1200&fit=crop&q=80"
                alt=""
                className="fmenu__left-photo"
                aria-hidden="true"
              />
              <div className="fmenu__left-overlay">
                <GalexisLogo light size="lg" />
                <p className="fmenu__left-sub">Bridging Health<br />Across Borders.</p>
              </div>
            </div>

            {/* Right: nav links */}
            <div className="fmenu__right">
              <div className="fmenu__mobile-logo"><GalexisLogo light size="sm" /></div>
              <button className="fmenu__x" onClick={doClose} aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
                <span>Close</span>
              </button>

              <nav className="fmenu__nav" aria-label="Main navigation">
                <ul>
                  {fullMenuLinks.map((item, i) => {
                    const isActive = location.pathname === item.path
                    return (
                      <li key={item.path} className="fmenu__item" style={{ '--i': i }}>
                        <Link
                          to={item.path}
                          className={`fmenu__link${isActive ? ' fmenu__link--active' : ''}`}
                          onClick={doClose}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <span className="fmenu__link-inner">
                            <span className="fmenu__link-t">{item.label}</span>
                            <span className="fmenu__link-t fmenu__link-t--it" aria-hidden="true">{item.label}</span>
                          </span>
                          {isActive && <span className="fmenu__link-dot" aria-hidden="true" />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <div className="fmenu__foot">
                {company.phones.map(p => <a key={p.tel} href={`tel:${p.tel}`} className="fmenu__foot-a">{p.display}</a>)}
                <a href={`mailto:${company.email}`} className="fmenu__foot-a">{company.email}</a>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
