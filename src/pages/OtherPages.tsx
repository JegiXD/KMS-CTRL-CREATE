export { default as Contact } from './Contact';
export { default as Newsletter } from './Newsletter';
export { default as Membership } from './Membership';
export { default as Opportunities } from './Opportunities';
export { default as About } from './About';
export { default as Events } from './Events';
import { ArrowUpRight } from 'lucide-react';
import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import { news } from '../data/content';

export function News() {
  return <><section className="page-hero has-photo" aria-labelledby="news-title"><p className="eyebrow">03 / NOVICE IZ KLUBA</p><h1 id="news-title">BESEDA<br /><em>JE NAŠA.</em></h1><p className="lead">Pomembne informacije, obvestila in utrinki iz mariborske študentske skupnosti.</p><EditorialPhoto image="pisarna" className="page-hero-photo" /></section><section className="section"><div className="news-intro-spread"><EditorialPhoto image="kreativa" /><div><p className="eyebrow">POVEZANI TUDI MED DOGODKI</p><h2>KAJ JE<br /><em>NOVEGA?</em></h2><p className="lead">Spremljaj uradna obvestila KMŠ in ostani del pogovora.</p></div></div><div className="news-list">{news.map(n => <a key={n.title} href={n.url} target="_blank" rel="noopener noreferrer"><span>{n.date}</span><strong>{n.title}</strong><ArrowUpRight aria-hidden="true" /></a>)}</div><p className="helper">Arhivske objave iz septembra 2026. Povezave odprejo izvirne članke na uradni strani KMŠ.</p></section></>;
}
