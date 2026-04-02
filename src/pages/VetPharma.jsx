import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './VetPharma.css'

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

export default function VetPharma() {
  return (
    <div className="vet-pharma-page">
      <PageHero
        title="Veterinary Medicines Division"
        subtitle="Advancing animal health through innovative, science-backed pharmaceutical solutions for livestock, poultry, aquaculture, and companion animals."
        breadcrumbs={[{ label: 'Business Operations', path: '/business' }, { label: 'Veterinary Medicines' }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '20px' }}>
              <span className="section-tag">Veterinary Division</span>
              <h2 className="section-title">One Health — Bridging Human & Animal Wellness</h2>
              <p className="section-subtitle" style={{ maxWidth: '720px' }}>
                The health of animals is deeply intertwined with human and environmental health. Auxillion Lifecare's
                Veterinary Division embraces the "One Health" philosophy, developing pharmaceuticals that protect animal
                welfare, ensure food safety, and support sustainable agricultural practices worldwide.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Large Animals */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="vet-section-grid">
              <div className="vet-section-visual vet-section-visual--large">
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=700&h=500&fit=crop&q=80"
                  alt="Cattle and livestock in field"
                  className="vet-section-photo"
                  loading="lazy"
                />
              </div>
              <div className="vet-section-content">
                <span className="section-tag">Large Animal Care</span>
                <h2 className="section-title">Livestock & Poultry Pharmaceuticals</h2>
                <p>
                  Our livestock pharmaceutical range is designed to support the health and productivity of cattle,
                  sheep, goats, pigs, poultry, and aquaculture species. We manufacture high-quality injectables,
                  oral liquids, and feed supplements that meet the demands of modern intensive farming operations.
                </p>
                <p style={{ marginTop: '12px' }}>
                  All our veterinary medicines are formulated and tested in accordance with the applicable veterinary
                  drug regulations, ensuring safe withdrawal periods and food safety compliance.
                </p>
                <div className="vet-product-list">
                  <div className="vet-product-item"><span>💉</span> Oxytetracycline Injectable</div>
                  <div className="vet-product-item"><span>🧪</span> Enrofloxacin 10% Solution</div>
                  <div className="vet-product-item"><span>💊</span> Albendazole Suspension</div>
                  <div className="vet-product-item"><span>🔬</span> Ivermectin 1% Injectable</div>
                  <div className="vet-product-item"><span>🌿</span> Calcium Borogluconate</div>
                  <div className="vet-product-item"><span>💊</span> Amoxicillin Vet 500mg</div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Companion Animals */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="vet-section-grid vet-section-grid--reverse">
              <div className="vet-section-content">
                <span className="section-tag">Companion Animals</span>
                <h2 className="section-title">Pet Care Pharmaceuticals</h2>
                <p>
                  We understand the bond between pet owners and their animals. Our companion animal range is developed
                  with the same rigour and care as our human medicines — because pets deserve the best possible care too.
                </p>
                <p style={{ marginTop: '12px' }}>
                  From antiparasitic treatments and pain management to nutritional supplements and dermatological
                  preparations, our companion animal portfolio supports the holistic health of dogs, cats, and small pets.
                </p>
                <div className="vet-product-list">
                  <div className="vet-product-item"><span>🐕</span> Meloxicam Vet (Pain & Inflammation)</div>
                  <div className="vet-product-item"><span>🐈</span> Feline Antiparasitic Range</div>
                  <div className="vet-product-item"><span>💊</span> Vitamin B Complex Vet</div>
                  <div className="vet-product-item"><span>🔬</span> Dermatological Preparations</div>
                </div>
              </div>
              <div className="vet-section-visual vet-section-visual--companion">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=700&h=500&fit=crop&q=80"
                  alt="Veterinarian with pet dog"
                  className="vet-section-photo"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Nutritional Feeds */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Nutrition</span>
              <h2 className="section-title">Nutritional Feeds & Supplements</h2>
              <p className="section-subtitle">Science-formulated nutritional products for optimal animal growth, health, and productivity.</p>
            </div>
          </RevealSection>
          <div className="grid-3">
            {[
              { image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=220&fit=crop&q=80', title: 'Growth Promoters', desc: 'Targeted nutritional supplements to support healthy weight gain and muscle development in livestock.' },
              { image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&h=220&fit=crop&q=80', title: 'Immune Boosters', desc: 'Vitamin and mineral complexes that strengthen the immune system for disease resistance.' },
              { image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=220&fit=crop&q=80', title: 'Lactation Support', desc: 'Specialised preparations to enhance milk production and quality in dairy cattle.' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="vet-nutrition-card card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  <div style={{ padding: '20px 20px 22px' }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="vet-cta">
              <h2>Explore Our Full Veterinary Product Range</h2>
              <p>Browse our comprehensive catalogue of veterinary pharmaceuticals or connect with our team for product-specific information and licensing enquiries.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
                <Link to="/products" className="btn-primary">View Products</Link>
                <Link to="/contact" className="btn-outline">Contact Sales</Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
