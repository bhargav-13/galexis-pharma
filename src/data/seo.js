// Per-page search metadata. Used at runtime (src/components/Seo.jsx) and at build time
// (scripts/prerender.mjs) to write static HTML, sitemap.xml and robots.txt.
// Keep titles under ~60 characters and descriptions under ~160.

export const pages = [
  {
    path: '/',
    title: 'Galexis Pharmaceuticals | Pharma Manufacturer in Gujarat, India',
    description: 'Galexis Pharmaceuticals, Junagadh (Gujarat) — manufacturing & marketing of quality medicines: tablets, capsules, syrups, ointments. Third-party & export supply.',
    heading: 'Galexis Pharmaceuticals — Bridging Health Across Borders',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'About Galexis Pharmaceuticals | Junagadh, Gujarat',
    description: 'Learn about Galexis Pharmaceuticals, a pharmaceutical manufacturing and marketing company at GIDC Dolatpara, Junagadh, Gujarat, guided by Trust, Quality and Healthcare.',
    heading: 'About Galexis Pharmaceuticals',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/products',
    title: 'Pharma Products: Tablets, Capsules & Syrups | Galexis',
    description: 'Galexis Pharmaceuticals product range: tablets, capsules, syrups, dry syrups, ointments and nutraceuticals across key therapy segments. Send an enquiry.',
    heading: 'Our Pharmaceutical Products',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/manufacturing',
    title: 'Pharma Manufacturing & Quality | Galexis Pharmaceuticals',
    description: 'Galexis Pharmaceuticals manufactures tablets, capsules, oral liquids and topicals at its Junagadh, Gujarat facility, with quality checks from raw material to dispatch.',
    heading: 'Manufacturing & Quality',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/services',
    title: 'Third-Party & Private Label Pharma Manufacturing | Galexis',
    description: 'Third-party, contract and private label pharmaceutical manufacturing in Gujarat. Launch your own brand of tablets, capsules and syrups with Galexis Pharmaceuticals.',
    heading: 'Third-Party & Private Label Manufacturing',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/export',
    title: 'Pharmaceutical Export from India | Galexis Pharmaceuticals',
    description: 'Galexis Pharmaceuticals supplies quality pharmaceutical formulations from India to importers and distributors worldwide — export packing, documentation and shipping.',
    heading: 'Pharmaceutical Export — Bridging Health Across Borders',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/careers',
    title: 'Careers at Galexis Pharmaceuticals, Junagadh',
    description: 'Build your career in production, quality control, sales and more at Galexis Pharmaceuticals, Junagadh, Gujarat. Send your application today.',
    heading: 'Careers at Galexis Pharmaceuticals',
    priority: '0.5',
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact Galexis Pharmaceuticals | Junagadh, Gujarat',
    description: 'Contact Galexis Pharmaceuticals, GIDC 2, Dolatpara, Junagadh, Gujarat 362001. Call +91 83474 38145 or email info@galexispharmaceuticals.com.',
    heading: 'Contact Galexis Pharmaceuticals',
    priority: '0.8',
    changefreq: 'yearly',
  },
  {
    path: '/safety-reporting',
    title: 'Report a Side Effect | Galexis Pharmaceuticals',
    description: 'Report an adverse event or side effect related to a Galexis Pharmaceuticals product. Your report helps keep patients safe.',
    heading: 'Safety Reporting',
    priority: '0.4',
    changefreq: 'yearly',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Galexis Pharmaceuticals',
    description: 'How Galexis Pharmaceuticals collects, uses and protects your personal information.',
    heading: 'Privacy Policy',
    priority: '0.2',
    changefreq: 'yearly',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Galexis Pharmaceuticals',
    description: 'Terms and conditions governing the use of the Galexis Pharmaceuticals website.',
    heading: 'Terms & Conditions',
    priority: '0.2',
    changefreq: 'yearly',
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer | Galexis Pharmaceuticals',
    description: 'Important disclosures about the information on the Galexis Pharmaceuticals website.',
    heading: 'Disclaimer',
    priority: '0.2',
    changefreq: 'yearly',
  },
]

export const notFound = {
  title: 'Page Not Found | Galexis Pharmaceuticals',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

export const findPage = (path) => pages.find(p => p.path === path)
