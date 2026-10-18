import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const REVEAL_SELECTOR = '.reveal-on-scroll, .reveal-stagger, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]';

/**
 * High-performance global Scroll Reveal hook
 * Reveals elements with hardware-accelerated animations as they approach the viewport.
 * Features early threshold trigger, window scroll backup, and safe fallback timeout.
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

    const checkAndReveal = () => {
      const elements = document.querySelectorAll(REVEAL_SELECTOR);
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          // Trigger when element top is within 100px of viewport bottom, or already past
          if (rect.top <= windowHeight + 100 && rect.bottom >= -100) {
            el.classList.add('is-revealed');
          }
        }
      });
    };

    // IntersectionObserver with early margin for smooth entrance
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
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
          rootMargin: '120px 0px 120px 0px', // trigger 120px before entering viewport
          threshold: 0, // trigger immediately upon entering margin
        }
      );

      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer?.observe(el);
        }
      });
    }

    // Run immediately on page load / route change
    checkAndReveal();

    // Check again after initial renders / image load
    const t1 = setTimeout(checkAndReveal, 60);
    const t2 = setTimeout(checkAndReveal, 200);
    const t3 = setTimeout(checkAndReveal, 500);

    // Guaranteed Safety Fallback: After 1.2s, reveal ALL remaining elements
    // so no user EVER sees a blank/white section
    const safetyFallback = setTimeout(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 1200);

    // Backup scroll/resize listener
    const handleScrollOrResize = () => {
      requestAnimationFrame(checkAndReveal);
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    // Mutation observer for dynamic content updates
    const mutationObserver = new MutationObserver(() => {
      checkAndReveal();
      if (observer) {
        document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
          if (!el.classList.contains('is-revealed')) {
            observer?.observe(el);
          }
        });
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(safetyFallback);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname, location.search]);
}
