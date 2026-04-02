import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import './Contact.css'

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

const offices = [
  {
    city: 'Ahmedabad',
    label: 'Headquarters',
    address: '804, Shaligram Prime, Bopal, Ahmedabad, Gujarat 380058',
    phone: '+91 94095 02669',
    email: 'info@auxillionlifecare.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.4714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMjgnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890'
  },
  {
    city: 'Jamnagar',
    label: 'Branch Office',
    address: '105, Elite Luxuria, Essar School Ring Road, Jamnagar, Gujarat 361002',
    phone: '+91 94095 02669',
    email: 'info@auxillionlifecare.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5!2d70.0578!3d22.4707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98f6a6adbbb%3A0x500571a1b24ac14!2sJamnagar%2C+Gujarat!5e0!3m2!1sen!2sin!4v1234567890'
  },
  {
    city: 'Germany',
    label: 'European Office',
    address: 'Bruckstraße 23, 58239 Schwerte, Germany',
    phone: '+49 1520 385 6545',
    email: 'info@auxillionlifecare.com',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9901.5!2d7.5641!3d51.4412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91b7e28f79b75%3A0x50b0f401d9f0a0!2sSchwerte!5e0!3m2!1sen!2sde!4v1234567890'
  },
]

export default function Contact() {
  const [activeOffice, setActiveOffice] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required'
    if (!form.email.trim()) e.email = 'Email required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.subject) e.subject = 'Please select a subject'
    if (!form.message.trim()) e.message = 'Message required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear from you. Whether it's a product inquiry, partnership opportunity, or general question — our team is ready to help."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section contact-photo-section">
        <div className="container">
          <div className="contact-intro-photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&q=80"
              alt="Modern pharmaceutical office"
              className="contact-intro-photo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <RevealSection>
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px', marginTop: '8px' }}>
                  Fill in the form and our team will respond within 24–48 hours.
                </p>
                {submitted ? (
                  <div className="contact-success">
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
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
                    </div>
                    <div className="grid-2">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210" />
                      </div>
                      <div className="form-group">
                        <label>Subject *</label>
                        <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className={errors.subject ? 'error' : ''}>
                          <option value="">Select a subject</option>
                          <option>Product Enquiry</option>
                          <option>Business Partnership</option>
                          <option>Manufacturing Enquiry</option>
                          <option>Import / Export</option>
                          <option>Careers</option>
                          <option>Media / Press</option>
                          <option>General Enquiry</option>
                        </select>
                        {errors.subject && <span className="form-error">{errors.subject}</span>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={errors.message ? 'error' : ''} placeholder="How can we help you?" rows={5} />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="btn-primary">Send Message</button>
                  </form>
                )}
              </div>
            </RevealSection>

            {/* Office Info */}
            <RevealSection delay={120}>
              <div className="contact-offices">
                <h3 className="contact-offices__title">Our Offices</h3>
                <div className="contact-office-tabs">
                  {offices.map((office, i) => (
                    <button key={i} className={`contact-office-tab ${activeOffice === i ? 'contact-office-tab--active' : ''}`} onClick={() => setActiveOffice(i)}>
                      {office.city}
                    </button>
                  ))}
                </div>
                <div className="contact-office-info">
                  <div className="contact-office-label">{offices[activeOffice].label}</div>
                  <div className="contact-office-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>{offices[activeOffice].address}</span>
                  </div>
                  <div className="contact-office-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <a href={`tel:${offices[activeOffice].phone}`}>{offices[activeOffice].phone}</a>
                  </div>
                  <div className="contact-office-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <a href={`mailto:${offices[activeOffice].email}`}>{offices[activeOffice].email}</a>
                  </div>
                </div>
                <div className="contact-map">
                  <iframe
                    src={offices[activeOffice].mapSrc}
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${offices[activeOffice].city} office map`}
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/919409502669" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
