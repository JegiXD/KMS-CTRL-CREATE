import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clubStatistics } from '../data/statistics';

gsap.registerPlugin(ScrollTrigger);

export default function EventStatistics() {
  const section = useRef<HTMLElement>(null);
  const played = useRef(false);

  useLayoutEffect(() => {
    if (!section.current) return;
    const counters = Array.from(section.current.querySelectorAll<HTMLElement>('[data-count]'));
    const finish = () => counters.forEach(counter => { counter.textContent = counter.dataset.count!; });
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (played.current) return;
      const timeline = gsap.timeline({
        onStart: () => { played.current = true; },
        scrollTrigger: { trigger: section.current, start: 'top 85%', once: true },
      });
      counters.forEach((counter, index) => {
        timeline.fromTo(counter, { innerText: 0 }, {
          innerText: Number(counter.dataset.count),
          duration: 1.6,
          ease: 'power2.out',
          snap: { innerText: 1 },
        }, index * 0.12);
      });
      return finish;
    }, section.current);
    return () => { media.revert(); finish(); };
  }, []);

  return (
    <section className="section event-statistics" ref={section} aria-labelledby="statistics-title">
      <h2 id="statistics-title">Napovednik <em>dogodkov</em></h2>
      <dl className="statistics-grid">
        {clubStatistics.map(statistic => (
          <div className="statistic" key={statistic.label}>
            <dt>{statistic.label}</dt>
            <dd><span data-count={statistic.value} aria-hidden="true">{statistic.value}</span><span className="sr-only">{statistic.value}</span></dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
