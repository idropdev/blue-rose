import { useRef } from 'react';
import MapSection from '../components/MapSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { useReveal } from '../hooks/useReveal';
import { CONTACT } from '../data/content';
import './Contact.css';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CHANNELS = [
  {
    label: 'Call or text',
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: 'Fastest way to reach the studio',
  },
  {
    label: 'Email',
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: 'We reply within one business day',
  },
  {
    label: 'Visit',
    value: '801 Myrtle Ave, Suite 104',
    href: CONTACT.mapsLink,
    note: 'El Paso, TX 79901',
    external: true,
  },
];

export default function Contact() {
  const scope = useRef(null);
  useReveal(scope);
  usePageTitle('Contact');

  return (
    <main ref={scope} className="contact-page">
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow rv">Contact</span>
          <h1 className="h-display rv" data-rv-delay="0.08">
            We’d love to <em>see you</em>
          </h1>
          <p className="lede rv" data-rv-delay="0.16">
            Questions about a treatment, product, or payment plans? Reach out —
            or book your personalized consultation online.
          </p>
          <div className="rv" data-rv-delay="0.22" style={{ marginTop: '2.2rem' }}>
            <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary">
              Book Online
              <span className="btn__orb"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </header>

      <section className="section contact-channels">
        <div className="container contact-channels__grid">
          {CHANNELS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="shell contact-channel rv"
              data-rv-delay={i * 0.08}
            >
              <div className="shell__core contact-channel__core">
                <small>{c.label}</small>
                <strong>{c.value}</strong>
                <span>{c.note}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <MapSection />
    </main>
  );
}
