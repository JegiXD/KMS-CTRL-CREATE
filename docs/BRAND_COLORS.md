# KMŠ — oblikovni sistem / korak 02

Uporabnik je za korak 02 izrecno naročil črno-belo-sivo smer. To navodilo nadomešča prejšnjo paleto RED / WHITE. Datoteke uporabnikovega logotipa in favicon ostajajo ohranjene. Referenčni screenshot v tem koraku ni priložen; izvedba sledi besedilnemu festivalskemu/editorial konceptu.

## Barve

| CSS spremenljivka | Barva | Uporaba |
|---|---|---|
| `--bg` | `#FFFFFF` | Osnovno ozadje |
| `--ink` | `#181818` | Glavno besedilo |
| `--muted` | `#595959` | Sekundarno besedilo in poudarki naslovov |
| `--surface` | `#F2F2F2` | Uvodi podstrani, članstvo, scroll sekcija |
| `--line` | `#D1D1D1` | Dekorativne ločnice |
| `--control-line` | `#767676` | Meje obrazcev in filtrov |
| `--inverse` | `#101010` | Navigacija, hero, noga, primarni gumbi |
| `--on-inverse` | `#FFFFFF` | Besedilo na temnem ozadju |
| `--inverse-muted` | `#BDBDBD` | Sekundarno besedilo na temnem |
| `--inverse-line` | `#454545` | Dekorativne ločnice na temnem |

Preverjena kontrastna razmerja: glavno besedilo/bela 17,76 : 1, sekundarno besedilo/bela 7,00 : 1, sekundarno besedilo/svetlo siva 6,26 : 1, bela/temna 19,03 : 1, sekundarno besedilo/temna 10,13 : 1. Meja obrazca/bela je 4,54 : 1. Dekorativne ločnice ne označujejo kontrol. Meritve teh parov ne predstavljajo celotne presoje WCAG.

## Tipografija, razmiki in postavitve

- DM Sans za besedilo; Space Grotesk 700 za naslove. Obstoječi Google Fonts uvoz ima lokalni Arial/sans-serif fallback.
- Naslovi uporabljajo `clamp()`, ločeni velikosti za hero in podstrani, prilagodljiv H2 in manjši H3. Daljše besedilo se prelomi; uvodni odstavki so omejeni na 44 rem.
- Razmiki iz lestvice 0,5 / 1 / 1,5 / 2 / 3 / 4,5 rem; sekcije 4–8 rem. Vsebina je na velikih zaslonih omejena na 1440 px, z odzivnim robom najmanj 20 px.
- Do 700 px: en stolpec kartic, dva hero posnetka, novice ohranijo tudi datume. Do 1100 px: mobilni meni, dve koloni ekipe in informativnih kartic, kontakt v eni koloni. Nad 1100 px: polna navigacija, trije stolpci ekipe in informacij, dva stolpca kontakta.
- Primarni gumbi so visoki najmanj 48 px, filtri in mobilni meni najmanj 44 px. Fokus ima kontrasten obris in dodatni rob; `aria-expanded`/`aria-controls` opisujeta meni, `aria-pressed` izbrani filter.
- Fotografije/začasni JPG vizuali so z `grayscale(1)` prikazani nevtralno. Izvirni logotip je ohranjen.
- CSS ne dodaja transformacij na GSAP reveal elemente. Hover povečava slik je omejena na naprave s hoverjem in brez zmanjšanega gibanja. Reduced motion izklopi CSS animacije in prehode; GSAP ob nalaganju preskoči animacije.

## Preverjanje 3. 11. 2026

V lokalnem Chromu s chrome-devtools-cli: vseh osem poti in 404 pri 320×780, 390×844, 768×1024, 1024×768, 1440×1000 in 1920×1080 (54 kombinacij). Vsi naslovi so prisotni, širina dokumenta ne presega viewporta, pregledani naslovi/gumbi/ploščice/polja se ne prelivajo.

Preverjeni še odpiranje/zapiranje menija, samodejno zapiranje po navigaciji, filter Glasba (dve kartici), vidno fokusno stanje, povratek na domačo stran z enim pin-spacerjem in odhod brez preostalih pin-spacerjev. Po popravku ni napak v konzoli pri teh interakcijah. Pri reduced motion ob nalaganju: nič pin-spacerjev, vsebina vidna, `scroll-behavior: auto`. Typecheck in build uspešna.

Predogledi (z zmanjšanim gibanjem): [mobilni, celotna stran](previews/design-system-mobile.png), [tablični](previews/design-system-tablet.png), [namizni](previews/design-system-desktop.png).

Fizične naprave, Safari/Firefox, celotna presoja dostopnosti ter dinamična sprememba reduced motion med obiskom še niso preverjeni. Vsebinske naloge iz audita 01 ostajajo odprte.
