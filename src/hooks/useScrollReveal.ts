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

    // 1. Reveal ONLY elements that are ALREADY in the initial viewport on page load
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.55 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      }
    });

    // 2. Observe all other elements as they scroll into view
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
        rootMargin: '0px 0px -70px 0px', // Trigger when element is 70px inside viewport so user sees the animation!
        threshold: 0.1,
      }
    );

    // Observe unrevealed elements
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    // 3. Fallback check on scroll for any browser quirks
    const onScroll = () => {
      const currentHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          // When top of element enters viewport by 50px
          if (rect.top <= currentHeight - 50 && rect.bottom >= 0) {
            el.classList.add('is-revealed');
            observer.unobserve(el);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // 4. MutationObserver for dynamically rendered items (e.g. tabs, data loads)
    const mutationObserver = new MutationObserver(() => {
      const currentHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= currentHeight - 30 && rect.bottom >= 0) {
            el.classList.add('is-revealed');
          } else {
            observer.observe(el);
          }
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname, location.search]);
}
