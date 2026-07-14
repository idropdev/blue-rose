import { useRef, useState, useEffect, useCallback } from 'react';
import { SERVICES, CONTACT } from '../data/content';
import './ServicesCarousel.css';

/* Horizontal drag/scroll carousel. Hover (desktop) or tap (touch)
   reveals the description panel over the image. */
export default function ServicesCarousel() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [openCard, setOpenCard] = useState(null);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.svc-card');
    const step = card ? card.offsetWidth + 24 : 420;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Pointer drag for desktop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e) => {
      if (e.pointerType !== 'mouse') return;
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add('is-dragging');
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = (e) => {
      if (!down) return;
      down = false;
      el.classList.remove('is-dragging');
      if (moved) {
        const block = (ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        };
        el.addEventListener('click', block, { capture: true, once: true });
        setTimeout(() => el.removeEventListener('click', block, { capture: true }), 0);
      }
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div className="svc-carousel">
      <div className="svc-carousel__track" ref={trackRef}>
        {SERVICES.map((s, i) => (
          <article
            key={s.slug}
            className={`svc-card ${openCard === i ? 'is-open' : ''}`}
            onClick={() => setOpenCard(openCard === i ? null : i)}
          >
            <div className="svc-card__media">
              <img src={s.image} alt={s.name} loading="lazy" draggable="false" />
              <div className="svc-card__scrim" />
              <span className="svc-card__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="svc-card__meta">
                <span>{s.duration}</span>
                <span>{s.price}</span>
              </div>
              <div className="svc-card__label">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
              </div>
              <div className="svc-card__detail">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <div className="svc-card__detail-foot">
                  <span>{s.duration} · {s.price}</span>
                  <a
                    href={CONTACT.booking}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book →
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div className="svc-carousel__spacer" aria-hidden="true" />
      </div>

      <div className="svc-carousel__controls container">
        <div className="svc-carousel__progress">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }} />
        </div>
        <div className="svc-carousel__arrows">
          <button onClick={() => nudge(-1)} disabled={!canPrev} aria-label="Previous services">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.5 2 4.5 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={() => nudge(1)} disabled={!canNext} aria-label="More services">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.5 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
