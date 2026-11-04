// Pregledno mesto za urejanje prikazane vsebine.
export const membershipUrl = 'https://studentski-klubi.si/public-forms/jui1g3swbxz';
export { socials } from './contact';
export const eventCategories = [
  { id: 'all', label: 'Vsi projekti' },
  { id: 'music', label: 'Glasba' },
  { id: 'social', label: 'Druženje' },
  { id: 'workshops', label: 'Delavnice' },
  { id: 'charity', label: 'Dobrodelnost' },
  { id: 'comedy', label: 'Humor' },
] as const;

export type EventCategory = typeof eventCategories[number]['id'];
export type EventProject = {
  slug: string;
  title: string;
  category: Exclude<EventCategory, 'all'>;
  tag: string;
  photo: string;
  url: string;
  description: string;
};

// Descriptions checked against the official project pages, not a current event calendar.
// Source mapping and limits: docs/EVENTS_AND_SOURCES.md.
export const eventContentCheckedAt = '2026-11-03';
export const events: EventProject[] = [
  {
    slug: 'ftrgatev', title: 'Ftrgatev', category: 'music', tag: 'Koncertni dogodek',
    photo: '/assets/events/ftrgatev-01.jpg', url: 'https://www.klub-kms.si/dogodek/ftrgatev/',
    description: 'Koncertno srečanje različnih glasbenih svetov. Uradna napoved izvedbe 2025 na ŠTUK-u združuje Modrijane, MRFY in RANR.',
  },
  {
    slug: 'cantus', title: 'Cantus', category: 'social', tag: 'Tematsko druženje',
    photo: '/assets/events/cantus-01.jpg', url: 'https://www.klub-kms.si/dogodek/cantus/',
    description: 'Štiriurno tematsko druženje s petjem tradicionalnih pesmi in družabnimi izzivi po pravilih cantusa. KMŠ je prvo izvedbo organiziral leta 2013.',
  },
  {
    slug: 'kreativa', title: 'KMŠ Kreativa', category: 'workshops', tag: 'Ustvarjalne delavnice',
    photo: '/assets/events/kreativa-01.jpg', url: 'https://www.klub-kms.si/dogodek/delavnice/',
    description: 'Praktične delavnice za znanja zunaj predavalnic in povezovanje s somišljeniki. Med predstavljenimi primeri so izdelovanje čokolade, videoiger ter ustvarjanje z epoksijem in glino.',
  },
  {
    slug: 'oder', title: 'KMŠ ODER', category: 'music', tag: 'Festival Lent',
    photo: '/assets/events/kms-oder-01.jpg', url: 'https://www.klub-kms.si/dogodek/kms-oder/',
    description: 'Prizorišče Festivala Lent, namenjeno mladim in manj poznanim glasbenikom. Projekt jim odpira prostor za nastope ter predstavljanje lastne glasbene zgodbe.',
  },
  {
    slug: 'jazz', title: 'Jazz večeri', category: 'music', tag: 'Jazz in izobraževanje',
    photo: '/assets/events/jazz-veceri-01.jpg', url: 'https://www.klub-kms.si/dogodek/cantus-2/',
    description: 'Spoznavanje jazza skozi poslušanje, koncerte in izobraževanje. Program povezuje mlade z glasbeniki ter raziskuje kulturno in zgodovinsko ozadje te glasbe.',
  },
  {
    slug: 'dobrodelnost', title: 'Dobrodelnost', category: 'charity', tag: 'Pomoč skupnosti',
    photo: '/assets/events/dobrodelnost-01.jpg', url: 'https://www.klub-kms.si/dogodek/dobrodelnost/',
    description: 'Dobrodelni projekti, kot so KrofeQ za Zavetišče za živali Maribor, dražbe športnih dresov in krvodajalske akcije. KMŠ z njimi opozarja na družbene izzive in spodbuja pomoč skupnosti.',
  },
  {
    slug: 'standup', title: 'Stand UP', category: 'comedy', tag: 'Komedija v Pisarni',
    photo: '/assets/events/standup-01.jpg', url: 'https://www.klub-kms.si/dogodek/stand-up/',
    description: 'Večeri komedije v Pisarni, ki dajejo prostor manj prepoznavnim obrazom slovenske stand up scene. KMŠ je prvi tak dogodek pripravil leta 2018.',
  },
  {
    slug: 'pisarna', title: 'Koncerti v Pisarni', category: 'music', tag: 'Mladi glasbeniki',
    photo: '/assets/events/pisarna-koncert-01.jpg', url: 'https://www.klub-kms.si/dogodek/koncerti-v-pisarni/',
    description: 'Koncertni projekt v Pisarni, ki mladim, še manj poznanim glasbenikom ponuja manjši oder in priložnost, da svoj talent predstavijo občinstvu.',
  },
];

export const news = [
  {title:'Razpis za volitve v organe KMŠ – september 2026',date:'4. 9. 2026',url:'https://www.klub-kms.si/'},
  {title:'Razpis za svetnika Sveta ŠOLS – september 2026',date:'4. 9. 2026',url:'https://www.klub-kms.si/'},
  {title:'Vabilo na 3. redno skupščino KMŠ v letu 2026',date:'4. 9. 2026',url:'https://www.klub-kms.si/'}
];
export { team } from './about';
