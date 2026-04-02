import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './RnD.css'

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

const pipeline = [
  { step: '01', label: 'Discovery', desc: 'Molecule identification and target selection' },
  { step: '02', label: 'Formulation', desc: 'Drug formulation development & optimisation' },
  { step: '03', label: 'Testing', desc: 'In-vitro and stability testing' },
  { step: '04', label: 'Regulatory', desc: 'Dossier preparation & submissions' },
  { step: '05', label: 'Launch', desc: 'Commercial manufacturing & market entry' },
]

const dosageTabs = [
  {
    id: 'osd',
    label: 'OSD',
    title: 'Oral Solid Dosage',
    content: 'Our Oral Solid Dosage (OSD) R&D focuses on immediate-release, modified-release, and bilayer tablet technologies. We develop film-coated, sugar-coated, and enteric-coated tablets, as well as hard and soft gelatin capsules with enhanced bioavailability.'
  },
  {
    id: 'liquid',
    label: 'Oral Liquids',
    title: 'Oral Liquid Formulations',
    content: 'Solutions, suspensions, emulsions, and elixirs developed with advanced formulation science to ensure stability, palatability, and accurate dosing. Paediatric formulations receive special attention for taste-masking and dose flexibility.'
  },
  {
    id: 'parenteral',
    label: 'Parenterals',
    title: 'Parenteral Formulations',
    content: 'Sterile injectable formulations developed under ISO Class 5 conditions. Our parenteral R&D covers small-volume parenterals (SVP) and large-volume parenterals (LVP), lyophilised products, and Ready-to-Use formulations.'
  },
  {
    id: 'ophthalmic',
    label: 'Ophthalmic',
    title: 'Ophthalmic Preparations',
    content: 'Sterile eye drops, ointments, and gels for a range of ophthalmic conditions. Our formulations are developed with specific focus on sterility assurance, isotonicity, pH balance, and ocular bioavailability.'
  },
  {
    id: 'strips',
    label: 'Oral Strips',
    title: 'Oral Thin Films (OTF)',
    content: 'Our flagship innovation — Oral Thin Film technology enables rapid dissolution without water, improving compliance in paediatric, geriatric, and compliance-challenged populations. Our OTF platform is versatile across multiple therapeutic categories.'
  },
]

const oralStripProducts = [
  { name: 'Ondansetron OTF 4mg', category: 'Antiemetic', feature: 'Rapid 30s dissolution' },
  { name: 'Domperidone OTF 10mg', category: 'GI Motility', feature: 'Pre-meal convenience' },
  { name: 'Sumatriptan OTF 50mg', category: 'Antimigraine', feature: 'Quick onset' },
  { name: 'Lorazepam OTF 1mg', category: 'Anxiolytic', feature: 'Palatable formulation' },
  { name: 'Ropinirole OTF 0.5mg', category: 'CNS', feature: 'Enhanced compliance' },
  { name: 'Zolmitriptan OTF 2.5mg', category: 'Antimigraine', feature: 'Filmstrip delivery' },
]

export default function RnD() {
  const [activeTab, setActiveTab] = useState('osd')

  return (
    <div className="rnd-page">
      <PageHero
        title="Research & Development"
        subtitle="Advancing pharmaceutical science through innovation, precision formulation, and a relentless commitment to improving patient outcomes."
        breadcrumbs={[{ label: 'Science & Innovation' }, { label: 'Research & Development' }]}
      />

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="rnd-philosophy">
              <div>
                <span className="section-tag">Our Approach</span>
                <h2 className="section-title">R&D Philosophy</h2>
                <p>
                  At Auxillion Lifecare, R&D is not just a department — it is the beating heart of our organisation.
                  We believe that breakthrough therapies emerge from the intersection of rigorous science, creative
                  formulation thinking, and deep understanding of patient needs.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Our research philosophy is built on three pillars: scientific excellence, patient-centricity, and
                  regulatory pragmatism. By combining innovative formulation science with a thorough understanding of
                  global regulatory pathways, we ensure our pipeline products reach patients efficiently and reliably.
                </p>
              </div>
              <div className="rnd-philosophy__card">
                <img
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&h=500&fit=crop&q=80"
                  alt="R&D scientist in laboratory"
                  className="rnd-philosophy__photo"
                  loading="lazy"
                />
                <h3>One Health Approach</h3>
                <p>
                  Our R&D spans human and veterinary medicine, reflecting our conviction that human, animal,
                  and environmental health are fundamentally interconnected. Discoveries in one domain inform
                  and accelerate progress in the other.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Pipeline */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Development Process</span>
              <h2 className="section-title">R&D Pipeline</h2>
              <p className="section-subtitle">A rigorous five-stage process from discovery to commercial launch.</p>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="pipeline-visual">
              {pipeline.map((stage, i) => (
                <div key={i} className="pipeline-stage">
                  <div className="pipeline-stage__number">{stage.step}</div>
                  <div className="pipeline-stage__connector" />
                  <div className="pipeline-stage__info">
                    <h4>{stage.label}</h4>
                    <p>{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Dosage form tabs */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Formulation Expertise</span>
              <h2 className="section-title">Dosage Form Capabilities</h2>
            </div>
          </RevealSection>
          <div className="rnd-tabs">
            <div className="rnd-tabs__nav">
              {dosageTabs.map(tab => (
                <button
                  key={tab.id}
                  className={`rnd-tab-btn ${activeTab === tab.id ? 'rnd-tab-btn--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="rnd-tabs__content">
              {dosageTabs.filter(t => t.id === activeTab).map(tab => (
                <div key={tab.id} className="rnd-tab-panel">
                  <h3>{tab.title}</h3>
                  <p>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oral Strip Portfolio */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Innovation Highlight</span>
              <h2 className="section-title">Oral Strip Portfolio</h2>
              <p className="section-subtitle">Our pioneering Oral Thin Film technology — redefining drug delivery.</p>
            </div>
          </RevealSection>
          <div className="otf-grid">
            {oralStripProducts.map((p, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="otf-card">
                  <div className="otf-card__feature">{p.feature}</div>
                  <h4 className="otf-card__name">{p.name}</h4>
                  <span className="otf-card__cat">{p.category}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0D4F6E 100%)' }}>
        <div className="container">
          <RevealSection>
            <div className="rnd-stats">
              <div className="rnd-stat"><span>200+</span><small>Formulations Developed</small></div>
              <div className="rnd-stat"><span>5+</span><small>Years of R&D</small></div>
              <div className="rnd-stat"><span>50+</span><small>Products in Pipeline</small></div>
              <div className="rnd-stat"><span>15+</span><small>Dosage Forms</small></div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
