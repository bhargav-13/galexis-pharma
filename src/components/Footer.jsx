import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-wordmark">Logo</span>
            </div>
            <p className="footer__tagline">
              Developing with purpose, manufacturing with precision, delivering with pride and trust.
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@auxillionlifecare.com">info@auxillionlifecare.com</a>
              </div>
              <div className="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+919409502669">+91 94095 02669</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Divisions */}
          <div className="footer__col">
            <h4 className="footer__col-title">Business Divisions</h4>
            <ul className="footer__links">
              <li><Link to="/human-pharma">Human Medicines</Link></li>
              <li><Link to="/vet-pharma">Veterinary Medicines</Link></li>
              <li><Link to="/nutraceuticals">Nutraceuticals &amp; Cosmeceuticals</Link></li>
              <li><Link to="/import-export">Import / Export</Link></li>
              <li><Link to="/business">Business Operations</Link></li>
            </ul>
          </div>

          {/* Science */}
          <div className="footer__col">
            <h4 className="footer__col-title">Science</h4>
            <ul className="footer__links">
              <li><Link to="/rnd">Research &amp; Development</Link></li>
              <li><Link to="/manufacturing">Manufacturing</Link></li>
            </ul>
            <h4 className="footer__col-title" style={{ marginTop: '24px' }}>Patient Safety</h4>
            <ul className="footer__links">
              <li><Link to="/safety-reporting">Safety Reporting</Link></li>
            </ul>
            <Link to="/safety-reporting" className="footer__safety-btn">
              Report Adverse Event →
            </Link>
          </div>
        </div>

        {/* Offices */}
        <div className="footer__offices">
          <div className="footer__office">
            <div className="footer__office-label">Ahmedabad HQ</div>
            <p>804, Shaligram Prime, Bopal, Ahmedabad, Gujarat 380058</p>
          </div>
          <div className="footer__office">
            <div className="footer__office-label">Jamnagar Office</div>
            <p>105, Elite Luxuria, Essar School Ring Road, Jamnagar 361002</p>
          </div>
          <div className="footer__office">
            <div className="footer__office-label">Germany Office</div>
            <p>Bruckstraße 23, 58239 Schwerte, Germany</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Auxillion Lifecare. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
