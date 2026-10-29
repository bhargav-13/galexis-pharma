import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { company } from '../data/company'

const values = [
  { title: 'Trust', desc: 'Long-term relationships with doctors, distributors and partners, built on transparency and dependable supply.' },
  { title: 'Quality', desc: 'Every batch is manufactured and tested against defined specifications before it leaves our facility.' },
  { title: 'Healthcare', desc: 'Effective, affordable medicines that reach patients — in India and across borders.' },
]

const whyUs = [
  { icon: 'shield', title: 'Quality First', desc: 'Manufacturing in line with GMP guidelines, with in-process checks and finished-product testing.' },
  { icon: 'box', title: 'Wide Product Range', desc: 'Tablets, capsules, oral liquids, dry syrups, topicals and nutraceuticals across key therapy segments.' },
  { icon: 'tag', title: 'Your Brand, Our Expertise', desc: 'Third-party and private label manufacturing with support for formulation, artwork and packing.' },
  { icon: 'clock', title: 'Timely Delivery', desc: 'Planned production and dispatch so partners receive stock when they need it.' },
  { icon: 'handshake', title: 'Fair, Competitive Pricing', desc: 'Efficient operations that keep quality medicines affordable for our partners.' },
  { icon: 'globe', title: 'Export Support', desc: 'Documentation and packing support for partners in international markets.' },
]

export default function About() {
  return (
    <div className="about-page">
      <PageHero
        title={`About ${company.name}`}
        subtitle={`${company.intro} — from Junagadh, Gujarat. ${company.tagline}.`}
        image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&h=700&fit=crop&q=75"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company profile */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-split">
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">Quality Medicines. Trusted Partnerships.</h2>
              <p>
                {company.name} is a pharmaceutical company engaged in the manufacturing and marketing of quality
                medicines. Our facility is located at GIDC Dolatpara, Junagadh, Gujarat, from where we serve healthcare
                professionals, distributors and business partners.
              </p>
              <p>
                Our range covers tablets, capsules, oral liquids, dry syrups, ointments and nutraceuticals across key
                therapy segments. Alongside our own brands, we partner with pharma marketing companies for third-party
                and private label manufacturing — helping them bring reliable products to market under their own name.
              </p>
              <p>
                Guided by our values of Trust, Quality and Healthcare, we work to make dependable medicines accessible
                to more people — bridging health across borders.
              </p>
              <Link to="/contact" className="btn-primary">Connect With Us</Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=900&h=680&fit=crop&q=80"
              alt="Pharmaceutical manufacturing"
              className="gx-split__photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">Trust • Quality • Healthcare</h2>
          </Reveal>
          <div className="gx-values">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="gx-value">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="gx-cards">
            <Reveal className="gx-card">
              <div className="gx-card__icon"><Icon name="award" /></div>
              <span className="section-tag">Our Vision</span>
              <h3>To be a trusted name in quality healthcare — in India and beyond.</h3>
              <p>
                We aim to grow into a pharmaceutical company that partners, doctors and patients rely on for consistent
                quality, wherever our medicines reach.
              </p>
            </Reveal>
            <Reveal className="gx-card" delay={100}>
              <div className="gx-card__icon"><Icon name="heart" /></div>
              <span className="section-tag">Our Mission</span>
              <h3>Manufacture and market effective, affordable medicines with integrity.</h3>
              <p>
                We do this by following sound manufacturing practices, investing in our people and processes, and serving
                every partner with honesty and on-time delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section-bg-soft">
        <div className="container">
          <Reveal className="gx-head">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">A Partner You Can Rely On</h2>
          </Reveal>
          <div className="gx-cards">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 60} className="gx-card">
                <div className="gx-card__icon"><Icon name={w.icon} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="section">
        <div className="container">
          <Reveal className="gx-split">
            <div>
              <span className="section-tag">At a Glance</span>
              <h2 className="section-title">Company Information</h2>
              <div className="gx-info-list" style={{ marginTop: 24 }}>
                <div className="gx-info">
                  <div className="gx-info__icon"><Icon name="factory" /></div>
                  <div><div className="gx-info__label">Business</div><div className="gx-info__value">{company.intro}</div></div>
                </div>
                <div className="gx-info">
                  <div className="gx-info__icon"><Icon name="pin" /></div>
                  <div><div className="gx-info__label">Office & Works</div><div className="gx-info__value">{company.address.full}</div></div>
                </div>
                <div className="gx-info">
                  <div className="gx-info__icon"><Icon name="doc" /></div>
                  <div><div className="gx-info__label">GSTIN</div><div className="gx-info__value">{company.gstin}</div></div>
                </div>
              </div>
            </div>
            <div className="gx-band" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div>
                <h2>Let's work together</h2>
                <p>Distributors, marketing companies and healthcare professionals — we'd be glad to hear from you.</p>
              </div>
              <div className="gx-band__btns">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/products" className="btn-secondary">View Products</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
