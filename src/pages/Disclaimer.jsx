import PageHero from '../components/PageHero'
import './LegalPage.css'

export default function Disclaimer() {
  return (
    <div className="legal-page">
      <PageHero
        title="Disclaimer"
        subtitle="Important limitations and disclosures regarding Galexis Pharmaceuticals's website and information."
        breadcrumbs={[{ label: 'Disclaimer' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p className="legal-updated">Last updated: October 2026</p>

            <h2>General Disclaimer</h2>
            <p>The information contained on the Galexis Pharmaceuticals website is provided in good faith and for general informational purposes only. Galexis Pharmaceuticals makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.</p>

            <h2>Medical Information Disclaimer</h2>
            <p>Nothing on this website should be construed as medical advice. Information regarding pharmaceutical products, therapeutic areas, clinical applications, and medical conditions is intended solely for healthcare professionals and informed readers. It does not constitute:</p>
            <ul>
              <li>Medical advice or a substitute for professional medical consultation.</li>
              <li>Diagnosis, treatment, or prescription recommendations.</li>
              <li>An endorsement of any specific treatment approach.</li>
              <li>Instructions for self-medication.</li>
            </ul>
            <p>Patients and consumers should always consult a qualified healthcare professional before starting, stopping, or changing any medication or treatment regimen.</p>

            <h2>Product Information Disclaimer</h2>
            <p>Product information on this website is provided for general reference and may not reflect the most current prescribing information, safety data, or regulatory status. Pharmaceutical products described on this website:</p>
            <ul>
              <li>May not be available in all countries or markets.</li>
              <li>Are subject to local regulatory approvals and restrictions.</li>
              <li>Should be used only as directed by a licensed healthcare professional.</li>
              <li>May have been updated with new safety information after publication on this site.</li>
            </ul>
            <p>Always refer to the most current prescribing information (package insert/SmPC) for up-to-date product details.</p>

            <h2>Regulatory Compliance Disclaimer</h2>
            <p>References to regulatory approvals, certifications, and compliance statuses on this website reflect information available at the time of publication. Regulatory statuses are subject to change. Galexis Pharmaceuticals does not guarantee the ongoing validity of any specific regulatory claim made on this website.</p>

            <h2>Forward-Looking Statements</h2>
            <p>This website may contain forward-looking statements regarding our product range, business plans, and market expectations. These statements are based on current expectations and assumptions and are subject to risks and uncertainties that could cause actual results to differ materially. We are under no obligation to update forward-looking statements.</p>

            <h2>External Links Disclaimer</h2>
            <p>Links to external websites are provided for convenience and information purposes only. Galexis Pharmaceuticals does not endorse the content of any linked external site and accepts no responsibility for the accuracy, legality, or content of external sites or for subsequent links.</p>

            <h2>Professional Advice</h2>
            <p>While we strive to keep information accurate and current, we strongly recommend that specific professional advice be sought before taking any action based on information provided on this website — particularly in matters of health, law, finance, or regulatory compliance.</p>

            <h2>Limitation of Liability</h2>
            <p>In no event shall Galexis Pharmaceuticals, its directors, employees, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, this website or its content. This includes but is not limited to any errors or omissions in any content, any loss or damage arising from use of content posted, transmitted, or otherwise made available via the website.</p>

            <h2>Changes to This Disclaimer</h2>
            <p>Galexis Pharmaceuticals reserves the right to modify this disclaimer at any time without notice. Your continued use of the website constitutes acceptance of the current disclaimer.</p>

            <h2>Contact</h2>
            <p>If you have any questions about this disclaimer, please contact us:</p>
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
