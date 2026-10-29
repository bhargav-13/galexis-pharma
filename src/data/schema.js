import { company } from './company.js'

// schema.org JSON-LD describing the company, the website and the current page.
export function buildSchema(page) {
  const url = company.siteUrl + (page.path === '/' ? '/' : page.path)
  const orgId = `${company.siteUrl}/#organization`

  const graph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': orgId,
      name: company.name,
      alternateName: ['Galexis Pharma', 'Galexis'],
      slogan: company.tagline,
      description: `${company.intro}. Pharmaceutical manufacturer and marketer in Junagadh, Gujarat, India.`,
      url: `${company.siteUrl}/`,
      logo: `${company.siteUrl}/brand/galexis-logo.png`,
      image: `${company.siteUrl}/brand/galexis-logo.png`,
      email: company.email,
      telephone: company.phones[0].tel,
      taxID: company.gstin,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${company.address.line1}, Village Dolatpara`,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.pin,
        addressCountry: 'IN',
      },
      hasMap: company.mapLink,
      areaServed: ['IN', 'Worldwide'],
      contactPoint: company.phones.map(p => ({
        '@type': 'ContactPoint',
        telephone: p.tel,
        contactType: 'sales',
        email: company.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${company.siteUrl}/#website`,
      url: `${company.siteUrl}/`,
      name: company.name,
      publisher: { '@id': orgId },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${company.siteUrl}/#website` },
      about: { '@id': orgId },
      inLanguage: 'en-IN',
    },
  ]

  if (page.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${company.siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: page.heading, item: url },
      ],
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
