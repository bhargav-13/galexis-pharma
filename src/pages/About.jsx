import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './About.css'

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

const pillars = [
  { image: 'https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=400&h=220&fit=crop&q=80', title: 'Precision Manufacturing', desc: 'State-of-the-art cGMP compliant facilities producing pharmaceuticals to the highest international standards with rigorous quality controls at every stage.' },
  { image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=220&fit=crop&q=80', title: 'Comprehensive Care', desc: 'A full spectrum healthcare portfolio spanning human medicines, veterinary products, nutraceuticals and cosmeceuticals for holistic wellbeing.' },
  { image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=220&fit=crop&q=80', title: 'Innovative IDDS', desc: 'Pioneering Innovative Drug Delivery Systems including Oral Thin Films, bilayer tablets, and novel formulations that improve patient compliance and efficacy.' },
  { image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=220&fit=crop&q=80', title: 'Research & Development', desc: 'A robust R&D engine that continuously explores new molecules, formulations, and therapeutic strategies to address unmet medical needs worldwide.' },
]

const values = [
  { image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=220&fit=crop&q=80', title: 'Integrity', desc: 'We maintain the highest ethical standards in all our scientific, commercial, and business practices.' },
  { image: 'https://images.unsplash.com/photo-1576670159805-381a0aa9e09e?w=400&h=220&fit=crop&q=80', title: 'Quality First', desc: 'Every product leaving our facilities meets stringent quality benchmarks — no compromises, ever.' },
  { image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=220&fit=crop&q=80', title: 'Patient-Centric', desc: 'Every decision we make is guided by the impact on patient safety, wellbeing, and quality of life.' },
  { image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=220&fit=crop&q=80', title: 'Global Outlook', desc: 'We think globally while acting locally — adapting solutions for diverse markets across continents.' },
]

export default function About() {
  return (
    <div className="about-page">
      <PageHero
        title="Welcome to Auxillion Lifecare"
        subtitle="A purpose-driven pharmaceutical company transforming global healthcare through science, innovation, and compassion."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="about-overview">
              <div className="about-overview__text">
                <span className="section-tag">Our Story</span>
                <h2 className="section-title">Building a Healthier World, One Formulation at a Time</h2>
                <p>
                  Auxillion Lifecare was founded with an unwavering commitment to improving human and animal health through
                  scientifically-driven pharmaceutical innovation. Based in Ahmedabad — India's pharmaceutical hub — we have grown
                  into a globally-minded enterprise with offices in Jamnagar and Schwerte, Germany.
                </p>
                <p style={{ marginTop: '16px' }}>
                  Our portfolio spans across human medicines, veterinary pharmaceuticals, nutraceuticals, cosmeceuticals,
                  and international trade — making us a truly comprehensive healthcare partner. With over 200 products,
                  presence in 20+ countries, and a pipeline of innovative formulations, we are committed to the health
                  of patients across the globe.
                </p>
                <p style={{ marginTop: '16px' }}>
                  Guided by the "One Health" philosophy — recognising the interconnection between human, animal, and
                  environmental health — Auxillion Lifecare approaches pharmaceutical development with a holistic perspective
                  that sets us apart in the global market.
                </p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '28px' }}>Connect With Us</Link>
              </div>
              <div className="about-overview__photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=500&fit=crop&q=80"
                  alt="Pharmaceutical research and development laboratory"
                  className="about-overview__photo"
                  loading="lazy"
                />
                <div className="about-overview__stats-overlay">
                  <div className="about-stat"><span className="about-stat__number">5+</span><span className="about-stat__label">Years</span></div>
                  <div className="about-stat"><span className="about-stat__number">20+</span><span className="about-stat__label">Countries</span></div>
                  <div className="about-stat"><span className="about-stat__number">200+</span><span className="about-stat__label">Products</span></div>
                  <div className="about-stat"><span className="about-stat__number">3</span><span className="about-stat__label">Offices</span></div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Our Foundation</span>
              <h2 className="section-title">Company Pillars</h2>
              <p className="section-subtitle">The four pillars that form the bedrock of everything we do at Auxillion Lifecare.</p>
            </div>
          </RevealSection>
          <div className="grid-4">
            {pillars.map((p, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="about-pillar-card card">
                  <div className="about-pillar-card__img-wrap">
                    <img src={p.image} alt={p.title} className="about-pillar-card__img" loading="lazy" />
                  </div>
                  <h3 className="about-pillar-card__title">{p.title}</h3>
                  <p className="about-pillar-card__desc">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">What We Stand For</span>
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle">The values that guide every decision, every product, and every partnership.</p>
            </div>
          </RevealSection>
          <div className="grid-4">
            {values.map((v, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="about-value-card">
                  <div className="about-value-card__img-wrap">
                    <img src={v.image} alt={v.title} className="about-value-card__img" loading="lazy" />
                  </div>
                  <h3 className="about-value-card__title">{v.title}</h3>
                  <p className="about-value-card__desc">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Our Direction</span>
              <h2 className="section-title">Vision & Mission</h2>
            </div>
          </RevealSection>
          <div className="grid-2">
            <RevealSection delay={0}>
              <div className="vision-mission-card vision-mission-card--vision">
                <div className="vision-mission-card__label">Our Vision</div>
                <h3>To be a globally trusted pharmaceutical partner</h3>
                <p>
                  To emerge as a leading global pharmaceutical enterprise recognised for our innovative drug formulations,
                  uncompromising quality standards, and commitment to improving health outcomes across the human-animal
                  health continuum. We envision a world where every patient, in every corner of the globe, has access
                  to safe, effective, and affordable medicines.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={120}>
              <div className="vision-mission-card vision-mission-card--mission">
                <div className="vision-mission-card__label">Our Mission</div>
                <h3>Developing with purpose, manufacturing with precision</h3>
                <p>
                  To advance global health by developing innovative, high-quality pharmaceutical products across human
                  and veterinary medicine. We are dedicated to building a vertically integrated pharmaceutical company
                  that combines world-class R&D, state-of-the-art manufacturing, and an agile global distribution
                  network — delivering with pride and trust to every partner and patient we serve.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  )
}
