import { additionalPeopleImages } from './kmsPhotoAdditions';

// Mapping follows the explicit image alt/name association on the official O nas page.
const portrait = (id: string, file: string) => ({
  src: `/assets/team/${id}.jpg`, webpSrc: `/assets/team/${id}.webp`,
  sourcePage: 'https://www.klub-kms.si/o-nas/',
  sourceUrl: `https://www.klub-kms.si/wp-content/uploads/2025/12/${file}`,
  kind: 'portrait' as const,
});
export const kmsPeopleImages = {
  ...additionalPeopleImages,
  'jan-ozvaldic': portrait('jan-ozvaldic', 'DSC00982-2-300x300.jpg'),
  'doroteja-plohl': portrait('doroteja-plohl', 'doroteja-2-300x300.jpg'),
  'gabriela-brodnjak': portrait('gabriela-brodnjak', 'Gabi-300x300.jpg'),
} as const;
