import { kmsPeopleImages } from './kmsPeopleImages';
// Reviewed against the live official page. Evidence: docs/ABOUT_AND_SOURCES.md.
export const aboutSource = 'https://www.klub-kms.si/o-nas/';
export const aboutContentCheckedAt = '2026-11-04';

export type TeamMember = { id: string; name: string; role: string; photo?: string; photoWebp?: string; additionalRole?: string; email?: string; photoKind?: 'portrait' | 'illustration' };
export const team: TeamMember[] = [
  { id: 'urban-kavkler', name: 'Urban Kavkler', role: 'Predsednik društva', photo: kmsPeopleImages['urban-kavkler'].src, photoWebp: kmsPeopleImages['urban-kavkler'].webpSrc, photoKind: 'illustration', email: 'urban.kavkler@klub-kms.si' },
  { id: 'jan-ozvaldic', name: 'Jan Ozvaldič', role: 'Podpredsednik društva', photo: kmsPeopleImages['jan-ozvaldic'].src, photoWebp: kmsPeopleImages['jan-ozvaldic'].webpSrc, additionalRole: 'Svetnik Sveta ŠOLS in Zveze ŠKIS' },
  { id: 'doroteja-plohl', name: 'Doroteja Plohl', role: 'Blagajničarka', photo: kmsPeopleImages['doroteja-plohl'].src, photoWebp: kmsPeopleImages['doroteja-plohl'].webpSrc },
  { id: 'gabriela-brodnjak', name: 'Gabriela Brodnjak', role: 'Članica Upravnega odbora', photo: kmsPeopleImages['gabriela-brodnjak'].src, photoWebp: kmsPeopleImages['gabriela-brodnjak'].webpSrc },
  { id: 'jan-kolbic', name: 'Jan Kolbič', role: 'Član Upravnega odbora' },
];

export type ClubBody = { id: string; title: string; description: string; members: { name: string; role?: string }[] };
export const clubBodies: ClubBody[] = [
  {
    id: 'upravni-odbor', title: 'Upravni odbor',
    description: 'Izvršilni organ društva, ki skrbi za organizacijo, administracijo in strokovno izvedbo dela kluba.',
    members: team.map(({ name, role }) => ({ name, role })),
  },
  {
    id: 'nadzorna-komisija', title: 'Nadzorna komisija',
    description: 'Spremlja delo organov ter nadzira finančno in materialno poslovanje društva.',
    members: [{ name: 'Mai Štiglic' }, { name: 'Katja Jarc' }, { name: 'Lazar Marić' }],
  },
  {
    id: 'castno-razsodisce', title: 'Častno razsodišče',
    description: 'Obravnava odgovornost pri kršitvah statuta in izreka disciplinske ukrepe.',
    members: [{ name: 'Lara Bosnar', role: 'Predsednica Častnega razsodišča' }, { name: 'Tilen Sotlar' }, { name: 'Eva Polič' }],
  },
];

export const sectionLeads = [
  { area: 'Marketing', name: 'Gabriela Brodnjak', image: kmsPeopleImages['gabriela-brodnjak'] },
  { area: 'Kultura in izobraževanje', name: 'Enej Polanec', image: kmsPeopleImages['enej-polanec'] },
  { area: 'Sociala in zdravstvo', name: 'Eva Polič', image: kmsPeopleImages['eva-polic'] },
  { area: 'Šport in zabava', name: 'Doroteja Plohl', image: kmsPeopleImages['doroteja-plohl'] },
  { area: 'Dijaška sekcija', name: 'Zala Gluk', image: kmsPeopleImages['zala-gluk'] },
];
