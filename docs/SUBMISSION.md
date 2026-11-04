# OSNUTEK ODDAJE CTRL+CREATE

## Izvorna koda

Posodobitev 3. 11. 2026: na GitHub so vključeni zaključeni koraki 01–05, evidenca virov in predogledi. Pred nalaganjem sta typecheck in build ponovno uspela.
[GitHub — JegiXD/KMS-CTRL-CREATE](https://github.com/JegiXD/KMS-CTRL-CREATE), zasebni repozitorij, veja `main`. To ni deljiva javna povezava na gostujoči prototip. Git pripravo in nalaganje je na uporabnikovo zahtevo izvedel Codex z obstoječo GitHub prijavo; GitHub CLI in Copilot nista bila uporabljena. Pred nalaganjem sta typecheck in build uspela.

## Ideja (osnutek, pregledaj in prilagodi pred oddajo)
Novo spletno podobo Kluba mariborskih študentov sem zasnoval kot digitalno zgodbo o skupnosti, ki povezuje mlade v Mariboru. Po ponovni uporabnikovi potrditvi palete RED / WHITE sem izbral primarno rdečo, belo in svetlo rožnato s temnim besedilom, veliko tipografijo in prostor za fotografije študentskega življenja. Rdeč uvod in zaključek obdajata svetle vsebinske sekcije z jasnimi razmiki. Trenutno so na teh mestih abstraktni začasni vizuali. Namen takšne postavitve je že ob prvem obisku pokazati energijo dogodkov in občutek pripadnosti. Posebno pozornost sem namenil povezanim animacijam med scrollanjem, kjer se posamezni prizori vsebinsko in vizualno nadaljujejo v naslednje sekcije. Pri tem je cilj, da animacije podpirajo preglednost, ne pa otežujejo uporabe.

Obiskovalci lahko hitro odkrijejo, kaj KMŠ počne, prebrskajo projekte in novice, spoznajo ekipo in organe društva ter poiščejo možnosti sodelovanja. Pomemben del je tudi jasna pot do uradnega obrazca za včlanitev. Navigacija vsebuje mobilno postavitev, saj je to za študentsko občinstvo bistveno. Zasnovo sem pripravil tako, da je mogoče brez večjih posegov zamenjati začasne vizualne elemente z originalnimi fotografijami; uporabnikov logotip je že vključen. Rešitev potrebuje še dovoljenja za javno objavo portretov, povezave na posamezne novice, testiranje na napravah ter povezavo s sistemom za e-novice. Kontakt odpre e-poštni program, newsletter pa je jasno neaktiven predogled brez zbiranja podatkov.

Končni cilj ni zgolj estetska prenova, temveč občutek, da obiskovalec v nekaj sekundah razume, zakaj se je vredno vključiti v KMŠ.

## Orodja (prilagodi dejansko uporabljenim)
- ChatGPT: načrt, struktura, vsebinski predlogi, začetni scaffold in dokumentacija.
- Codex: audit 01 — pregled kode in dokumentacije, `npm install`, preverjanje tipov in produkcijske gradnje, preverjanje lokalnih slikovnih poti in kontaktnega `mailto`, primerjava javnih virov ter uskladitev dokumentacije. Brez sprememb vizualne smeri ali izvorne kode aplikacije.
- Codex: korak 02 — poenotenje CSS sistema po novi monokromatski usmeritvi, dostopna stanja menija/filtrov, popravek časa čiščenja GSAP in preverjanje odzivnosti ter interakcij s chrome-devtools-cli. Ponovno izvedena typecheck in build.
- Codex: korak 03 — samostojna hero komponenta, kratko uvodno besedilo in CTA za članstvo, lokalni triptih s tremi/dvema/enim stolpcem, prednostno nalaganje sredinske slike in preverjanje v Chromu. Fotografije niso bile ustvarjene ali pridobljene; uporabljeni so obstoječi označeni začasni vizuali.
- Codex: korak 04 — povezana GSAP timeline z razširitvijo lokalnih slik, preoblikovanjem napisa in razkritjem uvoda v dogodke; odzivno pripenjanje, sprotni reduced motion tudi v Reveal, preverjanje stabilnosti postavitve ter čiščenja ob navigaciji s chrome-devtools-cli.
- Codex: korak 05 — preverjanje osmih neposrednih uradnih projektnih strani, uredniški povzetki opisov, kategorije, števci in kartice, dostopna ponastavitev ter preverjanje tipkovnice, filtriranja in odzivnosti v Chromu.
- Codex: korak 06 — preverjanje ekipe in vseh treh organov na uradni strani, vizualni pregled slik, lokalni prenos treh portretov z evidenco izvora, dopolnitev poslanstva, strani in dokumentacije.
- Codex: korak 07 — preverjanje vsebinskih virov in zunanjega obrazca brez oddaje, neposredni CTA, razlaga ugodnosti ter tri poti sodelovanja z e-poštnimi osnutki, preverjanje odzivnosti in povezav.
- Codex: korak 08 — preverjanje kontaktov, ur in socialnih povezav, pošten mailto sestavljalnik, neaktiven newsletter predogled, načrt Mailchimp integracije z uradnimi viri in preverjanje postavitev ter odsotnosti oddaje.
- Codex: korak 09 — pregled lokalnih slik in uradnih virov, WebP izpeljanke treh portretov s Pillow, JPEG rezerva/fallback, alt opisi, dimenzije logotipa/favicona, popis in dokumentacija odprtih dovoljenj. Brez generiranja ali retuširanja fotografij in logotipa.
- Codex: ponovna potrditev RED / WHITE — barvni tokeni, poudarki, theme-color, pregled kontrasta, vseh poti in scroll animacij brez spreminjanja njihove strukture.
- GitHub Copilot: pri korakih 01–09 in ponovni potrditvi palete ni bil uporabljen.
- Codex: smooth scroll — Lenis integracija z enim GSAP tickerjem, sprotni reduced motion, ohranjena native sidra/dotik, prekinitev zagona ob navigaciji in brskalniška preverjanja.
- React, TypeScript, Vite, GSAP ScrollTrigger, Lenis, CSS.

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
Izveden lokalni brskalniški pregled vseh poti pri šestih širinah, brez vodoravnega prelivanja. Preverjeni meni, filter, fokus, osnovni kontrasti, prehodi in reduced motion ob nalaganju. Typecheck in build uspešna. Podrobnosti so v `BRAND_COLORS.md`. Fizične naprave, drugi brskalniki, vsebinska točnost, zunanje storitve, javna objava in PDF ostajajo za končni pregled.

## Stanje po koraku 03 (3. 11. 2026)
Hero prikazuje velik naslov, kratek uvod, uradni CTA za članstvo in lokalne slike s pošteno oznako začasnih vizualov. Preverjenih 11 širin (320–1920 px), brez vodoravnega prelivanja; preizkušeni fallback brez spremembe višine slike, sidro do uvoda in prehodi med stranmi. Reduced motion ob nalaganju ohrani vidno vsebino brez pina in gladkega drsenja. Typecheck in build uspešna. Gre za lokalno preverjanje v namiznem Chromu; fizične naprave in ostale vsebinske/oddajne naloge ostajajo odprte.

## Stanje po koraku 04 (3. 11. 2026)
Povezana scroll scena je izvedena; naslov dogodkov nastane z razkritjem bele ploskve, seznam projektov pa se nadaljuje iz nje. Na telefonih in nizkih zaslonih ni pina, pri reduced motion so vsebine prikazane statično. Preverjene sprotne spremembe nastavitev gibanja in prelomov, drsenje naprej/nazaj ter ponavljajoča navigacija. Med merjenim namiznim prehodom je bil vsoten layout shift 0; to ni meritev celotnega nalaganja strani ali vseh naprav. Typecheck in build uspešna. Podrobnosti so v [SCROLL_STORY.md](SCROLL_STORY.md). Odobrene fotografije, fizične naprave in preostale vsebinske/oddajne naloge ostajajo odprte.

## Stanje po koraku 05 (3. 11. 2026)
Vseh osem projektov ima opis po preverjeni uradni predstavitvi in neposredno povezavo. Stran jasno loči pregled projektov od koledarja prihodnjih izvedb; nepotrjeni termini in cene niso dodani. Viri so dokumentirani v [EVENTS_AND_SOURCES.md](EVENTS_AND_SOURCES.md). Filtri, števci, ponastavitev, tipkovnica in postavitev so preverjeni pri osmih širinah v Chromu. Typecheck in build uspešna. Fotografije ostajajo začasne; testiranje na fizičnih napravah in potrditev aktualnih terminov sta še odprta.

## Stanje po koraku 06 (3. 11. 2026)
Stran O nas vključuje preverjeno javno sestavo ekipe in organov, poslanstvo ter vodje področij. Viri in status portretov so v [ABOUT_AND_SOURCES.md](ABOUT_AND_SOURCES.md). Vključeni so trije portreti s potrjenim virom; dovoljenje za javno objavo še ni dokumentirano. Dve osebi sta prikazani z inicialkami. Typecheck in build uspešna.

Preverjeno tudi devet širin od 320 do 1920 px, pravilnost seznamov, sidrne povezave, trije lokalni portreti, dve kartici z inicialkami, fallback, navigacija in reduced motion. Brez vodoravnega prelivanja ali napak v konzoli pri teh preizkusih. Fizične naprave in drugi brskalniki še niso preverjeni.

## Stanje po koraku 07 (3. 11. 2026)
Članstvo in priložnosti imata jasne neposredne CTA za uradni obrazec, vsebinske ugodnosti po javnem viru ter aktivizem, predloge idej in sodelovanje. Tri različne e-poštne predloge se odprejo lokalno in se ne pošljejo samodejno. Typecheck in build uspešna; obe strani preverjeni pri osmih širinah, brez prelivanja, vključno s tipkovniškim odpiranjem pravega zunanjega obrazca. Obdelava prijave ostaja nepreverjena, zunanja aplikacija pa je med pregledom beležila napake. [Viri in omejitve](MEMBERSHIP_AND_SOURCES.md). Fizične naprave in drugi brskalniki niso preverjeni.

## Stanje po koraku 08 (3. 11. 2026)
Kontaktni podatki in ure so usklajeni s tremi neposredno pregledanimi uradnimi objavami, družbena omrežja pa s povezavami domače strani KMŠ. Kontakt ostaja mailto brez pošiljanja prek strežnika. Newsletter predogled ima onemogočene kontrole, brez oddaje ali lažnega uspeha, in je dosegljiv iz noge ter kontakta. [Viri, preverjanja in še neizveden predlog Mailchimp integracije](CONTACT_AND_NEWSLETTER.md). Typecheck in build uspešna; obe strani preverjeni pri devetih širinah. API, odobrena privolitev/politika in dejansko pošiljanje newsletterja ostajajo odprti.

## Stanje po koraku 09 (4. 11. 2026)
Tri WebP različice portretov so skupaj 32,5 % manjše od izvornih JPEG, brez spremembe izreza ali dimenzij 300 × 300 px. Izvorni bajti so ponovno primerjani z uradnimi datotekami in ostajajo nespremenjeni. Aplikacija uporablja lokalni WebP, JPEG rezervo in označen fallback. Uporabnikov logotip in favicon sta ohranjena; placeholder ni uporabljen. [Popis, viri, dovoljenja in preverjanja](IMAGE_REVIEW.md).

Typecheck in build uspešna. Produkcijski predogled treh strani s slikami preverjen pri sedmih širinah z reduced motion; povratek WebP/JPEG/fallback in stabilen okvir pri 390/1440 px ter namizna scroll scena/čiščenje pina brez zmanjšanega gibanja. Dovoljenja za javno objavo portretov in logotipa ostajajo nedokumentirana; hero in dogodki še uporabljajo začasne vizuale. Fizične naprave in drugi brskalniki niso preverjeni.

## Veljavno oblikovanje — ponovna potrditev RED / WHITE (4. 11. 2026)
Najnovejše navodilo nadomešča monokromatsko smer koraka 02. Navigacija, hero, scroll scena, noga in primarni gumbi uporabljajo `#E32636`; vsebina belo `#FFFFFF` in svetlo rožnato `#FFF0F2`, besedilo `#181818`. Ni črnih UI ozadij. Uporabnikov logotip, favicon, vse poti, vsebine in animacije ostajajo ohranjeni.

Typecheck in build uspešna; vseh osem poti in 404 pri šestih širinah, brez prelivanja, pravilne barve menija/filtrov in neaktiven newsletter. Scroll gibanje preverjeno pri 390/1440 px, s pinom samo na namizju in čiščenjem po navigaciji. [Barve, kontrasti in omejitve](BRAND_COLORS.md). Fizične naprave in drugi brskalniki še niso preverjeni. Prejšnji zapisi in predogledi opisujejo stanje ob posameznem koraku; to ni izvedba celotnega končnega pregleda 10.

## Smooth scroll (4. 11. 2026)
Lenis gladi miško/trackpad in je povezan z obstoječim GSAP tickerjem. Dotik in sidra ostanejo brskalnikova; reduced motion sproti izklopi glajenje. Centralizirana navigacija prekine stari zagon in ohrani neposredne URL fragmente. Typecheck in build uspešna; preverjenih 14 kombinacij strani/širin, wheel-driven GSAP, sidra, textarea, zoom in tipkovnica ter trije sprotni preklopi reduced motion. Wheel preizkusi so sintetični v namiznem Chromu; fizične naprave in drugi brskalniki niso preverjeni. [Izvedba in omejitve](SCROLL_STORY.md#smooth-scroll--4-11-2026). Paleta, struktura in slikovna sredstva so ohranjeni. Copilot ni bil uporabljen.

## Stalno viden header (4. 11. 2026)
Header ostaja pripet na vrh med drsenjem. Sidra in GSAP pin upoštevajo njegovo višino; mobilni meni je samostojno drsljiv in ohrani dostopen CTA na nizkem zaslonu. Typecheck in build uspešna. Vseh osem strani preverjenih pri štirih velikostih, scena še pri treh namiznih/tabličnih velikostih in reduced motion na nizkem zaslonu. [Izvedba in omejitve](SCROLL_STORY.md#stalno-viden-header--4-11-2026). Codex je izvedel CSS/React prilagoditve, pregled v Chromu in dokumentacijo; Copilot ni bil uporabljen.

## Dekorativni glasbeni motivi (4. 11. 2026)
Po uporabnikovem naročilu so dodane tri izvirne linijske SVG ilustracije kitare, harmonike ter odrske opreme. Codex je napisal vektorsko kodo in CSS; ne gre za prenesene fotografije, dejanske izvajalce ali nove uradne simbole KMŠ. Lokalna statična ozadja uporabljajo nizko opacity in ne ovirajo besedila ali klikov. Typecheck in build uspešna; osem strani preverjenih pri treh širinah ter dodatno namizni pin in navigacija. [Izvor](ASSETS_AND_SOURCES.md), [izvedba in predogledi](BRAND_COLORS.md#dekorativni-glasbeni-motivi--4-11-2026). Fizične naprave in drugi brskalniki niso preverjeni; Copilot ni bil uporabljen.

## Števci, barvni portreti in brez predogledov (4. 11. 2026)
Pod hero je »Napovednik dogodkov« s fiksnimi vrednostmi 45 / 753 / 29 in točnimi uporabnikovimi oznakami. Vir vrednosti je uporabnik, niso podatki v živo. GSAP ob vstopu animira do cilja; reduced motion pokaže končne številke, dostopne vrednosti ostanejo statične. Trije portreti ekipe so barvni, njihove datoteke in pravice se ne spreminjajo. Vseh 45 slikovnih predogledov je izbrisanih in novih ne ustvarjamo; dokumentacijske povezave so odstranjene.

Typecheck in build uspešna. V Chromu brez zajema slik preverjene štiri širine, vmesne/končne številke, stabilne mere in oznake, barvni portreti, reduced motion in čiščenje ob navigaciji. [Podrobnosti](BRAND_COLORS.md#fiksni-števci-in-barvna-ekipa--4-11-2026). Codex je izvedel React/CSS, izbris in preverjanja ter dokumentacijo; Copilot ni bil uporabljen. Fizične naprave in drugi brskalniki niso preverjeni.
