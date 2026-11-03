# OSNUTEK ODDAJE CTRL+CREATE

## Izvorna koda

Posodobitev 3. 11. 2026: na GitHub so vključeni zaključeni koraki 01–05, evidenca virov in predogledi. Pred nalaganjem sta typecheck in build ponovno uspela.
[GitHub — JegiXD/KMS-CTRL-CREATE](https://github.com/JegiXD/KMS-CTRL-CREATE), zasebni repozitorij, veja `main`. To ni deljiva javna povezava na gostujoči prototip. Git pripravo in nalaganje je na uporabnikovo zahtevo izvedel Codex z obstoječo GitHub prijavo; GitHub CLI in Copilot nista bila uporabljena. Pred nalaganjem sta typecheck in build uspela.

## Ideja (osnutek, pregledaj in prilagodi pred oddajo)
Novo spletno podobo Kluba mariborskih študentov sem zasnoval kot digitalno zgodbo o skupnosti, ki povezuje mlade v Mariboru. Po usmeritvi v koraku 02 sem izbral črno-belo-sivo vizualno identiteto, veliko tipografijo in prostor za fotografije študentskega življenja. Temen uvod in zaključek obdajata svetle vsebinske sekcije z jasnimi razmiki. Trenutno so na teh mestih abstraktni začasni vizuali. Namen takšne postavitve je že ob prvem obisku pokazati energijo dogodkov in občutek pripadnosti. Posebno pozornost sem namenil povezanim animacijam med scrollanjem, kjer se posamezni prizori vsebinsko in vizualno nadaljujejo v naslednje sekcije. Pri tem je cilj, da animacije podpirajo preglednost, ne pa otežujejo uporabe.

Obiskovalci lahko hitro odkrijejo, kaj KMŠ počne, prebrskajo projekte in novice, spoznajo začetni prikaz ekipe ter poiščejo možnosti sodelovanja. Pomemben del je tudi jasna pot do uradnega obrazca za včlanitev. Navigacija vsebuje mobilno postavitev, saj je to za študentsko občinstvo bistveno. Zasnovo sem pripravil tako, da je mogoče brez večjih posegov zamenjati začasne vizualne elemente z originalnimi fotografijami; uporabnikov logotip je že vključen. Rešitev potrebuje še posodobitev ekipe in organov, povezave na posamezne novice, testiranje na napravah ter povezavo s sistemom za e-novice. Kontakt odpre e-poštni program, newsletter pa je jasno označena demonstracija brez pošiljanja podatkov.

Končni cilj ni zgolj estetska prenova, temveč občutek, da obiskovalec v nekaj sekundah razume, zakaj se je vredno vključiti v KMŠ.

## Orodja (prilagodi dejansko uporabljenim)
- ChatGPT: načrt, struktura, vsebinski predlogi, začetni scaffold in dokumentacija.
- Codex: audit 01 — pregled kode in dokumentacije, `npm install`, preverjanje tipov in produkcijske gradnje, preverjanje lokalnih slikovnih poti in kontaktnega `mailto`, primerjava javnih virov ter uskladitev dokumentacije. Brez sprememb vizualne smeri ali izvorne kode aplikacije.
- Codex: korak 02 — poenotenje CSS sistema po novi monokromatski usmeritvi, dostopna stanja menija/filtrov, popravek časa čiščenja GSAP in preverjanje odzivnosti ter interakcij s chrome-devtools-cli. Ponovno izvedena typecheck in build.
- Codex: korak 03 — samostojna hero komponenta, kratko uvodno besedilo in CTA za članstvo, lokalni triptih s tremi/dvema/enim stolpcem, prednostno nalaganje sredinske slike in preverjanje v Chromu. Fotografije niso bile ustvarjene ali pridobljene; uporabljeni so obstoječi označeni začasni vizuali.
- Codex: korak 04 — povezana GSAP timeline z razširitvijo lokalnih slik, preoblikovanjem napisa in razkritjem uvoda v dogodke; odzivno pripenjanje, sprotni reduced motion tudi v Reveal, preverjanje stabilnosti postavitve ter čiščenja ob navigaciji s chrome-devtools-cli.
- Codex: korak 05 — preverjanje osmih neposrednih uradnih projektnih strani, uredniški povzetki opisov, kategorije, števci in kartice, dostopna ponastavitev ter preverjanje tipkovnice, filtriranja in odzivnosti v Chromu.
- GitHub Copilot: pri korakih 01–05 ni bil uporabljen.
- React, TypeScript, Vite, GSAP ScrollTrigger, CSS.

## Za končno oddajo
- [ ] Deljiva javno dostopna povezava na delujoč prototip
- [ ] Opis ideje 150–300 besed
- [ ] Seznam dejansko uporabljenih AI in razvojnih orodij
- [ ] Vse podstrani in CTA testirani
- [ ] Odobrene fotografije in uradni logotip
- [ ] Potrjeni podatki in pravna obvestila
- [ ] Rok 14. 12. 2026

## Stanje po auditu 01 (3. 11. 2026)
Namestitev, `npm run typecheck` in `npm run build` so uspeli (Node.js 22.15.0, npm 10.9.2). To ne potrjuje končne oddaje: brskalniški pregled, mobilne naprave, dostopnost, delovanje zunanjih obrazcev in izvirni PDF niso bili preverjeni. Seznam odprtih vprašanj in preverjeni javni viri so v `CHANGELOG.md`.

## Stanje po koraku 02 (3. 11. 2026)
Izveden lokalni brskalniški pregled vseh poti pri šestih širinah, brez vodoravnega prelivanja. Preverjeni meni, filter, fokus, osnovni kontrasti, prehodi in reduced motion ob nalaganju. Typecheck in build uspešna. Podrobnosti in predogledi so v `BRAND_COLORS.md`. Fizične naprave, drugi brskalniki, vsebinska točnost, zunanje storitve, javna objava in PDF ostajajo za končni pregled.

## Stanje po koraku 03 (3. 11. 2026)
Hero prikazuje velik naslov, kratek uvod, uradni CTA za članstvo in lokalne slike s pošteno oznako začasnih vizualov. Preverjenih 11 širin (320–1920 px), brez vodoravnega prelivanja; preizkušeni fallback brez spremembe višine slike, sidro do uvoda in prehodi med stranmi. Reduced motion ob nalaganju ohrani vidno vsebino brez pina in gladkega drsenja. Typecheck in build uspešna. Gre za lokalno preverjanje v namiznem Chromu; fizične naprave in ostale vsebinske/oddajne naloge ostajajo odprte.

## Stanje po koraku 04 (3. 11. 2026)
Povezana scroll scena je izvedena; naslov dogodkov nastane z razkritjem bele ploskve, seznam projektov pa se nadaljuje iz nje. Na telefonih in nizkih zaslonih ni pina, pri reduced motion so vsebine prikazane statično. Preverjene sprotne spremembe nastavitev gibanja in prelomov, drsenje naprej/nazaj ter ponavljajoča navigacija. Med merjenim namiznim prehodom je bil vsoten layout shift 0; to ni meritev celotnega nalaganja strani ali vseh naprav. Typecheck in build uspešna. Podrobnosti in predogledi so v [SCROLL_STORY.md](SCROLL_STORY.md). Odobrene fotografije, fizične naprave in preostale vsebinske/oddajne naloge ostajajo odprte.

## Stanje po koraku 05 (3. 11. 2026)
Vseh osem projektov ima opis po preverjeni uradni predstavitvi in neposredno povezavo. Stran jasno loči pregled projektov od koledarja prihodnjih izvedb; nepotrjeni termini in cene niso dodani. Viri so dokumentirani v [EVENTS_AND_SOURCES.md](EVENTS_AND_SOURCES.md). Filtri, števci, ponastavitev, tipkovnica in postavitev so preverjeni pri osmih širinah v Chromu. Typecheck in build uspešna. Fotografije ostajajo začasne; testiranje na fizičnih napravah in potrditev aktualnih terminov sta še odprta.
