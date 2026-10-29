import { useState } from 'react'
import PageHero from '../components/PageHero'
import RevealSection from '../components/Reveal'
import { sendEnquiry, isEmail } from '../lib/enquiry'
import { company } from '../data/company'
import './SafetyReporting.css'

const steps = [
  { step: '01', title: 'Gather Information', desc: 'Collect all relevant information about the patient, the product used, the event experienced, and the timeline.' },
  { step: '02', title: 'Complete the Form', desc: 'Fill in all required fields in the adverse event form below. More detail helps our safety team assess the event accurately.' },
  { step: '03', title: 'Submit Report', desc: 'Submit the completed form. Our team will review every report it receives.' },
  { step: '04', title: 'Follow-up', desc: 'Our team may contact you for additional information. All communications are kept confidential.' },
]

export default function SafetyReporting() {
  const [form, setForm] = useState({
    patientName: '', age: '', gender: '', productName: '', batchNumber: '',
    eventDescription: '', eventDate: '', severity: '', reporterName: '',
    reporterEmail: '', reporterPhone: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | failed

  const validate = () => {
    const e = {}
    if (!form.age.trim()) e.age = 'Age required'
    if (!form.gender) e.gender = 'Gender required'
    if (!form.productName.trim()) e.productName = 'Product name required'
    if (!form.eventDescription.trim()) e.eventDescription = 'Event description required'
    if (!form.eventDate) e.eventDate = 'Event date required'
    if (!form.severity) e.severity = 'Severity required'
    if (!form.reporterName.trim()) e.reporterName = 'Reporter name required'
    if (!form.reporterEmail.trim()) e.reporterEmail = 'Reporter email required'
    else if (!isEmail(form.reporterEmail)) e.reporterEmail = 'Invalid email'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    try {
      setStatus(await sendEnquiry(`Adverse event report: ${form.productName}`, {
        'Patient name': form.patientName,
        'Patient age': form.age,
        'Patient gender': form.gender,
        'Product name': form.productName,
        'Batch number': form.batchNumber,
        'Event description': form.eventDescription,
        'Date of event': form.eventDate,
        'Severity': form.severity,
        'Reporter name': form.reporterName,
        'Reporter email': form.reporterEmail,
        'Reporter phone': form.reporterPhone,
      }))
    } catch {
      setStatus('failed')
    }
  }

  const f = (key) => form[key]
  const s = (key, val) => setForm(prev => ({...prev, [key]: val}))

  return (
    <div className="safety-page">
      <PageHero
        title="Safety Reporting"
        subtitle="Your safety reports help us maintain the highest standards of pharmacovigilance and protect patient welfare worldwide."
        image="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Safety Reporting' }]}
      />

      {/* Purpose */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="safety-intro-photo-wrap">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop&q=80"
                alt="Pharmacovigilance and safety reporting"
                className="safety-intro-photo"
                loading="lazy"
              />
            </div>
          </RevealSection>
          <RevealSection>
            <div className="safety-purpose">
              <div className="safety-purpose__icon">🛡️</div>
              <div>
                <span className="section-tag">Pharmacovigilance</span>
                <h2 className="section-title">Why Report Adverse Events?</h2>
                <p>
                  Pharmacovigilance — the science of detecting, assessing, and preventing adverse effects of medicines —
                  is central to ensuring the safety of pharmaceutical products throughout their lifecycle. Galexis Pharmaceuticals
                  takes every report seriously and reviews it as part of our commitment to patient safety.
                </p>
                <p style={{ marginTop: '12px' }}>
                  If you or a patient experiences any unexpected, undesirable, or harmful event potentially related to
                  a Galexis Pharmaceuticals product, we encourage you to report it using the form below. Every report, however
                  minor, contributes to our collective understanding of medicine safety and ultimately protects patients.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Steps */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">How to Report</span>
              <h2 className="section-title">Step-by-Step Guidance</h2>
            </div>
          </RevealSection>
          <div className="safety-steps">
            {steps.map((step, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="safety-step">
                  <div className="safety-step__number">{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Form */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="safety-form-wrapper">
              <div className="safety-form-header">
                <span className="section-tag">Report Form</span>
                <h2 className="section-title">Adverse Event Report</h2>
                <p className="safety-form-note">
                  ⚠️ For medical emergencies, contact emergency services immediately. This form is for non-emergency adverse event reporting only.
                </p>
              </div>
              {status === 'sent' ? (
                <div className="safety-success" role="status">
                  <h3>Report Submitted</h3>
                  <p>Thank you for your report. Our team will review it and may contact you for additional information.</p>
                </div>
              ) : status === 'mailto' ? (
                <div className="safety-success" role="status">
                  <h3>Please press Send in your email app</h3>
                  <p>
                    Your report has been prepared in your email app, addressed to <a href={`mailto:${company.email}`}>{company.email}</a>.
                    If nothing opened, please email the details to us or call {company.phones[0].display}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="safety-section-label">Patient Information</div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Patient Name <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(optional)</span></label>
                      <input type="text" value={f('patientName')} onChange={e => s('patientName', e.target.value)} placeholder="Leave blank if anonymous" />
                    </div>
                    <div className="form-group">
                      <label>Age *</label>
                      <input type="text" value={f('age')} onChange={e => s('age', e.target.value)} className={errors.age ? 'error' : ''} placeholder="e.g., 45 years" />
                      {errors.age && <span className="form-error">{errors.age}</span>}
                    </div>
                    <div className="form-group">
                      <label>Gender *</label>
                      <select value={f('gender')} onChange={e => s('gender', e.target.value)} className={errors.gender ? 'error' : ''}>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Not specified</option>
                      </select>
                      {errors.gender && <span className="form-error">{errors.gender}</span>}
                    </div>
                  </div>

                  <div className="safety-section-label">Product Information</div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Product Name *</label>
                      <input type="text" value={f('productName')} onChange={e => s('productName', e.target.value)} className={errors.productName ? 'error' : ''} placeholder="Name of the Galexis product" />
                      {errors.productName && <span className="form-error">{errors.productName}</span>}
                    </div>
                    <div className="form-group">
                      <label>Batch Number <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>(if available)</span></label>
                      <input type="text" value={f('batchNumber')} onChange={e => s('batchNumber', e.target.value)} placeholder="From product packaging" />
                    </div>
                  </div>

                  <div className="safety-section-label">Event Details</div>
                  <div className="form-group">
                    <label>Event Description *</label>
                    <textarea value={f('eventDescription')} onChange={e => s('eventDescription', e.target.value)} className={errors.eventDescription ? 'error' : ''} placeholder="Describe the adverse event in as much detail as possible — symptoms, timeline, actions taken..." rows={5} />
                    {errors.eventDescription && <span className="form-error">{errors.eventDescription}</span>}
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Date of Event *</label>
                      <input type="date" value={f('eventDate')} onChange={e => s('eventDate', e.target.value)} className={errors.eventDate ? 'error' : ''} />
                      {errors.eventDate && <span className="form-error">{errors.eventDate}</span>}
                    </div>
                    <div className="form-group">
                      <label>Severity *</label>
                      <select value={f('severity')} onChange={e => s('severity', e.target.value)} className={errors.severity ? 'error' : ''}>
                        <option value="">Select severity</option>
                        <option>Mild (minor discomfort, no medical intervention needed)</option>
                        <option>Moderate (some limitation, may require medical attention)</option>
                        <option>Severe (significant impairment, requires medical intervention)</option>
                        <option>Life-threatening (immediate risk to life)</option>
                        <option>Fatal</option>
                      </select>
                      {errors.severity && <span className="form-error">{errors.severity}</span>}
                    </div>
                  </div>

                  <div className="safety-section-label">Reporter Information</div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Reporter Name *</label>
                      <input type="text" value={f('reporterName')} onChange={e => s('reporterName', e.target.value)} className={errors.reporterName ? 'error' : ''} placeholder="Your full name" />
                      {errors.reporterName && <span className="form-error">{errors.reporterName}</span>}
                    </div>
                    <div className="form-group">
                      <label>Reporter Email *</label>
                      <input type="email" value={f('reporterEmail')} onChange={e => s('reporterEmail', e.target.value)} className={errors.reporterEmail ? 'error' : ''} placeholder="your@email.com" />
                      {errors.reporterEmail && <span className="form-error">{errors.reporterEmail}</span>}
                    </div>
                    <div className="form-group">
                      <label>Reporter Phone</label>
                      <input type="tel" value={f('reporterPhone')} onChange={e => s('reporterPhone', e.target.value)} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '8px' }} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Submitting…' : 'Submit Adverse Event Report'}
                  </button>
                  {status === 'failed' && (
                    <p className="gx-form-error" role="alert">
                      The report could not be sent. Please email <a href={`mailto:${company.email}`}>{company.email}</a> or call {company.phones[0].display}.
                    </p>
                  )}
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Regulatory Links */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '32px' }}>
              <span className="section-tag">Regulatory Authorities</span>
              <h2 className="section-title">Official Reporting Channels</h2>
              <p className="section-subtitle">You may also report directly to the relevant national or international regulatory authority.</p>
            </div>
          </RevealSection>
          <div className="grid-3">
            {[
              { name: 'PvPI', full: 'Pharmacovigilance Programme of India', url: 'https://www.ipc.gov.in', desc: "India's national programme for reporting adverse drug reactions, run by the Indian Pharmacopoeia Commission." },
              { name: 'CDSCO', full: 'Central Drugs Standard Control Organisation', url: 'https://cdsco.gov.in', desc: 'National regulatory body for pharmaceuticals and medical devices in India.' },
              { name: 'WHO', full: 'World Health Organization', url: 'https://www.who.int', desc: 'Global medicines safety and pharmacovigilance information.' },
            ].map((reg, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="safety-reg-card">
                  <div className="safety-reg-card__name">{reg.name}</div>
                  <p className="safety-reg-card__full">{reg.full}</p>
                  <p className="safety-reg-card__desc">{reg.desc}</p>
                  <a href={reg.url} target="_blank" rel="noopener noreferrer" className="safety-reg-card__link">Visit Website →</a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
