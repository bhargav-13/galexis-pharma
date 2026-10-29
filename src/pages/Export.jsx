import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { dosageForms } from '../data/products'
import { company } from '../data/company'

const offer = [
  { icon: 'box', title: 'Finished Formulations', desc: 'Tablets, capsules, oral liquids, dry syrups, topicals and nutraceuticals.' },
  { icon: 'tag', title: 'Your Brand or Ours', desc: 'Supply under the Galexis brand or your own registered brand.' },
  { icon: 'doc', title: 'Documentation Support', desc: 'Product and batch documents to support your import and registration process.' },
  { icon: 'truck', title: 'Export Packing & Shipping', desc: 'Packing and labelling for your market, with coordinated dispatch.' },
]

const steps = [
  { title: 'Share Your Requirement', desc: 'Products, quantities, pack type and destination country.' },
  { title: 'Quotation & Samples', desc: 'We share pricing, specifications and samples where required.' },
  { title: 'Order & Production', desc: 'Your order is manufactured and tested before release.' },
  { title: 'Documentation & Shipping', desc: 'Export documents prepared and goods shipped to you.' },
]

const enquiryFields = [
  { name: 'name', label: 'Your Name', required: true },
  { name: 'company', label: 'Company', required: true },
  { name: 'country', label: 'Country', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', full: true },
  { name: 'requirements', label: 'Products & Quantities', type: 'textarea', required: true },
]

export default function Export() {
  return (
    <div className="export-page">
      <PageHero
        title={company.tagline}
        subtitle="Quality medicines from India for importers, distributors and healthcare partners worldwide."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Export' }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="gx-split">
            <div>
              <span className="section-tag">Export</span>
              <h2 className="section-title">Your Partner for Pharmaceutical Exports</h2>
              <p>
                {company.name} supplies quality pharmaceutical formulations to partners outside India. We work with
                importers and distributors to understand their market, packing and documentation needs — and deliver
                consistent products, on time.
              </p>
              <p>
                Our range spans {dosageForms.map(d => d.title.toLowerCase()).join(', ')}, available under our brand or yours.
              </p>
              <Link to="/products" className="btn-primary">View Product Range</Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=680&fit=crop&q=80"
              alt="Global shipping"
              className="gx-split__photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Export Services</h2>
          </Reveal>
          <div className="gx-cards">
            {offer.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="gx-card">
                <div className="gx-card__icon"><Icon name={o.icon} /></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Process</span>
            <h2 className="section-title">How Export Orders Work</h2>
          </Reveal>
          <div className="gx-steps">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="gx-step">
                <span className="gx-step__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-form-panel">
            <div className="gx-form-panel__head">
              <span className="section-tag">Export Enquiry</span>
              <h2 className="section-title">Request a Quotation</h2>
            </div>
            <EnquiryForm subject={v => `Export enquiry from ${v.country} — ${v.company}`} fields={enquiryFields} submitLabel="Send Enquiry" />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
