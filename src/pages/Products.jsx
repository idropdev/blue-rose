import { useRef, useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { useReveal } from '../hooks/useReveal';
import { PRODUCTS, CONTACT } from '../data/content';
import './Products.css';

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Products() {
  const scope = useRef(null);
  useReveal(scope);
  usePageTitle('CCMARQ Skin Care');
  const [active, setActive] = useState(null);

  return (
    <main ref={scope} className="products-page">
      <header className="page-hero products-hero">
        <div className="container">
          <span className="eyebrow rv">CCMARQ Skin Care</span>
          <h1 className="h-display rv" data-rv-delay="0.08">
            Clinical-luxury <em>skincare</em>
          </h1>
          <p className="lede rv" data-rv-delay="0.16">
            A curated collection of medical-grade skincare designed to support
            healthy, radiant skin with intentional, science-backed formulas —
            strengthening the skin barrier, enhancing texture, and elevating
            your daily routine.
          </p>
        </div>
      </header>

      <section className="section products-grid-section">
        <div className="container">
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <article
                key={p.name}
                className={`product-card rv ${active === i ? 'is-open' : ''}`}
                data-rv-delay={(i % 4) * 0.06}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="product-card__stage">
                  <span className="product-card__tag">{p.tag}</span>
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <div className="product-card__veil">
                    <p>{p.description}</p>
                    <small>{p.ingredients}</small>
                  </div>
                </div>
                <div className="product-card__info">
                  <div>
                    <h3>{p.name}</h3>
                    <small>{p.size}</small>
                  </div>
                  <span className="product-card__price">${p.price}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="products-note rv">
            <p>
              CCMARQ products are available in-studio. Call{' '}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or visit us to build
              your personalized regimen.
            </p>
            <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--primary">
              Book a Skin Consultation
              <span className="btn__orb"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
