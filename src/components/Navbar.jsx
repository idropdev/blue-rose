import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import RoseMark from './RoseMark';
import { CONTACT } from '../data/content';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'CCMARQ Skin Care' },
  { to: '/about', label: 'Our Provider' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
            <RoseMark size={30} />
            <span className="nav__brand-text">
              <em>Blue Rose</em>
              <small>Aesthetics &amp; Wellness</small>
            </span>
          </Link>

          <nav className="nav__links">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__cta">
            <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary nav__book">
              Book Now
              <span className="btn__orb">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        <nav className="nav-drawer__links">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : '0s' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-drawer__foot">
          <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--light">
            Book Now
            <span className="btn__orb">→</span>
          </a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        </div>
      </div>
    </>
  );
}
