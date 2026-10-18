import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const REVEAL_SELECTOR = '.reveal-on-scroll, .reveal-stagger, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]';

/**
 * High-performance global Scroll Reveal hook
 * Animates elements piece-by-piece as they scroll into view.
 * Elements below the fold stay hidden until scrolled to, creating a vivid sequential entrance.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // 1. Reveal elements already in the initial viewport
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      }
    });

    // 2. High-performance asynchronous IntersectionObserver for scrolling elements
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
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    // Observe unrevealed elements
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    // 3. MutationObserver for dynamically rendered items (tabs, filters, route changes)
    const mutationObserver = new MutationObserver(() => {
      const currentHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < currentHeight * 0.85 && rect.bottom > 0) {
            el.classList.add('is-revealed');
          } else {
            observer.observe(el);
          }
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname, location.search]);
}
