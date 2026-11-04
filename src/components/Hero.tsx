import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { membershipUrl } from '../data/content';
import { useGsapContext } from '../hooks/useGsapContext';
import { heroAnimations } from '../animations/heroAnimations';
import { DoodleLayer } from './editorial/Graphics';
import { EditorialPhoto } from './editorial/EditorialPhoto';

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useGsapContext(root, ({ reduced }) => { if (!reduced && root.current) heroAnimations(root.current); });
  return <section className="editorial-hero" ref={root} aria-labelledby="hero-title">
    <div className="editorial-masthead"><span>KLUB MARIBORSKIH ŠTUDENTOV</span><span>ZA LJUDI. ZA IDEJE. ZA MARIBOR.</span></div>
    <div className="hero-composition">
      <h1 id="hero-title" className="editorial-hero-title"><span className="hero-line-mask"><span data-hero-line>MARIBOR.</span></span><span className="hero-line-mask"><span data-hero-line>MLADI.</span></span><span className="hero-line-mask hero-line-last"><span data-hero-line>BREZ MEJA.</span></span></h1>
      <div className="hero-dominant" data-hero-main><EditorialPhoto image="ftrgatev" priority /></div>
      <div className="hero-secondary hero-secondary-one" data-hero-photo><EditorialPhoto image="cantus" caption={false} /></div>
      <div className="hero-secondary hero-secondary-two" data-hero-photo><EditorialPhoto image="oder" caption={false} /></div>
      <span className="editorial-sticker hero-sticker" data-hero-decor>NE SAMO KLUB.<br />TVOJA SKUPNOST.</span>
      <DoodleLayer className="hero-doodle" />
      <span className="hero-side-label" data-hero-decor>GLASBA / KULTURA / SKUPNOST</span>
    </div>
    <div className="hero-editorial-bottom"><p data-hero-copy>Za večere, ki nas povežejo.<br />Za ideje, ki nas premaknejo.<br />Študentski Maribor ustvarjamo skupaj.</p><a data-hero-copy className="pill" href={membershipUrl} target="_blank" rel="noopener noreferrer">POSTANI DEL KMŠ <ArrowUpRight size={19} aria-hidden="true" /></a><a className="hero-scroll" href="#napovednik" data-hero-copy><span>ZGODBA SE NADALJUJE</span><ArrowDown size={20} aria-hidden="true" /></a></div>
  </section>;
}
