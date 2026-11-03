# URADNI VIRI, LOGOTIP IN FOTOGRAFIJE

## Preverjene javne povezave (3. 11. 2026)
- Uradna stran: https://www.klub-kms.si/
- O nas: https://www.klub-kms.si/o-nas/
- Dogodki: https://www.klub-kms.si/dogodki/
- Instagram: https://www.instagram.com/klubmariborskihstudentov/
- Facebook: https://www.facebook.com/KlubMariborskihStudentov/
- Včlanitev: https://studentski-klubi.si/public-forms/jui1g3swbxz

**Stanje po auditu 01 (3. 11. 2026):** priloženih je **31 abstraktnih začasnih JPEG ilustracij**, ne realne KMŠ fotografije. Uporabnikov logotip je v `branding/kms-logo-original.png`, navigacijski izrez v `branding/kms-logo-header.png`, favicon pa v `public/favicon.png`. Navigacija in `index.html` uporabljata novi datoteki; stari `logo-placeholder.svg` ostaja neuporabljen. Dokazila o dovoljenjih za objavo niso priložena. Za nadaljnjo uporabo fotografij pridobi dovoljenje KMŠ, preveri fotografe in po potrebi oznake avtorjev. Obstoj vseh 18 trenutno uporabljenih lokalnih slikovnih poti je preverjen.

## Konvencija imen – sem kopiraj slike z dovoljenjem

Korak 03 (3. 11. 2026): `Hero.tsx` uporablja obstoječe `hero-left.jpg`, `hero-center.jpg` in `hero-right.jpg` (vse 960 × 1100 px). Alt opisi jih označujejo kot začasne vizuale; oznaka je vidna tudi pod triptihom. Prave fotografije se še pridobijo z dovoljenjem. Sredinska slika ima eager loading in visoko prioriteto, stranski lazy loading. CSS rezervira prostor, izreze preveri ponovno ob zamenjavi z dejanskimi fotografijami.

| Pot | Priporočena vsebina |
|---|---|
| `public/assets/branding/kms-logo-original.png` | uporabnikov izvirnik logotipa, že priložen |
| `public/assets/branding/kms-logo-header.png` | obrezana različica, uporabljena v navigaciji |
| `public/favicon.png` | ikona zavihka, uporabljena v `index.html` |
| `public/assets/hero/hero-left.jpg` | koncert / izvajalec |
| `public/assets/hero/hero-center.jpg` | množica / koncert |
| `public/assets/hero/hero-right.jpg` | prijatelji / skupina študentov |
| `public/assets/events/ftrgatev-01.jpg` | Ftrgatev |
| `public/assets/events/cantus-01.jpg` | Cantus |
| `public/assets/events/kreativa-01.jpg` | KMŠ Kreativa |
| `public/assets/events/kms-oder-01.jpg` | KMŠ oder |
| `public/assets/events/jazz-veceri-01.jpg` | Jazz večeri |
| `public/assets/events/dobrodelnost-01.jpg` | Dobrodelni projekt |
| `public/assets/events/standup-01.jpg` | Stand UP |
| `public/assets/events/pisarna-koncert-01.jpg` | Koncert v Pisarni |
| `public/assets/team/anja-hojsak.jpg` | portret aktualne predsednice – preveri |
| `public/assets/team/ema-staklenac.jpg` | portret podpredsednice – preveri |
| `public/assets/team/gabriela-brodnjak.jpg` | portret – preveri |
| `public/assets/team/jan-ozvaldic.jpg` | portret – preveri |
| `public/assets/team/doroteja-plohl.jpg` | portret – preveri |

## Dodatne predlagane slike (15+)
`public/assets/gallery/ftrgatev-crowd-02.jpg`, `ftrgatev-stage-03.jpg`, `cantus-performance-02.jpg`, `kms-oder-audience-02.jpg`, `pisarna-interior-01.jpg`, `pisarna-community-02.jpg`, `creative-workshop-01.jpg`, `creative-workshop-02.jpg`, `charity-action-01.jpg`, `jazz-performance-02.jpg`, `standup-audience-01.jpg`, `student-volunteers-01.jpg`, `team-group-01.jpg`, `maribor-student-life-01.jpg`, `behind-the-scenes-01.jpg`.

Za vsak posnetek zabeleži: ime datoteke, vir (objava URL), avtor/fotograf, dovoljenje KMŠ, datum. Ne hotlinkaj Instagram/Facebook medijev v produkciji – neposredne povezave lahko potečejo ali jih platforma blokira.


## Posodobitev: KMŠ RED / WHITE (03. 11. 2026)
Ohrani obstoječo strukturo, vse strani in scroll animacije. Nova paleta: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temna barva besedila `#181818`. Priložen uporabnikov logotip je v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Ne vračaj črnega ozadja in ne uporabljaj starega placeholder logotipa.

## Korak 02 — novejše uporabnikovo navodilo (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Ta zahteva nadomešča zgornjo rdeče-belo paleto in prepoved črnega ozadja. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.

## Slike v povezani zgodbi / korak 04
`ScrollStory.tsx` ponovno uporabi tri lokalne datoteke iz hero sekcije prek `SmartImage`, s privzetim lazy nalaganjem in rezerviranimi okvirji. Slike niso podvojene na disku in ni novih zunanjih virov. Še vedno gre za označene začasne ilustracije; pred objavo potrebujejo zamenjavo z odobrenimi fotografijami KMŠ.

## Vsebinska evidenca dogodkov / korak 05
Opisi in neposredne uradne povezave vseh osmih projektov so preverjeni ter dokumentirani v [EVENTS_AND_SOURCES.md](EVENTS_AND_SOURCES.md). Vse obstoječe lokalne datoteke dogodkov so ohranjene in še vedno označene kot začasni vizuali. Javna dostopnost projektnih strani ne pomeni dovoljenja za prenos njihovih fotografij; novih fotografij nismo prenesli.
