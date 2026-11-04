import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const instance = useRef<Lenis | null>(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};

    const configure = () => {
      dispose();
      dispose = () => {};
      if (reducedMotion.matches) return;

      const lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        lerp: 0.2,
        syncTouch: false,
        // Native anchors preserve URL hashes, history and keyboard focus.
        anchors: false,
        prevent: node => node.tagName === 'TEXTAREA',
      });
      instance.current = lenis;
      const tick = (seconds: number) => lenis.raf(seconds * 1000);
      const resize = () => lenis.resize();
      const prepareAnchor = (event: MouseEvent) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
        if (!(link instanceof HTMLAnchorElement) || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;
        const url = new URL(link.href);
        if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
          // Stop wheel inertia before the browser starts its native anchor scroll.
          lenis.scrollTo(window.scrollY, { immediate: true });
        }
      };

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      ScrollTrigger.addEventListener('refresh', resize);
      document.addEventListener('click', prepareAnchor, true);

      dispose = () => {
        document.removeEventListener('click', prepareAnchor, true);
        ScrollTrigger.removeEventListener('refresh', resize);
        gsap.ticker.remove(tick);
        lenis.off('scroll', ScrollTrigger.update);
        lenis.destroy();
        instance.current = null;
      };
    };

    configure();
    reducedMotion.addEventListener('change', configure);
    return () => {
      reducedMotion.removeEventListener('change', configure);
      dispose();
    };
  }, []);

  useLayoutEffect(() => {
    const lenis = instance.current;
    lenis?.resize();
    // Cancel any remaining inertia when changing pages; honor direct anchor URLs.
    let target: HTMLElement | null = null;
    try {
      target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    } catch {
      // An invalid URL fragment falls back to the page top.
    }
    if (lenis) lenis.scrollTo(target ?? 0, { immediate: true, force: true });
    else if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
