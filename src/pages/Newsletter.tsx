import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import { Link } from 'react-router-dom';
import { contactSource, socials } from '../data/contact';

export default function Newsletter() {
  return (
    <>
      <section className="page-hero has-photo newsletter-hero" aria-labelledby="newsletter-title">
        <p className="eyebrow">07 / E-NOVICE</p><h1 id="newsletter-title">OSTANI<br /><em>NA TEKOČEM.</em></h1>
        <p className="lead">Dogodki, projekti in priložnosti KMŠ. Prijava na e-novice v tem prototipu še ni omogočena.</p>
        <EditorialPhoto image="standup" className="page-hero-photo" />
      </section>
      <section className="section newsletter-layout" aria-labelledby="newsletter-status-title">
        <div><p className="eyebrow">STANJE PRIJAV V PROTOTIPU</p><h2 id="newsletter-status-title">PRIJAVA TUKAJ<br /><em>ŠE NI AKTIVNA.</em></h2><p id="newsletter-status" className="lead">Spodaj je samo predogled obrazca. E-poštnih naslovov ne zbiramo, pošiljamo ali shranjujemo.</p><p>Ko bo prijava omogočena, bo jasno navedeno, kdo obdeluje podatke, kako potrdiš prijavo in kako se odjaviš.</p></div>
        <div className="newsletter-preview">
          <fieldset className="newsletter-form" disabled aria-describedby="newsletter-status"><legend>Predogled prijave · ni aktiven</legend><label>E-pošta<input type="email" placeholder="ime@primer.si" autoComplete="off" /></label><button type="button" className="pill">PRIJAVA ŠE NI NA VOLJO</button></fieldset>
          <p className="helper">Prijava v tem prototipu ni mogoča. Za sledenje novostim uporabi uradne kanale spodaj.</p>
        </div>
      </section>
      <section className="section white-section newsletter-channels"><p className="eyebrow">DO TAKRAT SMO TUKAJ</p><h2>POVEŽI SE <em>S KMŠ.</em></h2><div className="participation-actions"><a className="pill" href={contactSource} target="_blank" rel="noopener noreferrer">URADNA STRAN KMŠ ↗</a><a className="text-link" href={socials.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a><a className="text-link" href={socials.facebook} target="_blank" rel="noopener noreferrer">FACEBOOK ↗</a><Link className="text-link" to="/kontakt">KONTAKT ↗</Link></div></section>
    </>
  );
}
