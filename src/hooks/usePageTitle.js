import { useEffect } from 'react';

const BASE = 'Blue Rose Aesthetics & Wellness';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Med Spa in El Paso, TX`;
  }, [title]);
}
