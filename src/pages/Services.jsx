import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { dosageForms } from '../data/products'

const services = [
  {
    icon: 'factory',
    title: 'Third-Party Manufacturing',
    desc: 'Contract manufacturing for pharma marketing companies who want reliable products without investing in a plant.',
    points: ['Tablets, capsules, liquids, dry syrups & topicals', 'Your composition or ours', 'Consistent batch-to-batch quality'],
  },
  {
    icon: 'tag',
    title: 'Private Label / Make Your Brand',
    desc: 'Launch products under your own brand name, with support from formulation to finished pack.',
    points: ['Brand name, label & carton design support', 'Choice of pack types and sizes', 'Ready-to-market finished goods'],
  },
  {
    icon: 'truck',
    title: 'Marketing & Distribution',
    desc: 'Partnerships with distributors, stockists and institutions for our own Galexis range.',
    points: ['Galexis-branded products', 'Dependable supply & dispatch', 'Support for partner growth'],
  },
  {
    icon: 'globe',
    title: 'Export Supply',
    desc: 'Quality medicines for importers and distributors in international markets.',
    points: ['Export packing & labelling', 'Product documentation support', 'Coordinated shipping'],
    link: '/export',
  },
]

const brandSteps = [
  { title: 'Choose Your Products', desc: 'Select from our range or share the composition you need.' },
  { title: 'Brand, Label & Packaging', desc: 'Finalise brand name, artwork, pack type and pack size.' },
  { title: 'Manufacturing & Quality Testing', desc: 'We manufacture your batch and test it before release.' },
  { title: 'Packing & Dispatch', desc: 'Finished goods are packed and dispatched to your location.' },
]

const enquiryFields = [
  { name: 'name', label: 'Your Name', required: true },
  { name: 'company', label: 'Company / Firm', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@company.com' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '+91 98765 43210' },
  { name: 'service', label: 'Service', type: 'select', required: true, options: services.map(s => s.title) },
  { name: 'form', label: 'Dosage Form', type: 'select', options: [...dosageForms.map(d => d.title), 'Multiple / Not sure'] },
  { name: 'requirements', label: 'Requirements', type: 'textarea', required: true, placeholder: 'Products / compositions, approximate quantities, pack type, target market…' },
]

export default function Services() {
  return (
    <div className="services-page">
      <PageHero
        title="Our Services"
        subtitle="Third-party manufacturing, private label and supply partnerships — quality medicines made for your market."
        image="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Manufacturing & Marketing Solutions</h2>
            <p className="section-subtitle">Whether you need your own brand made or a dependable supplier, we can help.</p>
          </Reveal>
          <div className="gx-cards">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="gx-card">
                <div className="gx-card__icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Make Your Brand</span>
            <h2 className="section-title">Your Brand in 4 Simple Steps</h2>
          </Reveal>
          <div className="gx-steps">
            {brandSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="gx-step">
                <span className="gx-step__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="enquiry">
        <div className="container">
          <Reveal className="gx-form-panel">
            <div className="gx-form-panel__head">
              <span className="section-tag">Get a Quote</span>
              <h2 className="section-title">Share Your Requirement</h2>
              <p>Tell us what you need and our team will get back to you.</p>
            </div>
            <EnquiryForm subject={v => `Service enquiry: ${v.service} — ${v.company}`} fields={enquiryFields} submitLabel="Submit Enquiry" />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
