# URADNI VIRI, LOGOTIP IN FOTOGRAFIJE

## Trenutno stanje po koraku 09 in dekorativnih dopolnitvah (4. 11. 2026)
28 abstraktnih začasnih JPG vizualov, 3 lokalni JPEG portreti z uradne strani KMŠ ter 3 optimizirane WebP izpeljanke. Navigacija in favicon uporabljata uporabnikovi PNG datoteki; placeholder ni uporabljen. Popoln popis 37 rastrskih datotek z dimenzijami, bajti, SHA-256, viri in statusom dovoljenja je v [ASSET_INVENTORY.json](ASSET_INVENTORY.json).

Izvor treh portretov je ponovno potrjen z neposredno primerjavo bajtov na uradnem viru, ne pa njihova licenca. Pregled imen, izrezov, alt opisov, logotipa in optimizacije je v [IMAGE_REVIEW.md](IMAGE_REVIEW.md). Avtorstvo in dovoljenje za javno objavo ostajata nedokumentirana tudi za izpeljanke in logotip. Za dve osebi uporabljamo inicialke. Zgodovinska stanja spodaj ostajajo za sledljivost.

Dodane so tudi tri izvirne vektorske dekoracije v `public/assets/decor/`, ločeno od rastrskega popisa. Njihov izvor in uporaba sta navedena spodaj.

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
| `public/assets/team/anja-hojsak.jpg` | star abstraktni vizual, neuporabljen |
| `public/assets/team/ema-staklenac.jpg` | star abstraktni vizual, neuporabljen |
| `public/assets/team/gabriela-brodnjak.jpg` | portret z uradnega vira; evidenca v ABOUT_AND_SOURCES |
| `public/assets/team/jan-ozvaldic.jpg` | portret z uradnega vira; evidenca v ABOUT_AND_SOURCES |
| `public/assets/team/doroteja-plohl.jpg` | portret z uradnega vira; evidenca v ABOUT_AND_SOURCES |

## Dodatne predlagane slike (15+)
`public/assets/gallery/ftrgatev-crowd-02.jpg`, `ftrgatev-stage-03.jpg`, `cantus-performance-02.jpg`, `kms-oder-audience-02.jpg`, `pisarna-interior-01.jpg`, `pisarna-community-02.jpg`, `creative-workshop-01.jpg`, `creative-workshop-02.jpg`, `charity-action-01.jpg`, `jazz-performance-02.jpg`, `standup-audience-01.jpg`, `student-volunteers-01.jpg`, `team-group-01.jpg`, `maribor-student-life-01.jpg`, `behind-the-scenes-01.jpg`.

Za vsak posnetek zabeleži: ime datoteke, vir (objava URL), avtor/fotograf, dovoljenje KMŠ, datum. Ne hotlinkaj Instagram/Facebook medijev v produkciji – neposredne povezave lahko potečejo ali jih platforma blokira.

## Posodobitev: KMŠ RED / WHITE (03. 11. 2026)
Ohrani obstoječo strukturo, vse strani in scroll animacije. Nova paleta: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temna barva besedila `#181818`. Priložen uporabnikov logotip je v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Ne vračaj črnega ozadja in ne uporabljaj starega placeholder logotipa.

## Zgodovinsko: korak 02 — monokromatska smer (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Takrat je ta zahteva nadomestila zgornjo rdeče-belo paleto in prepoved črnega ozadja; ponovno navodilo RED / WHITE spodaj jo sedaj nadomešča. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.

## Slike v povezani zgodbi / korak 04
`ScrollStory.tsx` ponovno uporabi tri lokalne datoteke iz hero sekcije prek `SmartImage`, s privzetim lazy nalaganjem in rezerviranimi okvirji. Slike niso podvojene na disku in ni novih zunanjih virov. Še vedno gre za označene začasne ilustracije; pred objavo potrebujejo zamenjavo z odobrenimi fotografijami KMŠ.

## Vsebinska evidenca dogodkov / korak 05
Opisi in neposredne uradne povezave vseh osmih projektov so preverjeni ter dokumentirani v [EVENTS_AND_SOURCES.md](EVENTS_AND_SOURCES.md). Vse obstoječe lokalne datoteke dogodkov so ohranjene in še vedno označene kot začasni vizuali. Javna dostopnost projektnih strani ne pomeni dovoljenja za prenos njihovih fotografij; novih fotografij nismo prenesli.

## Kontaktni in socialni viri / korak 08
Naslov, telefon, ure ter uradne Instagram/Facebook/YouTube povezave so ponovno pregledani 3. 11. 2026 in dokumentirani v [CONTACT_AND_NEWSLETTER.md](CONTACT_AND_NEWSLETTER.md). Tam so tudi javne sledi Mailchimp zasnove ter ločen predlog prihodnje integracije, brez dejanske povezave s storitvijo.

## Slike in branding / korak 09
Prednostne različice treh portretov so `team/jan-ozvaldic.webp`, `team/doroteja-plohl.webp` in `team/gabriela-brodnjak.webp`; istoimenski JPEG ostajajo nespremenjeni izvirniki in rezervni prikaz. Vse različice so 300 × 300 px, brez dodatnega izreza ali povečave. WebP datoteke so skupaj 32,5 % manjše. Ponovljiv izvoz: `python3 scripts/optimize-portraits.py` s Pillow in WebP podporo.

Za hero in dogodke še ni uradnih fotografij z dokumentiranim dovoljenjem. Ob njihovi zamenjavi znova preveri izrez, identiteto/alt, dimenzije, pravice in optimizacijo; WebP pot dodaj šele po dejanskem izvozu. Logotip ostaja uporabnikov PNG z ohranjeno prosojnostjo, brez novega preoblikovanja. [Izvedba, predogledi, preverjanja in odprta dovoljenja](IMAGE_REVIEW.md).

## Veljavno navodilo — KMŠ RED / WHITE (ponovno potrjeno 4. 11. 2026)
Najnovejše uporabnikovo navodilo ponovno določa primarno rdečo `#E32636`, belo `#FFFFFF`, sekundarno svetlo rožnato `#FFF0F2` in temno besedilo `#181818`. Nadomešča monokromatsko zahtevo koraka 02. Ne vračaj črnih UI ozadij; ohrani vse strani, strukturo, scroll animacije, uporabnikov `kms-logo-header.png` in `public/favicon.png`. Veljavni sistem je v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Zgodovinski zapisi in predogledi pred to potrditvijo opisujejo prejšnjo paleto.

## Dekorativni glasbeni motivi (4. 11. 2026)

| Lokalna datoteka | Vsebina | Izvor in velikost |
|---|---|---|
| `public/assets/decor/guitar.svg` | Akustična kitara | Izvirna SVG koda, Codex po uporabnikovem naročilu; 1.404 B |
| `public/assets/decor/accordion.svg` | Harmonika | Izvirna SVG koda, Codex po uporabnikovem naročilu; 1.864 B |
| `public/assets/decor/stage.svg` | Bobni, mikrofon in kitara | Izvirna SVG koda, Codex po uporabnikovem naročilu; 1.341 B |

Brez zunanjega slikovnega vira, prevzetih ikon, prepoznavnih izvajalcev ali referenčnih fotografij. To niso uradne KMŠ fotografije ali novi uradni simboli znamke. Ni dovoljenj tretjih oseb, na katera bi se opirali; ločena licenca projekta ni določena. Odkrito gre za AI pomoč pri pisanju vektorske kode, brez generiranja ali retuširanja portretov/fotografij. Evidenca rastrskih slik in njihova odprta dovoljenja ostajajo nespremenjeni.

Motivi so lokalna dekorativna CSS ozadja brez semantičnega alt opisa, animacij in sprejemanja klikov. [Prikaz, kontrast in preverjanja](BRAND_COLORS.md#dekorativni-glasbeni-motivi--4-11-2026).
