import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import LocationSection from '../components/editorial/LocationSection';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { clubContact, contactCheckedAt, contactSource, socials } from '../data/contact';
import { buildContactMailto } from '../utils/contact';

export default function Contact() {
  return (
    <>
      <section className="page-hero has-photo contact-hero" aria-labelledby="contact-title">
        <p className="eyebrow">06 / KONTAKT</p><h1 id="contact-title">ZAČNIMO<br /><em>POGOVOR.</em></h1>
        <p className="lead">Za vprašanja, ideje in sodelovanje. Poišči nas v Mariboru, pokliči ali pripravi e-poštno sporočilo.</p>
        <a className="pill" href={`mailto:${clubContact.email}`}>ODPRI E-POŠTO <Mail size={18} aria-hidden="true" /></a>
        <EditorialPhoto image="pisarna" className="page-hero-photo" />
      </section>
      <section className="section contact-grid contact-details" aria-labelledby="contact-details-title">
        <div>
          <p className="eyebrow">KMŠ / MARIBOR</p><h2 id="contact-details-title">OSTANIMO<br /><em>POVEZANI.</em></h2>
          <address className="contact-address">
            <p><MapPin size={18} aria-hidden="true" /><span>{clubContact.address}<br />{clubContact.city}</span></p>
            <p><Mail size={18} aria-hidden="true" /><a href={`mailto:${clubContact.email}`}>{clubContact.email}</a></p>
            <p><Phone size={18} aria-hidden="true" /><a href={clubContact.phoneHref}>{clubContact.phone}</a></p>
            <p className="helper">{clubContact.phoneContact}</p>
          </address>
          <div className="contact-hours"><h3><Clock size={20} aria-hidden="true" /> Uradne ure</h3><dl>{clubContact.officeHours.map(row => <div key={row.days}><dt>{row.days}</dt><dd>{row.hours}</dd></div>)}</dl><p className="helper">Po objavi na <a href={contactSource} target="_blank" rel="noopener noreferrer">uradni strani KMŠ ↗</a>, pregledani <time dateTime={contactCheckedAt}>{new Date(contactCheckedAt).toLocaleDateString('sl-SI', { timeZone: 'UTC' })}</time>. Pred obiskom preveri morebitne spremembe pri klubu.</p></div>
          <div className="contact-socials" aria-label="Uradna družbena omrežja"><a href={socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" /> Instagram ↗</a><a href={socials.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} aria-hidden="true" /> Facebook ↗</a><a href={socials.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={18} aria-hidden="true" /> YouTube ↗</a></div>
        </div>
        <div className="contact-composer">
          <p className="eyebrow">OSNUTEK ZA TVOJ E-POŠTNI PROGRAM</p><h3>Pripravi sporočilo.</h3>
          <p id="contact-mailto-note" className="helper">Ta obrazec odpre e-poštni program s pripravljenim sporočilom. Ne pošlje ga samodejno in ga ne shrani na strežnik. Pošiljanje potrdiš v svojem programu.</p>
          <form aria-describedby="contact-mailto-note" onSubmit={event => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            window.location.href = buildContactMailto({ name: String(data.get('name') ?? ''), email: String(data.get('email') ?? ''), subject: String(data.get('subject') ?? ''), message: String(data.get('message') ?? '') });
          }}>
            <label>Ime<input name="name" autoComplete="name" required /></label>
            <label>E-pošta<input name="email" type="email" autoComplete="email" required /></label>
            <label>Zadeva<input name="subject" required /></label>
            <label>Sporočilo<textarea name="message" rows={6} required /></label>
            <button type="submit" className="pill">ODPRI E-POŠTNI PROGRAM <Mail size={18} aria-hidden="true" /></button>
          </form>
          <p className="helper">Če nimaš nastavljenega e-poštnega programa, naslov <strong>{clubContact.email}</strong> prekopiraj v svojo spletno pošto.</p>
        </div>
      </section>
      <LocationSection />
      <section className="section white-section contact-newsletter"><p className="eyebrow">NOVICE KMŠ</p><h2>SPREMLJAJ <em>DOGAJANJE.</em></h2><p className="lead">Novosti najdeš na naših uradnih kanalih. Preveri tudi stanje prijav na e-novice.</p><Link className="pill" to="/newsletter">E-NOVICE / STANJE PRIJAV ↗</Link></section>
    </>
  );
}
