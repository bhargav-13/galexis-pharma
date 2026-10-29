import { company } from '../data/company'

// Delivers a form submission.
// If VITE_WEB3FORMS_KEY is set (free key from web3forms.com), the form is emailed to the
// address registered with that key. Otherwise the visitor's email app opens with the
// message pre-filled, addressed to the company inbox.
// Resolves to 'sent' or 'mailto'.
export async function sendEnquiry(subject, fields) {
  const key = import.meta.env.VITE_WEB3FORMS_KEY

  if (key) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: key, subject: `[Website] ${subject}`, from_name: company.name, ...fields }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) throw new Error(data.message || 'Could not send your message')
    return 'sent'
  }

  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mailto'
}

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
