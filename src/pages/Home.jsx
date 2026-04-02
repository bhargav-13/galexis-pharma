import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion'
import './Home.css'

/* ─── DATA ─── */
const slides = [
  {
    headline: 'Combating Conjunctivitis with Advanced Ophthalmic Care',
    sub: 'Trusted Research. Clear Vision.',
    cta1: { label: 'Explore Products', path: '/products' },
    cta2: { label: 'Learn More', path: '/human-pharma' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Fast Relief from Acidity — Anytime, Anywhere',
    sub: 'Innovative Mouth Dissolving Film for instant relief',
    cta1: { label: 'View Products', path: '/products' },
    cta2: { label: 'Our R&D', path: '/rnd' },
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Pioneering Veterinary Excellence',
    sub: 'Your Partner in animal healthcare',
    cta1: { label: 'Vet Products', path: '/vet-pharma' },
    cta2: { label: 'Contact Us', path: '/contact' },
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=1920&h=1080&fit=crop&q=80',
  },
  {
    headline: 'Precision in Pharmaceutical Production',
    sub: 'Excellence in Tablets & Capsules Manufacturing',
    cta1: { label: 'Manufacturing', path: '/manufacturing' },
    cta2: { label: 'Partner With Us', path: '/contact' },
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=1920&h=1080&fit=crop&q=80',
  },
]

const stats = [
  { value: 5, suffix: '+', label: 'Years Active', icon: '📅' },
  { value: 20, suffix: '+', label: 'Countries', icon: '🌍' },
  { value: 200, suffix: '+', label: 'Products', icon: '💊' },
  { value: 15, suffix: '+', label: 'Certifications', icon: '✅' },
]

const therapeuticAreas = [
  {
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=220&fit=crop&q=80',
    title: 'Cardiology',
    desc: 'Comprehensive cardiovascular solutions for heart health management.',
    color: '#0A8B6E',
  },
  {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=220&fit=crop&q=80',
    title: 'Gastroenterology',
    desc: 'Advanced formulations for digestive system care and relief.',
    color: '#1E6FBF',
  },
  {
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=220&fit=crop&q=80',
    title: 'Anti-Infectives',
    desc: 'Broad-spectrum antibiotics and antifungal medications.',
    color: '#0D4F6E',
  },
  {
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=220&fit=crop&q=80',
    title: 'Pain Management',
    desc: 'Effective analgesics and anti-inflammatory treatments.',
    color: '#7C3AED',
  },
  {
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=220&fit=crop&q=80',
    title: 'Neurology',
    desc: 'Specialised CNS therapies for neurological health.',
    color: '#B45309',
  },
]

/* ─── EASE CONSTANTS ─── */
const EASE_SMOOTH = [0.19, 1, 0.22, 1]
const EASE_SHARP  = [0.77, 0, 0.175, 1]

/* ─── ANIMATED COUNTER ─── */
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    return display.on('change', setDisplayed)
  }, [display])

  return (
    <span ref={ref} className="stat-number">
      {displayed}{suffix}
    </span>
  )
}

/* ─── WORD SPLIT HEADLINE ─── */
function SplitHeadline({ text, className, delay = 0 }) {
  const words = text.split(' ')
  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word-wrap">
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
          {i < words.length - 1 && ' '}
        </span>
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
                Auxillion Lifecare
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
              <h2 className="section-title">Redefining Healthcare<br />Through Innovation</h2>
              <p className="welcome-section__text">
                Auxillion Lifecare is a dynamic pharmaceutical company committed to improving lives through advanced
                drug formulation, rigorous quality standards, and a global distribution network. Founded with a vision
                to bridge the gap between cutting-edge science and accessible healthcare, we operate across human
                medicines, veterinary care, nutraceuticals, and international trade.
              </p>
              <p className="welcome-section__text" style={{ marginTop: 16 }}>
                From our state-of-the-art research facilities to our cGMP-compliant manufacturing units, every step
                of our process reflects our unwavering commitment to precision, safety, and patient wellbeing.
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
                  alt="Pharmaceutical research laboratory"
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
                  <span className="welcome-photo-badge__num">5+</span>
                  <span className="welcome-photo-badge__label">Years of Excellence</span>
                </motion.div>
              </motion.div>

              <div className="welcome-mini-cards">
                {[
                  { src: 'https://images.unsplash.com/photo-1581093458791-9d15482c8f1c?w=200&h=120&fit=crop&q=70', title: 'cGMP Certified', sub: 'World-class manufacturing' },
                  { src: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=200&h=120&fit=crop&q=70', title: 'R&D Driven', sub: 'Innovation at every stage' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="welcome-mini-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.3 + i * 0.15 }}
                    whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(13,43,78,0.15)' }}
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
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 0.18, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_SMOOTH }}
            >
              "
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
              {'Where Innovation Meets Global Healthcare'.split(' ').map((word, i) => (
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
                Bridging scientific excellence with compassionate care — for humans, animals, and communities worldwide.
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
            {stats.map((stat, i) => (
              <motion.div
                key={i}
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
                  {stat.icon}
                </motion.span>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="stat-label">{stat.label}</span>
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
              <span className="section-tag">Our Expertise</span>
              <h2 className="section-title">Therapeutic Focus Areas</h2>
              <p className="section-subtitle">
                Specialised pharmaceutical solutions across key therapeutic categories, delivering proven efficacy and clinical reliability.
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
            {therapeuticAreas.map((area, i) => (
              <motion.div
                key={i}
                className="therapeutic-card"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: EASE_SMOOTH } },
                }}
                whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(13,43,78,0.14)', transition: { duration: 0.35, ease: EASE_SMOOTH } }}
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
                    style={{ backgroundColor: area.color }}
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
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
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
              Ready to Shape the Future of Healthcare?
            </motion.h2>
            <motion.p
              className="cta-banner__text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.45 }}
            >
              Developing with purpose, manufacturing with precision, delivering with pride and trust.
              Let's build the future of healthcare together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.6 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link to="/contact" className="cta-banner__btn">Get in Touch</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
