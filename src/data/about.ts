// Reviewed against the live official page. Evidence: docs/ABOUT_AND_SOURCES.md.
export const aboutSource = 'https://www.klub-kms.si/o-nas/';
export const aboutContentCheckedAt = '2026-11-03';

export type TeamMember = { id: string; name: string; role: string; photo?: string; photoWebp?: string; additionalRole?: string };
export const team: TeamMember[] = [
  { id: 'urban-kavkler', name: 'Urban Kavkler', role: 'Predsednik društva' },
  { id: 'jan-ozvaldic', name: 'Jan Ozvaldič', role: 'Podpredsednik društva', photo: '/assets/team/jan-ozvaldic.jpg', photoWebp: '/assets/team/jan-ozvaldic.webp', additionalRole: 'Svetnik Sveta ŠOLS in Zveze ŠKIS' },
  { id: 'doroteja-plohl', name: 'Doroteja Plohl', role: 'Blagajničarka', photo: '/assets/team/doroteja-plohl.jpg', photoWebp: '/assets/team/doroteja-plohl.webp' },
  { id: 'gabriela-brodnjak', name: 'Gabriela Brodnjak', role: 'Članica Upravnega odbora', photo: '/assets/team/gabriela-brodnjak.jpg', photoWebp: '/assets/team/gabriela-brodnjak.webp' },
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
  { area: 'Marketing', name: 'Gabriela Brodnjak' },
  { area: 'Kultura in izobraževanje', name: 'Enej Polanec' },
  { area: 'Sociala in zdravstvo', name: 'Eva Polič' },
  { area: 'Šport in zabava', name: 'Doroteja Plohl' },
  { area: 'Dijaška sekcija', name: 'Zala Gluk' },
];
