import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PageHero.css'

const ease = [0.19, 1, 0.22, 1]

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" />

      {/* Decorative orbs */}
      <motion.div
        className="page-hero__orb page-hero__orb--1"
        animate={{ y: [-14, 14, -14] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="page-hero__orb page-hero__orb--2"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="page-hero__orb page-hero__orb--3"
        animate={{ x: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="container page-hero__content">
        {breadcrumbs.length > 0 && (
          <motion.nav
            className="page-hero__breadcrumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                <span className="page-hero__breadcrumb-sep">›</span>
                {crumb.path
                  ? <Link to={crumb.path}>{crumb.label}</Link>
                  : <span>{crumb.label}</span>}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.18 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
