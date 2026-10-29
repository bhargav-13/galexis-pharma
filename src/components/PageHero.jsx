import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PageHero.css'

const ease = [0.19, 1, 0.22, 1]
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&h=700&fit=crop&q=75'

export default function PageHero({ title, subtitle, breadcrumbs = [], image = DEFAULT_IMAGE }) {
  return (
    <section className="page-hero">
      <motion.div
        className="page-hero__bg"
        style={{ backgroundImage: `url('${image}')` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
      />
      <div className="page-hero__overlay" />
      <div className="page-hero__dots" aria-hidden="true" />

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
                <span className="page-hero__breadcrumb-sep" aria-hidden="true">/</span>
                {crumb.path
                  ? <Link to={crumb.path}>{crumb.label}</Link>
                  : <span aria-current="page">{crumb.label}</span>}
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
