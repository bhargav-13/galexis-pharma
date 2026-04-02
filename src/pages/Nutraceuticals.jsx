import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Nutraceuticals.css'

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const nutraProducts = [
  { image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&h=220&fit=crop&q=80', name: 'Multivitamin Complex', category: 'Vitamins & Minerals', desc: 'Comprehensive daily multivitamin formula for overall health and vitality.' },
  { image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=220&fit=crop&q=80', name: 'Immunity Shield', category: 'Immunity', desc: 'Advanced immunity-boosting formula with Vitamin C, Zinc, and Elderberry.' },
  { image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=220&fit=crop&q=80', name: 'Calcium + D3', category: 'Bone Health', desc: 'High-absorption calcium with D3 for strong bones and dental health.' },
  { image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=220&fit=crop&q=80', name: 'Omega-3 Fish Oil', category: 'Wellness', desc: 'Purified omega-3 fatty acids for cardiovascular and cognitive health.' },
  { image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=220&fit=crop&q=80', name: 'Iron + Folic Acid', category: 'Minerals', desc: 'Essential for haemoglobin synthesis and prevention of anaemia.' },
  { image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=220&fit=crop&q=80', name: 'Probiotic Complex', category: 'Gut Health', desc: 'Multi-strain probiotic blend for digestive balance and microbiome health.' },
]

const cosmetiProducts = [
  { image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=220&fit=crop&q=80', name: 'Vitamin C Serum', category: 'Skin Care', desc: 'Brightening serum with stabilised L-Ascorbic Acid for radiant skin.' },
  { image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=220&fit=crop&q=80', name: 'Hyaluronic Moisturiser', category: 'Skin Care', desc: 'Deep hydration formula with hyaluronic acid for plump, youthful skin.' },
  { image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&h=220&fit=crop&q=80', name: 'Hair Growth Serum', category: 'Hair Care', desc: 'Biotin and Redensyl-powered serum for thicker, stronger hair.' },
  { image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=220&fit=crop&q=80', name: 'Anti-Dandruff Shampoo', category: 'Hair Care', desc: 'Ketoconazole-based medicated shampoo for scalp health.' },
]

export default function Nutraceuticals() {
  return (
    <div className="nutra-page">
      <PageHero
        title="Nutraceuticals & Cosmeceuticals"
        subtitle="Where nutrition meets medicine — science-backed wellness and beauty solutions for the modern health-conscious consumer."
        breadcrumbs={[{ label: 'Business Operations', path: '/business' }, { label: 'Nutraceuticals & Cosmeceuticals' }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '20px' }}>
              <span className="section-tag">Wellness Division</span>
              <h2 className="section-title">Nourishing Health from the Inside Out</h2>
              <p className="section-subtitle" style={{ maxWidth: '700px' }}>
                Auxillion Lifecare's Nutraceuticals & Cosmeceuticals division bridges the boundary between food, nutrition,
                and medicine. Our products are formulated with clinically validated ingredients, manufactured under strict
                GMP conditions, and designed for efficacy, safety, and consumer satisfaction.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Nutraceuticals */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="nutra-section-header">
              <div className="nutra-section-photo-wrap">
                <img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=300&fit=crop&q=80" alt="Vitamins and supplements" className="nutra-section-photo" loading="lazy" />
              </div>
              <div>
                <span className="section-tag">Nutraceuticals</span>
                <h2 className="section-title">Supplements, Vitamins & Immunity</h2>
                <p className="section-subtitle">
                  Our nutraceutical range covers the full spectrum of dietary supplements — from vitamins and minerals
                  to herbal extracts and functional foods — all backed by scientific evidence and formulated for optimal bioavailability.
                </p>
              </div>
            </div>
          </RevealSection>
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {nutraProducts.map((p, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="nutra-product-card card">
                  <div className="nutra-product-card__img-wrap">
                    <img src={p.image} alt={p.name} className="nutra-product-card__img" loading="lazy" />
                  </div>
                  <span className="nutra-product-card__cat">{p.category}</span>
                  <h3 className="nutra-product-card__name">{p.name}</h3>
                  <p className="nutra-product-card__desc">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmeceuticals */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="nutra-section-header">
              <div className="nutra-section-photo-wrap">
                <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=300&fit=crop&q=80" alt="Skincare and cosmeceuticals" className="nutra-section-photo" loading="lazy" />
              </div>
              <div>
                <span className="section-tag">Cosmeceuticals</span>
                <h2 className="section-title">Skin Care & Hair Care</h2>
                <p className="section-subtitle">
                  Our cosmeceutical range merges dermatological science with modern beauty — formulating products that
                  deliver visible, lasting results backed by clinical evidence.
                </p>
              </div>
            </div>
          </RevealSection>
          <div className="grid-4" style={{ marginTop: '40px' }}>
            {cosmetiProducts.map((p, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="nutra-product-card card">
                  <div className="nutra-product-card__img-wrap">
                    <img src={p.image} alt={p.name} className="nutra-product-card__img" loading="lazy" />
                  </div>
                  <span className="nutra-product-card__cat">{p.category}</span>
                  <h3 className="nutra-product-card__name">{p.name}</h3>
                  <p className="nutra-product-card__desc">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Quality Assurance</span>
              <h2 className="section-title">Certifications & Standards</h2>
              <p className="section-subtitle">Every nutraceutical and cosmeceutical product meets rigorous safety and quality benchmarks.</p>
            </div>
          </RevealSection>
          <div className="cert-badges">
            {['FSSAI Approved', 'ISO Certified', 'GMP Compliant', 'Non-GMO', 'Quality Tested', 'Safe Ingredients'].map((cert, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="cert-badge">
                  <div className="cert-badge__check">✓</div>
                  <span>{cert}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
