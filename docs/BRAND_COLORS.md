# KMŠ — veljavni oblikovni sistem RED / WHITE

Najnovejše uporabnikovo navodilo ponovno potrjuje RED / WHITE (izvedeno 4. 11. 2026) in nadomešča monokromatsko smer koraka 02. Struktura, vse strani, scroll animacije, izrezi in sivinski prikaz fotografij ostanejo ohranjeni. Datoteke uporabnikovega logotipa in favicon niso spremenjene; placeholder ni uporabljen.

## Barve

| CSS spremenljivka | Barva | Uporaba |
|---|---|---|
| `--bg` | `#FFFFFF` | Osnovno ozadje |
| `--primary` | `#E32636` | Navigacija, hero, scroll scena, noga, gumbi in veliki naslovni poudarki |
| `--secondary` | `#FFF0F2` | Sekundarne svetle površine |
| `--ink` | `#181818` | Glavno besedilo |
| `--muted` | `#595959` | Berljivo sekundarno besedilo na beli/rožnati |
| `--surface` | `var(--secondary)` | Uvodi podstrani, poudarjene sekcije, kontaktni paneli, fallback |
| `--line` | `#E7BFC4` | Dekorativne ločnice iz iste rožnate družine |
| `--control-line` | `#9B6670` | Temnejše rožnate meje obrazcev in filtrov |
| `--inverse` | `var(--primary)` | Združljivo ime kontrastne površine; pomeni rdečo, ne črne |
| `--on-inverse` | `#FFFFFF` | Besedilo na rdeči |
| `--inverse-muted` | `#FFFFFF` | Tudi drobno sekundarno besedilo na rdeči ostane belo |
| `--inverse-line` | bela / 40 % | Dekorativne ločnice na rdeči |

Ni črnih UI ozadij ali temnih gradientov. Slikovni fallback je svetlo rožnat s temnim besedilom. Obstoječa črno-bela fotografija in temni obrisi v uporabnikovem logotipu ostanejo del nespremenjenih slikovnih datotek. `theme-color` v `index.html` je `#E32636`.

## Kontrast

Izračun iz relativne sRGB luminance, brez zaokroževanja pred primerjavo:

| Par | Razmerje | Uporaba |
|---|---|---|
| Bela / rdeča | 4,57 : 1 | Navigacija, hero, noga in gumbi; tudi drobno besedilo |
| Rdeča / bela | 4,57 : 1 | Beli CTA z rdečim napisom in hover gumbi |
| Rdeča / svetlo rožnata | 4,13 : 1 | Samo veliki, krepki naslovni poudarki; ne drobno besedilo |
| Temno besedilo / bela | 17,76 : 1 | Osnovna vsebina |
| Temno besedilo / rožnata | 16,06 : 1 | Podstrani, paneli in nadomestni prikazi |
| Sekundarno besedilo / bela | 7,00 : 1 | Opombe |
| Sekundarno besedilo / rožnata | 6,34 : 1 | Opombe in neaktiven newsletter |
| Meja kontrol / bela oziroma rožnata | 4,64 / 4,20 : 1 | Vnosna polja in filtri |

Bela je na rdeči izbrana tudi za sekundarno besedilo, ker svetlo rožnata na rdeči ne doseže 4,5 : 1 za običajno besedilo. Poudarki na rožnati so veliki krepki naslovi. Dekorativne ločnice niso edini način prepoznavanja kontrol; mobilni gumb ima poln bel rob. Pregled teh kombinacij ni celotna presoja WCAG.

## Tipografija, razmiki in postavitve

- DM Sans za besedilo; Space Grotesk 700 za naslove. Obstoječi Google Fonts uvoz ima lokalni Arial/sans-serif fallback.
- Naslovi uporabljajo `clamp()`, ločeni velikosti za hero in podstrani, prilagodljiv H2 in manjši H3. Daljše besedilo se prelomi; uvodni odstavki so omejeni na 44 rem.
- Razmiki iz lestvice 0,5 / 1 / 1,5 / 2 / 3 / 4,5 rem; sekcije 4–8 rem. Vsebina je na velikih zaslonih omejena na 1440 px, z odzivnim robom najmanj 20 px.
- Do 700 px: en stolpec kartic, novice ohranijo tudi datume. Po koraku 03 hero prikazuje eno sliko do 420 px, dve od 421 do 700 px in tri nad 700 px. Do 1100 px: mobilni meni, dve koloni ekipe in informativnih kartic, kontakt v eni koloni. Nad 1100 px: polna navigacija, trije stolpci ekipe in informacij, dva stolpca kontakta.
- Primarni gumbi so visoki najmanj 48 px, filtri in mobilni meni najmanj 44 px. Fokus ima kontrasten obris in dodatni rob; `aria-expanded`/`aria-controls` opisujeta meni, `aria-pressed` izbrani filter.
- Začasni hero/dogodkovni vizuali ostanejo z `grayscale(1)` prikazani nevtralno; po najnovejšem navodilu so portreti ekipe barvni (`filter: none`). Izvirni logotip je ohranjen.
- CSS ne dodaja transformacij na GSAP reveal elemente. Hover povečava slik je omejena na naprave s hoverjem in brez zmanjšanega gibanja. Reduced motion izklopi CSS animacije in prehode; GSAP ob nalaganju preskoči animacije.

## Preverjanje RED / WHITE — 4. 11. 2026

- `npm run typecheck` in `npm run build` uspešna; brez novih odvisnosti. Spremenjena sta samo CSS predstavitev in HTML theme-color, brez sprememb React komponent, poti ali GSAP logike v tej posodobitvi.
- Produkcijski predogled v Chromu s chrome-devtools-cli: vseh osem poti in 404 pri 320×780, 390×844, 768×1024, 1024×768, 1440×1000 in 1920×1080 (54 kombinacij). Pravilen naslov, brez vodoravnega prelivanja dokumenta ali pregledanih naslovov, povezav, polj in kartic.
- Na vseh poteh preverjena rdeča navigacija/noga, podstrani na svetlo rožnati, pravilni logotip/favicon ter odsotnost temnih CSS ozadij elementov. Hero in scroll scena sta rdeča, nadaljevanje v dogodke belo. Meni se odpre/zapre na kompaktnih zaslonih; aktivni filter je rdeč z belim besedilom, Glasba vrne štiri projekte. Newsletter ostaja onemogočen brez obrazca ali oddaje.
- Matrika zgoraj uporablja reduced motion: brez pin-spacerjev, vsebina vidna. Pri 390/1440 px brez zmanjšanega gibanja preverjeno dejansko spreminjanje transformacije fotografij z drsenjem, namizni pin, preoblikovanje/izginotje napisa, razkritje bele sekcije, odstranitev pina ob navigaciji in njegova ponovna vzpostavitev. Na telefonu brez pina.
- S tipkovnico Shift+Tab/Tab preverjen bel fokusni obris na rdeči navigaciji in temen obris na svetlem kontaktnem polju. S slikovnima error dogodkoma potrjen svetlo rožnat fallback s temnim besedilom; brez dejanske okvare omrežja.
- Brez napak v konzoli pri končnih interakcijah. Fizične naprave, drugi brskalniki, celotna presoja dostopnosti in meritev celotne zmogljivosti niso izvedeni. Ne gre za zaključen končni pregled 10.

AI: Codex je spremenil barvne tokene, poudarke, fallback in theme-color, preveril kontrast, odzivnost in scroll obnašanje ter uskladil dokumentacijo. Fotografije/logotip in GSAP implementacija niso spreminjani; GitHub Copilot ni bil uporabljen.

## Zgodovinsko preverjanje monokromatskega koraka 02 — 3. 11. 2026

Naslednji zapis in njegovi posnetki opisujejo prejšnjo paleto. Niso dokaz trenutnih barv.

V lokalnem Chromu s chrome-devtools-cli: vseh osem poti in 404 pri 320×780, 390×844, 768×1024, 1024×768, 1440×1000 in 1920×1080 (54 kombinacij). Vsi naslovi so prisotni, širina dokumenta ne presega viewporta, pregledani naslovi/gumbi/ploščice/polja se ne prelivajo.

Preverjeni še odpiranje/zapiranje menija, samodejno zapiranje po navigaciji, filter Glasba (dve kartici), vidno fokusno stanje, povratek na domačo stran z enim pin-spacerjem in odhod brez preostalih pin-spacerjev. Po popravku ni napak v konzoli pri teh interakcijah. Pri reduced motion ob nalaganju: nič pin-spacerjev, vsebina vidna, `scroll-behavior: auto`. Typecheck in build uspešna.

Fizične naprave, Safari/Firefox, celotna presoja dostopnosti ter dinamična sprememba reduced motion med obiskom še niso preverjeni. Vsebinske naloge iz audita 01 ostajajo odprte.

## Zgodovinsko: posodobitev po koraku 04
Korak 04 je povezal fotografsko kompozicijo z belim ozadjem dogodkov; ob ponovni potrditvi RED / WHITE je temno ozadje kompozicije zamenjano z rdečim. `ScrollStory` in `Reveal` uporabljata GSAP matchMedia, zato se reduced motion upošteva tudi ob spremembi med obiskom. Meritve in zgodovinski predogledi so v [SCROLL_STORY.md](SCROLL_STORY.md); starejše omejitve in posnetki opisujejo stanje ob posameznem koraku.

## Dekorativni glasbeni motivi — 4. 11. 2026

Tri lokalne izvirne SVG ilustracije (kitara, harmonika ter odrski bobni/mikrofon/kitara) dopolnijo svetla ozadja. Kitara je ob uvodu domače strani in nekaterih uvodih podstrani, harmonika ob članstvu/priložnostih in e-novicah, odrska oprema pa ob dogodkih in razkritju scroll zgodbe. Izvor in avtorstvo vektorske kode: [ASSETS_AND_SOURCES.md](ASSETS_AND_SOURCES.md).

Rdeče linije imajo opacity 0,12, na telefonih do 700 px pa 0,075 z manjšim in delno odrezanim motivom ob robu. Dekoracija je statična CSS podlaga, z isolation in z-index -1 znotraj sekcije, brez pointer dogodkov ali spremembe dimenzij. Veljavna postavitev pripete scene ostane absolutna. Vektorske podlage niso fotografije dogodkov ali vsebina za bralnike zaslona; alt opis ni potreben. Ni dodatnih animacij, SVG filtrov ali knjižnic. Tri datoteke skupaj merijo 4.609 B pred stiskanjem.

Pri konservativni predpostavki polne rdeče linije pod besedilom in 12 % opacity ostane kontrast temnega besedila na rožnati 13,49 : 1, sekundarnega 5,32 : 1 in velikega krepkega rdečega naslova 3,47 : 1. Beli gumbi in rdeče površine ostanejo neprosojni. To ni celotna presoja dostopnosti.

Typecheck in build uspešna. V Chromu vseh osem strani pri 390, 768 in 1440 px (24 kombinacij): veljavne/dekodirane lokalne SVG podlage, primerna opacity in plast, brez prelivanja ali oviranja CTA; sticky header in reduced motion ohranjena. Dodatno pri 1440 px brez reduced motion preverjeni en pin, razkritje dekorirane bele ploskve, naslov pod headerjem in čiščenje ob navigaciji. Brez napak v konzoli pri teh preizkusih. Predogledi so vizualno pregledani. Fizične naprave in drugi brskalniki niso preverjeni.

AI: Codex je napisal izvirne SVG poti in CSS postavitev, opravil kontrastne izračune, preveril prikaz s chrome-devtools-cli in pripravil dokumentacijo. Brez generiranja ali retuširanja fotografij; Copilot ni bil uporabljen.

## Fiksni števci in barvna ekipa — 4. 11. 2026
Pod hero na domači strani je »Napovednik dogodkov« s tremi fiksnimi uporabnikovimi vrednostmi: 45 — Števec projektov v 2023; 753 — Število članov; 29 — Število aktivistov. Vir je uporabnikovo sporočilo, ne potrjen aktualen API ali samodejno osveževan števec. Podatki so ločeni v `src/data/statistics.ts`.

`EventStatistics` animira cela števila od 0 do cilja z GSAP/ScrollTrigger ob prvem vstopu v pogled. Ob reduced motion so takoj prikazane končne vrednosti, tudi ob preklopu sredi animacije. Dostopna vrednost za bralnike zaslona ostane stalna; vmesna števila so aria-hidden. Številke imajo rezervirano širino in višino, mreža ima tri stolpce nad 700 px in enega na telefonu. Ob odhodu se animacija in njen sprožilec odstranita.

Portreti treh članov se prikazujejo v izvornih barvah; izrez, WebP/JPEG rezerva, bajti in stanje dovoljenj ostanejo ohranjeni. Drugi fotografski slogi se ne spreminjajo.

Preverjeno brez screenshotov v produkcijskem Chromu: širine 320, 390, 768 in 1440 px, naslov/vrstni red, oznake, vmesne in končne vrednosti, stabilne mere okvirjev, brez ponovitve ob vrnitvi z drsenjem ali prelivanja, dostopne končne vrednosti in trije barvni WebP portreti. Reduced motion ob nalaganju pri 320/1440 px in sprotni preklop med animacijo pokažeta 45/753/29. Preverjeni pripeta zgodba in trije prehodi O nas → Domov brez podvojenih sekcij/pinov ali napak v konzoli. Typecheck in build uspešna. Fizične naprave in drugi brskalniki niso preverjeni.

Vseh 45 slikovnih predogledov je na uporabnikovo zahtevo odstranjenih, povezave do njih so odstranjene. Novi predogledi/screenshoti se ne generirajo. Zgodovinski zapisi o prej pregledanih posnetkih niso več povezave do obstoječih datotek. Codex je pripravil števec, CSS in preverjanja ter dokumentacijo; Copilot ni bil uporabljen.
