# COPY-PASTE NAVODILA ZA CODEX (izvajaj PO VRSTI)

## 01 — Audit
Preglej projekt, README, AGENTS in vse docs. Naredi `npm install`, `npm run typecheck`, `npm run build` in odpravi napake. Ne spreminjaj vizualne smeri. Zapiši ugotovitve v docs/CHANGELOG.md.

## 02 — Design system
Poenoti `src/styles.css` v premišljen responsive sistem: črna/bela/siva, velik bold naslov, dober kontrast, tipografska hierarhija, dovolj prostora. Navdih screenshot, vendar brez kopiranja. Preveri mobile/tablet/desktop.

## 03 — Hero
Nadgradi hero s tremi slikami (`hero-left`, `hero-center`, `hero-right`), elegantnim uvodom in izrazitim sporočilom KMŠ. Na mobilnih zaslonih uporabi dva oziroma en stolpec. Slike preberi lokalno, ne s hotlinki.

## 04 — Povezani scroll
Nadgradi `ScrollStory.tsx` v eno povezano scroll zgodbo: intro fotografije se povečajo, naslov se preoblikuje, naslednja sekcija nastane iz prejšnje. Uporabi GSAP ScrollTrigger timeline, scrub in pin samo smiselno. Prepreči layout shift, upoštevaj reduced motion.

## 05 — Dogodki
Nadgradi `/dogodki` z uporabnimi kategorijami, karticami in dejanskimi potrjenimi opisi dogodkov: Ftrgatev, Cantus, KMŠ Kreativa, KMŠ ODER, jazz, dobrodelnost, Stand UP, koncerti v Pisarni.

## 06 — O nas in organi
Dopolni `/o-nas`: poslanstvo, ekipa, Upravni odbor, Nadzorna komisija, Častno razsodišče. Ne izmišljaj si članov organov. Fotografije dodaj samo s potrjenim virom.

## 07 — Članstvo in priložnosti
Poenostavi pot do obrazca `https://studentski-klubi.si/public-forms/jui1g3swbxz`; dodaj jasne CTA in razlago ugodnosti. Priložnosti naj vključujejo aktivizem, predlaganje idej in sodelovanje.

## 08 — Kontakt in newsletter
Preveri uradne podatke, družbena omrežja in uradne ure. Za kontakt zadrži pošteno oznako mailto. Za newsletter predlagaj realno integracijo, vendar je ne pretvarjaj za delujočo brez API.

## 09 — Slike in branding
Preglej `docs/ASSETS_AND_SOURCES.md`. Če so uradne fotografije v `public/assets`, preveri imena, izreze, alt opise in optimizacijo WebP. Uradni logotip zamenjaj namesto `logo-placeholder.svg`. Izvor in dovoljenja dokumentiraj.

## 10 — Končni pregled
Preveri vse poti, gumbe, mobilni meni, zunanje povezave, kontrast, tipkovnico, zmogljivost animacij, reduced motion, build, vsebino PDF briefa. Končno dokumentacijo, 150–300 besed opisa in transparentno AI izjavo pripravi v `docs/SUBMISSION.md`. Ne trdi, da so bile funkcije ali testi izvedeni, če niso bili.

## Posodobitev: KMŠ RED / WHITE (03. 11. 2026)
Ohrani obstoječo strukturo, vse strani in scroll animacije. Nova paleta: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temna barva besedila `#181818`. Priložen uporabnikov logotip je v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Ne vračaj črnega ozadja in ne uporabljaj starega placeholder logotipa.

## Zgodovinsko: korak 02 — monokromatska smer (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Takrat je ta zahteva nadomestila zgornjo rdeče-belo paleto in prepoved črnega ozadja; ponovno navodilo RED / WHITE spodaj jo sedaj nadomešča. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.

## Veljavno navodilo — KMŠ RED / WHITE (ponovno potrjeno 4. 11. 2026)
Najnovejše uporabnikovo navodilo ponovno določa primarno rdečo `#E32636`, belo `#FFFFFF`, sekundarno svetlo rožnato `#FFF0F2` in temno besedilo `#181818`. Nadomešča monokromatsko zahtevo koraka 02. Ne vračaj črnih UI ozadij; ohrani vse strani, strukturo, scroll animacije, uporabnikov `kms-logo-header.png` in `public/favicon.png`. Veljavni sistem je v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Zgodovinski zapisi in predogledi pred to potrditvijo opisujejo prejšnjo paleto.

## Najnovejše navodilo — brez slikovnih predogledov (4. 11. 2026)
Uporabnik je naročil izbris vseh datotek docs/previews in prepovedal nadaljnje generiranje/shranjevanje slikovnih predogledov. Testiranje v brskalniku nadaljuj brez screenshotov. Portreti ekipe so po novem barvni; domača stran ima pod hero tri fiksne števce 45 / 753 / 29.

## Najnovejše navodilo — celovita experimental editorial prenova (4. 11. 2026)
Izvedena neposredno v obstoječem projektu po uporabnikovem 22-faznem naročilu: analiza/reference, sistem, hero, skupna SVG grafika, arhitektura GSAP, valovi, domača zgodba, podstrani, responsive pregled in dokumentacija. Načrt v EDITORIAL_REDESIGN_PLAN.md; izvedba/testi v EDITORIAL_REDESIGN.md. Ta zahteva nadomešča starejšo kompozicijo in ožjo paleto, ohranja vse poti/vsebine, uradni logotip, barvno ekipo, fiksne števce in prepoved screenshotov. Nova pravila v AGENTS.md.
