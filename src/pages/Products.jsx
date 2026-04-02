import { useEffect, useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import './Products.css'

const humanProducts = [
  { id: 1, name: 'Omeprazole 20mg', category: 'Gastroenterology', form: 'Capsule', desc: 'Proton pump inhibitor for acid reflux, gastric ulcers and GERD. Provides sustained acid suppression for up to 24 hours.' },
  { id: 2, name: 'Pantoprazole 40mg', category: 'Gastroenterology', form: 'Tablet', desc: 'Enteric-coated proton pump inhibitor for erosive esophagitis and maintenance of healed esophagitis.' },
  { id: 3, name: 'Ondansetron 4mg ODT', category: 'Gastroenterology', form: 'ODT', desc: 'Orally disintegrating tablet for prevention and treatment of nausea and vomiting.' },
  { id: 4, name: 'Amlodipine 5mg', category: 'Cardiology', form: 'Tablet', desc: 'Calcium channel blocker for hypertension and stable angina with long duration of action.' },
  { id: 5, name: 'Atorvastatin 10mg', category: 'Cardiology', form: 'Tablet', desc: 'HMG-CoA reductase inhibitor for reduction of LDL cholesterol and prevention of cardiovascular events.' },
  { id: 6, name: 'Metformin 500mg', category: 'Cardiology', form: 'Tablet', desc: 'Biguanide antidiabetic agent for type 2 diabetes management, also cardioprotective.' },
  { id: 7, name: 'Ibuprofen 400mg', category: 'Pain & Inflammation', form: 'Tablet', desc: 'NSAID providing effective relief from mild to moderate pain, fever, and inflammatory conditions.' },
  { id: 8, name: 'Diclofenac 50mg', category: 'Pain & Inflammation', form: 'Tablet', desc: 'Phenylacetic acid NSAID for rheumatoid arthritis, osteoarthritis, and acute musculoskeletal pain.' },
  { id: 9, name: 'Amoxicillin 500mg', category: 'Anti-Infective', form: 'Capsule', desc: 'Broad-spectrum aminopenicillin antibiotic effective against a wide range of bacterial infections.' },
  { id: 10, name: 'Azithromycin 250mg', category: 'Anti-Infective', form: 'Tablet', desc: 'Macrolide antibiotic for respiratory tract infections, skin infections, and sexually transmitted diseases.' },
  { id: 11, name: 'Ciprofloxacin Eye Drops', category: 'Ophthalmic', form: 'Eye Drops', desc: 'Fluoroquinolone antibiotic ophthalmic solution for bacterial conjunctivitis and corneal ulcers.' },
  { id: 12, name: 'Sertraline 50mg', category: 'CNS', form: 'Tablet', desc: 'SSRI antidepressant for major depressive disorder, OCD, panic disorder, and social anxiety.' },
]

const vetProducts = [
  { id: 13, name: 'Oxytetracycline Injectable', category: 'Antibiotics', form: 'Injectable', desc: 'Broad-spectrum tetracycline antibiotic for respiratory, enteric, and systemic bacterial infections in livestock.' },
  { id: 14, name: 'Ivermectin 1%', category: 'Antiparasitics', form: 'Injectable', desc: 'Macrocyclic lactone antiparasitic effective against gastrointestinal roundworms, lungworms, and external parasites.' },
  { id: 15, name: 'Albendazole Suspension', category: 'Antiparasitics', form: 'Suspension', desc: 'Benzimidazole anthelmintic for treatment of gastrointestinal nematodes, tapeworms, and flukes.' },
  { id: 16, name: 'Amoxicillin Vet 500mg', category: 'Antibiotics', form: 'Tablet', desc: 'Veterinary amoxicillin for urinary tract infections, skin infections, and dental infections in pets.' },
  { id: 17, name: 'Vitamin B Complex Vet', category: 'Nutritional Supplements', form: 'Injectable', desc: 'Essential B-vitamin complex supporting energy metabolism and nervous system health in all species.' },
  { id: 18, name: 'Meloxicam Vet', category: 'Pain Management', form: 'Oral Liquid', desc: 'COX-2 selective NSAID for pain and inflammation management in dogs, cats, and cattle.' },
  { id: 19, name: 'Enrofloxacin 10%', category: 'Antibiotics', form: 'Oral Solution', desc: 'Fluoroquinolone antibiotic for respiratory, urinary, and systemic bacterial infections in poultry and livestock.' },
  { id: 20, name: 'Calcium Borogluconate', category: 'Nutritional Supplements', form: 'Injectable', desc: 'Calcium supplement for treatment of hypocalcaemia (milk fever) in dairy cattle.' },
]

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

export default function Products() {
  const [division, setDivision] = useState('human')
  const [category, setCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [enquireForm, setEnquireForm] = useState({ name: '', email: '', message: '' })
  const [enquireErrors, setEnquireErrors] = useState({})
  const [enquireSubmitted, setEnquireSubmitted] = useState(false)
  const [requestForm, setRequestForm] = useState({ name: '', email: '', product: '' })
  const [requestSubmitted, setRequestSubmitted] = useState(false)

  const products = division === 'human' ? humanProducts : vetProducts
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filtered = category === 'All' ? products : products.filter(p => p.category === category)

  const validateEnquire = () => {
    const e = {}
    if (!enquireForm.name.trim()) e.name = 'Name required'
    if (!enquireForm.email.trim()) e.email = 'Email required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquireForm.email)) e.email = 'Invalid email'
    if (!enquireForm.message.trim()) e.message = 'Message required'
    return e
  }

  const handleEnquireSubmit = (ev) => {
    ev.preventDefault()
    const e = validateEnquire()
    if (Object.keys(e).length) { setEnquireErrors(e); return }
    setEnquireSubmitted(true)
  }

  const openModal = (p) => {
    setSelectedProduct(p)
    setEnquireForm({ name: '', email: '', message: '' })
    setEnquireErrors({})
    setEnquireSubmitted(false)
  }

  return (
    <div className="products-page">
      <PageHero
        title="Our Products"
        subtitle="Explore our comprehensive portfolio of human and veterinary pharmaceutical products, manufactured to international quality standards."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="section">
        <div className="container">
          {/* Division Tabs */}
          <RevealSection>
            <div className="products-division-tabs">
              <button className={`products-div-tab ${division === 'human' ? 'products-div-tab--active' : ''}`} onClick={() => { setDivision('human'); setCategory('All') }}>
                💊 Human Medicines
              </button>
              <button className={`products-div-tab ${division === 'vet' ? 'products-div-tab--active' : ''}`} onClick={() => { setDivision('vet'); setCategory('All') }}>
                🐄 Veterinary Medicines
              </button>
            </div>
          </RevealSection>

          {/* Category Filter */}
          <RevealSection delay={80}>
            <div className="products-filter">
              <span className="products-filter__label">Filter by:</span>
              <div className="products-filter__options">
                {categories.map(cat => (
                  <button key={cat} className={`products-filter__btn ${category === cat ? 'products-filter__btn--active' : ''}`} onClick={() => setCategory(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map((product, i) => (
              <RevealSection key={product.id} delay={i * 50}>
                <div className="product-card">
                  <div className="product-card__top">
                    <span className="product-card__category">{product.category}</span>
                    <span className="product-card__form">{product.form}</span>
                  </div>
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__desc">{product.desc}</p>
                  <button className="product-card__enquire" onClick={() => openModal(product)}>
                    Enquire Now →
                  </button>
                </div>
              </RevealSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="products-empty">No products found in this category.</div>
          )}

          {/* Request Form */}
          <RevealSection>
            <div className="products-request-form">
              <h3>Can't find your product?</h3>
              <p>Tell us what you're looking for and our team will check availability.</p>
              {requestSubmitted ? (
                <p className="products-request-success">✅ Thank you! We'll get back to you shortly.</p>
              ) : (
                <form className="products-request-inline" onSubmit={(e) => { e.preventDefault(); setRequestSubmitted(true) }}>
                  <input type="text" placeholder="Your name" value={requestForm.name} onChange={e => setRequestForm({...requestForm, name: e.target.value})} required />
                  <input type="email" placeholder="Your email" value={requestForm.email} onChange={e => setRequestForm({...requestForm, email: e.target.value})} required />
                  <input type="text" placeholder="Product you're looking for" value={requestForm.product} onChange={e => setRequestForm({...requestForm, product: e.target.value})} required />
                  <button type="submit" className="btn-primary">Submit Request</button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="product-modal__close" onClick={() => setSelectedProduct(null)}>✕</button>
            <div className="product-modal__header">
              <span className="product-card__category">{selectedProduct.category}</span>
              <h2 className="product-modal__name">{selectedProduct.name}</h2>
              <span className="product-card__form">{selectedProduct.form}</span>
            </div>
            <p className="product-modal__desc">{selectedProduct.desc}</p>
            <div className="product-modal__divider" />
            <h4 className="product-modal__enquire-title">Send an Enquiry</h4>
            {enquireSubmitted ? (
              <div className="product-modal__success">
                ✅ Thank you! Our team will contact you about <strong>{selectedProduct.name}</strong>.
              </div>
            ) : (
              <form onSubmit={handleEnquireSubmit} noValidate>
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" value={enquireForm.name} onChange={e => setEnquireForm({...enquireForm, name: e.target.value})} className={enquireErrors.name ? 'error' : ''} placeholder="Your name" />
                  {enquireErrors.name && <span className="form-error">{enquireErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" value={enquireForm.email} onChange={e => setEnquireForm({...enquireForm, email: e.target.value})} className={enquireErrors.email ? 'error' : ''} placeholder="you@example.com" />
                  {enquireErrors.email && <span className="form-error">{enquireErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea value={enquireForm.message} onChange={e => setEnquireForm({...enquireForm, message: e.target.value})} className={enquireErrors.message ? 'error' : ''} placeholder={`I'm interested in ${selectedProduct.name}...`} rows={3} />
                  {enquireErrors.message && <span className="form-error">{enquireErrors.message}</span>}
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
