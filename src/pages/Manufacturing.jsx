import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { dosageForms } from '../data/products'
import { company } from '../data/company'

const process = [
  { title: 'Raw Material Sourcing', desc: 'APIs and excipients procured from qualified vendors and tested before release to production.' },
  { title: 'Formulation & Production', desc: 'Manufacturing to approved formulae with documented batch records at every step.' },
  { title: 'In-Process Controls', desc: 'Checks on weight, hardness, fill volume, uniformity and other critical parameters during production.' },
  { title: 'Quality Testing', desc: 'Finished products tested against specifications before batch release.' },
  { title: 'Packing & Dispatch', desc: 'Packing in blisters, strips, bottles and tubes, with secure storage and timely dispatch.' },
]

const qualityPoints = [
  'Manufacturing in line with GMP (Schedule M) guidelines',
  'Qualified vendors for raw and packing materials',
  'Documented batch manufacturing and packing records',
  'In-process quality checks on every batch',
  'Finished-product testing before release',
  'Controlled storage for materials and finished goods',
  'Retained samples and batch traceability',
  'Trained production and quality personnel',
]

export default function Manufacturing() {
  return (
    <div className="manufacturing-page">
      <PageHero
        title="Manufacturing & Quality"
        subtitle="A dedicated facility at GIDC Dolatpara, Junagadh, producing quality medicines with careful process control at every stage."
        image="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Manufacturing' }]}
      />

      {/* Facility */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-split">
            <div>
              <span className="section-tag">Our Facility</span>
              <h2 className="section-title">Built for Consistent Quality</h2>
              <p>
                Our manufacturing unit at {company.address.line1}, {company.address.line2}, Gujarat is set up for oral solid,
                oral liquid and topical dosage forms. Production, quality checks, packing and storage are organised to
                keep every batch consistent and traceable.
              </p>
              <p>
                The same facility supports both our own brands and the products we manufacture for our third-party and
                private label partners.
              </p>
              <Link to="/services" className="btn-primary">Third-Party Manufacturing</Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&h=680&fit=crop&q=80"
              alt="Pharmaceutical laboratory equipment"
              className="gx-split__photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Dosage forms */}
      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Dosage Forms We Manufacture</h2>
          </Reveal>
          <div className="gx-cards">
            {dosageForms.map((d, i) => (
              <Reveal key={d.key} delay={i * 60} className="gx-photo-card">
                <img src={d.image} alt={d.title} loading="lazy" />
                <div className="gx-photo-card__body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">From Raw Material to Dispatch</h2>
          </Reveal>
          <div className="gx-steps">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="gx-step">
                <span className="gx-step__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-split gx-split--reverse">
            <div>
              <span className="section-tag">Quality Assurance</span>
              <h2 className="section-title">Quality at Every Step</h2>
              <p>
                Quality is built into our process — not checked only at the end. Our quality team works alongside
                production to make sure every batch meets its specification.
              </p>
              <ul className="gx-checks">
                {qualityPoints.map(q => <li key={q}>{q}</li>)}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&h=680&fit=crop&q=80"
              alt="Quality control laboratory"
              className="gx-split__photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-band">
            <div>
              <h2>Looking for a manufacturing partner?</h2>
              <p>Share your product and volume requirements — our team will get back to you with a quote.</p>
            </div>
            <div className="gx-band__btns">
              <Link to="/services#enquiry" className="btn-primary">Send Requirement</Link>
              <a href={`tel:${company.phones[0].tel}`} className="btn-secondary">Call {company.phones[0].display}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
