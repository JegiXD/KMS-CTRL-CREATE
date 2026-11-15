# KMŠ Editorial – Interaktivna spletna podoba Kluba mariborskih študentov

Odziven, interaktiven spletni prototip za predstavitev Kluba mariborskih študentov (KMŠ). Projekt združuje uredniško zasnovo, preverjene vsebine, lokalne fotografije in scroll zgodbo ter obiskovalca usmerja do dogodkov, članstva in možnosti sodelovanja.

| Podatek | Stanje |
|---|---|
| **Status** | Delujoč prototip; javna produkcijska objava ni potrjena |
| **Avtor** | Tilen Jäger |
| **Natečaj** | CTRL+CREATE 2026 |
| **Živa predstavitev** | GitHub Pages je pripravljen; URL bo aktiven po javni objavi repozitorija in prvem workflowu |
| **GitHub** | [JegiXD/KMS-CTRL-CREATE](https://github.com/JegiXD/KMS-CTRL-CREATE) — vidnost repozitorija je treba nastaviti na javno |
| **Predogled** | Posnetkov zaslona v repozitoriju ni |

## O projektu

Projekt je nastal kot predlog nove spletne podobe KMŠ za natečaj CTRL+CREATE. Namen prenove je obiskovalcu olajšati razumevanje delovanja kluba in odkrivanje projektov, ekipe, članstva ter načinov sodelovanja. Namesto zgolj informativnega seznama vsebin stran gradi povezano zgodbo o mladih, glasbi, ustvarjanju in skupnosti v Mariboru.

Izbrana je eksperimentalna uredniška zasnova, ker omogoča izrazit ritem in hierarhijo: veliki naslovi pritegnejo pozornost, asimetrične fotografske kompozicije pa poudarijo ljudi in projekte. Rdeča barva ohranja prepoznavno identiteto KMŠ; gibanje povezuje posamezne vsebinske sklope, ne da bi nadomestilo navigacijo ali besedilo. Odzivna postavitev, kratki opisi in jasni pozivi so namenjeni predvsem mladim obiskovalcem, hkrati pa ohranjajo dostop do praktičnih informacij.

## Oblikovni koncept

Vizualni sistem je svetla, eksperimentalna digitalna revija: velika kondenzirana tipografija, asimetrični fotografski razporedi, ravni robovi, plastenje fotografij, izvirne ročne SVG-poteze in povezane sekcije. Fotografije, tipografija in animacije skupaj pripovedujejo o KMŠ; referenčne zasnove so služile kot navdih za uredniški značaj, ne kot vir za kopiranje znamke ali fotografij.

Vrstni red slogovnih datotek je pomemben: `src/main.tsx` najprej naloži `styles.css`, nato `editorial.css`, ki določa trenutno paleto in uredniško tipografijo.

| Token | Vrednost | Vloga |
|---|---|---|
| `--primary` | `#E32636` | Primarna identitetna rdeča |
| `--deep-red` | `#B91F2D` | Globlja rdeča za manjše poudarke in kontrole |
| `--secondary` | `#FFEAED` | Svetlo rožnate poudarjene površine |
| `--surface` | `#FFF4F5` | Mehka površina panelom in fotografijam |
| `--bg` | `#FFFAF8` | Topla »coconut white« osnovna podlaga |
| `--ink` | `#171717` | Glavno besedilo |
| `--muted` | `#595959` | Sekundarno besedilo |
| `--navy` | `#172D4D` | Omejen poudarek na nalepkah, plakatu, obrobi in fokusu |

Anton je namenjen velikim naslovom, DM Sans tekočemu besedilu, Space Grotesk pa predvsem imenom in informacijski hierarhiji. Pisave se nalagajo prek Google Fonts; na voljo so sistemske nadomestne pisave. Portreti ekipe ostanejo barvni, projektne fotografije pa so praviloma sivinske z barvnim poudarkom ob interakciji. Podrobnosti in kontrastne vrednosti so v [dokumentu o barvah](docs/BRAND_COLORS.md).

## Animacije in interaktivna izkušnja

- **Uvodna animacija:** `heroAnimations.ts` z GSAP razkrije besedilne vrstice in umiri fotografski kolaž. CTA ostane dostopen; časovnica je v projektnih preverjanjih izmerjena na približno 0,67 s.
- **Besedilni razkritji:** `textReveals.ts` uporabi kratke ScrollTrigger prehode. Interaktivne vsebine niso skrite z začetno prosojnostjo.
- **Fotografska zgodba:** tri galerije na domači strani povezujejo vsebinske sklope. `waveMotion.ts` izračuna odzivno kubično Bézierjevo SVG-pot; GSAP `MotionPathPlugin` premika fotografije po njej, `ScrollTrigger` pa veže napredek na drsenje. Zadnja, glavna galerija ima največ en pin, samo pri širini vsaj 1280 px in višini vsaj 760 px. Dodatna dolžina pina je približno 1,15 višine vidnega polja. Ostali prehodi nimajo pina.
- **Premikanje fotografij:** gre za dejansko gibanje po ukrivljeni poti (v obliki uredniškega vala `~`), ne le za običajen statičen parallax. Postavitev, odmik in rotacija so prilagojeni manjšim zaslonom.
- **Hover in navigacija:** fotografije, povezave, filtri in mobilni meni imajo odzive na interakcijo. Mobilni meni se upravlja z gumbom z `aria-expanded` in `aria-controls`, podpira Escape ter zapiranje ob navigaciji.
- **Gladko drsenje:** Lenis je povezan z enim GSAP tickerjem. Ob `prefers-reduced-motion` se gladko drsenje izklopi.
- **Čiščenje:** `useGsapContext` omeji animacije na komponento, uporablja `matchMedia`, podpira media-query spremembe in odstrani sprožilce ob unmountu. Osvežitve meritev so združene prek `refreshScheduler.ts`.

Pri `prefers-reduced-motion` so galerije statične, pin in animacijski prehodi se izklopijo, bistveno besedilo in kontrole pa ostanejo vidni. Dodatne podrobnosti in pretekli preizkusi so v [opisu prenove](docs/EDITORIAL_REDESIGN.md) in [optimizaciji animacij](docs/ANIMATION_UX_OPTIMIZATION.md).

## Strani in funkcionalnosti

| Pot | Vsebina in funkcionalnost |
|---|---|
| `/` | Uvodni kolaž, števci 45 / 753 / 29, zgodba o KMŠ, projekti, valovne galerije, članstvo, priložnosti, arhivske novice in e-novice |
| `/o-nas` | Poslanstvo, ekipa, področja dela, skupščina ter poimenski seznami upravnega odbora, nadzorne komisije in častnega razsodišča |
| `/dogodki` | Osem projektov s kategorijskimi filtri, števci rezultatov in povezavami na uradne predstavitve; ni koledar prihodnjih terminov |
| `/novice` | Arhivske objave iz septembra 2026 s povezavami na izvirne članke |
| `/clanstvo` | Pojasnila članstva in povezava na [uradni obrazec KMŠ](https://studentski-klubi.si/public-forms/jui1g3swbxz) |
| `/priloznosti` | Aktivizem, predlaganje idej in sodelovanje pri projektih; CTA-ji pripravijo e-poštni osnutek |
| `/kontakt` | Uradni kontaktni podatki, uradne ure, družbene povezave, e-poštni osnutek in vdelan Google Maps zemljevid lokacije |
| `/newsletter` | Razlaga stanja prijav in uradni kanali; demonstracijska polja so onemogočena |
| Neznana pot | Stran 404 z možnostjo vrnitve na domov |

Števci na domači strani so fiksne vrednosti, ne podatki v živo. Kontaktni obrazec odpre `mailto` osnutek in sporočila ne pošlje sam. CTA-ji za priložnosti prav tako odprejo uporabnikov e-poštni program. Newsletter nima povezane storitve, ne sprejema naslovov in ne prikazuje lažnega uspeha. Članstvo odpre zunanji obrazec; njegova oddaja v tem projektu ni integrirana ali potrjena.

## Tehnologije

| Tehnologija | Uporaba |
|---|---|
| React 19 | Uporabniški vmesnik in komponente |
| TypeScript 5.7 | Tipizacija aplikacijske kode |
| Vite 6 | Razvojni strežnik in produkcijska gradnja |
| React Router 7 | Poti in navigacija v enostranski aplikaciji |
| GSAP 3 | Časovnice in animacije |
| ScrollTrigger | Scroll prehodi, razkritja in edini namizni pin |
| MotionPathPlugin | Premikanje fotografij po izračunani Bézierjevi poti |
| Lenis | Gladko kolesno drsenje, povezano z GSAP |
| CSS | Postavitve, oblikovni tokeni, odzivnost in preprosti prehodi; Tailwind ni uporabljen |
| Lucide React | Ikone v vmesniku |
| Git / GitHub | Različice izvorne kode; repo je zaseben |

Verzije odvisnosti so navedene v `package.json` in natančneje zaklenjene v `package-lock.json`. Projekt ne vsebuje ločenega avtomatiziranega testnega ali lint skripta.

## Struktura projekta

```text
.
├── docs/                         # Viri, prenova, dostopnost, zgodovina in oddaja
├── public/
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── assets/
│       ├── branding/             # Logotip KMŠ
│       ├── community/            # Lokalni prizori skupnosti
│       ├── decor/                # Izvirne SVG dekoracije
│       ├── events/               # JPEG/WebP projektne fotografije
│       ├── gallery/              # Dodatni galerijski prizori
│       ├── hero/                 # Slike za uvodni kolaž
│       └── team/                 # Portreti in označena profilna ilustracija
├── scripts/                      # Python orodja za pripravo/pregled fotografij
├── src/
│   ├── animations/               # Hero, reveal, valovna pot, refresh scheduler
│   ├── components/
│   │   ├── editorial/            # Fotografije, grafika, galerije, lokacija
│   │   └── ...                   # Layout, navigacija, skupne komponente
│   ├── data/                     # Vsebina, kontakti, organi, slikovni katalogi
│   ├── hooks/                    # useGsapContext
│   ├── pages/                    # Vsebina posameznih poti
│   ├── utils/                    # Pomožne funkcije, npr. sestava mailto
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── editorial.css
├── KMS-Foto-Paket/               # Lokalni arhiv izvirnikov; ni v public/dist
├── index.html
├── package.json
└── vite.config.ts
```

`src/data/kmsPhotos.ts` vodi datoteke, opise, dimenzije, navedbe in vire. `kmsImages.ts` jih poveže z uredniškimi umestitvami, `kmsPeopleImages.ts` pa s preverjenimi profili. Izvirniki v `KMS-Foto-Paket/` so ločeni od datotek, ki jih Vite objavi iz `public/`.

## Namestitev in lokalni razvoj

**Predpogoji:** Node.js 20 ali novejši in npm. Zahteva Node 20 je projektno priporočilo; v `package.json` ni določena kot `engines`.

```sh
npm ci
npm run dev
```

Vite izpiše lokalni naslov. Za druge ukaze:

| Ukaz | Namen |
|---|---|
| `npm run typecheck` | Preverjanje TypeScript tipov |
| `npm run build` | Preverjanje TypeScript projekta in produkcijska gradnja v `dist/` |
| `npm run preview` | Lokalni predogled zadnje produkcijske gradnje |

Skriptov `npm test`, `npm run lint` ali enakovrednega avtomatiziranega testnega nabora projekt ne vsebuje. `npm run preview` ni produkcijsko gostovanje. Repozitorij vsebuje GitHub Actions workflow za GitHub Pages (`.github/workflows/deploy-pages.yml`), Vite pa je nastavljen na pot `/KMS-CTRL-CREATE/`. Po nastavitvi **Settings → Pages → GitHub Actions** in potisku na `main` bo predvideni URL `https://jegixd.github.io/KMS-CTRL-CREATE/`. Workflow v `dist/` doda tudi `404.html`, da neposredni obiski SPA-poti vrnejo aplikacijo.

## Posnetki zaslona

V repozitoriju trenutno ni posnetkov aplikacije. Zato README ne kaže na neobstoječe datoteke. Po pridobitvi dovoljenja za ustvarjanje predogledov bi jih bilo mogoče dodati v `docs/screenshots/`; v tem izvodu predogledi niso ustvarjeni ali shranjeni.

## Odzivnost in dostopnost

Postavitve prilagajajo kolaže, galerije, navigacijo, obrazce in sezname zaslonom telefona, tablice in namizja. Navigacija ima preskočno povezavo, vidni fokus in tipkovniško podporo; pot SPA prenese fokus na glavno vsebino. Uporabljeni so semantični naslovi, opisni `alt` za vsebinske fotografije, ustrezna ARIA stanja mobilnega menija in filtrov ter obvestilo o številu filtriranih projektov. Dekorativni SVG-ji so izločeni iz drevesa dostopnosti in ne prestrezajo klikov.

Reduced motion izklopi Lenis, pin, valovno gibanje in prehode, ki niso nujni; statične fotografije in ključne vsebine ostanejo na voljo. Dokumentirani responsive pregledi uporabljajo emulirane mere v namiznem Chromu. Fizične naprave, Safari/Firefox in celovita neodvisna presoja WCAG niso potrjeni.

## Znane omejitve in nadaljnje delo

- Javna predstavitvena povezava ni znana; zaseben GitHub repo ni nadomestilo za demo.
- Newsletter je demonstracija brez zbiranja podatkov. Aktivacija potrebuje potrjen endpoint/storitev, veljavno privolitev in ustrezno obvestilo o zasebnosti.
- Kontakt in tri poti sodelovanja odpirajo e-poštni program; pošiljanje ni samodejno.
- Članstvo vodi na zunanji uradni obrazec; zunanja oddaja ni bila preizkušena.
- Novice so arhivske; stran dogodkov predstavlja projekte, ne aktualnega koledarja. Uradne podatke je treba pred oddajo ponovno preveriti.
- Pisave in zemljevid uporabljajo zunanje storitve (Google Fonts in Google Maps); njihova dosegljivost je odvisna od omrežja in pogojev ponudnikov.
- Za objavo še manjkajo gostovanje, fizično testiranje naprav, preverjanje drugih brskalnikov, celovit pregled dostopnosti in primerjava s PDF-jem briefa, ki ga ni v repozitoriju.
- Fotografije in logotip ostajajo gradiva KMŠ oziroma drugih navedenih virov. Uporabnikovo poročilo o dovoljenju za KMŠ fotografije je dokumentirano, vendar pisno pravno dokazilo ni priloženo.

## Avtorstvo in razvoj projekta

**Avtor: Tilen Jäger.** Avtor je določil cilj in ustvarjalno smer, opredelil zahtevano uporabniško izkušnjo, usmerjal izbiro oblikovnih rešitev ter iterativno pregledoval in potrjeval spremembe. Koda in projektna dokumentacija beležita tudi AI-podprto implementacijo; zato README ne pripisuje avtorju osebnega programiranja vsake komponente.

Pregled prispevkov in obseg potrjenih navedb sta v [dokumentu o avtorstvu](docs/AUTHORSHIP.md), transparentna razčlenitev orodij pa v [dokumentu o AI-podprtem razvoju](docs/AUTHORSHIP.md#uporaba-umetne-inteligence-pri-razvoju).

## Dokumentacija

- [CTRL+CREATE 2026 — osnutek prijave in kontrolni seznam](docs/CTRL_CREATE_SUBMISSION.md)
- [Avtorstvo, uporaba AI in licenčne opombe](docs/AUTHORSHIP.md)
- [Viri fotografij in navedbe](docs/ASSETS_AND_CREDITS.md)
- [Razvojna zgodovina](docs/DEVELOPMENT_HISTORY.md)
- [Uredniška prenova in izvedba animacij](docs/EDITORIAL_REDESIGN.md)
- [Oblikovna paleta in kontrast](docs/BRAND_COLORS.md)
- [Vsebinski viri in podatki](docs/ABOUT_AND_SOURCES.md), [projekti](docs/EVENTS_AND_SOURCES.md), [kontakt in e-novice](docs/CONTACT_AND_NEWSLETTER.md)
- [Fotografski uvoz in dovoljenja](docs/PHOTO_IMPORT.md), [pregled fotografij](docs/PHOTOGRAPHY_AUDIT.md)

Podrobna prijavna dokumentacija je v [docs/CTRL_CREATE_SUBMISSION.md](docs/CTRL_CREATE_SUBMISSION.md). Pred oddajo je treba dodati javni demo URL, preveriti končno stanje vsebine in pridobiti oziroma pregledati izvirni natečajni brief.
