import { SmartImage } from '../SmartImage';
import { kmsImages, type KmsImageKey } from '../../data/kmsImages';

export function EditorialPhoto({ image, className = '', priority = false, caption = true, linkedCredit = true }: { image: KmsImageKey; className?: string; priority?: boolean; caption?: boolean; linkedCredit?: boolean }) {
  const photo = kmsImages[image];
  return <figure className={`editorial-photo ${className}`}><SmartImage src={photo.src} webpSrc={photo.webpSrc} alt={photo.alt} width={photo.width} height={photo.height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} /><figcaption>{caption && <span>{photo.name} / {photo.caption}</span>}{linkedCredit ? <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer">Foto: {photo.credit} ↗</a> : <span>Foto: {photo.credit}</span>}</figcaption></figure>;
}
