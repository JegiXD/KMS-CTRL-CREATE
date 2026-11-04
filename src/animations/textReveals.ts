import gsap from 'gsap';

export function revealEditorial(root: HTMLElement) {
  const elements = root.matches('[data-editorial-reveal]')
    ? [root]
    : Array.from(root.querySelectorAll<HTMLElement>('[data-editorial-reveal]'));
  elements.forEach(element => {
    const interactive = element.matches('a,button,input,textarea,iframe') || !!element.querySelector('a,button,input,textarea,iframe');
    gsap.from(element, {
      y: interactive ? 12 : 20,
      opacity: interactive ? 1 : 0,
      duration: 0.45,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 94%', once: true, invalidateOnRefresh: true },
    });
  });
}
