import gsap from 'gsap';

export function heroAnimations(root: HTMLElement) {
  const query = gsap.utils.selector(root);
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  timeline.from(query('[data-hero-line]'), { yPercent: 105, rotate: 1.5, duration: 0.5, stagger: 0.055 })
    // Keep the critical image painted and all links visible from the first frame.
    .from(query('[data-hero-main]'), { scale: 1.06, duration: 0.65 }, 0.02)
    .from(query('[data-hero-photo]'), { y: 24, x: -12, opacity: 0, rotate: -3, duration: 0.45, stagger: 0.055 }, 0.12)
    .from(query('[data-hero-decor]'), { scale: 0.94, opacity: 0, duration: 0.32, stagger: 0.05 }, 0.22)
    .from(query('p[data-hero-copy]'), { y: 10, duration: 0.35 }, 0.18);
  return timeline;
}
