import { useRef } from 'react';
import MapSection from '../components/MapSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { useReveal } from '../hooks/useReveal';
import { SERVICES, CONTACT } from '../data/content';
import './Services.css';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  const scope = useRef(null);
  useReveal(scope);
  usePageTitle('Services');

  return (
    <main ref={scope} className="services-page">
      <header className="page-hero">
        <div className="container">
          <span className="eyebrow rv">Services</span>
          <h1 className="h-display rv" data-rv-delay="0.08">
            Blue Rose <em>services</em>
          </h1>
          <p className="lede rv" data-rv-delay="0.16">
            A curated collection of aesthetic and wellness treatments designed to
            enhance natural beauty, support skin health, and elevate overall
            well-being. Every service is personalized with a gentle,
            evidence-based approach.
          </p>
        </div>
      </header>

      <section className="svc-list">
        <div className="container">
          {SERVICES.map((s, i) => (
            <article className={`svc-row rv ${i % 2 ? 'svc-row--flip' : ''}`} key={s.slug} id={s.slug}>
              <div className="svc-row__media">
                <img src={s.image} alt={s.name} loading="lazy" />
              </div>
              <div className="svc-row__body">
                <span className="svc-row__index">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.name}</h2>
                <p>{s.description}</p>
                <ul className="svc-row__facts">
                  <li>
                    <small>Duration</small>
                    <span>{s.duration}</span>
                  </li>
                  <li>
                    <small>Pricing</small>
                    <span>{s.price}</span>
                  </li>
                </ul>
                <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary">
                  Book This Service
                  <span className="btn__orb"><ArrowIcon /></span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section svc-note">
        <div className="container">
          <div className="shell rv">
            <div className="shell__core svc-note__core">
              <h2>Cherry payment plans</h2>
              <p>Treat now, pay later with Cherry — flexible payment plans available on all services.</p>
              <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--ghost">
                Book a Consultation
                <span className="btn__orb"><ArrowIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}
