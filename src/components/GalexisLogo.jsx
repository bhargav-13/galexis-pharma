// Official Galexis Pharmaceuticals logo (files in /public/brand).
// `light` switches to the white version for dark or photo backgrounds.
const heights = { sm: 34, md: 48, lg: 60, xl: 96 }

export default function GalexisLogo({ light = false, size = 'md', className = '' }) {
  const name = light ? 'galexis-logo-light' : 'galexis-logo'
  const h = heights[size] || heights.md

  return (
    <picture className={className} style={{ display: 'inline-flex', lineHeight: 0 }}>
      <source srcSet={`/brand/${name}-640.webp`} type="image/webp" />
      <img
        src={`/brand/${name}-640.png`}
        alt="Galexis Pharmaceuticals"
        width={Math.round(h * 640 / 159)}
        height={h}
        style={{ height: h, width: 'auto', display: 'block' }}
        draggable="false"
      />
    </picture>
  )
}
