import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import './Careers.css'

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

const openPositions = [
  { title: 'Business Development Officer (Export Market)', dept: 'Sales & Export', type: 'Full-time', location: 'Ahmedabad', desc: 'Drive business development activities in international markets, identify new export opportunities, and build lasting relationships with global pharmaceutical distributors and buyers.' },
  { title: 'R&D Scientist', dept: 'Research & Development', type: 'Full-time', location: 'Ahmedabad', desc: 'Lead formulation development of pharmaceutical dosage forms including tablets, capsules, and oral thin films. Conduct stability studies and prepare technical dossiers for regulatory submissions.' },
  { title: 'Production Manager', dept: 'Manufacturing', type: 'Full-time', location: 'Ahmedabad', desc: 'Oversee day-to-day manufacturing operations for solid dosage forms. Ensure compliance with cGMP standards, manage production schedules, and lead a team of production operators.' },
  { title: 'Quality Assurance Executive', dept: 'Quality', type: 'Full-time', location: 'Ahmedabad', desc: 'Execute and maintain quality management systems, conduct batch record reviews, support internal audits, and ensure compliance with regulatory requirements across all products.' },
  { title: 'Marketing Intern', dept: 'Marketing', type: 'Internship', location: 'Ahmedabad / Remote', desc: 'Support the marketing team in developing product collateral, managing digital presence, and conducting market research for new product launches.' },
]

const whyJoin = [
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=220&fit=crop&q=80', title: 'Fast Growth Environment', desc: 'A dynamic and rapidly growing company where your contributions have real, measurable impact.' },
  { image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=220&fit=crop&q=80', title: 'Learning & Development', desc: 'Continuous learning opportunities through workshops, mentorship programs, and cross-functional exposure.' },
  { image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=220&fit=crop&q=80', title: 'Global Exposure', desc: 'Work with international partners, clients, and markets across Europe, Asia, and beyond.' },
  { image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=220&fit=crop&q=80', title: 'Collaborative Culture', desc: 'A supportive team that values diverse perspectives and fosters open, honest communication.' },
  { image: 'https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=400&h=220&fit=crop&q=80', title: 'Innovation-Driven', desc: 'Be part of a team that encourages creative problem-solving and breakthrough thinking.' },
]

const departments = ['All', 'Sales & Export', 'Research & Development', 'Manufacturing', 'Quality', 'Marketing']

export default function Careers() {
  const [deptFilter, setDeptFilter] = useState('All')
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '', cv: null })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const filtered = deptFilter === 'All' ? openPositions : openPositions.filter(p => p.dept === deptFilter)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.email.trim()) e.email = 'Email required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim()) e.phone = 'Phone required'
    if (!form.position) e.position = 'Please select a position'
    if (!form.message.trim()) e.message = 'Cover message required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  const handleDrop = (ev) => {
    ev.preventDefault()
    setDragOver(false)
    const file = ev.dataTransfer.files[0]
    if (file) setForm({...form, cv: file})
  }

  return (
    <div className="careers-page">
      <PageHero
        title="We build careers that make a difference, because we care"
        subtitle="Join a purpose-driven team committed to advancing global healthcare through innovation and excellence."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Culture */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="careers-culture">
              <div>
                <span className="section-tag">Our Culture</span>
                <h2 className="section-title">Where Passion Meets Purpose</h2>
                <p>
                  At Auxillion Lifecare, we believe that great companies are built by great people. Our culture is
                  rooted in a shared belief that pharmaceutical innovation can — and should — make a meaningful difference
                  in the lives of patients worldwide.
                </p>
                <p style={{ marginTop: '12px' }}>
                  We cultivate an environment where curiosity is celebrated, where diverse perspectives are valued,
                  and where every team member has the opportunity to grow, contribute, and make an impact. From our
                  research labs to our manufacturing floors, we are united by a common purpose.
                </p>
              </div>
              <div className="careers-culture__visual">
                <div className="careers-culture__photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&q=80"
                    alt="Team collaboration at work"
                    className="careers-culture__photo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Benefits</span>
              <h2 className="section-title">Why Join Auxillion Lifecare?</h2>
            </div>
          </RevealSection>
          <div className="careers-why-grid">
            {whyJoin.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="careers-why-card card" style={{ padding: 0, overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  <div style={{ padding: '20px 20px 22px', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Open Positions</span>
              <h2 className="section-title">Current Opportunities</h2>
            </div>
          </RevealSection>
          <RevealSection delay={80}>
            <div className="careers-dept-filter">
              {departments.map(d => (
                <button key={d} className={`careers-dept-btn ${deptFilter === d ? 'careers-dept-btn--active' : ''}`} onClick={() => setDeptFilter(d)}>
                  {d}
                </button>
              ))}
            </div>
          </RevealSection>
          <div className="careers-positions">
            {filtered.map((pos, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="careers-position-card">
                  <div className="careers-position-card__meta">
                    <span className="careers-dept-badge">{pos.dept}</span>
                    <span className="careers-type-badge">{pos.type}</span>
                    <span className="careers-location">📍 {pos.location}</span>
                  </div>
                  <h3 className="careers-position-card__title">{pos.title}</h3>
                  <p className="careers-position-card__desc">{pos.desc}</p>
                  <a href="#apply-form" className="btn-outline" style={{ marginTop: '16px', display: 'inline-flex' }}
                    onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Internship */}
          <RevealSection>
            <div className="careers-internship">
              <div className="careers-internship__icon">🎓</div>
              <div>
                <h3>Internship Programme</h3>
                <p>
                  We offer structured internship opportunities for students and fresh graduates across R&D, manufacturing,
                  quality assurance, and business functions. Our internship programme is designed to provide hands-on
                  experience in a professional pharmaceutical environment with mentorship from experienced industry experts.
                  Apply below with your CV and a cover note indicating "Internship" in your message.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="section section-bg-soft" id="apply-form">
        <div className="container">
          <RevealSection>
            <div className="careers-form-wrapper">
              <div className="careers-form-header">
                <span className="section-tag">Apply Now</span>
                <h2 className="section-title">Submit Your Application</h2>
                <p>We review all applications carefully and will reach out to shortlisted candidates within 7 business days.</p>
              </div>
              {submitted ? (
                <div className="careers-success">
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                  <h3>Application Received!</h3>
                  <p>Thank you for your interest in joining Auxillion Lifecare. We'll review your application and get back to you within 7 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={errors.name ? 'error' : ''} placeholder="Your full name" />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={errors.email ? 'error' : ''} placeholder="you@example.com" />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={errors.phone ? 'error' : ''} placeholder="+91 98765 43210" />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label>Position Applying For *</label>
                      <select value={form.position} onChange={e => setForm({...form, position: e.target.value})} className={errors.position ? 'error' : ''}>
                        <option value="">Select a position</option>
                        {openPositions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                        <option value="Internship">Internship Programme</option>
                      </select>
                      {errors.position && <span className="form-error">{errors.position}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cover Message *</label>
                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={errors.message ? 'error' : ''} placeholder="Tell us about yourself, your experience, and why you'd like to join Auxillion Lifecare..." rows={5} />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>
                  <div className="form-group">
                    <label>Upload CV (PDF/DOC)</label>
                    <div
                      className={`cv-upload-zone ${dragOver ? 'cv-upload-zone--drag' : ''} ${form.cv ? 'cv-upload-zone--has-file' : ''}`}
                      onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('cv-input').click()}
                    >
                      {form.cv ? (
                        <>
                          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📄</div>
                          <p>{form.cv.name}</p>
                          <span>Click to change file</span>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📤</div>
                          <p>Drag & drop your CV here</p>
                          <span>or click to browse — PDF, DOC, DOCX (max 5MB)</span>
                        </>
                      )}
                      <input id="cv-input" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => setForm({...form, cv: e.target.files[0]})} />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Submit Application</button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
