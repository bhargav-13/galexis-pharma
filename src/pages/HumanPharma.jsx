import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './HumanPharma.css'

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

const dosageForms = [
  { image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=220&fit=crop&q=80', title: 'Tablets & Bilayer', desc: 'Conventional, extended-release, bilayer, and mouth-dissolving tablet formulations for precision dosing.' },
  { image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=220&fit=crop&q=80', title: 'Hard Gelatin Capsules', desc: 'Standard and modified-release hard gelatin capsules with excellent bioavailability profiles.' },
  { image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=220&fit=crop&q=80', title: 'Syrups & Suspensions', desc: 'Paediatric and adult liquid formulations with stable suspension technology and palatable flavours.' },
  { image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=220&fit=crop&q=80', title: 'Ophthalmic', desc: 'Sterile eye drops, ointments and gels for conjunctivitis, glaucoma, and post-operative care.' },
]

const therapeuticAreas = [
  { title: 'Gastroenterology', desc: 'Proton pump inhibitors, antacids, antiemetics, and bowel regulators for comprehensive GI health.', products: ['Omeprazole', 'Pantoprazole', 'Ondansetron ODT', 'Rabeprazole'] },
  { title: 'Cardiology', desc: 'Antihypertensives, statins, and metabolic agents for cardiovascular health management.', products: ['Amlodipine', 'Atorvastatin', 'Metformin', 'Telmisartan'] },
  { title: 'Pain & Inflammation', desc: 'NSAIDs and analgesics providing effective, targeted relief from acute and chronic pain.', products: ['Ibuprofen', 'Diclofenac', 'Aceclofenac', 'Paracetamol'] },
  { title: 'Infectious Diseases', desc: 'Broad and narrow spectrum antibiotics for bacterial, fungal, and viral infections.', products: ['Amoxicillin', 'Azithromycin', 'Ciprofloxacin', 'Metronidazole'] },
  { title: 'CNS & Neurology', desc: 'Antidepressants, anxiolytics, and anticonvulsants for neurological and psychiatric conditions.', products: ['Sertraline', 'Escitalopram', 'Clonazepam', 'Gabapentin'] },
]

const expertise = [
  { image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=120&h=80&fit=crop&q=80', title: 'Novel Drug Delivery', desc: 'Pioneering Oral Thin Films (OTF) and innovative drug delivery systems that improve patient compliance and therapeutic outcomes.' },
  { image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=120&h=80&fit=crop&q=80', title: 'Regulatory Excellence', desc: 'Comprehensive dossier preparation and regulatory submissions aligned with CDSCO, WHO, and international standards.' },
  { image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=120&h=80&fit=crop&q=80', title: 'Formulation Science', desc: 'Expert formulation development team with deep expertise across all major dosage forms and therapeutic categories.' },
]

export default function HumanPharma() {
  const [openArea, setOpenArea] = useState(null)

  return (
    <div className="human-pharma-page">
      <PageHero
        title="Human Medicines Division"
        subtitle="Comprehensive pharmaceutical formulations combining clinical efficacy with patient-centric design — advancing human health across therapeutic boundaries."
        breadcrumbs={[{ label: 'Business Operations', path: '/business' }, { label: 'Human Medicines' }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="hp-intro">
              <div className="hp-intro__text">
                <span className="section-tag">Human Medicines</span>
                <h2 className="section-title">Science-Driven Formulations for Better Outcomes</h2>
                <p>
                  Our Human Medicines Division is the cornerstone of pharmaceutical portfolio.
                  With a focus on therapeutic efficacy, patient compliance, and regulatory excellence, we develop and
                  manufacture medicines that make a real difference in people's lives.
                </p>
                <p style={{ marginTop: '16px' }}>
                  From everyday ailments to complex chronic conditions, our product range spans multiple therapeutic
                  categories, each formulated with precision and validated through rigorous testing protocols. We
                  combine innovative drug delivery technologies with established pharmaceutical science to create
                  products that are not only effective but also accessible.
                </p>
                <div className="hp-intro__expertise" style={{ marginTop: '28px' }}>
                  {expertise.map((e, i) => (
                    <div key={i} className="hp-expertise-item">
                      <img src={e.image} alt={e.title} className="hp-expertise-item__img" loading="lazy" />
                      <div>
                        <h4>{e.title}</h4>
                        <p>{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hp-intro__photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=600&fit=crop&q=80"
                  alt="Healthcare professional with medicines"
                  className="hp-intro__photo"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Dosage Forms */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Formulation Range</span>
              <h2 className="section-title">Dosage Forms</h2>
              <p className="section-subtitle">A comprehensive range of dosage forms designed for optimal bioavailability and patient compliance.</p>
            </div>
          </RevealSection>
          <div className="grid-4">
            {dosageForms.map((form, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="dosage-card card">
                  <div className="dosage-card__img-wrap">
                    <img src={form.image} alt={form.title} className="dosage-card__img" loading="lazy" />
                  </div>
                  <h3 className="dosage-card__title">{form.title}</h3>
                  <p className="dosage-card__desc">{form.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="section">
        <div className="container">
          <RevealSection>
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Therapeutic Focus</span>
              <h2 className="section-title">Therapeutic Areas</h2>
              <p className="section-subtitle">Specialised expertise across five key therapeutic areas with proven formulations.</p>
            </div>
          </RevealSection>
          <div className="therapeutic-accordion">
            {therapeuticAreas.map((area, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className={`ta-item ${openArea === i ? 'ta-item--open' : ''}`}>
                  <button className="ta-item__trigger" onClick={() => setOpenArea(openArea === i ? null : i)}>
                    <span>{area.title}</span>
                    <svg className="ta-item__chevron" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {openArea === i && (
                    <div className="ta-item__body">
                      <p>{area.desc}</p>
                      <div className="ta-item__products">
                        {area.products.map((p, j) => (
                          <span key={j} className="ta-product-badge">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* R&D CTA */}
      <section className="section section-bg-soft">
        <div className="container">
          <RevealSection>
            <div className="hp-rnd-cta">
              <div className="hp-rnd-cta__content">
                <span className="section-tag">Innovation</span>
                <h2>Backed by a Robust R&D Commitment</h2>
                <p>
                  Our R&D team is continuously working on novel formulations, new therapeutic targets, and innovative
                  drug delivery systems — including our signature Oral Thin Film (OTF) platform, which enables rapid
                  dissolution and improved patient compliance without water.
                </p>
                <Link to="/rnd" className="btn-primary" style={{ marginTop: '24px' }}>Explore Our R&D</Link>
              </div>
              <div className="hp-rnd-cta__stats">
                <div className="hp-rnd-stat"><span>200+</span><small>Formulations</small></div>
                <div className="hp-rnd-stat"><span>50+</span><small>In Pipeline</small></div>
                <div className="hp-rnd-stat"><span>5+</span><small>Years R&D</small></div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
