import { EditorialPhoto } from '../components/editorial/EditorialPhoto';
import { ArrowUpRight, Mail } from 'lucide-react';
import { MembershipLink } from '../components/MembershipLink';
import { ideasInfoUrl, membershipInfoUrl, opportunities } from '../data/participation';

export default function Opportunities() {
  return (
    <>
      <section className="page-hero has-photo participation-hero" aria-labelledby="opportunities-title">
        <p className="eyebrow">05 / PRILOŽNOSTI</p><h1 id="opportunities-title">TVOJA IDEJA.<br /><em>SKUPNA ZGODBA.</em></h1>
        <p className="lead">Organiziraj, ustvarjaj ali predlagaj nekaj novega. Izberi način, kako bi želel sodelovati z ekipo KMŠ.</p>
        <div className="participation-actions"><a className="pill" href="#nacini-sodelovanja">NAJDI SVOJ NAČIN ↓</a><MembershipLink label="ŽELIM SE VČLANITI" className="text-link membership-text-link" /></div>
        <EditorialPhoto image="kreativa" className="page-hero-photo" />
      </section>
      <section id="nacini-sodelovanja" className="section opportunities-section" aria-labelledby="ways-title">
        <p className="eyebrow">TRI POTI DO SODELOVANJA</p><h2 id="ways-title">IZBERI <em>SVOJO VLOGO.</em></h2>
        <div className="opportunity-list">{opportunities.map((opportunity, index) => (
          <article className="opportunity-card" key={opportunity.id} aria-labelledby={opportunity.id}>
            <div className="opportunity-intro"><p className="eyebrow">0{index + 1} / {opportunity.tag}</p><h3 id={opportunity.id}>{opportunity.title}</h3><p>{opportunity.description}</p></div>
            <div className="opportunity-action"><p className="opportunity-prompts-title">Za prvi stik nam povej:</p><ul>{opportunity.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul><a className="pill" href={opportunity.href}>{opportunity.cta}<Mail size={18} aria-hidden="true" /></a><p className="helper">Odpre e-poštni program z osnutkom sporočila. Sporočilo pošlješ sam.</p></div>
          </article>
        ))}</div>
      </section>
      <section className="section white-section participation-end" aria-labelledby="opportunities-next-title">
        <div><p className="eyebrow">ZAČNIMO S POGOVOROM</p><h2 id="opportunities-next-title">SKUPAJ GRE <em>LAŽJE.</em></h2><p className="lead">Možnosti in način sodelovanja dogovoriš z ekipo. Če želiš najprej postati član, je uradni obrazec neposredno spodaj.</p></div>
        <MembershipLink />
        <div className="participation-sources"><a className="text-link" href={membershipInfoUrl} target="_blank" rel="noopener noreferrer">AKTIVIZEM PRI KMŠ <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href={ideasInfoUrl} target="_blank" rel="noopener noreferrer">URADNA STRAN ZA IDEJE <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>
    </>
  );
}
