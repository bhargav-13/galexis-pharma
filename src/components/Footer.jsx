import { Link } from 'react-router-dom'
import GalexisLogo from './GalexisLogo'
import Icon from './Icon'
import { company } from '../data/company'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <GalexisLogo light size="md" />
            </div>
            <p className="footer__tagline">
              {company.tagline}. {company.intro} — Trust • Quality • Healthcare.
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <Icon name="mail" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="footer__contact-item">
                <Icon name="phone" />
                <span>
                  {company.phones.map((p, i) => (
                    <span key={p.tel}>{i > 0 && ' / '}<a href={`tel:${p.tel}`}>{p.display}</a></span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* What we do */}
          <div className="footer__col">
            <h4 className="footer__col-title">What We Do</h4>
            <ul className="footer__links">
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/manufacturing">Manufacturing &amp; Quality</Link></li>
              <li><Link to="/services">Third-Party &amp; Private Label</Link></li>
              <li><Link to="/export">Export</Link></li>
            </ul>
          </div>

          {/* Patient safety */}
          <div className="footer__col">
            <h4 className="footer__col-title">Patient Safety</h4>
            <p className="footer__note">Experienced a side effect with one of our products? Please let us know.</p>
            <Link to="/safety-reporting" className="footer__safety-btn">
              Report a Side Effect →
            </Link>
          </div>
        </div>

        {/* Office */}
        <div className="footer__offices">
          <div className="footer__office">
            <div className="footer__office-label">Office &amp; Works — Junagadh</div>
            <p>{company.address.full}</p>
          </div>
          <div className="footer__office">
            <div className="footer__office-label">GSTIN</div>
            <p>{company.gstin}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
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
