import PageHero from '../components/PageHero'
import './LegalPage.css'

export default function Terms() {
  return (
    <div className="legal-page">
      <PageHero
        title="Terms & Conditions"
        subtitle="The terms governing your use of Auxillion Lifecare's website and services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Auxillion Lifecare website (auxillionlifecare.com) and its associated services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website.</p>

            <h2>2. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. You must not:</p>
            <ul>
              <li>Use the site in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>Knowingly transmit any data, send or upload material that contains viruses or harmful components.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Reproduce, duplicate, copy, or re-sell any part of the website in contravention of these terms.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>The website and its original content, features, and functionality are owned by Auxillion Lifecare and are protected by applicable intellectual property laws. Our trademarks and trade dress may not be used without prior written consent.</p>
            <p>You may print or download extracts from our website for personal reference, but you may not modify the paper or digital copies of any materials, and you must acknowledge the source.</p>

            <h2>4. Medical and Product Information</h2>
            <p>The information on this website about pharmaceutical products, medical conditions, and treatments is provided for general informational purposes only. It is not intended as medical advice and should not be used as a substitute for professional medical consultation, diagnosis, or treatment.</p>
            <p>Always seek the advice of your physician or other qualified healthcare provider with any questions about medical conditions or medication use.</p>

            <h2>5. Product Availability</h2>
            <p>Products described on this website may not be available in all markets or countries. Pharmaceutical product availability is subject to regulatory approval in each jurisdiction. Information about products on this website does not constitute an offer to sell or supply those products in any jurisdiction where they are not approved.</p>

            <h2>6. Links to Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites. These links are provided for your convenience only. Auxillion Lifecare has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>

            <h2>7. Disclaimers</h2>
            <p>The website is provided on an "as is" and "as available" basis without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Auxillion Lifecare shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or reliance on information provided herein.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.</p>

            <h2>10. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes become effective upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the new terms.</p>

            <h2>11. Contact</h2>
            <p>Questions about these Terms and Conditions should be directed to:</p>
            <div className="legal-contact">
              <p><strong>Auxillion Lifecare</strong></p>
              <p>Email: <a href="mailto:info@auxillionlifecare.com">info@auxillionlifecare.com</a></p>
              <p>Phone: <a href="tel:+919409502669">+91 94095 02669</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
