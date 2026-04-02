import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const fullMenuLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Business Operations', path: '/business' },
  { label: 'Human Medicines', path: '/human-pharma' },
  { label: 'Veterinary Medicines', path: '/vet-pharma' },
  { label: 'Nutraceuticals', path: '/nutraceuticals' },
  { label: 'Import / Export', path: '/import-export' },
  { label: 'Research & Development', path: '/rnd' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Products', path: '/products' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
]

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
      <header className={`phdr${transparent ? ' phdr--clear' : ' phdr--frosted'}${isLoaded ? ' phdr--in' : ''}`}>
        <div className="container phdr__inner">
          <Link to="/" className="phdr__logo">
            <span className={`logo-wm${transparent ? ' logo-wm--light' : ''}`}>Logo</span>
          </Link>

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
                <span className="fmenu__left-brand">Logo</span>
                <p className="fmenu__left-sub">Developing with purpose,<br />manufacturing with precision.</p>
              </div>
            </div>

            {/* Right: nav links */}
            <div className="fmenu__right">
              <button className="fmenu__x" onClick={doClose} aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
                <span>Close</span>
              </button>

              <nav className="fmenu__nav">
                <ul>
                  {fullMenuLinks.map((item, i) => (
                    <li key={item.path} className="fmenu__item" style={{ '--i': i }}>
                      <Link to={item.path} className="fmenu__link" onClick={doClose}>
                        <span className="fmenu__link-inner">
                          <span className="fmenu__link-t">{item.label}</span>
                          <span className="fmenu__link-t fmenu__link-t--it" aria-hidden="true">{item.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="fmenu__foot">
                <a href="tel:+919409502669" className="fmenu__foot-a">+91 94095 02669</a>
                <a href="mailto:info@auxillionlifecare.com" className="fmenu__foot-a">info@auxillionlifecare.com</a>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
