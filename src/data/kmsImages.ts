import { atmospherePhotos } from './kmsPhotoAdditions';
import { kmsPhotos } from './kmsPhotos';

// Single editorial index. Originals and documented credits stay in kmsPhotos.
export const kmsImages = {
  cantusStage: { ...atmospherePhotos.cantusStage, category: 'community', name: 'Cantus', caption: 'Skupaj v dvorani.', placements: ['membership', 'gallery'] },
  cantusTogether: { ...atmospherePhotos.cantusTogether, category: 'community', name: 'Cantus', caption: 'Ekipa in skupni trenutki.', placements: ['about', 'membership'] },
  oderAudience: { ...atmospherePhotos.oderAudience, category: 'gallery', name: 'KMŠ ODER', caption: 'Pogled iz občinstva.', placements: ['events', 'gallery'] },
  ftrgatevCrowd: { ...atmospherePhotos.ftrgatevCrowd, category: 'gallery', name: 'Ftrgatev', caption: 'Mesto pred odrom.', placements: ['events', 'gallery'] },
  ftrgatev: { ...kmsPhotos.ftrgatev, category: 'events', name: 'Ftrgatev', caption: 'Glasba, ki povezuje.', placements: ['hero', 'projects', 'gallery'] },
  cantus: { ...kmsPhotos.cantus, category: 'community', name: 'Cantus', caption: 'Skupaj za isto mizo.', placements: ['hero', 'about', 'membership'] },
  oder: { ...kmsPhotos.oder, category: 'events', name: 'KMŠ ODER', caption: 'Prostor za mlado glasbo.', placements: ['hero', 'projects', 'gallery'] },
  kreativa: { ...kmsPhotos.kreativa, category: 'projects', name: 'KMŠ Kreativa', caption: 'Ideje dobijo obliko.', placements: ['projects', 'opportunities', 'gallery'] },
  jazz: { ...kmsPhotos.jazz, category: 'events', name: 'Jazz večeri', caption: 'Ujemi svoj ritem.', placements: ['events', 'gallery'] },
  dobrodelnost: { ...kmsPhotos.dobrodelnost, category: 'community', name: 'Dobrodelnost', caption: 'Majhne akcije. Skupen učinek.', placements: ['about', 'membership', 'contact'] },
  standup: { ...kmsPhotos.standup, category: 'events', name: 'Stand UP', caption: 'Večeri, ki nas nasmejijo.', placements: ['gallery', 'newsletter'] },
  pisarna: { ...kmsPhotos.pisarna, category: 'events', name: 'Koncerti v Pisarni', caption: 'Blizu odra. Blizu ljudem.', placements: ['gallery', 'news'] },
} as const;

export type KmsImageKey = keyof typeof kmsImages;
