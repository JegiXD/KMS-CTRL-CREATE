import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import EventStatistics from '../components/EventStatistics';
import ScrollStory from '../components/ScrollStory';
import { EditorialBackground, DoodleLayer } from '../components/editorial/Graphics';
import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import WaveGallery from '../components/editorial/WaveGallery';
import { events, membershipUrl, news } from '../data/content';
import { useGsapContext } from '../hooks/useGsapContext';
import { revealEditorial } from '../animations/textReveals';

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  useGsapContext(root, ({ reduced }) => { if (!reduced && root.current) revealEditorial(root.current); });
  return <div className="editorial-home" ref={root}>
    <EditorialBackground />
    <Hero />
    <div id="napovednik"><EventStatistics /></div>
    <WaveGallery id="prva-zgodba" images={['cantusStage', 'standup']} label="LJUDJE. IDEJE." />
    <section id="intro" className="section editorial-intro" aria-labelledby="intro-title">
      <div className="intro-copy" data-editorial-reveal><p className="eyebrow">01 / TO JE KMŠ</p><h2 id="intro-title">NISMO<br />SAMO <em>KLUB.</em></h2><p className="lead">Smo ljudje, ki iz idej naredimo doživetja. Povezujemo študente, odpiramo prostor za mlade in skupaj ustvarjamo Maribor.</p><Link className="text-link" to="/o-nas">SPOZNAJ LJUDI ZA ZGODBO <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
      <div className="intro-photography" data-editorial-reveal><EditorialPhoto image="dobrodelnost" /><span className="editorial-sticker">MESTO JE BOLJŠE,<br />KO SMO SKUPAJ.</span><DoodleLayer /></div>
    </section>
    <section className="section editorial-projects" aria-labelledby="projects-home-title">
      <div className="section-head" data-editorial-reveal><div><p className="eyebrow">02 / IZ IDEJE V DOGAJANJE</p><h2 id="projects-home-title">USTVARJAMO<br /><em>ZGODBE.</em></h2></div><p className="editorial-aside">Mladi na odru. Ideje na mizi.<br />Prostor za tvoj naslednji korak.</p></div>
      <div className="project-spread"><article className="spread-feature" data-editorial-reveal><EditorialPhoto image="oder" /><div className="spread-caption"><span className="eyebrow">01 / GLASBA</span><h3>KMŠ ODER</h3><p>Prostor za mlade in manj poznane glasbenike na Festivalu Lent.</p><a className="text-link" href={events.find(e => e.slug === 'oder')!.url} target="_blank" rel="noopener noreferrer">NA ODER ↗</a></div></article><article className="spread-secondary" data-editorial-reveal><span className="vertical-label" aria-hidden="true">ZUNAJ PREDAVALNIC</span><EditorialPhoto image="kreativa" /><h3>IDEJE DOBIJO OBLIKO.</h3><p>KMŠ Kreativa odpira prostor znanju, ustvarjanju in srečevanju somišljenikov.</p><a className="text-link" href={events.find(e => e.slug === 'kreativa')!.url} target="_blank" rel="noopener noreferrer">RAZIŠČI KREATIVO ↗</a></article></div>
    </section>
    <WaveGallery id="ritem" images={['kreativa', 'jazz']} label="UJEMI RITEM." />
    <section className="section editorial-events" aria-labelledby="home-events-title">
      <div className="section-head" data-editorial-reveal><div><p className="eyebrow">03 / DOGODKI & PROJEKTI</p><h2 id="home-events-title">TUKAJ SE<br /><em>DOGAJA.</em></h2></div><Link to="/dogodki" className="pill">VSI PROJEKTI <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      <p className="editorial-aside">Spoznaj projekte KMŠ. Aktualne termine in prijave preveri na uradnih straneh dogodkov.</p>
      <div className="editorial-event-index">{events.map((event, index) => <a href={event.url} target="_blank" rel="noopener noreferrer" key={event.slug}><span className="index-number">0{index + 1}</span><h3>{event.title}</h3><span className="index-tag">{event.tag}</span><ArrowUpRight aria-hidden="true" /></a>)}</div>
    </section>
    <ScrollStory />
    <section className="section editorial-membership" aria-labelledby="home-membership-title"><div data-editorial-reveal><p className="eyebrow">04 / TVOJ PROSTOR JE TUKAJ</p><h2 id="home-membership-title">POSTANI<br />DEL <span>ZGODBE.</span></h2><p className="lead">Nova poznanstva. Skupne izkušnje. Prostor za tvoje ideje. Pridruži se Klubu mariborskih študentov.</p><a className="pill pill-paper" href={membershipUrl} target="_blank" rel="noopener noreferrer">ODPRI URADNI OBRAZEC <ArrowUpRight size={18} aria-hidden="true" /></a><Link to="/clanstvo" className="text-link">KAJ MI PRINESE ČLANSTVO? ↗</Link></div><div className="membership-collage"><EditorialPhoto image="cantusTogether" /><span className="editorial-sticker">TI + MI<br />= KMŠ</span><DoodleLayer /></div></section>
    <section className="section editorial-opportunities" aria-labelledby="home-opportunities-title"><div data-editorial-reveal><p className="eyebrow">05 / OD MISLI DO AKCIJE</p><h2 id="home-opportunities-title">IMAŠ IDEJO?<br /><em>PRINESI JO.</em></h2><p className="lead">Aktivizem, predlaganje idej ali sodelovanje pri projektih. Izberi svojo pot in jo dogovori z ekipo.</p><Link className="pill" to="/priloznosti">NAJDI SVOJO VLOGO <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="opportunity-poster" aria-hidden="true"><span>RAZMIŠLJAJ.</span><span>USTVARJAJ.</span><span>SODELUJ. ↗</span><small>TVOJA IDEJA IMA PROSTOR.</small></div></section>
    <section className="section editorial-news" aria-labelledby="home-news-title"><div className="section-head" data-editorial-reveal><div><p className="eyebrow">06 / IZ KLUBA</p><h2 id="home-news-title">NA <em>TEKOČEM.</em></h2></div><Link to="/novice" className="text-link">VSE NOVICE ↗</Link></div><div className="news-list">{news.map(n => <a href={n.url} target="_blank" rel="noopener noreferrer" key={n.title}><span>{n.date}</span><strong>{n.title}</strong><ArrowUpRight aria-hidden="true" /></a>)}</div><p className="helper">Arhivske objave iz septembra 2026. Za aktualne informacije spremljaj uradne kanale KMŠ.</p></section>
    <section className="section editorial-newsletter" aria-labelledby="home-newsletter-title"><span className="editorial-sticker">SE SLIŠIMO?</span><p className="eyebrow">07 / OSTAJAJMO POVEZANI</p><h2 id="home-newsletter-title">DOBRE ZGODBE.<br /><em>TUDI V NABIRALNIKU.</em></h2><p className="lead">E-novice so v pripravi. V tem prototipu prijav še ne zbiramo. Do takrat spremljaj uradne kanale KMŠ.</p><Link to="/newsletter" className="pill">E-NOVICE & URADNI KANALI <ArrowUpRight size={18} aria-hidden="true" /></Link></section>
  </div>;
}
