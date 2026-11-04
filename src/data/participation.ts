// Public source evidence and limits: docs/MEMBERSHIP_AND_SOURCES.md.
export const participationCheckedAt = '2026-11-03';
export const membershipInfoUrl = 'https://www.klub-kms.si/clani/';
export const ideasInfoUrl = 'https://www.klub-kms.si/ideje-clanov/';

export const membershipBenefits = [
  { title: 'Dogodki in druženje', description: 'Glasba, predavanja in skupna doživetja. Odkrij dogajanje KMŠ in spoznaj ljudi s podobnimi interesi.', path: '/dogodki', label: 'RAZIŠČI DOGODKE' },
  { title: 'Znanje in izkušnje', description: 'Preizkusi svoje ideje v praksi. Aktivno sodelovanje odpira prostor za učenje organizacije, ustvarjanja in komuniciranja.', path: '/priloznosti', label: 'ODKRIJ PRILOŽNOSTI' },
  { title: 'Skupnost in povezave', description: 'Nova poznanstva, sodelovanje in prostor za kreativnost. Spoznaj ljudi, ki ustvarjajo zgodbo KMŠ.', path: '/o-nas', label: 'SPOZNAJ EKIPO' },
];

const emailLink = (subject: string, body: string) => `mailto:info@klub-kms.si?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const opportunities = [
  {
    id: 'aktivizem', title: 'Postani aktivist.', tag: 'ORGANIZACIJA IN USTVARJANJE',
    description: 'Zanima te, kako nastane dogodek? Ekipo vprašaj o vključitvi v organizacijo, fotografijo, video, marketing ali spletne vsebine.',
    prompts: ['Kaj te zanima?', 'Kaj bi želel ustvarjati ali se naučiti?', 'Kako bi se želel vključiti?'],
    cta: 'ZANIMA ME AKTIVIZEM',
    href: emailLink('Zanima me aktivizem pri KMŠ', 'Živjo, ekipa KMŠ!\n\nŽelim se vključiti v vaše delo.\nZanima me:\nŽelim ustvarjati ali se naučiti:\n\nLep pozdrav'),
  },
  {
    id: 'ideje', title: 'Predlagaj idejo.', tag: 'TVOJA ZAMISEL ZA MARIBOR',
    description: 'Imaš idejo za delavnico, predavanje ali druženje? Opiši jo in z ekipo preveri možnosti izvedbe.',
    prompts: ['Kaj bi pripravil?', 'Komu je namenjeno?', 'Kako si predstavljaš izvedbo?'],
    cta: 'POŠLJI PREDLOG IDEJE',
    href: emailLink('Predlog ideje za KMŠ', 'Živjo, ekipa KMŠ!\n\nMoja ideja:\nKomu je namenjena:\nKako si predstavljam izvedbo:\n\nLep pozdrav'),
  },
  {
    id: 'sodelovanje', title: 'Sodeluj pri projektu.', tag: 'POVEŽIMO ZNANJE IN IDEJE',
    description: 'Želiš prispevati znanje, ustvarjati vsebino ali pomagati pri dogodku? Predstavi se in povej, kje vidiš možnost sodelovanja.',
    prompts: ['Kateri projekt te zanima?', 'Kaj bi želel prispevati?', 'Kaj predlagaš za prvi korak?'],
    cta: 'PREDLAGAJ SODELOVANJE',
    href: emailLink('Sodelovanje pri projektu KMŠ', 'Živjo, ekipa KMŠ!\n\nProjekt, ki me zanima:\nKaj želim prispevati:\nMoj predlog sodelovanja:\n\nLep pozdrav'),
  },
];
