export { default as Contact } from './Contact';
export { default as Newsletter } from './Newsletter';
export { default as Membership } from './Membership';
export { default as Opportunities } from './Opportunities';
export { default as About } from './About';
export { default as Events } from './Events';
import {ArrowUpRight} from 'lucide-react';import {news} from '../data/content';
function Heading({eyebrow,title,desc}:{eyebrow:string;title:string;desc:string}){return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{desc}</p></section>}
export function News(){return <><Heading eyebrow="03 / NOVICE" title="AKTUALNO PRI KMŠ." desc="Pomembne informacije za naše člane in mariborsko študentsko skupnost."/><section className="section"><div className="news-list">{news.map(n=><a key={n.title} href={n.url} target="_blank" rel="noreferrer"><span>{n.date}</span><strong>{n.title}</strong><ArrowUpRight/></a>)}</div><p className="helper">Demo prikaz; pred oddajo poveži objave z dejanskimi URL-ji posameznih novic.</p></section></>}
