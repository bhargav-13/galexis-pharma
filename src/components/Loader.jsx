import { useEffect, useState } from 'react'
import GalexisLogo from './GalexisLogo'
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
        <GalexisLogo size="xl" />
      </div>
      <div className="loader__bar">
        <div className="loader__bar-fill" />
      </div>
    </div>
  )
}
