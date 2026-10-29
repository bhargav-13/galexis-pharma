import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { company } from '../data/company'
import './Contact.css'

const fields = [
  { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name' },
  { name: 'company', label: 'Company / Firm', placeholder: 'Optional' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '+91 98765 43210' },
  {
    name: 'subject', label: 'Subject', type: 'select', required: true, full: true,
    options: ['Product Enquiry', 'Third-Party / Private Label Manufacturing', 'Distribution Partnership', 'Export Enquiry', 'Careers', 'General Enquiry'],
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'How can we help you?' },
]

export default function Contact() {
  return (
    <div className="contact-page">
      <PageHero
        title="Contact Us"
        subtitle="Product enquiries, manufacturing partnerships or export orders — we're happy to help."
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal>
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p className="contact-form-card__sub">Fill in the form and our team will get back to you.</p>
                <EnquiryForm subject={v => `${v.subject} — ${v.name}`} fields={fields} submitLabel="Send Message" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="contact-offices">
                <h3 className="contact-offices__title">Office & Works</h3>
                <div className="gx-info-list">
                  <div className="gx-info">
                    <div className="gx-info__icon"><Icon name="pin" /></div>
                    <div>
                      <div className="gx-info__label">Address</div>
                      <div className="gx-info__value">
                        {company.address.line1}<br />
                        {company.address.line2}<br />
                        {company.address.state} – {company.address.pin}, India
                      </div>
                    </div>
                  </div>
                  <div className="gx-info">
                    <div className="gx-info__icon"><Icon name="phone" /></div>
                    <div>
                      <div className="gx-info__label">Phone</div>
                      <div className="gx-info__value">
                        {company.phones.map(p => <div key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></div>)}
                      </div>
                    </div>
                  </div>
                  <div className="gx-info">
                    <div className="gx-info__icon"><Icon name="mail" /></div>
                    <div>
                      <div className="gx-info__label">Email</div>
                      <div className="gx-info__value"><a href={`mailto:${company.email}`}>{company.email}</a></div>
                    </div>
                  </div>
                  <div className="gx-info">
                    <div className="gx-info__icon"><Icon name="doc" /></div>
                    <div>
                      <div className="gx-info__label">GSTIN</div>
                      <div className="gx-info__value">{company.gstin}</div>
                    </div>
                  </div>
                </div>
                <div className="contact-map">
                  <iframe
                    src={company.mapEmbed}
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Galexis Pharmaceuticals location map"
                  />
                </div>
                <a href={company.mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline contact-directions">
                  Get Directions
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
