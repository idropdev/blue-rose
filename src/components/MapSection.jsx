import { CONTACT } from '../data/content';
import './MapSection.css';

const HOURS = [
  ['Mon – Fri', '9:00 AM – 6:00 PM'],
  ['Saturday', 'By appointment'],
  ['Sunday', 'Closed'],
];

export default function MapSection() {
  return (
    <section className="section map-section">
      <div className="container">
        <div className="shell map-shell rv">
          <div className="shell__core map-shell__core">
            <div className="map-info">
              <span className="eyebrow">Visit the Studio</span>
              <h2>Find us in the heart of El Paso</h2>
              <address>
                801 Myrtle Ave, Suite 104
                <br />
                El Paso, TX 79901
              </address>

              <ul className="map-hours">
                {HOURS.map(([d, h]) => (
                  <li key={d}>
                    <span>{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="map-info__actions">
                <a href={CONTACT.mapsLink} target="_blank" rel="noreferrer" className="btn btn--primary">
                  Get Directions
                  <span className="btn__orb">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12 12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a href={CONTACT.phoneHref} className="map-info__phone">
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                title="Blue Rose Aesthetics & Wellness — 801 Myrtle Ave Suite 104, El Paso, TX"
                src={CONTACT.mapsEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
