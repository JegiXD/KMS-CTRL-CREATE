import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SmartImage } from '../components/SmartImage';
import { aboutContentCheckedAt, aboutSource, clubBodies, sectionLeads, team } from '../data/about';

export default function About() {
  return (
    <>
      <section className="page-hero has-photo about-hero" aria-labelledby="about-title">
        <p className="eyebrow">01 / O NAS</p>
        <h1 id="about-title">LJUDJE.<br /><em>IDEJE. KMŠ.</em></h1>
        <p className="lead">Skupnost mladih, ki povezuje študentski Maribor in odpira prostor za znanje, ustvarjanje in skupna doživetja.</p>
        <nav className="about-jump-links" aria-label="Vsebina strani O nas">
          <a className="text-link" href="#poslanstvo">POSLANSTVO ↓</a>
          <a className="text-link" href="#ekipa">EKIPA ↓</a>
          <a className="text-link" href="#organi">ORGANI DRUŠTVA ↓</a>
        </nav>
        <EditorialPhoto image="cantusTogether" className="page-hero-photo" />
      </section>
      <section id="poslanstvo" className="section about-mission" aria-labelledby="mission-title">
        <EditorialPhoto image="dobrodelnost" />
        <Reveal>
          <p className="eyebrow">POVEZUJE NAS ISTI NAMEN</p>
          <h2 id="mission-title">VEČ PROSTORA<br /><em>ZA MLADE.</em></h2>
          <p className="lead">KMŠ z dogodki in obštudijskimi dejavnostmi bogati vsakdan mladih v Mariboru. Spodbuja razvijanje talentov, pridobivanje izkušenj in osebno rast.</p>
        </Reveal>
        <div className="about-principles">
          <article><span className="eyebrow">01 / POVEZOVANJE</span><h3>Najdi svojo skupnost.</h3><p>Prostor za druženje, nova poznanstva in sodelovanje pri skupnih idejah.</p></article>
          <article><span className="eyebrow">02 / ZNANJE</span><h3>Preizkusi nekaj novega.</h3><p>Priložnosti za učenje in ustvarjanje tudi zunaj predavalnic.</p></article>
          <article><span className="eyebrow">03 / SOLIDARNOST</span><h3>Prispevaj k skupnemu.</h3><p>Povezovanje skozi pomoč in projekte za skupnost.</p></article>
        </div>
        <Link className="pill" to="/priloznosti">ODKRIJ MOŽNOSTI SODELOVANJA <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </section>
      <section id="ekipa" className="section white-section about-team" aria-labelledby="team-title">
        <div className="section-head">
          <div><p className="eyebrow">LJUDJE ZA SKUPNIMI IDEJAMI</p><h2 id="team-title">SPOZNAJ <em>EKIPO.</em></h2></div>
          <a className="text-link" href={aboutSource} target="_blank" rel="noopener noreferrer">URADNA PREDSTAVITEV ↗</a>
        </div>
        <p className="about-source-note">Sestava po uradni strani KMŠ, pregledani <time dateTime={aboutContentCheckedAt}>{new Date(aboutContentCheckedAt).toLocaleDateString('sl-SI', { timeZone: 'UTC' })}</time>.</p>
        <div className="team-grid">
          {team.map(person => (
            <article className="team-card about-person" key={person.id} aria-labelledby={`person-${person.id}`}>
              {person.photo ? <SmartImage src={person.photo} webpSrc={person.photoWebp} alt={person.photoKind === 'illustration' ? `Uradna profilna ilustracija: ${person.name} (ni portret)` : `Portret: ${person.name}`} width={300} height={300} /> : (
                <div className="person-initials" aria-hidden="true"><span>{person.name.split(' ').map(part => part[0]).join('')}</span><small>KMŠ / EKIPA</small></div>
              )}
              <div className="person-details"><h3 id={`person-${person.id}`}>{person.name}</h3><p>{person.role}</p>{person.photoKind === 'illustration' && <p className="person-photo-note">Profilna ilustracija z uradne strani KMŠ</p>}{person.email && <a className="person-email" href={`mailto:${person.email}`}>{person.email}</a>}{person.additionalRole && <p className="person-additional">{person.additionalRole}</p>}</div>
            </article>
          ))}
        </div>
        <div className="about-sections" aria-labelledby="sections-title">
          <h3 id="sections-title">Področja in sekcije</h3>
          <div className="section-leads">{sectionLeads.map(lead => (
            <article className="section-lead" key={lead.area}>
              <SmartImage src={lead.image.src} webpSrc={lead.image.webpSrc} alt={`Portret: ${lead.name}`} width={300} height={300} />
              <div><h4>{lead.name}</h4><p>{lead.area}</p></div>
            </article>
          ))}</div>
        </div>
      </section>
      <section id="organi" className="section about-bodies" aria-labelledby="bodies-title">
        <p className="eyebrow">KAKO DELUJE DRUŠTVO</p>
        <h2 id="bodies-title">SKUPAJ <em>ODLOČAMO.</em></h2>
        <div className="about-assembly"><h3>Skupščina</h3><p>Najvišji organ društva sestavljajo vsi redni člani. Skupščina voli organe, ki skrbijo za delovanje in nadzor društva.</p></div>
        <div className="body-list">
          {clubBodies.map((body, index) => (
            <article className="body-card" key={body.id} aria-labelledby={body.id}>
              <div className="body-description"><p className="eyebrow">0{index + 1} / ORGAN DRUŠTVA</p><h3 id={body.id}>{body.title}</h3><p>{body.description}</p></div>
              <ul className="body-members">{body.members.map(member => <li key={member.name}><strong>{member.name}</strong>{member.role && <span>{member.role}</span>}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="helper">Vir imen in funkcij: <a href={aboutSource} target="_blank" rel="noopener noreferrer">uradna stran KMŠ – O nas ↗</a>. Podatki odražajo stanje javne objave ob pregledu.</p>
      </section>
    </>
  );
}
