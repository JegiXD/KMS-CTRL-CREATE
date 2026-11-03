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

## Korak 02 — novejše uporabnikovo navodilo (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Ta zahteva nadomešča zgornjo rdeče-belo paleto in prepoved črnega ozadja. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.
