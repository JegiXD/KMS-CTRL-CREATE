import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { eventCategories, eventContentCheckedAt, events } from '../data/content';
import type { EventCategory } from '../data/content';

export default function Events() {
  const [category, setCategory] = useState<EventCategory>('all');
  const allFilter = useRef<HTMLButtonElement>(null);
  const visibleEvents = events.filter(event => category === 'all' || event.category === category);
  const activeLabel = eventCategories.find(item => item.id === category)!.label;

  return (
    <>
      <section className="page-hero has-photo events-hero" aria-labelledby="events-title">
        <p className="eyebrow">02 / DOGODKI & PROJEKTI</p>
        <h1 id="events-title">NAJDI SVOJE<br /><em>DOGAJANJE.</em></h1>
        <p className="lead">Od glasbe in ustvarjanja do humorja in dobrodelnosti. Spoznaj projekte, s katerimi KMŠ povezuje študentski Maribor.</p>
        <a className="text-link" href="#projects">RAZIŠČI PROJEKTE ↓</a>
        <EditorialPhoto image="ftrgatevCrowd" className="page-hero-photo" />
      </section>
      <section id="projects" className="section projects-section" aria-labelledby="projects-title">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">IZBERI, KAR TE ZANIMA</p>
            <h2 id="projects-title">DOGODKI <em>PO TVOJE.</em></h2>
          </div>
          <p className="projects-note">To je pregled projektov, ne koledar prihodnjih izvedb. Za aktualne termine in prijave preveri posamezno uradno stran KMŠ.</p>
        </div>
        <div className="filters project-filters" role="group" aria-label="Kategorije projektov">
          {eventCategories.map(item => {
            const count = item.id === 'all' ? events.length : events.filter(event => event.category === item.id).length;
            return (
              <button
                key={item.id}
                ref={item.id === 'all' ? allFilter : undefined}
                type="button"
                className={category === item.id ? 'active' : ''}
                aria-pressed={category === item.id}
                aria-controls="project-results"
                onClick={() => setCategory(item.id)}
              >
                {item.label} <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="projects-status">
          <p role="status" aria-live="polite" aria-atomic="true">{activeLabel} · Prikazano {visibleEvents.length} od {events.length}</p>
          {category !== 'all' && <button type="button" className="text-link" onClick={() => { setCategory('all'); allFilter.current?.focus(); }}>POKAŽI VSE PROJEKTE ↗</button>}
        </div>
        <p className="helper projects-image-note">Fotografije so iz uradnih predstavitev projektov KMŠ in prikazujejo pretekle izvedbe.</p>
        <div className="events-grid projects-grid" id="project-results">
          {visibleEvents.map(event => (
            <article className="event-card project-card" key={event.slug} aria-labelledby={`project-${event.slug}`}>
              <SmartImage src={event.photo} webpSrc={event.photoWebp} alt={event.photoAlt} />
              <div className="project-card-content">
                <p className="photo-credit">Foto / vir: <a href={event.photoSource} target="_blank" rel="noopener noreferrer">{event.photoCredit} ↗</a></p>
                <div className="event-meta"><span>{event.tag}</span></div>
                <h3 id={`project-${event.slug}`}>{event.title}</h3>
                <p>{event.description}</p>
                <a href={event.url} className="text-link" target="_blank" rel="noopener noreferrer" aria-label={`${event.title} — uradna predstavitev KMŠ (odpre se v novem zavihku)`}>
                  URADNA PREDSTAVITEV <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="helper">Opisi povzeti po uradnih predstavitvah KMŠ · viri pregledani <time dateTime={eventContentCheckedAt}>{new Date(eventContentCheckedAt).toLocaleDateString('sl-SI', { timeZone: 'UTC' })}</time>.</p>
      </section>
    </>
  );
}
