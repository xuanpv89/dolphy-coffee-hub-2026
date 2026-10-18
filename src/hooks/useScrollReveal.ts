import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * High-performance global Scroll Reveal hook using IntersectionObserver
 * Handles entrance animations as elements scroll into the viewport.
 * Automatically scans on route changes and DOM mutations.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const selector = '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]';

    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px', // trigger slightly before it hits bottom of viewport
        threshold: 0.08, // element is at least 8% visible
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          // If already in initial viewport, reveal quickly
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('is-revealed');
          } else {
            observer.observe(el);
          }
        }
      });
    };

    // Initial check after paint
    const timer = setTimeout(observeElements, 50);

    // Watch for dynamic DOM updates (like category tab filtering or content loads)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname, location.search]);
}
