import { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../components/Icon'
import { dosageForms } from '../data/products'
import { company } from '../data/company'
import './Home.css'

/* ─── DATA ─── */
const slides = [
  {
    headline: company.tagline,
    sub: `${company.intro} — Trust • Quality • Healthcare`,
    cta1: { label: 'Explore Products', path: '/products' },
    cta2: { label: 'Contact Us', path: '/contact' },
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Quality Medicines, Made with Care',
    sub: 'Tablets, capsules, syrups, dry syrups and topicals from our Junagadh facility',
    cta1: { label: 'Manufacturing', path: '/manufacturing' },
    cta2: { label: 'View Products', path: '/products' },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Your Brand, Our Manufacturing',
    sub: 'Third-party and private label manufacturing for pharma marketing companies',
    cta1: { label: 'Our Services', path: '/services' },
    cta2: { label: 'Get a Quote', path: '/services#enquiry' },
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Trusted Healthcare Partners',
    sub: 'Working with distributors and export partners in India and abroad',
    cta1: { label: 'Export', path: '/export' },
    cta2: { label: 'Partner With Us', path: '/contact' },
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop&q=80',
  },
]

const highlights = [
  { icon: 'shield', title: 'Trust', label: 'Reliable partner' },
  { icon: 'award', title: 'Quality', label: 'In every batch' },
  { icon: 'heart', title: 'Healthcare', label: 'For every patient' },
  { icon: 'globe', title: 'Global', label: 'Across borders' },
]

const services = [
  { icon: 'factory', title: 'Third-Party Manufacturing', desc: 'Reliable contract manufacturing for pharma marketing companies.' },
  { icon: 'tag', title: 'Private Label', desc: 'Your brand name, our formulation and manufacturing expertise.' },
  { icon: 'truck', title: 'Marketing & Distribution', desc: 'Galexis-branded medicines for distributors and stockists.' },
  { icon: 'globe', title: 'Export Supply', desc: 'Quality formulations for importers in international markets.' },
]

const brandSteps = [
  { title: 'Choose Products', desc: 'From our range or your own composition.' },
  { title: 'Brand & Packaging', desc: 'Brand name, label, carton and pack size.' },
  { title: 'Manufacture & Test', desc: 'Produced and quality-tested before release.' },
  { title: 'Dispatch', desc: 'Packed and shipped to your location.' },
]

/* ─── EASE CONSTANTS ─── */
const EASE_SMOOTH = [0.19, 1, 0.22, 1]
const EASE_SHARP  = [0.77, 0, 0.175, 1]

/* ─── WORD SPLIT HEADLINE ─── */
function SplitHeadline({ text, className, delay = 0 }) {
  const words = text.split(' ')
  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={i}>
        <span className="word-wrap">
          <motion.span
            className="word"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: EASE_SMOOTH,
              delay: delay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
        {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </h1>
  )
}

/* ─── SECTION FADE ─── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: EASE_SMOOTH, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ─── STAGGER CONTAINER ─── */
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}
const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: EASE_SMOOTH },
  },
}

/* ═══════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════ */
export default function Home() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const intervalRef = useRef(null)

  const startAuto = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDir(1)
      setCurrent((p) => (p + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => { startAuto(); return () => clearInterval(intervalRef.current) }, []) // eslint-disable-line

  const goTo = (i) => {
    setDir(i > current ? 1 : -1)
    setCurrent(i)
    startAuto()
  }
  const prev = () => { setDir(-1); setCurrent((p) => (p - 1 + slides.length) % slides.length); startAuto() }
  const next = () => { setDir(1);  setCurrent((p) => (p + 1) % slides.length); startAuto() }

  return (
    <div className="home">

      {/* ════════════════════════════════
          HERO SLIDER
      ════════════════════════════════ */}
      <section className="hero-slider">
        <AnimatePresence initial={false} custom={dir} mode="sync">
          <motion.div
            key={current}
            className="hero-slide"
            custom={dir}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          >
            {/* Background photo with Ken Burns zoom */}
            <motion.div
              className="hero-slide__bg"
              style={{ backgroundImage: `url('${slides[current].image}')` }}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: 'linear' }}
            />
            <div className="hero-slide__overlay" />

            <div className="container hero-slide__content">
              {/* Badge */}
              <motion.span
                className="hero-slide__tag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.2 }}
              >
                {company.name}
              </motion.span>

              {/* Headline — word by word */}
              <SplitHeadline
                text={slides[current].headline}
                className="hero-slide__headline"
                delay={0.35}
              />

              {/* Sub */}
              <motion.p
                className="hero-slide__sub"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.65 }}
              >
                {slides[current].sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="hero-slide__actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.8 }}
              >
                <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to={slides[current].cta1.path} className="btn-primary">{slides[current].cta1.label}</Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to={slides[current].cta2.path} className="btn-secondary">{slides[current].cta2.label}</Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Slide counter */}
            <motion.div
              className="hero-counter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="hero-counter__cur">0{current + 1}</span>
              <span className="hero-counter__sep" />
              <span className="hero-counter__tot">0{slides.length}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next */}
        <motion.button
          className="hero-nav hero-nav--prev"
          onClick={prev}
          aria-label="Previous"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.92 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
        <motion.button
          className="hero-nav hero-nav--next"
          onClick={next}
          aria-label="Next"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.92 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              className={`hero-dot${i === current ? ' hero-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.85 }}
              animate={{ width: i === current ? 28 : 8, backgroundColor: i === current ? '#ffffff' : 'rgba(255,255,255,0.4)' }}
              transition={{ duration: 0.35, ease: EASE_SHARP }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            className="hero-scroll-hint__line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
          />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ════════════════════════════════
          WELCOME SECTION
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <motion.div
            className="welcome-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div className="welcome-section__content" variants={staggerItem}>
              <span className="section-tag">Welcome</span>
              <h2 className="section-title">Quality Medicines.<br />Trusted Partnerships.</h2>
              <p className="welcome-section__text">
                {company.name} is engaged in the manufacturing and marketing of quality medicines. From our facility at
                GIDC Dolatpara, Junagadh, Gujarat, we produce tablets, capsules, oral liquids, dry syrups, topicals and
                nutraceuticals across key therapy segments.
              </p>
              <p className="welcome-section__text" style={{ marginTop: 16 }}>
                We serve healthcare professionals, distributors and pharma marketing companies — under our own brand and
                through third-party and private label manufacturing — guided by our values of Trust, Quality and Healthcare.
              </p>
              <motion.div
                style={{ marginTop: 28 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/about" className="btn-primary">More About Us</Link>
              </motion.div>
            </motion.div>

            <motion.div className="welcome-section__visual" variants={staggerItem}>
              <motion.div
                className="welcome-photo-wrap"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: EASE_SMOOTH }}
              >
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&q=80"
                  alt="Pharmaceutical laboratory"
                  className="welcome-photo"
                  loading="lazy"
                />
                <motion.div
                  className="welcome-photo-badge"
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.4 }}
                >
                  <span className="welcome-photo-badge__num">GMP</span>
                  <span className="welcome-photo-badge__label">Guided Manufacturing</span>
                </motion.div>
              </motion.div>

              <div className="welcome-mini-cards">
                {[
                  { src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=200&h=120&fit=crop&q=70', title: 'Quality Tested', sub: 'Every batch, before release' },
                  { src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=120&fit=crop&q=70', title: 'Your Brand', sub: 'Third-party & private label' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="welcome-mini-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.3 + i * 0.15 }}
                    whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(20,52,122,0.15)' }}
                  >
                    <img src={card.src} alt={card.title} loading="lazy" />
                    <div className="welcome-mini-card__text">
                      <h4>{card.title}</h4>
                      <p>{card.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          INNOVATION STATEMENT
      ════════════════════════════════ */}
      <section className="innovation-statement section-bg-soft">
        <div className="container">
          <div className="innovation-statement__inner">
            <motion.div
              className="innovation-statement__quote"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_SMOOTH }}
            >
              <img src="/brand/icon-192.png" alt="" width="72" height="72" />
            </motion.div>

            {/* Word-by-word reveal */}
            <motion.h2
              className="innovation-statement__text"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {'Trust. Quality. Healthcare.'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className="iword"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_SMOOTH } },
                  }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.h2>

            <FadeUp delay={0.4}>
              <p className="innovation-statement__sub">
                Three values that guide every medicine we make — and every partnership we build, in India and across borders.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS BAR
      ════════════════════════════════ */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="stat-item"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_SMOOTH } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <motion.span
                  className="stat-icon"
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 + i }}
                >
                  <Icon name={h.icon} />
                </motion.span>
                <span className="stat-number stat-number--word">{h.title}</span>
                <span className="stat-label">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          THERAPEUTIC AREAS
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="text-center" style={{ marginBottom: 52 }}>
              <span className="section-tag">Our Products</span>
              <h2 className="section-title">Product Range</h2>
              <p className="section-subtitle">
                Quality formulations across key dosage forms — for our own brands and for our manufacturing partners.
              </p>
            </div>
          </FadeUp>

          <motion.div
            className="therapeutic-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {dosageForms.map((area, i) => (
              <motion.div
                key={area.key}
                className="therapeutic-card"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: EASE_SMOOTH } },
                }}
                whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(20,52,122,0.14)', transition: { duration: 0.35, ease: EASE_SMOOTH } }}
              >
                <div className="therapeutic-card__img-wrap">
                  <motion.img
                    src={area.image}
                    alt={area.title}
                    className="therapeutic-card__img"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: EASE_SMOOTH }}
                  />
                  <motion.div
                    className="therapeutic-card__color-bar"
                    style={{ backgroundColor: i % 2 ? 'var(--color-primary)' : 'var(--color-accent)' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE_SHARP, delay: 0.2 + i * 0.08 }}
                  />
                </div>
                <h3 className="therapeutic-card__title">{area.title}</h3>
                <p className="therapeutic-card__desc">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <FadeUp className="text-center" delay={0.2}>
            <Link to="/products" className="btn-outline" style={{ marginTop: 40 }}>View All Products</Link>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICES
      ════════════════════════════════ */}
      <section className="section section-bg-soft">
        <div className="container">
          <FadeUp>
            <div className="text-center" style={{ marginBottom: 48 }}>
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">Manufacturing & Marketing Solutions</h2>
            </div>
          </FadeUp>
          <div className="gx-cards">
            {services.map((sv, i) => (
              <FadeUp key={sv.title} delay={i * 0.08}>
                <div className="gx-card">
                  <div className="gx-card__icon"><Icon name={sv.icon} /></div>
                  <h3>{sv.title}</h3>
                  <p>{sv.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center" style={{ margin: '72px 0 36px' }}>
              <span className="section-tag">Make Your Brand</span>
              <h2 className="section-title">Launch Your Brand in 4 Steps</h2>
            </div>
          </FadeUp>
          <div className="gx-steps">
            {brandSteps.map((st, i) => (
              <FadeUp key={st.title} delay={i * 0.08}>
                <div className="gx-step">
                  <span className="gx-step__num">0{i + 1}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center" delay={0.2}>
            <Link to="/services" className="btn-primary" style={{ marginTop: 40 }}>Explore Services</Link>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════
          CTA BANNER
      ════════════════════════════════ */}
      <section className="cta-banner">
        <motion.div
          className="cta-banner__bg"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        />
        {/* Floating orbs */}
        <motion.div
          className="cta-orb cta-orb--1"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="cta-orb cta-orb--2"
          animate={{ y: [0, 25, 0], x: [0, -18, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
        />

        <div className="container cta-banner__inner">
          <motion.div
            className="cta-banner__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_SMOOTH }}
          >
            <motion.span
              className="section-tag"
              style={{ color: 'var(--color-accent-light)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Partner With Us
            </motion.span>
            <motion.h2
              className="cta-banner__title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.3 }}
            >
              Let's Bring Quality Medicines to More People
            </motion.h2>
            <motion.p
              className="cta-banner__text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.45 }}
            >
              Distributor, marketing company or export partner — talk to us about your requirement today.
            </motion.p>
            <motion.div
              className="cta-banner__btns"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.6 }}
            >
              <Link to="/contact" className="cta-banner__btn">
                Get in Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href={`tel:${company.phones[0].tel}`} className="cta-banner__btn cta-banner__btn--ghost">
                Call {company.phones[0].display}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
