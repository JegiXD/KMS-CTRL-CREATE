# KMŠ / CTRL+CREATE — MONOCHROME

Konceptni odziven prototip spletne strani Kluba mariborskih študentov z izrazito festivalsko tipografijo in fotografskim triptihom. Po uporabnikovem navodilu za korak 02 je veljavna smer črna, bela in siva; ta zahteva nadomešča prejšnjo paleto RED / WHITE. Podrobnosti o barvah, tipografiji, razmikih in odzivnosti so v `docs/BRAND_COLORS.md`.

## Hiter zagon
1. Namesti Node.js 20 ali novejši.
2. V terminalu: `npm install`
3. Zaženi: `npm run dev`
4. Odpri lokalni naslov, ki ga izpiše Vite (običajno `http://localhost:5173`).
5. Pred oddajo: `npm run typecheck` in `npm run build`.

## GitHub
Repozitorij: [JegiXD/KMS-CTRL-CREATE](https://github.com/JegiXD/KMS-CTRL-CREATE) (zaseben; dostop zahteva dovoljenje lastnika). Glavna veja je `main`. Odvisnosti namesti z `npm install`; `node_modules`, `dist`, `.env` datoteke, lokalne IDE nastavitve in TypeScript predpomnilnik niso vključeni. GitHub repozitorij še ne pomeni javno gostujoče spletne strani.

Različica na GitHubu vključuje zaključene korake 01–05, skupaj z dokumentacijo virov in lokalnimi predogledi.

## Trenutno pripravljeno
- 8 navigacijskih poti: Domov, O nas, Dogodki, Novice, Članstvo, Priložnosti, Kontakt, Newsletter (slednji ni v navigaciji, vendar je dosegljiv na `/newsletter`).
- Responzivna navigacija, kartice dogodkov, filtriranje dogodkov, seznam novic, prikaz ekipe.
- Scroll GSAP animacija z `ScrollTrigger`, reveal animacije, `prefers-reduced-motion`.
- Lokalni uporabnikov logotip v navigaciji in favicon; stari `logo-placeholder.svg` ni uporabljen. Fotografije ostajajo začasni vizuali.
- Kontaktni obrazec odpre lokalni e-poštni program; newsletter je demo, ki **ne shranjuje podatkov**.

## Pomembno o slikah
V `public/assets` je **31 abstraktnih nadomestnih JPG vizualov**, ne dejanske fotografije KMŠ. Na iste poti kasneje prekopiraj uradne fotografije z dovoljenjem KMŠ. Če JPG manjka, aplikacija prikaže nadomestni okvir z oznako 'KMŠ / FOTO'. Logotip je priložil uporabnik; ločeno dokazilo o dovoljenju ni priloženo. Celoten popis v `docs/ASSETS_AND_SOURCES.md`.

## Audit 01 — 3. 11. 2026
`npm install`, `npm run typecheck` in `npm run build` so uspeli z Node.js 22.15.0 in npm 10.9.2. Napak tipov ali gradnje ni bilo; izvorna koda in vizualna smer sta ohranjeni. Statično je preverjenih vseh osem poti, 404 in obstoj 18 uporabljenih lokalnih slikovnih poti; ločen preizkus potrjuje kodiranje kontaktnega `mailto`.

Odprto: ekipa v prototipu se razlikuje od uradne strani, sestava organov še manjka, novice vodijo na domačo stran, newsletter nima integracije. Podrobnosti in viri so v `docs/CHANGELOG.md`. Pregled v brskalniku, na napravah in preverjanje izvirnega PDF briefa niso bili izvedeni; PDF v projektu ni priložen.

## Design system 02 — 3. 11. 2026
`src/styles.css` je urejen v enoten sistem nevtralnih barv, prilagodljive tipografije, razmikov, mrež, obrazcev in fokusnih stanj. Temen hero in noga dopolnjujeta svetlo vsebino; uporabnikov logotip in obstoječe strani so ohranjeni. Popravljeno je tudi čiščenje GSAP pripete sekcije ob prehodu med stranmi.

V Chromu je preverjenih vseh osem poti in 404 pri širinah 320, 390, 768, 1024, 1440 in 1920 px, brez vodoravnega prelivanja. Preverjeni so meni, filtriranje, fokus, osnovne kontrastne kombinacije in reduced motion ob nalaganju. Typecheck in build uspešna. [Predogledi in podrobnosti preverjanja](docs/BRAND_COLORS.md). Gre za emulacijo v namiznem Chromu; fizične naprave in drugi brskalniki še niso preverjeni.

## Hero 03 — 3. 11. 2026
Nova komponenta `Hero.tsx` združuje uvod, naslov »NE SAMO ŠTUDENTI. SKUPNOST.«, uradni gumb za včlanitev in lokalni triptih. Nad 700 px so prikazane tri slike, od 421 do 700 px dve, do 420 px pa poudarjena sredinska slika. Datoteke ostajajo začasni vizuali, kar je jasno označeno; novih fotografij ali zunanjih slikovnih povezav ni.

Sredinska slika se nalaga takoj s prednostjo `high`; preostali sliki in druge slike ohranijo lazy loading. Postavitev rezervira prostor tudi za `SmartImage` fallback. V Chromu preverjenih 11 širin od 320 do 1920 px, oba preloma, lokalne slike, povezava do uvoda, fallback, prehodi in reduced motion. Typecheck in build uspešna. [Predogled: telefon](docs/previews/hero-390.png), [dva stolpca](docs/previews/hero-600.png), [namizje](docs/previews/hero-1440.png). Fizične naprave in drugi brskalniki še niso preverjeni.

## Povezani scroll 04 — 3. 11. 2026
`ScrollStory.tsx` ponovi lokalne uvodne slike in jih poveže z uvodom v dogodke: slike se povečajo, napis »SKUPAJ.« se zmanjša in umakne, bela ploskev razkrije »DOŽIVI MARIBOR.« ter se nadaljuje v seznam projektov. En pin se uporablja samo nad 700 px širine in 600 px višine; na telefonih in nizkih ležečih zaslonih ostane naravni tok z blagim povečanjem slik.

Reduced motion izklopi scroll in reveal animacije tudi ob spremembi nastavitve med obiskom. Preverjeni drsenje nazaj, čiščenje ob navigaciji, prelomi in stabilnost postavitve; med izmerjenim namiznim prehodom ni bilo zaznanega layout shifta. Typecheck in build uspešna. [Izvedba, preverjanja in predogledi](docs/SCROLL_STORY.md).

## Dogodki 05 — 3. 11. 2026
Na `/dogodki` je vseh osem projektov z opisi, preverjenimi na neposrednih uradnih straneh KMŠ, in povezavo do vsake predstavitve. Dodani so tematske kategorije s števci, prikaz števila rezultatov in ponastavitev s povrnitvijo fokusa. Kartice se prilagodijo na dva oziroma en stolpec; uporabljajo obstoječe lokalne začasne vizuale.

Stran predstavlja projekte, ne koledarja prihodnjih izvedb; Ftrgatev izrecno povzema napoved iz leta 2025. Typecheck in build uspešna, vseh šest filtrov preverjenih pri osmih širinah od 320 do 1920 px. [Viri, omejitve in predogledi](docs/EVENTS_AND_SOURCES.md).

## Izziv CTRL+CREATE
Rok: **14. december 2026**. Ocena: UX/navigacija 25 %, vizualna podoba 25 %, vsebina 20 %, funkcionalnost 20 %, mobilna prilagoditev 10 %. Nujni elementi: predstavitev KMŠ in organov društva, dogodki/novice, članstvo, priložnosti, kontakt in družbena omrežja, newsletter. Oddaja: delujoč prototip, opis ideje 150–300 besed, orodja in deljiva povezava. Gostovanje na lastni domeni ni potrebno.

## Nadaljnji koraki
Preberi `AGENTS.md`, `docs/CODEX_STEPS.md`, `docs/CONTENT_CHECKLIST.md`, `docs/ASSETS_AND_SOURCES.md` in `docs/SUBMISSION.md`. Izvedi naloge v navedenem vrstnem redu.

## Orodja in avtorstvo
React + TypeScript + Vite + GSAP. Struktura in načrt sta nastala s pomočjo ChatGPT. Codex je izvedel audit 01, v koraku 02 poenotil CSS, popravil čiščenje GSAP in dostopna stanja kontrol ter preveril odzivnost v Chromu z orodjem chrome-devtools-cli. V koraku 03 je pripravil samostojno hero komponento, uvodno besedilo in odziven lokalni triptih ter preveril postavitve, fallback in povezave v Chromu. V koraku 04 je povezal scroll sceno z dogodki, dodal odzivno upravljanje animacij in sprotni reduced motion ter preveril drsenje, stabilnost in čiščenje. V koraku 05 je preveril uradne projektne vire, povzel opise, uredil kategorije in kartice ter preizkusil filtre in odzivnost. Posodobil je tudi dokumentacijo. GitHub Copilot pri teh korakih ni bil uporabljen. Avtor je odgovoren za pregled, testiranje in končno oddajo.


## Prejšnja posodobitev: KMŠ RED / WHITE (03. 11. 2026; paleta nadomeščena v koraku 02)
Pred korakom 02 je bila uporabljena rdeče-bela paleta. Po novem uporabnikovem navodilu je nadomeščena z nevtralno paleto. Priložen uporabnikov logotip ostaja v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Stari placeholder logotip ni uporabljen.
