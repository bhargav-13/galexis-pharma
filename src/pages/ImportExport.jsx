import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './ImportExport.css'

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

const [formData, setFormData] = [null, null]

export default function ImportExport() {
  const [form, setForm] = useState({ name: '', company: '', country: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.country.trim()) e.country = 'Country is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <div className="import-export-page">
      <PageHero
        title="Global Supply Chain Excellence"
        subtitle="Connecting pharmaceutical markets across continents with regulatory expertise, reliable logistics, and quality-assured products."
        breadcrumbs={[{ label: 'Business Operations', path: '/business' }, { label: 'Import / Export' }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="ie-intro">
              <div>
                <span className="section-tag">Global Trade Division</span>
                <h2 className="section-title">Bridging Pharmaceutical Markets Worldwide</h2>
                <p>
                  Our Import/Export division serves as the global trade arm of our pharmaceutical
                  operations, enabling the regulated and efficient movement of pharmaceuticals, raw materials, and
                  specialty chemicals across international borders.
                </p>
                <p style={{ marginTop: '12px' }}>
                  With offices in India and Germany, we are uniquely positioned to facilitate trade between European
                  and South Asian pharmaceutical markets, understanding the regulatory nuances, documentation requirements,
                  and logistics complexities of each region we serve.
                </p>
                <div className="ie-intro__photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop&q=80"
                    alt="Global pharmaceutical logistics and shipping"
                    className="ie-intro__photo"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="ie-scope-boxes">
                {['Finished Formulations', 'Active Pharmaceutical Ingredients', 'Excipients & Chemicals', 'Packaging Materials', 'Veterinary Products', 'Nutraceuticals'].map((item, i) => (
                  <div key={i} className="ie-scope-box">{item}</div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* World Map Visual */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Global Presence</span>
              <h2 className="section-title">Our Global Reach</h2>
              <p className="section-subtitle">Operating across 20+ countries with established distribution networks.</p>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="world-map-visual">
              <div className="world-map-svg">
                <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified world map regions */}
                  <rect width="800" height="400" fill="#EFF3F6" rx="16"/>
                  {/* North America */}
                  <ellipse cx="170" cy="170" rx="110" ry="90" fill="#D8E4ED" />
                  {/* South America */}
                  <ellipse cx="230" cy="290" rx="60" ry="80" fill="#D8E4ED" />
                  {/* Europe */}
                  <ellipse cx="390" cy="140" rx="65" ry="55" fill="#0A8B6E" opacity="0.7" />
                  {/* Africa */}
                  <ellipse cx="400" cy="270" rx="70" ry="90" fill="#D8E4ED" />
                  {/* Asia */}
                  <ellipse cx="580" cy="160" rx="130" ry="80" fill="#0D2B4E" opacity="0.5" />
                  {/* India highlight */}
                  <ellipse cx="570" cy="210" rx="30" ry="35" fill="#0A8B6E" opacity="0.9" />
                  {/* Australia */}
                  <ellipse cx="660" cy="310" rx="55" ry="45" fill="#D8E4ED" />

                  {/* Connection lines */}
                  <line x1="390" y1="140" x2="570" y2="210" stroke="#00C4A7" strokeWidth="2" strokeDasharray="6,4" opacity="0.8"/>
                  <line x1="390" y1="140" x2="170" y2="170" stroke="#00C4A7" strokeWidth="2" strokeDasharray="6,4" opacity="0.5"/>
                  <line x1="570" y1="210" x2="660" y2="310" stroke="#00C4A7" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.5"/>

                  {/* Pins */}
                  <circle cx="385" cy="142" r="7" fill="#0A8B6E" />
                  <circle cx="385" cy="142" r="12" fill="#0A8B6E" opacity="0.25" />
                  <circle cx="570" cy="212" r="9" fill="#0D2B4E" />
                  <circle cx="570" cy="212" r="15" fill="#0D2B4E" opacity="0.2" />

                  <text x="370" y="165" fontSize="11" fill="#0A8B6E" fontWeight="bold">Germany</text>
                  <text x="545" y="235" fontSize="11" fill="#0D2B4E" fontWeight="bold">India</text>
                  <text x="60" y="180" fontSize="11" fill="#6B8399">Americas</text>
                  <text x="610" y="155" fontSize="11" fill="#6B8399">Asia Pacific</text>
                  <text x="350" y="295" fontSize="11" fill="#6B8399">Africa</text>
                </svg>
              </div>
              <div className="world-map-stats">
                <div className="world-map-stat"><span>20+</span><small>Countries</small></div>
                <div className="world-map-stat"><span>2</span><small>Continents w/ Offices</small></div>
                <div className="world-map-stat"><span>50+</span><small>Global Partners</small></div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Regulatory */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Compliance</span>
              <h2 className="section-title">Regulatory Compliance</h2>
              <p className="section-subtitle">All import/export operations are conducted in full compliance with applicable international pharmaceutical regulations.</p>
            </div>
          </RevealSection>
          <div className="grid-3">
            {[
              { badge: 'WHO-GMP', title: 'World Health Organization', desc: 'WHO Good Manufacturing Practice certification ensures our products meet global health authority standards for quality and safety.' },
              { badge: 'EU-GMP', title: 'European Union Standards', desc: 'EU-GMP compliance enables us to facilitate pharmaceutical trade within the European Economic Area with full regulatory acceptance.' },
              { badge: 'USFDA', title: 'US FDA Guidelines', desc: 'Adherence to FDA current Good Manufacturing Practice (cGMP) regulations for pharmaceutical manufacturing and import/export activities.' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="ie-reg-card card" style={{ padding: '28px' }}>
                  <div className="ie-reg-card__badge">{item.badge}</div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: '600', margin: '12px 0 8px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="ie-form-wrapper">
              <div className="ie-form-header">
                <span className="section-tag">Partner Enquiry</span>
                <h2 className="section-title">Start a Partnership Conversation</h2>
                <p>Fill in the form below and our global trade team will get back to you within 48 hours.</p>
              </div>
              {submitted ? (
                <div className="ie-form-success">
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3>Thank You for Your Enquiry!</h3>
                  <p>Our international trade team will review your enquiry and contact you within 48 hours.</p>
                </div>
              ) : (
                <form className="ie-form" onSubmit={handleSubmit} noValidate>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={errors.name ? 'error' : ''} placeholder="Your full name" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Company Name *</label>
                      <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className={errors.company ? 'error' : ''} placeholder="Your company" />
                      {errors.company && <span className="form-error">{errors.company}</span>}
                    </div>
                    <div className="form-group">
                      <label>Country *</label>
                      <input type="text" value={form.country} onChange={e => setForm({...form, country: e.target.value})} className={errors.country ? 'error' : ''} placeholder="Your country" />
                      {errors.country && <span className="form-error">{errors.country}</span>}
                    </div>
                    <div className="form-group">
                      <label>Business Email *</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={errors.email ? 'error' : ''} placeholder="you@company.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message / Requirements *</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={errors.message ? 'error' : ''} placeholder="Describe your trade requirements, product interests, or partnership proposal..." rows={5} />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn-primary">Send Enquiry</button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
