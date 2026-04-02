import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLeaving(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`loader${leaving ? ' loader--leaving' : ''}`}
      onTransitionEnd={() => leaving && onDone?.()}
    >
      <div className="loader__logo">
        {'Logo'.split('').map((char, i) => (
          <span
            key={i}
            className="loader__char"
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" />
      </div>
    </div>
  )
}
