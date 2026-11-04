import { Link } from 'react-router-dom';
import { MembershipLink } from '../components/MembershipLink';
import { membershipBenefits, membershipInfoUrl, participationCheckedAt } from '../data/participation';

export default function Membership() {
  return (
    <>
      <section className="page-hero participation-hero" aria-labelledby="membership-title">
        <p className="eyebrow">04 / ČLANSTVO</p>
        <h1 id="membership-title">TVOJE MESTO<br /><em>JE MED NAMI.</em></h1>
        <p className="lead">Za študente in dijake, ki želijo nova poznanstva, izkušnje in skupna doživetja. Postani del KMŠ.</p>
        <div className="participation-actions"><MembershipLink /><a className="text-link" href="#ugodnosti">KAJ MI PRINESE ČLANSTVO? ↓</a></div>
        <p className="helper">Odpre se uradni obrazec na studentski-klubi.si v novem zavihku.</p>
      </section>
      <section id="ugodnosti" className="section membership-benefits" aria-labelledby="benefits-title">
        <p className="eyebrow">LJUDJE, ZNANJE, DOŽIVETJA</p>
        <h2 id="benefits-title">VEČ KOT <em>ČLANSTVO.</em></h2>
        <div className="three-col benefit-grid">{membershipBenefits.map((benefit, index) => (
          <article className="info-tile benefit-card" key={benefit.title}>
            <span className="eyebrow">0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.description}</p>
            <Link className="text-link" to={benefit.path}>{benefit.label} ↗</Link>
          </article>
        ))}</div>
        <p className="helper">Aktualne ugodnosti in pogoje članstva preveri na <a href={membershipInfoUrl} target="_blank" rel="noopener noreferrer">uradni strani KMŠ za člane ↗</a> ali neposredno pri klubu.</p>
      </section>
      <section className="section white-section membership-guide" aria-labelledby="membership-guide-title">
        <p className="eyebrow">DO URADNE PRIJAVE</p><h2 id="membership-guide-title">JASNO. <em>PREPROSTO.</em></h2>
        <ol className="membership-steps">
          <li><span aria-hidden="true">01</span><div><h3>Odpri uradni obrazec.</h3><p>Gumb te neposredno odpelje na studentski-klubi.si.</p></div></li>
          <li><span aria-hidden="true">02</span><div><h3>Preveri navodila in izbiro kluba.</h3><p>Preberi pogoje ter podatke izpolni v uradnem obrazcu.</p></div></li>
          <li><span aria-hidden="true">03</span><div><h3>Sledi nadaljnjim navodilom.</h3><p>Za zaključek prijave upoštevaj navodila obrazca. Za pomoč se obrni na KMŠ.</p></div></li>
        </ol>
        <div className="participation-actions"><MembershipLink /><a className="text-link" href="mailto:info@klub-kms.si?subject=Vprašanje%20o%20članstvu%20v%20KMŠ">VPRAŠANJE O ČLANSTVU? PIŠI NAM ↗</a></div>
      </section>
      <section className="section participation-end" aria-labelledby="membership-active-title">
        <div><p className="eyebrow">ŽELIŠ TUDI USTVARJATI?</p><h2 id="membership-active-title">PRINESI <em>SVOJO IDEJO.</em></h2><p className="lead">Članstvo in aktivno sodelovanje sta različni poti. Razišči aktivizem, predlaganje idej in sodelovanje pri projektih.</p></div>
        <Link className="pill" to="/priloznosti">ODKRIJ PRILOŽNOSTI ↗</Link>
        <p className="helper participation-source">Vsebinski vir: KMŠ – Člani, pregledano <time dateTime={participationCheckedAt}>{new Date(participationCheckedAt).toLocaleDateString('sl-SI', { timeZone: 'UTC' })}</time>.</p>
      </section>
    </>
  );
}
