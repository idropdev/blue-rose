import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Scroll-reveals every `.rv` element inside the scope.
 * Optional per-element tuning: data-rv-delay="0.15", data-rv-y="60".
 */
export function useReveal(scopeRef) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('.rv').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: parseFloat(el.dataset.rvY ?? 36) },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: 'power3.out',
              delay: parseFloat(el.dataset.rvDelay ?? 0),
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            }
          );
        });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.rv', { opacity: 1, y: 0 });
      });
    },
    { scope: scopeRef }
  );
}

export { gsap, ScrollTrigger, useGSAP };
