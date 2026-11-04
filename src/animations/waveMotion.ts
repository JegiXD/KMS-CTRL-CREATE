import gsap from 'gsap';

/** A cubic Bézier ribbon measured in its own container, never in viewport pixels. */
export function wavePath(width: number, height: number, inset: number, compact: boolean) {
  const left = compact ? width * 0.4 : inset;
  const right = compact ? width * 0.6 : width - inset;
  const center = width / 2;
  // Compact layouts reserve a quiet heading band above the moving photography.
  const top = compact ? Math.min(height * 0.6, 270) : 0;
  const range = compact ? Math.max(40, height - top - 100) : height;
  const y = (progress: number) => top + range * progress;
  return `M ${left} ${y(0.22)} C ${left} ${y(0.02)}, ${right} ${y(0.08)}, ${right} ${y(0.32)} S ${left} ${y(0.49)}, ${left} ${y(0.62)} S ${right} ${y(0.95)}, ${right} ${y(0.82)} C ${right} ${y(0.68)}, ${center} ${y(0.78)}, ${center} ${y(0.84)}`;
}

export function animateWave(root: HTMLElement, stage: HTMLElement, pinned: boolean, compact: boolean) {
  const photos = gsap.utils.toArray<HTMLElement>('[data-wave-photo]', stage);
  const path = stage.querySelector<SVGPathElement>('[data-wave-path]');
  const svg = stage.querySelector<SVGSVGElement>('svg');
  const measure = () => {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    const inset = Math.min(width * 0.38, (photos[0]?.offsetWidth ?? 240) / 2 + 24);
    const curve = wavePath(width, height, inset, compact);
    svg?.setAttribute('viewBox', `0 0 ${width} ${height}`);
    path?.setAttribute('d', curve);
    return curve;
  };
  measure();
  gsap.set(photos, { xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' });
  const timeline = gsap.timeline({ scrollTrigger: {
    id: pinned ? 'kms-gallery-wave' : 'kms-connector-wave',
    trigger: pinned ? stage : root,
    start: pinned ? () => `top ${document.querySelector('header')?.getBoundingClientRect().height ?? 88}px` : 'top 90%',
    end: pinned ? () => `+=${Math.round(window.innerHeight * 1.15)}` : 'bottom 12%',
    scrub: pinned ? 0.25 : 0.15,
    pin: pinned,
    anticipatePin: pinned ? 1 : 0,
    invalidateOnRefresh: true,
    onRefreshInit: measure,
  } });
  photos.forEach((photo, index) => {
    const start = index * 0.42;
    timeline.fromTo(photo, { opacity: 0, scale: 0.92, rotation: (index % 2 ? 1 : -1) * (compact ? 3 : 7) }, {
      opacity: 1, scale: 1, duration: 0.1, ease: 'none',
    }, start)
      .fromTo(photo, { motionPath: { path: path ?? measure(), start: 0, end: 0 } }, {
        motionPath: { path: path ?? measure(), start: 0, end: 1, autoRotate: false },
        rotation: (index % 2 ? -1 : 1) * (compact ? 2 : 6), duration: 0.8, ease: 'none',
      }, start);
    // A visible final frame connects the gallery to the next section.
    if (index < photos.length - 1) {
      timeline.to(photo, { opacity: 0, duration: 0.14, ease: 'none' }, start + 0.62);
    }
  });
  return timeline;
}
