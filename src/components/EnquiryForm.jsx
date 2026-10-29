import { useState } from 'react'
import { sendEnquiry, isEmail } from '../lib/enquiry'
import { company } from '../data/company'

// fields: [{ name, label, type = 'text', required, options, placeholder, full, rows }]
export default function EnquiryForm({ subject, fields, submitLabel = 'Send Enquiry', initial = {}, note }) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map(f => [f.name, initial[f.name] || ''])))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | failed
  const [failMsg, setFailMsg] = useState('')

  const set = (name, v) => setValues(prev => ({ ...prev, [name]: v }))

  const validate = () => {
    const e = {}
    fields.forEach(f => {
      const v = String(values[f.name] || '').trim()
      if (f.required && !v) e[f.name] = `${f.label} is required`
      else if (f.type === 'email' && v && !isEmail(v)) e[f.name] = 'Please enter a valid email'
    })
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('sending')
    try {
      const payload = Object.fromEntries(fields.map(f => [f.label, values[f.name]]))
      const resolvedSubject = typeof subject === 'function' ? subject(values) : subject
      setStatus(await sendEnquiry(resolvedSubject, payload))
    } catch (err) {
      setFailMsg(err.message)
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div className="gx-form-success" role="status">
        <h3>Thank you — we've received your message.</h3>
        <p>Our team will get back to you shortly.</p>
      </div>
    )
  }

  if (status === 'mailto') {
    return (
      <div className="gx-form-success" role="status">
        <h3>Almost done — please press Send in your email app.</h3>
        <p>
          Your message has been prepared in your email app, addressed to{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>. If nothing opened, email us directly or call{' '}
          <a href={`tel:${company.phones[0].tel}`}>{company.phones[0].display}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="gx-form-grid">
        {fields.map(f => {
          const id = `f-${f.name}`
          const common = {
            id,
            value: values[f.name],
            onChange: e => set(f.name, e.target.value),
            className: errors[f.name] ? 'error' : '',
            'aria-invalid': !!errors[f.name],
          }
          return (
            <div key={f.name} className={`form-group${f.full || f.type === 'textarea' ? ' gx-full' : ''}`}>
              <label htmlFor={id}>{f.label}{f.required && ' *'}</label>
              {f.type === 'textarea' ? (
                <textarea {...common} rows={f.rows || 5} placeholder={f.placeholder} />
              ) : f.type === 'select' ? (
                <select {...common}>
                  <option value="">{f.placeholder || 'Please select'}</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input {...common} type={f.type || 'text'} placeholder={f.placeholder} />
              )}
              {errors[f.name] && <span className="form-error">{errors[f.name]}</span>}
            </div>
          )
        })}
      </div>
      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {status === 'failed' && (
        <p className="gx-form-error" role="alert">
          {failMsg}. Please email <a href={`mailto:${company.email}`}>{company.email}</a> or call {company.phones[0].display}.
        </p>
      )}
      {note && <p className="gx-form-note">{note}</p>}
    </form>
  )
}
