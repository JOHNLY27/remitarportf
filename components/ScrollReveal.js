'use client';
import { useEffect } from 'react';

/**
 * ScrollReveal
 * - Finds elements with the `reveal-on-scroll` class and adds `revealed` when they enter viewport.
 * - Respects `prefers-reduced-motion` by disabling animations for that preference.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // If user prefers reduced motion, reveal all immediately
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
