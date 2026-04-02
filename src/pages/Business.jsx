import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Business.css'

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

const divisions = [
  {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&h=380&fit=crop&q=80',
    title: 'Human Medicines',
    desc: 'Our human pharmaceutical division develops and manufactures a comprehensive range of prescription and OTC medicines across key therapeutic areas. From tablets and capsules to ophthalmic preparations and oral strips, we deliver clinically effective formulations meeting global regulatory standards.',
    path: '/human-pharma',
    highlights: ['Tablets & Capsules', 'Ophthalmic Solutions', 'Oral Thin Films', 'Syrups & Suspensions'],
    color: '#0A8B6E',
  },
  {
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=700&h=380&fit=crop&q=80',
    title: 'Veterinary Medicines',
    desc: 'Dedicated to animal health, our veterinary division produces a wide range of pharmaceuticals for livestock, poultry, and companion animals. Our products support sustainable agriculture while upholding the highest standards of animal welfare and food safety.',
    path: '/vet-pharma',
    highlights: ['Large Animal Care', 'Companion Animals', 'Antiparasitics', 'Nutritional Supplements'],
    color: '#0D4F6E',
  },
  {
    image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=700&h=380&fit=crop&q=80',
    title: 'Nutraceuticals & Cosmeceuticals',
    desc: 'Bridging the gap between nutrition and medicine, our nutraceuticals range includes vitamins, minerals, herbal supplements, and functional foods. Our cosmeceuticals line offers science-backed skincare and haircare formulations for the modern health-conscious consumer.',
    path: '/nutraceuticals',
    highlights: ['Vitamins & Minerals', 'Immunity Boosters', 'Skin Care', 'Hair Care'],
    color: '#078A6B',
  },
  {
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&h=380&fit=crop&q=80',
    title: 'Import / Export',
    desc: 'Our global trade division facilitates the regulated import and export of pharmaceutical raw materials, finished formulations, and specialty chemicals. With a deep understanding of international regulatory frameworks, we connect suppliers and buyers across continents.',
    path: '/import-export',
    highlights: ['WHO-GMP Compliant', 'Regulatory Affairs', 'Global Logistics', 'Quality Sourcing'],
    color: '#2563EB',
  },
]

export default function Business() {
  return (
    <div className="business-page">
      <PageHero
        title="One Health, One Future"
        subtitle="A comprehensive pharmaceutical ecosystem spanning human, veterinary, and wellness sectors — connected by shared science and purpose."
        breadcrumbs={[{ label: 'Business Operations' }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Our Business</span>
              <h2 className="section-title">Integrated Healthcare Solutions</h2>
              <p className="section-subtitle">
                Auxillion Lifecare operates four distinct but interconnected business divisions, each contributing to our
                overarching mission of improving health outcomes across humans, animals, and communities worldwide.
                Together, they form a seamlessly integrated healthcare ecosystem.
              </p>
            </div>
          </RevealSection>

          <div className="business-divisions">
            {divisions.map((div, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="division-card" style={{ '--div-color': div.color }}>
                  <div className="division-card__img-wrap">
                    <img src={div.image} alt={div.title} className="division-card__img" loading="lazy" />
                  </div>
                  <div className="division-card__header">
                    <h3 className="division-card__title">{div.title}</h3>
                  </div>
                  <p className="division-card__desc">{div.desc}</p>
                  <div className="division-card__highlights">
                    {div.highlights.map((h, j) => (
                      <span key={j} className="division-card__badge">{h}</span>
                    ))}
                  </div>
                  <Link to={div.path} className="division-card__link">
                    Explore Division
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* cGMP Note */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="cgmp-note">
              <div className="cgmp-note__icon">✅</div>
              <div className="cgmp-note__content">
                <h3>cGMP Compliance Across All Divisions</h3>
                <p>
                  All Auxillion Lifecare divisions operate under Current Good Manufacturing Practices (cGMP) as mandated
                  by international regulatory authorities including WHO, EU-GMP, and CDSCO. Our quality management systems
                  ensure that every product — whether a human medicine, a veterinary formulation, or a nutraceutical supplement
                  — meets the highest standards of safety, efficacy, and consistency. Regular internal and external audits
                  validate our adherence to these standards across all operations.
                </p>
                <div className="cgmp-badges">
                  <span className="cgmp-badge">cGMP</span>
                  <span className="cgmp-badge">WHO-GMP</span>
                  <span className="cgmp-badge">ISO Certified</span>
                  <span className="cgmp-badge">CDSCO</span>
                  <span className="cgmp-badge">EU-GMP</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
