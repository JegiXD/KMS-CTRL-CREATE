import { useRef } from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { revealEditorial } from '../../animations/textReveals';
import { clubContact, contactCheckedAt, contactSource } from '../../data/contact';
import { useGsapContext } from '../../hooks/useGsapContext';
import './LocationSection.css';

const destination = `Pisarna, ${clubContact.address}, ${clubContact.city}, Slovenija`;
const mapUrl = `https://www.google.com/maps?${new URLSearchParams({ q: destination, z: '16', output: 'embed', hl: 'sl' })}`;
const directionsUrl = `https://www.google.com/maps/dir/?${new URLSearchParams({ api: '1', destination })}`;

export default function LocationSection() {
  const root = useRef<HTMLElement>(null);
  useGsapContext(root, ({ reduced }) => {
    if (!reduced && root.current) revealEditorial(root.current);
  });

  return (
    <section id="lokacija" className="section location-section" ref={root} aria-labelledby="location-title">
      <div className="location-heading" data-editorial-reveal>
        <p className="eyebrow">KMŠ / V ŽIVO</p>
        <h2 id="location-title">VIDIMO SE<br /><em>V PISARNI.</em></h2>
      </div>
      <div className="location-layout">
        <div className="location-info" data-editorial-reveal>
          <address className="location-address">
            <MapPin size={26} aria-hidden="true" />
            <div><strong>Pisarna</strong><span>{clubContact.address}<br />{clubContact.city}</span></div>
          </address>
          <a className="pill location-directions" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            Prikaži pot <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <div className="location-hours">
            <h3><Clock size={19} aria-hidden="true" /> Uradne ure KMŠ</h3>
            <dl>{clubContact.officeHours.map(row => <div key={row.days}><dt>{row.days}</dt><dd>{row.hours}</dd></div>)}</dl>
            <p className="helper">Uradne ure kluba po <a href={contactSource} target="_blank" rel="noopener noreferrer">objavi KMŠ ↗</a>, preverjeni <time dateTime={contactCheckedAt}>{new Date(contactCheckedAt).toLocaleDateString('sl-SI', { timeZone: 'UTC' })}</time>. Pred obiskom preveri morebitne spremembe. To ni urnik lokala Pisarna.</p>
          </div>
        </div>
        <div className="location-map-panel" data-editorial-reveal>
          <div className="location-map-label"><span>MARIBOR / VETRINJSKA 30</span><MapPin size={16} aria-hidden="true" /></div>
          <iframe
            className="location-map"
            src={mapUrl}
            title="Google Maps: Pisarna, Vetrinjska ulica 30, Maribor"
            width="800"
            height="560"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <p className="location-map-caption">Pisarna / Maribor <span>Interaktivni zemljevid · Google Maps</span></p>
        </div>
      </div>
    </section>
  );
}
