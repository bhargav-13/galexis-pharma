import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTopBtn from './components/ScrollToTopBtn'
import FloatingContact from './components/FloatingContact'
import Seo from './components/Seo'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Manufacturing from './pages/Manufacturing'
import Services from './pages/Services'
import Export from './pages/Export'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import SafetyReporting from './pages/SafetyReporting'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import NotFound from './pages/NotFound'
import './App.css'

// Old URLs from the previous site structure
const redirects = {
  '/business': '/services',
  '/human-pharma': '/products',
  '/vet-pharma': '/products',
  '/nutraceuticals': '/products',
  '/import-export': '/export',
  '/rnd': '/manufacturing',
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait for the new page to render before scrolling to the anchor
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 100)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])
  return null
}

function AppLayout({ isLoaded }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Seo />
      <Navbar isLoaded={isLoaded} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/export" element={<Export />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/safety-reporting" element={<SafetyReporting />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {Object.entries(redirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopBtn />
      <FloatingContact />
    </>
  )
}

export default function App() {
  // Only show loader once per session
  const alreadyLoaded = sessionStorage.getItem('siteLoaded')
  const [showLoader, setShowLoader] = useState(!alreadyLoaded)
  const [isLoaded, setIsLoaded] = useState(!!alreadyLoaded)

  const handleLoaderDone = () => {
    sessionStorage.setItem('siteLoaded', '1')
    setShowLoader(false)
    setIsLoaded(true)
  }

  return (
    <BrowserRouter>
      {showLoader && <Loader onDone={handleLoaderDone} />}
      <AppLayout isLoaded={isLoaded} />
    </BrowserRouter>
  )
}
