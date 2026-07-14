import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PetalField from '../components/PetalField';
import ServicesCarousel from '../components/ServicesCarousel';
import MapSection from '../components/MapSection';
import RoseMark from '../components/RoseMark';
import { useReveal, useGSAP, gsap } from '../hooks/useReveal';
import {
  CONTACT,
  PILLARS,
  BEFORE_AFTERS,
  WHY,
  PRODUCTS,
  STORY_QUOTE,
} from '../data/content';
import './Home.css';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  const scope = useRef(null);
  useReveal(scope);

  // Hero entrance timeline
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.hero__eyebrow', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
          .fromTo(
            '.hero h1 .hero-line',
            { opacity: 0, y: 70, rotate: 2 },
            { opacity: 1, y: 0, rotate: 0, duration: 1.25, stagger: 0.12 },
            0.3
          )
          .fromTo('.hero__sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.85)
          .fromTo('.hero__actions', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1 }, 1.0)
          .fromTo('.hero__badges', { opacity: 0 }, { opacity: 1, duration: 1.2 }, 1.25)
          .fromTo('.hero__scroll', { opacity: 0 }, { opacity: 1, duration: 1 }, 1.5);
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          ['.hero__eyebrow', '.hero h1 .hero-line', '.hero__sub', '.hero__actions', '.hero__badges', '.hero__scroll'],
          { opacity: 1, y: 0 }
        );
      });
    },
    { scope }
  );

  return (
    <main ref={scope}>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__wash" aria-hidden="true" />
        <PetalField className="hero__petals" />
        <div className="container hero__content">
          <span className="eyebrow hero__eyebrow">El Paso · Medical Spa &amp; Wellness</span>
          <h1>
            <span className="hero-line">Where wellness meets</span>
            <span className="hero-line"><em>aesthetic precision</em></span>
          </h1>
          <p className="lede hero__sub">
            Personalized, evidence-based treatments designed to help you feel
            confident, refreshed, and naturally radiant.
          </p>
          <div className="hero__actions">
            <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary">
              Book Now
              <span className="btn__orb"><ArrowIcon /></span>
            </a>
            <Link to="/services" className="btn btn--ghost">
              View Services
              <span className="btn__orb"><ArrowIcon /></span>
            </Link>
          </div>
          <div className="hero__badges">
            <span>Clinically-led</span>
            <i />
            <span>Family Nurse Practitioner</span>
            <i />
            <span>Boutique care</span>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <em />
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="section pillars">
        <div className="container">
          <div className="pillars__grid">
            {PILLARS.map((p, i) => (
              <article className="shell pillar rv" data-rv-delay={i * 0.08} key={p.n}>
                <div className="shell__core pillar__core">
                  <span className="pillar__n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="section intro">
        <div className="container intro__grid">
          <div className="intro__copy rv">
            <span className="eyebrow">The Blue Rose Standard</span>
            <h2 className="h-display">
              Where wellness meets <em>precision</em>
            </h2>
            <p className="lede">
              At Blue Rose Aesthetics &amp; Wellness, we blend clinical expertise
              with a warm, patient-centered approach. Every treatment is designed
              to enhance natural beauty, support whole-body wellness, and honor
              the confidence you carry into the world.
            </p>
            <div className="intro__actions">
              <Link to="/services" className="btn btn--primary">
                Explore Services
                <span className="btn__orb"><ArrowIcon /></span>
              </Link>
              <Link to="/about" className="btn btn--ghost">
                Meet Your Provider
                <span className="btn__orb"><ArrowIcon /></span>
              </Link>
            </div>
          </div>
          <div className="intro__mark rv" data-rv-delay="0.15" aria-hidden="true">
            <RoseMark size={280} color="var(--cobalt)" />
          </div>
        </div>
      </section>

      {/* ============ SERVICES CAROUSEL ============ */}
      <section className="section svc-section">
        <div className="container svc-section__head">
          <div className="rv">
            <span className="eyebrow">Our Services</span>
            <h2 className="h-display">
              Curated treatments,<br />
              <em>tailored to you</em>
            </h2>
          </div>
          <p className="lede rv" data-rv-delay="0.1">
            A curated collection of aesthetic and wellness treatments — hover or
            tap any card to explore. Every service is personalized with a gentle,
            evidence-based approach.
          </p>
        </div>
        <div className="rv" data-rv-y="60">
          <ServicesCarousel />
        </div>
      </section>

      {/* ============ BEFORE & AFTER ============ */}
      <section className="section ba-section">
        <div className="container">
          <div className="ba-section__head rv">
            <span className="eyebrow">Before &amp; After</span>
            <h2 className="h-display">
              Real clients. <em>Real results.</em>
            </h2>
            <p className="lede">Always natural, always you.</p>
          </div>
          <div className="ba-grid">
            {BEFORE_AFTERS.map((b, i) => (
              <figure
                className={`ba-card rv ba-card--${i % 2 ? 'low' : 'high'}`}
                data-rv-delay={i * 0.08}
                key={b.label}
              >
                <img src={b.image} alt={`${b.label} — before and after`} loading="lazy" />
                <figcaption>{b.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORY QUOTE ============ */}
      <section className="story">
        <PetalField className="story__petals" density={0.5} />
        <div className="container story__inner">
          <RoseMark size={54} color="var(--periwinkle)" />
          <blockquote className="rv" data-rv-y="50">
            “{STORY_QUOTE}”
          </blockquote>
          <Link to="/about" className="story__link rv" data-rv-delay="0.15">
            The story behind our name →
          </Link>
        </div>
      </section>

      {/* ============ WHY BLUE ROSE ============ */}
      <section className="section why">
        <div className="container why__grid">
          <div className="why__sticky rv">
            <span className="eyebrow">Why Choose Blue Rose</span>
            <h2 className="h-display">
              Care that puts <em>you</em> first
            </h2>
            <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary">
              Book a Consultation
              <span className="btn__orb"><ArrowIcon /></span>
            </a>
          </div>
          <ol className="why__list">
            {WHY.map((w, i) => (
              <li className="why__item rv" data-rv-delay={i * 0.05} key={w.title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CCMARQ TEASER ============ */}
      <section className="section shelf">
        <div className="container">
          <div className="shelf__head rv">
            <div>
              <span className="eyebrow">CCMARQ Skin Care</span>
              <h2 className="h-display">
                Clinical luxury,<br /><em>bottled</em>
              </h2>
            </div>
            <Link to="/products" className="btn btn--ghost">
              Shop the Collection
              <span className="btn__orb"><ArrowIcon /></span>
            </Link>
          </div>
          <div className="shelf__row">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <Link to="/products" className="shelf__item rv" data-rv-delay={i * 0.07} key={p.name}>
                <div className="shelf__img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="shelf__meta">
                  <h4>{p.name}</h4>
                  <span>${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section cta">
        <div className="container">
          <div className="cta__panel rv" data-rv-y="50">
            <PetalField className="cta__petals" density={0.4} />
            <div className="cta__inner">
              <h2>Start your wellness journey</h2>
              <p>
                Book your personalized consultation and experience natural,
                subtle, clinically-led results.
              </p>
              <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--light">
                Book Now
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
