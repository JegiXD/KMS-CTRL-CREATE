import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGsapContext } from '../../hooks/useGsapContext';
import { animateWave } from '../../animations/waveMotion';
import { kmsImages, type KmsImageKey } from '../../data/kmsImages';
import { EditorialPhoto } from './EditorialPhoto';

type Props = { id: string; images: KmsImageKey[]; main?: boolean; label?: string };
export default function WaveGallery({ id, images, main = false, label = 'ZGODBE V GIBANJU' }: Props) {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  useGsapContext(root, ({ reduced, desktop }) => {
    if (reduced || !root.current || !stage.current) return;
    animateWave(root.current, stage.current, main && desktop, !desktop);
  }, [main]);
  return <section ref={root} className={`wave-gallery ${main ? 'wave-main' : 'wave-connector'}`} aria-labelledby={`${id}-title`}>
    <div className="wave-topline"><span className="eyebrow">{main ? '05 / FOTOGRAFSKI ZAPIS' : 'KMŠ / MED ZGODBAMI'}</span><span className="wave-direction" aria-hidden="true">LEVO. DESNO. SKUPAJ. ↝</span></div>
    <div className="wave-stage" ref={stage}>
      <div className="wave-heading"><h2 id={`${id}-title`}>{label}</h2><p>{main ? 'Glasba, ustvarjanje, druženje. To so naši trenutki.' : 'Vsaka zgodba nas poveže z naslednjo.'}</p></div>
      <svg className="wave-track" fill="none" aria-hidden="true"><path data-wave-path stroke="currentColor" strokeWidth="2" strokeDasharray="5 10" /></svg>
      <div className="wave-photos" aria-hidden="true">{images.map((image, index) => <div className="wave-photo" data-wave-photo key={`${image}-${index}`}><EditorialPhoto image={image} linkedCredit={false} /><span className="wave-photo-number">0{index + 1} / {kmsImages[image].name}</span></div>)}</div>
      {main && <Link className="text-link wave-more" to="/dogodki">SPOZNAJ TE PROJEKTE ↗</Link>}
    </div>
    <ul className="wave-sources" aria-label="Fotografije in viri">{images.map((image, index) => <li key={`${image}-${index}`}><span className="sr-only">{kmsImages[image].alt}. </span><a href={kmsImages[image].sourcePage} target="_blank" rel="noopener noreferrer">{kmsImages[image].name} / {kmsImages[image].credit} ↗</a></li>)}</ul>
  </section>;
}
