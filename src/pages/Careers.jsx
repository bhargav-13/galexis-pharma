import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { company } from '../data/company'

const areas = [
  { icon: 'factory', title: 'Production', desc: 'Manufacturing, granulation, compression, filling and packing operations.' },
  { icon: 'flask', title: 'Quality Control & Assurance', desc: 'Testing, documentation and quality systems.' },
  { icon: 'users', title: 'Sales & Marketing', desc: 'Business development, distributor relations and brand marketing.' },
  { icon: 'truck', title: 'Stores & Dispatch', desc: 'Material handling, warehousing and logistics.' },
  { icon: 'doc', title: 'Administration & Accounts', desc: 'Office, HR, purchase and accounts functions.' },
]

const why = [
  { icon: 'award', title: 'Learn & Grow', desc: 'Hands-on experience in a growing pharmaceutical company.' },
  { icon: 'shield', title: 'Quality Culture', desc: 'Work where doing things right is part of everyday work.' },
  { icon: 'heart', title: 'Meaningful Work', desc: 'Help make medicines that reach patients in India and abroad.' },
]

const fields = [
  { name: 'name', label: 'Full Name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'area', label: 'Area of Interest', type: 'select', required: true, options: [...areas.map(a => a.title), 'Other'] },
  { name: 'qualification', label: 'Qualification', placeholder: 'e.g. B.Pharm, M.Sc, Diploma' },
  { name: 'experience', label: 'Experience', placeholder: 'e.g. Fresher, 3 years' },
  { name: 'message', label: 'About You', type: 'textarea', rows: 4, placeholder: 'Tell us briefly about yourself and the role you are looking for.' },
]

export default function Careers() {
  return (
    <div className="careers-page">
      <PageHero
        title="Careers at Galexis"
        subtitle="Build your career with a team committed to quality medicines and trusted healthcare."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <section className="section">
        <div className="container">
          <Reveal className="gx-split">
            <div>
              <span className="section-tag">Work With Us</span>
              <h2 className="section-title">Grow With a Quality-Driven Team</h2>
              <p>
                At {company.name}, our people are at the heart of everything we make. We look for dedicated, honest and
                eager-to-learn individuals who care about quality and teamwork.
              </p>
              <p>
                Whether you are a fresher or an experienced professional, we welcome your application for current and
                future openings at our Junagadh facility.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=680&fit=crop&q=80"
              alt="Team at work"
              className="gx-split__photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Departments</span>
            <h2 className="section-title">Areas We Hire In</h2>
          </Reveal>
          <div className="gx-cards">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 60} className="gx-card">
                <div className="gx-card__icon"><Icon name={a.icon} /></div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gx-cards">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80} className="gx-card">
                <div className="gx-card__icon"><Icon name={w.icon} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg-soft" id="apply">
        <div className="container">
          <Reveal className="gx-form-panel">
            <div className="gx-form-panel__head">
              <span className="section-tag">Apply</span>
              <h2 className="section-title">Send Your Application</h2>
              <p>
                Fill in your details below, and email your CV to <a href={`mailto:${company.email}`}>{company.email}</a> with
                the subject "Job Application — your name".
              </p>
            </div>
            <EnquiryForm
              subject={v => `Job application: ${v.area} — ${v.name}`}
              fields={fields}
              submitLabel="Submit Application"
              note={`${company.name} never asks for any payment or deposit for job offers. Please report any such request to us.`}
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
