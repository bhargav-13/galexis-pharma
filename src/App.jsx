import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import About from './pages/About'
import Business from './pages/Business'
import HumanPharma from './pages/HumanPharma'
import VetPharma from './pages/VetPharma'
import Nutraceuticals from './pages/Nutraceuticals'
import ImportExport from './pages/ImportExport'
import RnD from './pages/RnD'
import Manufacturing from './pages/Manufacturing'
import Products from './pages/Products'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import SafetyReporting from './pages/SafetyReporting'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppLayout({ isLoaded }) {
  return (
    <>
      <ScrollToTop />
      <Navbar isLoaded={isLoaded} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/human-pharma" element={<HumanPharma />} />
          <Route path="/vet-pharma" element={<VetPharma />} />
          <Route path="/nutraceuticals" element={<Nutraceuticals />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/safety-reporting" element={<SafetyReporting />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
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
