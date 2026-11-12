import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function prefersReducedMotion(): boolean {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  } catch {
    return false;
  }
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px 40px 0px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return;
    }

    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      setIsVisible(true);
      return;
    }

    const checkInOrAboveViewport = () => {
      const rect = element.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      // Reveal if intersecting viewport OR already scrolled past above the fold (e.g. anchor jump to #oferta)
      if (rect.top <= vh * 0.96 && (rect.bottom >= 0 || rect.top < 0)) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkInOrAboveViewport() && triggerOnce) {
      return;
    }

    if (typeof IntersectionObserver !== 'function') {
      setIsVisible(true);
      return;
    }

    // Clamp threshold on mobile/tall sections so tall containers (> viewport height) always trigger
    const isSmallScreen = window.innerWidth < 768;
    const effectiveThreshold = isSmallScreen ? Math.min(threshold, 0.02) : Math.min(threshold, 0.08);

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: effectiveThreshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Lightweight scroll fallback for WebViews where IntersectionObserver throttles/misses during fast scrolls
    let rafId: number | null = null;
    const onScrollFallback = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (checkInOrAboveViewport() && triggerOnce) {
          observer.disconnect();
          window.removeEventListener('scroll', onScrollFallback);
        }
      });
    };

    window.addEventListener('scroll', onScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollFallback);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

