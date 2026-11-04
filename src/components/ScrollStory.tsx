import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmartImage } from './SmartImage';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { position: 'left', alt: 'Začasni vizual za glasbo in koncerte KMŠ' },
  { position: 'center', alt: 'Začasni vizual za dogodke KMŠ' },
  { position: 'right', alt: 'Začasni vizual za študentsko skupnost KMŠ' },
] as const;

export default function ScrollStory() {
  const scope = useRef<HTMLElement>(null);

  // Revert pins before React removes their DOM nodes, including in StrictMode.
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;
    const media = gsap.matchMedia();
    media.add({
      desktop: '(min-width: 701px) and (min-height: 601px)',
      compact: '(max-width: 700px), (max-height: 600px)',
      reduced: '(prefers-reduced-motion: reduce)',
    }, context => {
      if (context.conditions?.reduced) return;
      const select = gsap.utils.selector(el);
      const stage = select('.story-stage')[0];
      const frames = select('.story-images');
      const word = select('.story-word');

      if (context.conditions?.desktop) {
        el.classList.add('story--pinned');
        const next = select('.story-next');
        gsap.set(next, { yPercent: 100 });
        gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            id: 'kms-story',
            trigger: stage,
            start: () => `top ${document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0}px`,
            end: () => `+=${Math.round(stage.clientHeight * 1.5)}`,
            pin: true,
            // Keep the stage in its reserved flow instead of switching to position:fixed.
            pinType: 'transform',
            pinSpacing: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
          .fromTo(frames, { scale: 0.9 }, { scale: 1.16, duration: 0.55 }, 0)
          .fromTo(word, { scale: 1, yPercent: 0 }, { scale: 0.72, yPercent: -65, duration: 0.55 }, 0)
          .to(word, { autoAlpha: 0, duration: 0.12 }, 0.48)
          .to(next, { yPercent: 0, duration: 0.4 }, 0.5)
          // Counter the curtain's travel so its heading is revealed in place.
          .fromTo(select('.story-next-inner'), { y: () => -stage.clientHeight }, { y: 0, duration: 0.4 }, 0.5)
          .to({}, { duration: 0.1 });
      } else {
        // Phones and short landscape screens keep native flow with no pin spacer.
        gsap.fromTo(frames, { scale: 1 }, {
          scale: 1.04,
          ease: 'none',
          scrollTrigger: { id: 'kms-story', trigger: select('.story-visual')[0], start: 'top bottom', end: 'bottom top', scrub: 0.3 },
        });
      }
      return () => el.classList.remove('story--pinned');
    }, el);

    // Fonts may resolve after mount; refresh measurements without waiting on lazy images.
    let mounted = true;
    document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh(); });
    return () => { mounted = false; media.revert(); };
  }, []);

  return (
    <section className="story" ref={scope} aria-label="Od skupnosti do skupnih doživetij">
      <div className="story-stage">
        <div className="story-visual">
          <div className="story-images">
            {images.map(image => (
              <div className={`story-frame story-frame-${image.position}`} key={image.position}>
                <SmartImage src={`/assets/hero/hero-${image.position}.jpg`} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="story-top"><span>OD IDEJ DO DOŽIVETIJ</span><span>KMŠ / MARIBOR</span></div>
          <div className="story-caption"><p className="story-word" aria-hidden="true">SKUPAJ.</p></div>
          <p className="story-image-note">ZAČASNI VIZUALI / FOTOGRAFIJE KMŠ SLEDIJO</p>
        </div>
        <div className="story-next">
          <div className="story-next-inner">
            <p className="eyebrow">02 / DOGODKI & PROJEKTI</p>
            <h2 id="story-next-title">DOŽIVI <em>MARIBOR.</em></h2>
            <p className="lead">Iz skupnih idej nastanejo doživetja. Odkrij dogodke in projekte KMŠ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
