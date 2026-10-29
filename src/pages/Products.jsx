import { useEffect, useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { dosageForms, segments, range } from '../data/products'
import './Products.css'

const enquiryFields = [
  { name: 'name', label: 'Name', required: true, placeholder: 'Your name' },
  { name: 'company', label: 'Company / Firm', placeholder: 'Optional' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '+91 98765 43210' },
  { name: 'message', label: 'Requirement', type: 'textarea', rows: 3, placeholder: 'Quantity, packing, destination market…' },
]

const requestFields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'product', label: 'Product / composition you need', required: true, full: true },
]

export default function Products() {
  const [form, setForm] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const forms = ['All', ...dosageForms.map(d => d.key)]
  const formTitle = (key) => dosageForms.find(d => d.key === key)?.title || key

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return range.filter(p =>
      (form === 'All' || p.form === form) &&
      (!q || `${p.name} ${p.segment}`.toLowerCase().includes(q))
    )
  }, [form, query])

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <div className="products-page">
      <PageHero
        title="Our Products"
        subtitle="Quality medicines across key dosage forms and therapy segments — available under the Galexis brand and for third-party / private label supply."
        image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* Dosage forms */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Dosage Forms</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">A focused range of oral and topical formulations for domestic and export markets.</p>
          </Reveal>
          <div className="gx-cards">
            {dosageForms.map((d, i) => (
              <Reveal key={d.key} delay={i * 60}>
                <button type="button" className="gx-card products-form-card" onClick={() => { setForm(d.key); document.getElementById('range')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <div className="gx-card__icon"><Icon name={d.icon} /></div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy segments */}
      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Therapy Segments</span>
            <h2 className="section-title">Therapeutic Coverage</h2>
          </Reveal>
          <Reveal className="gx-chips">
            {segments.map(s => <span key={s} className="gx-chip">{s}</span>)}
          </Reveal>
        </div>
      </section>

      {/* Range */}
      <section className="section" id="range">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Product Range</span>
            <h2 className="section-title">Indicative Product List</h2>
            <p className="section-subtitle">
              A selection from our range. For the complete, current product list with compositions and pack sizes, please contact us.
            </p>
          </Reveal>

          <div className="products-filter">
            <div className="products-filter__options" role="group" aria-label="Filter by dosage form">
              {forms.map(f => (
                <button key={f} type="button" aria-pressed={form === f} className={`products-filter__btn ${form === f ? 'products-filter__btn--active' : ''}`} onClick={() => setForm(f)}>
                  {f === 'All' ? 'All' : formTitle(f)}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="products-search"
              placeholder="Search by name or segment…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="products-grid">
            {filtered.map(p => (
              <div key={p.name} className="product-card">
                <div className="product-card__top">
                  <span className="product-card__category">{p.segment}</span>
                  <span className="product-card__form">{formTitle(p.form)}</span>
                </div>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <button type="button" className="product-card__enquire" onClick={() => setSelected(p)}>
                  Enquire Now →
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <div className="products-empty">No products match your search.</div>}

          <Reveal>
            <div className="products-request-form">
              <h3>Can't find your product?</h3>
              <p>Tell us the composition you need — we'll check availability or manufacture it for you.</p>
              <EnquiryForm subject="Product request" fields={requestFields} submitLabel="Submit Request" />
            </div>
          </Reveal>

          <p className="products-disclaimer">
            Product information is intended for healthcare professionals and trade partners. Medicines should be used only as prescribed by a registered medical practitioner.
          </p>
        </div>
      </section>

      {selected && (
        <div className="product-modal-overlay" onClick={() => setSelected(null)}>
          <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={e => e.stopPropagation()}>
            <button type="button" className="product-modal__close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
            <div className="product-modal__header">
              <span className="product-card__category">{selected.segment}</span>
              <h2 id="product-modal-title" className="product-modal__name">{selected.name}</h2>
              <span className="product-card__form">{formTitle(selected.form)}</span>
            </div>
            <p className="product-modal__desc">{selected.desc}</p>
            <div className="product-modal__divider" />
            <h4 className="product-modal__enquire-title">Send an Enquiry</h4>
            <EnquiryForm key={selected.name} subject={`Product enquiry: ${selected.name}`} fields={enquiryFields} />
          </div>
        </div>
      )}
    </div>
  )
}
