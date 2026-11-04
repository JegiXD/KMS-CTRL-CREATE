# Mobilni prikaz in hamburger meni — 4. 11. 2026

Ciljna dopolnitev obstoječega editorial prikaza; brez nove navigacijske strukture, knjižnice ali spremembe poti. Barve, fotografije, podatki in scroll zgodba ostanejo ohranjeni.

## Izvedba

`Layout.tsx` uporablja tri dekorativne CSS črte v istem gumbu. Ob odprtju se zgornja/spodnja črta zavrtita v križec, srednja izgine; prehod 200 ms, opacity srednje črte 150 ms. Gumb ima 48×48 px, spreminjajoč se slovenski aria-label, aria-expanded in aria-controls. Funkcijska posodobitev stanja podpira hitre zaporedne pritiske.

Mobilna navigacija do 1100 px ostane preprost disclosure panel pod stalnim headerjem. Fade 180 ms in pomik 220 ms se lahko ob zapiranju obrneta brez časovnikov ali GSAP sprožilcev. Veliki linki (najmanj 48 px), svetlo rožnata aktivna vrstica z rdečim robom in ločen 52 px membership CTA izboljšajo preglednost. Menu panel ima lasten native scroll in spodnji safe-area odmik; max-height upošteva višino zaslona/headerja, da ostane CTA dosegljiv v ležeči postavitvi.

Zaprti mobilni nav je `inert`, zato povezave niso dosegljive s tipkovnico ali bralnikom zaslona niti med izhodnim prehodom. Visibility/opacity in pointer-events upravljajo vizualni panel. Pri namiznem breakpointu je inert odstranjen, odprto stanje ponastavljeno in nav spet običajno viden. Brez modalnega focus trapa: meni je ne-modalna navigacijska razširitev.

Escape vrne fokus na gumb. Klik zunaj zapre panel. Izbira povezave zapre meni tudi, ko je uporabnik že na isti strani; fokus se vrne na gumb, ob dejanski menjavi poti pa obstoječa logika prenese fokus na main. Zunanji membership CTA ostane dejanska uradna povezava.

Pri reduced motion ni prehodov hamburgerja/panela. Mobilni glavni hero CTA je polne širine; kontaktna polja imajo najmanj 1 rem pisavo, dekorativni hero sticker je premaknjen na fotografski del in safe-area robovi zaščitijo header. Namizni izgled ostane ohranjen.

## Preverjanje

- `npm run typecheck` in `npm run build` uspešna, brez novih odvisnosti.
- Chrome DOM pregled vseh osmih poti + 404 pri 375/768/1024/1440 px: 36 kombinacij brez zaznanih prelivanj, manjkajočih slik, odrezanih uvodnih fotografij ali pregledanih prekrivanj CTA.
- Meni: 320×700, 375×844, 430×932, 768×1024, 700×360 z obema nastavitvama gibanja — 10 kombinacij. Preverjeni transformacije treh črt med/po prehodu, odprto/zaprto stanje, inert, 48 px gumb, dosegljiv CTA po native drsenju in panel znotraj viewporta. Brez vodoravnega overflowa.
- Dejanska tipkovniška zaporedja Enter/Tab/Enter preverijo zapiranje ob izbiri Domov na isti strani; Escape vrne fokus; navigacija na O nas zapre meni in fokusira main-content.
- Resize iz odprtega mobilnega menija na 1440 px vrne običajno namizno navigacijo, brez inert stanja. Konzola pri zaključnem pregledu brez error sporočil.
- Preizkusi so emulirane mere v namiznem Chromu prek chrome-devtools-cli. Fizični dotik, iOS/Safari in realne safe-area naprave niso neposredno preverjeni. Brez screenshotov ali generiranja slikovnih predogledov.

Datoteke: `src/components/Layout.tsx`, `src/editorial.css` in dokumentacija. AI: Codex je napisal React/CSS prilagoditve, izvedel npm in Chrome DOM/tipkovnične preizkuse ter dokumentiral rezultate. Brez imagegen, Copilota ali drugih novih orodij.
