# KMŠ — celovita editorial prenova

Izvedba: 4. 11. 2026. Ta dokument opisuje najnovejšo različico, ki nadomešča starejšo fotografsko pin sceno in prejšnja navodila o paleti. Načrt je v [EDITORIAL_REDESIGN_PLAN.md](EDITORIAL_REDESIGN_PLAN.md).

## Koncept in referenca

»Maribor. Mladi. Brez meja.« je izvirno sporočilo KMŠ. Uporabnikova priložena referenca »CALL ME IF YOU GET LOST« je bila pregledana iz izvirne priponke: kondenziran velik naslov, strukturirana papirnata podlaga, nesimetrične fotografije, ročni obrisi in nasprotje med redom ter ustvarjalnim nemirom. Njena znamka, fotografije in ilustracije niso uporabljene. Ni bila narejena kopija kompozicije ali nov slikovni mockup.

Prenova zajema celotno domačo stran in sedem podstrani, stalno navigacijo ter nogo. Svetla podlaga, široki naslovi, tanke ločnice, fotografske papirnate plasti in majhni modri stickerji so skupen jezik. Dogodki imajo asimetrično predstavitev, novice uredniške vrstice, članstvo rdeč fotografski poziv, organi pa berljive poimenske sezname. Podatkovna vsebina in poti ostajajo ohranjene.

## Sistem

- Anton / DM Sans / Space Grotesk. Anton nosi velike naslove; daljši odstavki, imena in funkcije so v bolj berljivih družinah. Pisave se nalagajo prek Google Fonts z `display=swap`; preverjeno prikazovanje slovenskih črk v brskalniku.
- `styles.css` ohranja osnovne primitive za kontrole/postavitve. `editorial.css`, naložen za njim, določa veljavno paleto, editorial tipografijo, vse kompozicije in responsive prilagoditve. Ni nove CSS ali animacijske knjižnice.
- Primarna rdeča/bela, topla bela, nežno rožnata in globlja rdeča. Mornarsko modra je omejena na manjše nalepke, plakat, obrobo in fokus. Ni velikih modrih ali črnih UI ozadij. [Barve in kontrast](BRAND_COLORS.md).
- SVG `EditorialBackground` teče čez domačo stran; ogromne obrisane besede, `DoodleLayer`, drobne oznake in `ScrollConnector` povezujejo različne kompozicije. Dekoracije niso interaktivne ali vsebina za bralnik zaslona.

## Povezana domača zgodba

Hero → ohranjeni števci → prvi val ljudi/skupnosti → predstavitev KMŠ → projekti ODER/Kreativa → val ustvarjanja/jazza → vseh osem projektov → glavna fotografska galerija → grafični prehod v članstvo → priložnosti → novice → neaktivne e-novice → noga.

Rdeča grafična poteza in tipografske oznake se ponavljajo med sekcijami. Različne postavitve dajejo vsebini ritem: kolaž, številke, fotografija z besedilom, velika uredniška razprostrta stran, indeks, gibljiva galerija in plakat. Niso vse sekcije pretvorjene v enake kartice.

## Animacijska arhitektura

`heroAnimations.ts` ustvari GSAP timeline: tri maskirane vrstice se razkrijejo zaporedoma, glavna fotografija se umiri iz povečave, manjši fotografiji vstopita in sticker/CTA sledita s kratkim zamikom. Skupaj približno 1,4 sekunde; navigacija in gumbi niso zaklenjeni.

`textReveals.ts` posamezne vsebinske sklope diskretno razkrije enkrat. `useGsapContext.ts` registrira obstoječe GSAP vtičnike, izolira animacije, upravlja `matchMedia`, osveži meritve po nalaganju slik/pisav in ob odhodu vrne sloge ter sprožilce. Kontekst deluje tudi z React Strict Mode. Lenis ostaja povezan z GSAP tickerjem iz obstoječe komponente `SmoothScroll`.

### Podpisni fotografski val `~`

`waveMotion.ts` z meritvami `clientWidth`/`clientHeight` izračuna SVG pot iz kubičnih Bézier krivulj `C` in `S`. Leva/desna meja na namizju upoštevata širino fotografije; mobilna pot se giblje med približno 40 in 60 % širine in ima rezerviran zgornji pas za naslov. Ko se širina spremeni, se pot ponovno izmeri ob ScrollTrigger refresh.

Vsaka fotografija s kratkim zamikom sledi **isti krivulji** prek nameščenega `MotionPathPlugin`. Čas določa ScrollTrigger `scrub`, zato pomik nazaj obrne gibanje. Vstop, blaga povečava, rotacija in izstop so del istega timeline. Na namizju je rotacija približno ±7°, na manjši postavitvi približno ±3°. Fotografije tako dejansko potujejo desno, nazaj levo in spet proti sredini/desni; niso le fade-in elementi z naključnimi odmiki.

Tri sekvence:

| Sekvenca | Fotografije | Pin |
|---|---|---|
| Uvod → O nas | Cantus, Dobrodelnost | Brez |
| Projekti → dogodki | Kreativa, Jazz | Brez |
| Dogodki → galerija → članstvo | Ftrgatev, Kreativa, Jazz, Dobrodelnost, Pisarna | En sam, samo ≥1024 px in ≥680 px višine |

Glavna sekvenca se pripne pod **izmerjeno** višino headerja za približno 2,2 višine viewporta dodatnega scrolla. `invalidateOnRefresh` in `onRefreshInit` posodobita geometrijo. `ScrollStory.tsx` je majhen adapter za to galerijo; stara ločena pin scena ni več aktivna. Ni podvojenih pinov ali novega scroll event renderiranja.

Premikajoči se fotografski sloj je skrit bralniku zaslona in nima fokusljivih povezav. Ločen vedno dostopen seznam pod njim vsebuje opise in povezave na vire; uporabnik se s tipkovnico ne znajde na nevidnem premikajočem se napisu.

### Reduced motion in manjši zasloni

Na telefonu/tablici brez namiznih mer ni pina, pot je ožja, fotografije pa ohranijo berljive mere. Pri reduced motion ni GSAP vhodov, premikanja, pina, CSS nudge ali Lenis glajenja; fotografije se zložijo v statično mrežo. Sprememba nastavitve med obiskom sproži čiščenje in pravilno novo postavitev. Izven animacije so okvirji določeni z razmerjem stranic in dimenzijami.

## Fotografije in preverjene vsebine

Ohranjen je izbor osmih lokalnih uradnih fotografij iz foto paketa. Izvirniki, JPEG in WebP v tej prenovi niso na novo obdelani ali izbrisani. Glavna hero fotografija je Ftrgatev, manjši sta Cantus in KMŠ ODER. Dobrodelnost, Kreativa, jazz, Stand UP ter Pisarna se pojavljajo v pripadajočih vsebinah in galerijah. Glavna hero slika se nalaga s prednostjo, ostale lazy. `SmartImage` ohranja rezervo in označen fallback.

`kmsPhotos.ts` ostaja en vir za poti, mere, alt in izvor; novi **`kmsImages.ts`** doda kategorijo, ime, uredniški podnapis ter predvidene umestitve. `EditorialPhoto` poskrbi za okvir in navedbo vira. Zamenjava ene datoteke/podatka v osnovnem katalogu se prenese tudi v obstoječe dogodke. Navodila so v README. [Izvor in uporabnikovo dovoljenje](PHOTO_IMPORT.md), [natančni viri fotografij](KMS_PHOTO_SELECTION.json). Trije portreti ostajajo barvni; dve nepotrjeni fotografiji še vedno nadomeščajo inicialke.

Sestava organov, vodje področij, naslov, e-pošta, telefon in ure so ponovno preverjeni po [KMŠ O nas](https://www.klub-kms.si/o-nas/) in [naslovnici KMŠ](https://www.klub-kms.si/) dne 4. 11. 2026. Podatki se ujemajo; posodobljen je datum pregleda. Tri novice zdaj vodijo do izvirnih člankov, objavljenih 4. 9. 2026:

- [Razpis za organe](https://www.klub-kms.si/vabilo-na-3-redno-skupscino-kluba-mariborskih-studentov-v-letu-2026-2-2-2/).
- [Razpis za svetnika ŠOLS](https://www.klub-kms.si/vabilo-na-3-redno-skupscino-kluba-mariborskih-studentov-v-letu-2026-2-2/).
- [Vabilo na skupščino](https://www.klub-kms.si/vabilo-na-3-redno-skupscino-kluba-mariborskih-studentov-v-letu-2026/).

Članek o organih je bil odprt in vsebinsko pregledan; drugi dve povezavi sta potrjeni na naslovnici in s HTTP 200. To niso nove napovedi. Imena, cene ali termini niso izmišljeni. Kontakt še vedno odpira `mailto`, newsletter je disabled demonstracija brez API. Za prihodnjo integracijo ostaja [obstoječi konkreten predlog](CONTACT_AND_NEWSLETTER.md).

## Dejanski preizkusi

Izvedeni lokalno v Chromu prek `chrome-devtools-cli`, **brez screenshotov**:

| Preverjanje | Rezultat |
|---|---|
| `npm install` | Uspešno, brez novih odvisnosti |
| `npm run typecheck` | Uspešno |
| `npm run build` | Uspešno; Vite 6.4.5, 1634 modulov |
| `npm run dev` | Uspešno zagnan na 127.0.0.1:5174 za Strict Mode pregled |
| 8 poti + 404 × 375/768/1024/1440 px | 36 kombinacij; po popravku tabličnega razmika brez zaznanih prelivanj, manjkajočih/dekodirno neuspešnih slik ali prekrivanja pregledanih uvodnih CTA/odstavkov s fotografijo |
| Lokalni slikovni viri | Brez fallbackov v matriki, po ena H1 na pot, veljavne membership povezave, disabled newsletter |
| Tipkovnica mobilnega menija | Enter odpre, Tab doseže prvi link, Escape zapre in vrne fokus, navigacija na O nas zapre meni |
| Vseh šest filtrov z Enter | 8 / 4 / 1 / 1 / 1 / 1 rezultatov, pravilna izbrana kategorija in status |
| Kontakt | Prazen obrazec neveljaven; štiri obvezna označena polja, pravilen mailto; brez pošiljanja |
| Sprotni reduced motion, štirje preklopi | 0/1/0/1 pin, Lenis pravilno izklopljen/vklopljen, statična mreža pri reduce; števci 45/753/29 |
| SPA prehodi Domov/O nas/Kontakt/Domov | Pin pravilno odstranjen in znova en sam, brez podvajanja |
| React razvojni Strict Mode | En pin in tri poti; pravilna H1 po dvojnem življenjskem ciklu efektov |
| Namizni val | 8 scroll vzorcev od 0 do 100 %; transformacije sledijo poti, vidnost/rotacija se spreminjata, stage pod headerjem, header y=0 |
| Zaključni responsive/motion pregled | 375×844, 768×1024, 1024×768, 1024×600, 1440×1000 × obe nastavitvi gibanja: 10 kombinacij brez prelivanja; statične galerije ostanejo v avtomatski višini, pin samo na dovoljenih merah, header ostane y=0 |
| Portreti | Trije lokalni portreti imajo `filter: none` |
| Konzola pri končnih interakcijah/Strict Mode | Brez zabeleženih error sporočil |

Produkcijski JS je približno 485,83 kB (163,14 kB gzip), CSS 57,78 kB (11,62 kB gzip). To so velikosti Vite gradnje, **ne** meritev hitrosti na telefonu ali Lighthouse rezultat. Skript lint/test ni, zato nista bili zagnani. Slikovni predogledi niso nastali.

## Ustvarjene in spremenjene datoteke

Nove:

- `src/editorial.css`
- `src/data/kmsImages.ts`
- `src/hooks/useGsapContext.ts`
- `src/animations/heroAnimations.ts`, `textReveals.ts`, `waveMotion.ts`
- `src/components/editorial/EditorialPhoto.tsx`, `Graphics.tsx`, `WaveGallery.tsx`, `ScrollConnector.tsx`
- `docs/EDITORIAL_REDESIGN_PLAN.md`, `docs/EDITORIAL_REDESIGN.md`

Spremenjene v tej prenovi:

- `src/components/Hero.tsx`, `Layout.tsx`, `ScrollStory.tsx`
- `src/pages/Home.tsx`, `About.tsx`, `Events.tsx`, `OtherPages.tsx`, `Membership.tsx`, `Opportunities.tsx`, `Contact.tsx`, `Newsletter.tsx`
- `src/data/about.ts`, `contact.ts`, `content.ts`
- `src/main.tsx`, `src/styles.css`, `index.html`
- `README.md`, `AGENTS.md`, `docs/BRAND_COLORS.md`, `CHANGELOG.md`, `SUBMISSION.md`, `CONTENT_CHECKLIST.md`, `ASSETS_AND_SOURCES.md`, `ABOUT_AND_SOURCES.md`, `CONTACT_AND_NEWSLETTER.md`, `SCROLL_STORY.md`, `CODEX_STEPS.md`

Spremembe iz predhodnega uvoza foto paketa in uporabnikove prenove s Copilotom so ohranjene; ne predstavljajo novih binarnih sprememb te prenove. `package.json` in odvisnosti niso spreminjani.

## Omejitve in naslednji pregled

To je delujoč prototip brez newsletter backend integracije ali javne objave te različice. Preizkusi uporabljajo namizni Chrome z emuliranimi merami; fizični dotik/trackpad, Safari/Firefox, celoviti WCAG audit in profiliranje šibkejših telefonov niso opravljeni. Primerjava z izvirnim PDF briefom ni mogoča, ker datoteka ni priložena. Vsebine ostajajo po obstoječem kontrolnem seznamu. Gostovanje zahteva SPA fallback.

Pred javno oddajo preveri fizične naprave, aktualnost vsebin in deljivo gostovanje. Pisave se še nalagajo od Google Fonts; za popolnoma lokalno stran jih je smiselno gostovati z licencami. Rezultati niso trditev o nagradah, FPS ali celotni skladnosti WCAG.

## Orodja in prispevek AI

Codex je analiziral priponko/projekt, napisal React/TypeScript/CSS in izvirno SVG kodo, sestavil GSAP časovnice/poti, vključil obstoječe lokalne fotografije, preveril primarne vire, izvedel native npm in Chrome DOM/tipkovnične preizkuse ter pripravil dokumentacijo. Uporabljena je bila veščina `chrome-devtools-cli`; pregled ni zajemal slik zaslona. Uradna tehnična referenca: [GSAP MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/).

AI ni ustvarjal fotografij, logotipa, oseb ali uradnih podatkov. Copilot pri tej prenovi ni bil uporabljen; njegov prejšnji uporabnikov prispevek (13fa094) ostaja zabeležen v CHANGELOG. Figma in imagegen nista bila uporabljena.
