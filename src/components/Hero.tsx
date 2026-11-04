import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { membershipUrl } from '../data/content';
import { SmartImage } from './SmartImage';

const panels = [
  { position: 'left', label: 'Glasba', alt: 'Začasni vizual za glasbo in koncerte KMŠ' },
  { position: 'center', label: 'Dogodki', alt: 'Začasni vizual za dogodke KMŠ' },
  { position: 'right', label: 'Skupnost', alt: 'Začasni vizual za študentsko skupnost KMŠ' },
] as const;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-top">
        <span>KLUB MARIBORSKIH ŠTUDENTOV</span>
        <span>MARIBOR / SKUPAJ USTVARJAMO VEČ</span>
      </div>
      <div className="hero-intro">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-kicker">NE SAMO ŠTUDENTI.</span>
          <span>SKUPNOST.</span>
        </h1>
        <div className="hero-copy">
          <p>Za dogodke, ki nas povežejo.<br />Za ideje, ki nas premaknejo.<br />Za študentski Maribor, ki ga ustvarjamo skupaj.</p>
          <a className="pill hero-join" href={membershipUrl} target="_blank" rel="noopener noreferrer">
            POSTANI DEL KMŠ <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-columns">
        {panels.map(panel => (
          <figure className={`hero-panel hero-panel-${panel.position}`} key={panel.position}>
            <Link className="hero-panel-link" to="/dogodki" aria-label={`Odkrij dogodke KMŠ: ${panel.label}`}>
              <SmartImage
                src={`/assets/hero/hero-${panel.position}.jpg`}
                alt={panel.alt}
                className="hero-img"
                loading={panel.position === 'center' ? 'eager' : 'lazy'}
                fetchPriority={panel.position === 'center' ? 'high' : 'auto'}
              />
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
}
