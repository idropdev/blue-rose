import { Link } from 'react-router-dom';
import RoseMark from './RoseMark';
import { CONTACT } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <RoseMark size={40} color="#aebfef" />
            <div>
              <em>Blue Rose</em>
              <small>Aesthetics &amp; Wellness, PLLC</small>
            </div>
          </div>
          <p>
            Personalized, evidence-based treatments designed to help you feel
            confident, refreshed, and naturally radiant.
          </p>
          <div className="footer__social">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 8h3V4.5h-3c-2.2 0-4 1.8-4 4V11H7v3.5h3V21h3.5v-6.5h3l.5-3.5h-3.5V8.7c0-.4.3-.7.5-.7Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer__col">
          <h4>Visit</h4>
          <Link to="/services">Services</Link>
          <Link to="/products">CCMARQ Skin Care</Link>
          <Link to="/about">Our Provider</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.mapsLink} target="_blank" rel="noreferrer">
            801 Myrtle Ave, Suite 104<br />El Paso, TX 79901
          </a>
        </div>

        <div className="footer__col">
          <h4>Book</h4>
          <p className="footer__book-copy">
            Start your wellness journey with a personalized consultation.
          </p>
          <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--light">
            Book Online
            <span className="btn__orb">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} Blue Rose Aesthetics &amp; Wellness, PLLC</span>
        <span>Cherry payment plans available — treat now, pay later.</span>
      </div>
    </footer>
  );
}
