import { motion } from 'framer-motion'

const ease = [0.19, 1, 0.22, 1]

/* ─── Fade + slide up ─── */
export function FadeUp({ children, className = '', delay = 0, duration = 0.75 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Pure fade, no translate ─── */
export function FadeIn({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Stagger container ─── */
export function StaggerWrap({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Stagger child ─── */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
