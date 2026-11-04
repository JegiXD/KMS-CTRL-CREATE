import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import gsap from 'gsap';
import { requestScrollRefresh, cancelScrollRefresh } from '../animations/refreshScheduler';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
type Conditions = { reduced: boolean; desktop: boolean; motion: boolean };

/** Scoped, responsive and Strict Mode safe. A media change reverts before rebuilding. */
export function useGsapContext<T extends HTMLElement>(
  scope: RefObject<T | null>,
  build: (conditions: Conditions) => void,
  dependencies: DependencyList = [],
) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add({ reduced: '(prefers-reduced-motion: reduce)', motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 1280px) and (min-height: 760px)' }, match => {
        build(match.conditions as Conditions);
      });
    }, scope);
    let disposed = false;
    const owner = {};
    const refresh = () => { if (!disposed) requestScrollRefresh(owner); };
    const images = Array.from(scope.current?.querySelectorAll('img') ?? []).filter(img => !img.complete);
    images.forEach(img => img.addEventListener('load', refresh, { once: true }));
    document.fonts.ready.then(() => { if (!disposed) refresh(); });
    return () => {
      disposed = true;
      cancelScrollRefresh(owner);
      images.forEach(img => img.removeEventListener('load', refresh));
      media.revert();
      context.revert();
    };
    // The caller declares values that rebuild this scoped animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope, ...dependencies]);
}
