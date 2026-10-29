import PageHero from '../components/PageHero'
import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <PageHero
        title="Privacy Policy"
        subtitle="How Galexis Pharmaceuticals collects, uses, and protects your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: October 2026</p>

            <h2>1. Introduction</h2>
            <p>Galexis Pharmaceuticals ("we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, store, and share information when you visit our website, use our services, or interact with us.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, postal address.</li>
              <li><strong>Business Information:</strong> Company name, job title, professional qualifications.</li>
              <li><strong>Communications:</strong> Messages sent through our contact forms, email correspondence, and enquiry submissions.</li>
                            <li><strong>Technical Data:</strong> Our website hosting provider may automatically log basic technical data such as IP address, browser type and pages requested, for security and performance.</li>
              <li><strong>Pharmacovigilance Data:</strong> Adverse event reports submitted through our Safety Reporting system (processed under legal obligation).</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries, requests, or applications.</li>
              <li>To provide, maintain, and improve our products and services.</li>
              <li>To comply with legal and regulatory obligations, including pharmacovigilance reporting.</li>
              <li>To send relevant updates, product information, or marketing communications (with your consent).</li>
              <li>To process job applications and manage recruitment activities.</li>
                            <li>To detect, prevent, and address fraud or security issues.</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data based on one or more of the following legal grounds:</p>
            <ul>
              <li><strong>Consent:</strong> Where you have given explicit consent for a specific purpose.</li>
              <li><strong>Contractual Necessity:</strong> Where processing is necessary to fulfil a contract with you.</li>
              <li><strong>Legal Obligation:</strong> Where processing is required by applicable law or regulation.</li>
              <li><strong>Legitimate Interests:</strong> Where processing serves our legitimate business interests without overriding your rights.</li>
            </ul>

            <h2>5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted vendors who help us operate our website, deliver form submissions and email.</li>
              <li><strong>Regulatory Authorities:</strong> Adverse event information may be shared with CDSCO, the Pharmacovigilance Programme of India (PvPI) or other relevant authorities as required by law.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. Pharmacovigilance data is retained for the periods mandated by applicable regulatory frameworks.</p>

            <h2>7. Your Rights</h2>
            <p>Subject to applicable law, including India's Digital Personal Data Protection Act, 2023, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Right of access — to receive a copy of your personal data.</li>
              <li>Right to rectification — to correct inaccurate data.</li>
              <li>Right to erasure — to request deletion of your data in certain circumstances.</li>
              <li>Right to restrict processing — to limit how we use your data.</li>
              <li>Right to data portability — to receive your data in a portable format.</li>
              <li>Right to object — to processing based on legitimate interests.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:info@galexispharmaceuticals.com">info@galexispharmaceuticals.com</a>.</p>

            <h2>8. Cookies and Tracking</h2>
            <p>Our website does not use advertising or tracking cookies. It stores a small setting in your browser's session storage so the introductory animation is not repeated on every page. Embedded Google Maps on the Contact page may set its own cookies, governed by Google's privacy policy.</p>

            <h2>9. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

            <h2>10. International Transfers</h2>
            <p>As a company serving international partners, your data may be transferred across borders. We ensure appropriate safeguards are in place for all international data transfers, consistent with applicable data protection laws.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website with a revised "last updated" date.</p>

            <h2>12. Contact Us</h2>
            <p>For privacy-related questions or to exercise your rights, please contact us at:</p>
            <div className="legal-contact">
              <p><strong>Galexis Pharmaceuticals</strong></p>
              <p>GIDC 2, Plot No 1504/1, Village Dolatpara, District Junagadh, Gujarat 362001</p>
              <p>Email: <a href="mailto:info@galexispharmaceuticals.com">info@galexispharmaceuticals.com</a></p>
              <p>Phone: <a href="tel:+918347438145">+91 83474 38145</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
