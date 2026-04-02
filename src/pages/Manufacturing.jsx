import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Manufacturing.css'

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

const capabilities = [
  { image: 'https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=400&h=220&fit=crop&q=80', title: 'Solid Dosage Manufacturing', desc: 'High-speed tablet compression, coating, and capsule filling with full process automation and PAT integration.' },
  { image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=220&fit=crop&q=80', title: 'Liquid Manufacturing', desc: 'Oral liquids, syrups, suspensions and topical formulations manufactured in dedicated, cleanroom-certified suites.' },
  { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=220&fit=crop&q=80', title: 'Sterile Manufacturing', desc: 'Aseptic filling lines for ophthalmic and injectable products with ISO Class 5 environments and validated sterilisation.' },
  { image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=220&fit=crop&q=80', title: 'Oral Thin Films', desc: 'Dedicated OTF casting and cutting lines for our innovative mouth-dissolving film products.' },
]

const technologies = [
  { name: 'Wet & Dry Granulation', icon: '⚗️' },
  { name: 'Film Coating Technology', icon: '🎨' },
  { name: 'Controlled Release Systems', icon: '⏱️' },
  { name: 'Aseptic Processing', icon: '🔬' },
]

const facilityFeatures = [
  'Dedicated manufacturing suites per dosage form',
  'Real-time environmental monitoring (temperature, RH, particle count)',
  'HVAC systems with HEPA filtration',
  'In-process quality control laboratories',
  'Validated cleaning procedures (CIP/SIP)',
  'ERP-integrated batch manufacturing records',
  'Cold chain storage for temperature-sensitive products',
  '24/7 CCTV surveillance and access control',
]

const complianceBadges = [
  { badge: 'cGMP', desc: 'Current Good Manufacturing Practice' },
  { badge: 'IQ/OQ/PQ', desc: 'Equipment Qualification Protocols' },
  { badge: 'Serialization', desc: 'Track & Trace Compliance' },
  { badge: 'GDocP', desc: 'Good Documentation Practice' },
]

export default function Manufacturing() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', requirements: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.company.trim()) e.company = 'Company required'
    if (!form.email.trim()) e.email = 'Email required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.requirements.trim()) e.requirements = 'Please describe your requirements'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <div className="manufacturing-page">
      <PageHero
        title="Manufacturing Excellence"
        subtitle="State-of-the-art cGMP-compliant facilities producing world-class pharmaceuticals with precision, consistency, and uncompromising quality."
        breadcrumbs={[{ label: 'Science & Innovation' }, { label: 'Manufacturing' }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="mfg-intro">
              <div>
                <span className="section-tag">OSD Excellence</span>
                <h2 className="section-title">Where Precision Meets Scale</h2>
                <p>
                  Auxillion Lifecare's manufacturing infrastructure represents our commitment to delivering pharmaceutical
                  products of the highest quality at commercial scale. Our facilities are designed, built, and operated
                  to meet the most stringent international regulatory standards.
                </p>
                <p style={{ marginTop: '12px' }}>
                  With a strong focus on Oral Solid Dosage (OSD) forms, our manufacturing capabilities extend across
                  a broad range of dosage types — from conventional tablets to innovative oral thin films, sterile
                  ophthalmics, and complex modified-release formulations.
                </p>
              </div>
              <div>
                <div className="mfg-intro__photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=800&h=500&fit=crop&q=80"
                    alt="Pharmaceutical manufacturing facility"
                    className="mfg-intro__photo"
                    loading="lazy"
                  />
                </div>
                <div className="mfg-capacity-box">
                  <div className="mfg-capacity-number">10M+</div>
                  <div className="mfg-capacity-label">Units / Month</div>
                  <div className="mfg-capacity-sub">Manufacturing Capacity</div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Core Manufacturing Capabilities</h2>
            </div>
          </RevealSection>
          <div className="grid-4">
            {capabilities.map((cap, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="mfg-cap-card card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={cap.image} alt={cap.title} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  <div style={{ padding: '20px 20px 22px', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.98rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-primary)' }}>{cap.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{cap.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="mfg-tech-section">
              <div>
                <span className="section-tag">Technology</span>
                <h2 className="section-title">Manufacturing Technologies</h2>
                <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', marginBottom: '28px' }}>
                  We deploy advanced pharmaceutical manufacturing technologies to ensure product quality,
                  process efficiency, and regulatory compliance.
                </p>
                <div className="mfg-tech-list">
                  {technologies.map((tech, i) => (
                    <div key={i} className="mfg-tech-item">
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mfg-facility-features">
                <h3>Facility Features</h3>
                <ul>
                  {facilityFeatures.map((f, i) => (
                    <li key={i}><span>✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Compliance */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Quality Systems</span>
              <h2 className="section-title">cGMP Compliance</h2>
              <p className="section-subtitle">Comprehensive quality systems embedded throughout our manufacturing operations.</p>
            </div>
          </RevealSection>
          <div className="grid-4">
            {complianceBadges.map((b, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="compliance-badge-card">
                  <div className="compliance-badge-card__badge">{b.badge}</div>
                  <p className="compliance-badge-card__desc">{b.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA form */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="mfg-partner-form">
              <div className="mfg-partner-form__header">
                <span className="section-tag">Partnership</span>
                <h2 className="section-title">Become a Manufacturing Partner</h2>
                <p>Looking for a reliable contract manufacturing partner? Share your requirements and our team will get back to you.</p>
              </div>
              {submitted ? (
                <div className="mfg-form-success">
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3>Thank You!</h3>
                  <p>Our manufacturing partnerships team will reach out to you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={errors.name ? 'error' : ''} placeholder="Full name" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Company *</label>
                      <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className={errors.company ? 'error' : ''} placeholder="Company name" />
                      {errors.company && <span className="form-error">{errors.company}</span>}
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={errors.email ? 'error' : ''} placeholder="you@company.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 234 567 8900" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Manufacturing Requirements *</label>
                    <textarea value={form.requirements} onChange={e => setForm({...form, requirements: e.target.value})} className={errors.requirements ? 'error' : ''} placeholder="Describe your product, dosage form, volumes, and any specific requirements..." rows={5} />
                    {errors.requirements && <span className="form-error">{errors.requirements}</span>}
                  </div>
                  <button type="submit" className="btn-primary">Submit Enquiry</button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
