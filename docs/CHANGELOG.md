# DNEVNIK SPREMEMB

Opomba 4. 11. 2026: vsi slikovni predogledi iz zgodovinskih zapisov so na uporabnikovo zahtevo izbrisani. Novih ne ustvarjamo.

## 2026-11-03 — GitHub posodobitev korakov 03–05

- Na uporabnikovo zahtevo pripravljeni in naloženi hero, povezana scroll zgodba ter stran dogodkov z dokumentiranimi viri in predogledi na vejo `main` repozitorija `JegiXD/KMS-CTRL-CREATE`.
- Pred nalaganjem ponovno uspešno izvedena typecheck in build ter pregled vsebine commita. Gradnja, odvisnosti in lokalne nastavitve ostajajo izključene.
- AI: Codex je pripravil commit in nalaganje z obstoječo Git prijavo; aplikacijska koda pri samem nalaganju ni dodatno spremenjena.

## 2026-11-03 — GitHub repozitorij

- Na uporabnikovo zahtevo pripravljena Git zgodovina z začetnim commitom na veji `main` in zasebni repozitorij `JegiXD/KMS-CTRL-CREATE`.
- `.gitignore` dopolnjen z `.idea/` in `*.tsbuildinfo`; odvisnosti, gradnja, skrivnosti iz `.env` in lokalne nastavitve so izključene.
- Pred nalaganjem ponovno uspešno izvedena `npm run typecheck` in `npm run build`. Brez sprememb izvorne kode aplikacije.
- AI: Codex je pripravil Git repozitorij, preveril vsebino za commit ter izvedel ustvarjanje repozitorija in nalaganje prek obstoječe GitHub prijave. GitHub CLI in Copilot nista bila uporabljena. Spletna stran ni javno objavljena.

- 2026-11-03: Ustvarjen novi začetni prototip KMŠ z monokromatsko grafično podobo in GSAP scroll zgodbo.

## 2026-11-03 — 01 / Audit

### Obseg in rezultat
- Pregledani `README.md`, `AGENTS.md`, vsi dokumenti v `docs/`, dodatni README v `src/` in `public/assets/`, konfiguracija, vse komponente, strani, podatki in CSS.
- Veljavna je poznejša smer RED / WHITE iz `AGENTS.md` in `docs/BRAND_COLORS.md`. Starejši monokromatski opisi so zgodovinski; vizualna smer, logotip, strani in GSAP animacije so ohranjeni. Izvorna koda aplikacije ni potrebovala popravkov.
- Usklajeni zastareli opisi palete in logotipa v README, evidenci sredstev, kontrolnem seznamu ter osnutku oddaje; dopolnjena izjava o uporabi AI.

### Izvedena preverjanja
- Okolje: Node.js `v22.15.0`, npm `10.9.2`. React Router zahteva Node.js >=20; navodilo za Node.js 20 ali novejši ustreza nameščenim odvisnostim.
- `npm install`: uspešno, dodan 1 paket; npm je osvežil `package-lock.json`.
- `npm run typecheck`: uspešno, brez napak.
- `npm run build`: uspešno, Vite `6.4.5`, 1603 modulov. Izhod: HTML 0,56 kB, CSS 12,10 kB, JS 400,69 kB (gzip JS 136,28 kB). Brez opozoril gradnje.
- Statični pregled: osem poti in 404, navigacija in povezave do članstva; vseh 18 referenc na lokalne slike/favicon obstaja, priloženih je 31 JPG vizualov.
- Izoliran preizkus dejanskega kontaktnega `onSubmit` iz prevedene TSX kode: `preventDefault`, naslovnik, šumniki, znak `&` v zadevi in prelomi vrstic v `mailto` so pravilni. Začetni sum o napačnih prelomih vrstic ni bil potrjen; kode nismo spreminjali. Preizkus ne potrjuje odpiranja lokalnega e-poštnega programa.
- GSAP uporablja `gsap.context` in `ctx.revert()` ob unmount; začetna nastavitev reduced motion preskoči animacije, CSS izklopi prehode in gladko drsenje. Sprememba sistemske nastavitve med obiskom in zmogljivost na napravah še nista preverjeni.

### Vsebinske ugotovitve in nadaljnje naloge
- [Uradna stran O nas](https://www.klub-kms.si/o-nas/), pregledana 3. 11. 2026, navaja Urbana Kavklerja kot predsednika, Jana Ozvaldiča kot podpredsednika ter drugačno sestavo ekipe od prototipa. Navaja tudi sestavo Upravnega odbora, Nadzorne komisije in Častnega razsodišča. Korak 06: uskladi podatke in pridobi odobrene fotografije; ne ustvarjaj neobstoječih datotek za nove člane.
- [Uradna domača stran](https://www.klub-kms.si/), pregledana 3. 11. 2026, potrjuje naslov Vetrinjska ulica 30 in `info@klub-kms.si`; navaja uradne ure pon.–čet. 7.00–14.00, pet. 6.00–12.00 ter telefon 040 985 088. To je javna objava, ne neposredna potrditev kluba; v koraku 08 potrdi aktualnost pred objavo.
- Naslovi treh novic in datumi so prisotni na uradni domači strani, povezave v prototipu pa vodijo na domačo stran namesto na posamezne objave. Korak 05/10: preveri in poveži posamezne objave ter vse projektne povezave.
- [Uradni obrazec za včlanitev](https://studentski-klubi.si/public-forms/jui1g3swbxz) ostaja nespremenjen v kodi. Orodje za spletni pregled ga ni moglo odpreti; dosegljivost in oddaja obrazca nista potrjeni.
- `/newsletter` obstaja, vendar nima povezave v navigaciji ali nogi; pred oddajo zagotovi odkrivanje strani. Obrazec je demo brez pošiljanja ali shranjevanja podatkov. Kontakt uporablja `mailto`. Spremenljivki v `.env.example` trenutno nista uporabljeni; integracija ni izvedena.
- Mobilni meni ima oznako gumba, nima pa `aria-expanded` in `aria-controls`; pred oddajo preveri stanje menija, upravljanje s tipkovnico in fokus. Filtri prav tako ne izpostavljajo izbire prek `aria-pressed`. To niso napake tipov ali gradnje; ostajajo naloge za pregled dostopnosti.
- Logotip in favicon sta priložena in uporabljena; začasne JPG ilustracije niso odobrene fotografije dogodkov ali portreti. Dokazila o dovoljenjih ostajajo odprta.

### Omejitve in AI
- Brez brskalniškega/napravnega pregleda, meritev kontrasta, Lighthouse, preverjanja vseh zunanjih povezav ali varnostnega pregleda odvisnosti. Uspešna gradnja teh preverjanj ne nadomešča.
- PDF brief ni priložen; pregled zahtev se opira na `CONTENT_CHECKLIST.md`, popolna skladnost z izvirnikom ni potrjena. Javna objava ni izvedena.
- Mapa nima repozitorija `.git`; primerjava sprememb z Git zgodovino ni bila mogoča.
- Codex je izvedel audit, ukaze, izolirana preverjanja, primerjavo javnih virov in dokumentacijske popravke. GitHub Copilot pri tem koraku ni bil uporabljen. Vsebina in končna oddaja zahtevata pregled avtorja.

## 2026-11-03 — 02 / Design system

- Po novem izrecnem uporabnikovem navodilu je RED / WHITE zamenjan s črno-belo-sivim sistemom. Uporabnikov logotip, favicon in struktura vseh strani so ohranjeni; `theme-color` je usklajen s temno navigacijo.
- `src/styles.css` je preurejen iz dveh nasprotujočih si slogovnih plasti v berljiv sistem s skupnimi spremenljivkami za barve, tipografijo, razmike in mreže. Dodani prilagodljivi naslovi, omejitev širine vsebine, bolj berljive oblike obrazcev, kontrasten fokus in ustrezne velikosti glavnih kontrol. Slike in fallbacki so nevtralni, datumi novic ostanejo vidni na mobilnem zaslonu.
- Odstranjeni odmiki kartic s transformacijo, ki so se prekrivali z GSAP. Obstoječe scroll animacije in reduced motion ohranjeni.
- Brskalniški pregled je razkril obstoječo napako pri odhodu z domače strani: React je poskušal odstraniti sekcijo, prestavljeno v GSAP pin-spacer (`removeChild` NotFoundError), zato je stran ostala prazna. `ScrollStory` zdaj uporablja `useLayoutEffect`, da `ctx.revert()` odstrani pin pred Reactovo odstranitvijo DOM. Animacijski timeline ni spremenjen.
- Mobilni meni ima `aria-expanded` in `aria-controls`; filtri izpostavljajo izbor z `aria-pressed`.
- Preverjanje v Chromu: 8 poti in 404 × 6 širin (320, 390, 768, 1024, 1440, 1920 px), skupno 54 kombinacij. Naslovi prisotni, brez vodoravnega prelivanja dokumenta ali pregledanih elementov. Pregledani mobilni, tablični in namizni posnetki; kopije v `docs/previews/`.
- Preverjeni mobilni meni, navigacija in povratek domov, odstranitev/ponovna vzpostavitev pina, filter Glasba in vidno fokusno stanje. Brez napak v konzoli pri teh interakcijah. Reduced motion ob nalaganju: brez pina, vidna vsebina, izklopljeno gladko drsenje. Preverjeni kontrasti besedila od 6,26 : 1 do 19,03 : 1; kontrolni rob/bela 4,54 : 1.
- `npm run typecheck` in `npm run build` uspešna. Brez novih odvisnosti. Predogledi in sistem so opisani v `docs/BRAND_COLORS.md`; README in osnutek oddaje sta usklajena.
- Omejitve: emulacija v namiznem Chromu, brez fizičnih naprav in drugih brskalnikov; brez celotne presoje WCAG. Vsebinske naloge iz audita 01 ostajajo odprte. Referenčni screenshot v tem koraku ni bil priložen.
- AI: Codex je zasnoval in izvedel CSS sistem, manjše dostopnostne popravke in popravek čiščenja GSAP, izvedel preverjanja s chrome-devtools-cli ter pripravil dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-03 — 03 / Hero

- Dodana berljiva samostojna komponenta `src/components/Hero.tsx`; `Home.tsx` jo vključuje namesto prejšnjega inline hero bloka. Preostale sekcije in scroll animacije ostajajo ohranjene.
- Pred triptih postavljen velik naslov »NE SAMO ŠTUDENTI. SKUPNOST.«, kratek uvod in jasen gumb do nespremenjenega uradnega obrazca za včlanitev. Spodnja povezava vodi na `#intro`.
- Tri lokalne datoteke `hero-left.jpg`, `hero-center.jpg`, `hero-right.jpg` ostajajo v `public/assets/hero/`. Gre za obstoječe abstraktne začasne vizuale (960 × 1100 px), ne odobrene fotografije KMŠ; oznaka je vidna, alt opisi ustrezajo začasnim datotekam. Brez hotlinkov, novih fotografij ali generiranih slik.
- Triptih ima poudarjeno sredinsko sliko in zamaknjeni stranski sliki: trije stolpci nad 700 px, dva od 421 do 700 px, ena sredinska slika do 420 px. Naslov ostane pred slikami in dostopen tudi na ozkem telefonu.
- `SmartImage` podpira neobvezni `loading` in `fetchPriority`, ohranja lazy loading kot privzeto ter doda asinhrono dekodiranje. Sredinska hero slika se naloži eager s prioriteto high; stranski in ostale slike ostanejo lazy. CSS rezervira višino za slike in fallback.
- Typecheck in produkcijska gradnja uspešna; brez novih odvisnosti.
- Chrome s chrome-devtools-cli: preverjene širine 320, 390, 420, 421, 600, 700, 701, 768, 1024, 1440 in 1920 px. Pravilno število prikazanih slik, vse vidne slike naložene iz lokalnega izvora, tri slikovne reference v DOM, prioriteta sredinske slike pravilna, brez vodoravnega prelivanja dokumenta in pregledanih hero elementov.
- Pri 390 px s sproženim slikovnim error dogodkom preverjen `SmartImage` fallback brez spremembe višine okvirja; sidro dejansko pomakne do uvoda. Prehod na O nas in vrnitev obnovita vse tri slike; brez napak v konzoli pri teh interakcijah. Reduced motion ob nalaganju: hero viden, nič pin-spacerjev, scroll-behavior auto. Zunanja oddaja obrazca ni bila izvedena.
- Pregledani in shranjeni posnetki v `docs/previews/hero-390.png`, `hero-600.png`, `hero-1440.png`. Prejšnji posnetki design-system ostajajo zgodovinski. README, evidenca sredstev, opis oblikovnega sistema in osnutek oddaje so posodobljeni.
- Omejitve: testiranje v emulaciji namiznega Chroma; fizične naprave in drugi brskalniki niso preverjeni. Licencirane fotografije in odprte vsebinske naloge iz prejšnjih korakov ostajajo za nadaljevanje.
- AI: Codex je pripravil komponento, uvodno besedilo, CSS, razširitev nalaganja SmartImage, lokalna preverjanja in dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-03 — 04 / Povezani scroll

- `ScrollStory.tsx` preurejen v povezano zgodbo z lokalnim triptihom, preoblikovanjem napisa »SKUPAJ.« in razkritjem uvoda »DOŽIVI MARIBOR.«. `Home.tsx` nadaljuje sceno z dogodki na isti beli podlagi, brez podvojenega naslova; povezava do vseh dogodkov ostaja dosegljiva.
- En desktop timeline uporablja scrub in pin samo nad 700 px širine ter 600 px višine. Na telefonih/nizkih zaslonih je le blag scrub povečave brez pina; reduced motion pokaže statično vsebino.
- Rezervirani okvirji, transformacije namesto sprememb dimenzij, pin spacing in pripenjanje s transformacijo preprečijo skakanje naslednje sekcije. Med razvojem zaznan premik ob prehodu na position:fixed je odpravljen s `pinType: 'transform'`. V končnem merjenem namiznem prehodu je bila vsota layout shiftov 0; to ni meritev celotnega CLS strani.
- Dodana sprotna prilagoditev prelomom in reduced motion z GSAP matchMedia. Posodobljen tudi `Reveal`, da ob vklopu reduced motion odstrani obstoječe animacije in pokaže vsebino. `media.revert()` v useLayoutEffect odstrani pin in sprožilce pred unmountom; osvežitev meritev po nalaganju pisav se po unmountu prekliče.
- Ohranjen uporabnikov logotip, monokromatski sistem, obstoječe poti in članstvo. Uporabljene iste tri lokalne začasne slike prek SmartImage; novih medijskih datotek ali odvisnosti ni.
- Typecheck in build uspešna. V Chromu preverjenih devet velikosti brez reduced motion, še dve z reduced motion, sprotne spremembe nastavitev in novo nalaganje. Preverjeni drsenje naprej/nazaj, meje pina 700/701 px in 600/601 px, rezerviran položaj dogodkov ter trikratni odhod s scene in vrnitev. Brez vodoravnega prelivanja in napak v konzoli pri teh preizkusih.
- Ugotovitve in predogledi so v `docs/SCROLL_STORY.md`; posodobljeni README, osnutek oddaje, barvni sistem in evidenca slik. Fizične naprave, drugi brskalniki, profiliranje na šibkih napravah in vsebinske naloge ostajajo odprti.
- AI: Codex je izvedel komponento, CSS in povezavo s seznamom dogodkov, dopolnil uvodno besedilo, preveril obnašanje s chrome-devtools-cli in pripravil dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-03 — 05 / Dogodki

- Vseh osem projektov ima nove, kratke opise po neposredno pregledanih uradnih predstavitvah KMŠ. Osem uradnih URL-jev je vrnilo HTTP 200; evidenca trditev, povezav in omejitev je v `docs/EVENTS_AND_SOURCES.md`.
- Cantus popravljen iz splošnega koncertnega opisa v tematsko druženje s tradicionalnim petjem in izzivi. Ftrgatev jasno povzema napoved 2025; ne prikazuje starega termina kot prihodnjega. Pri ostalih projektih niso dodani nepotrjeni termini, cene ali obljube o periodičnosti.
- Centralni tipizirani podatki v `content.ts`, vključno s kategorijami in datumom pregleda virov. Posodobitve povezav in oznak veljajo tudi za kartice na domači strani.
- Dodana samostojna `src/pages/Events.tsx`; obstoječi izvoz in pot `/dogodki` ostajata ohranjena. Nova uvodna hierarhija, uporabne kategorije (Glasba, Druženje, Delavnice, Dobrodelnost, Humor), števci, live stanje rezultatov in ponastavitev s povrnitvijo fokusa.
- Kartice imajo lokalno sliko, opis in neposredno uradno povezavo z oznako novega zavihka. Monokromatska paleta, mobilni en stolpec in širši dva stolpca, rezervirane višine slik ter označeni začasni vizuali so ohranjeni. Brez novih odvisnosti ali animacij.
- Typecheck in build uspešna. V Chromu vseh šest filtrov preverjenih pri širinah 320, 390, 700, 701, 768, 1024, 1440 in 1920 px: pravilni nabori 8/4/1/1/1/1, števci in aria-pressed, ponastavitev/fokus, brez vodoravnega prelivanja. Preverjeni Enter, Tab in Space, vidni fokus, osem različnih neposrednih povezav, prehod z domače strani in slikovni fallback brez spremembe višine. Brez napak v konzoli pri teh interakcijah.
- README, kontrolni seznam, evidenca virov in osnutek oddaje so posodobljeni; posnetki filtrov in kartic v `docs/previews/events-*.png`. Fizične naprave, drugi brskalniki, aktualni termini in odobrene fotografije ostajajo za končni pregled.
- AI: Codex je preveril in povzel uradne vire, pripravil podatke, React stran, CSS, lokalne preizkuse s chrome-devtools-cli ter dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-03 — 06 / O nas in organi

- Neposredno pregledana uradna stran KMŠ O nas (HTTP 200, 3. 11. 2026). Ekipa usklajena z objavljeno sestavo: Urban Kavkler, Jan Ozvaldič, Doroteja Plohl, Gabriela Brodnjak in Jan Kolbič. Dodani poimenski seznami Upravnega odbora (5), Nadzorne komisije (3) in Častnega razsodišča (3), opis skupščine ter pristojnosti po uradni predstavitvi. Funkcije, ki niso objavljene, niso izmišljene.
- Dodani podatki v `src/data/about.ts`, samostojna stran `src/pages/About.tsx`, poslanstvo, vodje petih področij ter javna vloga svetnika Sveta ŠOLS in Zveze ŠKIS. Združljiva izvoza in obstoječa pot ostajata ohranjena. Ekipa in seznam Upravnega odbora izhajata iz istih podatkov.
- Trije pravi portreti so lokalno preneseni z uradnega vira in vizualno pregledani. Zamenjali so abstraktne datoteke Jana Ozvaldiča, Doroteje Plohl in Gabriele Brodnjak. Za Urbana uradna stran uporablja risano ilustracijo, za Jana Kolbiča splošno silhueto; namesto njiju prikazujemo inicialke, brez portretne datoteke ali izmišljene poti.
- Evidenca vseh uporabljenih in izpuščenih slik, izvorni URL-ji, dimenzije ter status avtorstva in dovoljenj so v `docs/ABOUT_AND_SOURCES.md`. Vir je potrjen; dovoljenje za javno objavo ni dokumentirano. Ostaja 28 abstraktnih JPG vizualov in trije portreti; prejšnja vizuala Anje in Eme sta neuporabljena. Kontrolni seznam odobrenih fotografij ostaja odprt.
- Ohranjeni monokromatski sistem, odzivna mreža 1/2/3 stolpcev, obstoječe scroll animacije in povezave. Dodani sidrni skoki in viden datum pregleda; brez novih odvisnosti.
- Typecheck in build uspešna. V Chromu preverjenih devet širin (320, 390, 700, 701, 768, 1100, 1101, 1440, 1920 px), pravilni poimenski seznami in vloge, lokalni portreti, inicialke in sidra, brez vodoravnega prelivanja. Preverjeni navigacija s čiščenjem pina, slikovni fallback brez spremembe višine in reduced motion z vidno vsebino ter brez sprožilcev. Brez napak v konzoli pri teh preizkusih.
- README, kontrolni seznam, evidenca sredstev in oddaja posodobljeni; predogledi v `docs/previews/about-*.png`. Aktualnost se opira na javno objavo ob pregledu, ne na neodvisno potrditev mandatov. Fizične naprave in drugi brskalniki ostajajo za končni pregled.
- AI: Codex je pregledal uradne vire ter slikovne datoteke, pripravil povzetke, podatkovni model, stran in CSS, preverjanja s chrome-devtools-cli in dokumentacijo. Portreti niso AI generirani ali retuširani; Copilot ni bil uporabljen.

## 2026-11-03 — 07 / Članstvo in priložnosti

- Dodani samostojni strani Membership in Opportunities z ohranjenima potema ter izvozoma. Na obeh neposreden CTA v uvodu in ponovljen ob ustrezni vsebini vodi na nespremenjeni uporabnikov uradni obrazec; skupna komponenta MembershipLink preprečuje razhajanje URL-ja in atributov.
- Članstvo ima tri razložene vsebinske ugodnosti po javnem viru, povezave na druge vsebine, kratka navodila za uradno prijavo in splošni klubski kontakt za pomoč. Nepotrjena članarina, popusti, priloge ali roki niso dodani.
- Priložnosti vključujejo aktivizem, predlaganje idej in sodelovanje pri projektu. Vsaka pot ima opis, vprašanja za prvi stik in svoj mailto z zadevo ter predlogo; nič se ne pošlje samodejno. Izvedba predloga ni obljubljena. Lokalni obrazci ali zbiranje podatkov niso dodani.
- Neposredno pregledani strani KMŠ Člani in Ideje članov ter javni obrazec (HTTP 200). Brskalnik prikaže Registration in polja; Enter na lokalnem glavnem CTA odpre isti URL v novem zavihku. Zunanja aplikacija beleži tudi napake 401 in `$env`, zato uspešnost obdelave prijav ni potrjena. Obrazec ni bil izpolnjevan ali oddan.
- Ohranjen monokromatski oblikovni sistem, obstoječe globalne povezave in scroll animacije. Brez novih odvisnosti ali fotografij.
- Typecheck in build uspešna. Obe strani preverjeni pri 320, 390, 700, 701, 768, 1024, 1440 in 1920 px: neposredni CTA, sidra, nabori vsebin, kodiranje e-poštnih predlog in brez prelivanja. Preverjeni vidni fokus in Enter, prehodi z domače strani brez ostankov pina ter reduced motion pri 390 px. Brez napak v konzoli lokalnega prototipa pri teh interakcijah.
- Viri, status zunanje storitve in predogledi so v `docs/MEMBERSHIP_AND_SOURCES.md`. README, kontrolni seznam in oddaja posodobljeni. Fizične naprave, drugi brskalniki, dejansko pošiljanje e-pošte in končni postopek včlanitve ostajajo za preverjanje.
- AI: Codex je pregledal vire, povzel vsebino, pripravil CTA, e-poštne predloge, React strani in CSS ter preverjanja s chrome-devtools-cli in dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-03 — 08 / Kontakt in newsletter

- Naslov, e-pošta, telefon in uradne ure neposredno preverjeni na treh uradnih straneh KMŠ (HTTP 200, skladni podatki). Dodan telefon 040 985 088 in urnik pon.–čet. 7.00–14.00, pet. 6.00–12.00, z virom in datumom pregleda. Ne gre za neposredno telefonsko potrditev.
- Uradne Instagram/Facebook/YouTube povezave potrjene iz HTML domače strani in dosegljive z neposrednim GET (HTTP 200; YouTube preusmeri na isti kanal). Dodan YouTube; brez vdelanih socialnih SDK-jev. Centralni podatki v `src/data/contact.ts`, kontakt in noga jih uporabljata skupaj.
- Samostojni Contact in Newsletter strani z ohranjenima potema/izvozoma. Kontaktni obrazec izrecno pripravlja mailto osnutek; ne pošilja, ne shranjuje na strežnik in ne potrjuje dostave. Pomožna funkcija ločeno kodira zadevo/telo; validacija, autocomplete ter vidni naslov za spletno pošto.
- Odstranjena demo prijava s checkboxom in odzivom po submitu. Newsletter je sedaj neaktiven predogled z disabled fieldset, brez form/submit/omrežnega klica in brez privolitve ali navidezne uspešne prijave. Dodani povezavi iz noge in kontakta ter nadomestne povezave na uradne kanale. Stanje se nanaša na prototip, ne na zunanjo uradno newsletter storitev.
- V HTML uradne strani zaznane Mailchimp sledi; dokumentiran predlog gostovanega obrazca z dvojno potrditvijo ali lastnega strežniškega endpointa. Račun, API, seznam, privolitev in primerna politika niso potrjeni ali priklopljeni. `.env.example` jasno označuje neuporabljeni rezervirani spremenljivki in ločitev javnega URL-ja od strežniških ključev.
- Typecheck in build uspešna. Kontakt/newsletter preverjena pri devetih širinah (18 kombinacij), brez prelivanja, s pravilnimi kontakti/urami in disabled kontrolami. Native validacija kontakta ter izoliran preizkus dejanskega onSubmit potrjujeta kodiranje prejemnika, šumnikov, posebnih znakov in prelomov vrstic brez odpiranja mail odjemalca. Klik neaktivnega newsletter gumba ne sproži fetch/XHR; lokalna konzola brez napak. Preverjen tudi reduced motion pri 320 px.
- Viri, socialne omejitve, načrt integracije in predogledi v `docs/CONTACT_AND_NEWSLETTER.md`. README, kontrolni seznam, evidenca virov in oddaja posodobljeni. Brez novih knjižnic, dejanske oddaje ali pošiljanja sporočil; fizične naprave in drugi brskalniki ostajajo za končni pregled.
- AI: Codex je pregledal vire, pripravil podatke, strani in CSS, predlog integracije ter izolirana in brskalniška preverjanja s chrome-devtools-cli ter dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-04 — 09 / Slike in branding

- Pregledanih vseh 37 lokalnih rastrskih datotek po izvozu: 28 abstraktnih začasnih JPG, trije izvorni JPEG portreti, tri WebP izpeljanke in trije PNG znamke. Nov popis `ASSET_INVENTORY.json` vsebuje poti, dimenzije, bajte, SHA-256, uporabo, vire in status dovoljenj; `IMAGE_REVIEW.md` opisuje pregled in omejitve.
- Tri portretne povezave in imena/alt ponovno preverjeni na uradni strani O nas. GET strani in slik HTTP 200; izvorni JPEG so bajt za bajtom enaki uradnim datotekam. Nove fotografije niso dodane. Obstoječi portreti ostanejo 300 × 300 px, brez novega izreza ali povečave; omejena ločljivost vira je dokumentirana.
- WebP quality 85 / method 6 s Pillow: skupaj 25.866 B namesto 38.312 B (32,5 % manj). Izvorni JPEG ohranjeni. Ponovljiv izvoz s preverjanjem dimenzij in velikosti v `scripts/optimize-portraits.py`; brez novih npm odvisnosti.
- SmartImage podpira izrecni neobvezni WebP source, `<picture>`, dimenzije, JPEG rezervo ob nepodprtem formatu ali napaki nalaganja in obstoječi označen fallback ob napaki obeh datotek. Dodan CSS ovoj brez spremembe izrezov, sivinskega prikaza, lazy loadinga ali prioritete hero slike.
- Štirje alt opisi dogodkov na domači strani usklajeni z oznako začasnih vizualov. Trije portreti ohranijo ime osebe v alt opisu, drugi dve kartici ostajata inicialki. Začasni hero/dogodkovni in neuporabljeni galerijski vizuali niso predstavljeni kot uradne fotografije.
- Uporabnikov PNG logotip in favicon sta že nadomestila placeholder; izvirniki, prosojnost in izrezi ohranjeni. Dodani width/height logotipa ter MIME/sizes favicona. Branding README popravljen iz stare rdeče navigacije v veljavni monokromatski sistem. Placeholder SVG ostaja neuporabljen zgodovinski scaffold.
- Typecheck in build uspešna. Produkcijski predogled v Chromu: `/`, `/o-nas`, `/dogodki` pri sedmih širinah 320, 390, 700, 701, 768, 1440 in 1920 px (21 kombinacij), z reduced motion. Vse slike lokalno dekodirane, pravilen WebP izbor, kvadratni portreti, alt opisi in branding, brez vodoravnega prelivanja.
- Pri 390/1440 px s slikovnima error dogodkoma preverjen prehod WebP → JPEG → fallback brez spremembe višine okvirja. Nepodprt source MIME izbere JPEG. Pri 1440 px brez reduced motion preverjene slike v scroll sceni, en pin in čiščenje ob navigaciji; brez napak v konzoli pri končnih interakcijah. Ne gre za dejansko omrežno okvaro, test starega brskalnika ali celotno meritev CLS/zmogljivosti.
- Izvirniki, izpeljanke in štirje predogledi vizualno pregledani. Posodobljeni README, evidenca sredstev, opisi map, kontrolni seznam, ABOUT_AND_SOURCES in SUBMISSION. Avtorji in dovoljenja za ponovno javno objavo portretov, izpeljank, začasnih vizualov ter uporabnikovega logotipa ostajajo nedokumentirani. Fizične naprave in drugi brskalniki niso preverjeni.
- AI: Codex je izvedel pregled, primerjavo javnih virov, izvoz s Pillow, React/HTML/CSS spremembe, preverjanja s chrome-devtools-cli in dokumentacijo. V tem koraku ni generiral ali retuširal fotografij ali logotipa. Copilot ni bil uporabljen.

## 2026-11-04 — Ponovna potrditev KMŠ RED / WHITE

- Najnovejše uporabnikovo navodilo ponovno določa rdečo `#E32636`, belo `#FFFFFF`, svetlo rožnato `#FFF0F2` in temno besedilo `#181818`; nadomešča monokromatsko smer koraka 02. Usklajeni veljavni zapisi v README, AGENTS, CODEX_STEPS, BRAND_COLORS, evidenci sredstev in SUBMISSION. Starejši koraki in predogledi ostajajo zgodovinski.
- Barvni tokeni v `src/styles.css` preklopijo navigacijo, mobilni meni, hero, scroll sceno, nogo, aktivne filtre in primarne gumbe na rdečo. Podstrani, paneli in sekundarne površine so svetlo rožnati; dogodki se iz scroll scene še naprej razkrijejo na beli podlagi. Veliki naslovni poudarki so rdeči, tekoče besedilo ostane temno. Temni fallback gradienti so zamenjani s svetlo rožnatim ozadjem in temnim opisom.
- Barva theme-color v `index.html` je rdeča. Uporabnikove tri PNG datoteke, WebP/JPEG slike, izrezi, vse poti, React struktura in GSAP implementacija ostanejo nespremenjeni. Placeholder SVG ni uporabljen. Ni črnih UI ozadij; sivinske fotografije in temen obris priloženega logotipa ostanejo del obstoječih datotek.
- Izračunani kontrasti: bela/rdeča 4,57 : 1; temno besedilo/bela 17,76 : 1 in rožnata 16,06 : 1; sekundarno besedilo/bela 7,00 : 1 in rožnata 6,34 : 1. Rdeča/rožnata 4,13 : 1 je uporabljena samo za velike krepke naslovne poudarke. Drobno besedilo na rdeči ostane belo. Meje kontrol/bela oziroma rožnata 4,64 / 4,20 : 1; mobilni gumb ima poln bel rob.
- Typecheck in build uspešna; brez novih odvisnosti. Produkcijski predogled v Chromu: vseh osem poti in 404 pri 320, 390, 768, 1024, 1440 in 1920 px (54 kombinacij), brez vodoravnega prelivanja. Pravilen logotip/favicon, rdeča skupna navigacija/noga, svetli uvodi in brez temnih CSS ozadij. Preverjeni mobilni meni, aktivni filter Glasba s štirimi projekti ter neaktiven newsletter brez oddaje.
- Matrika z reduced motion ohrani vidno vsebino brez pina. Brez reduced motion pri 390/1440 px preverjeno spreminjanje transformacije slik med drsenjem, pin samo na namizju, izginotje/preoblikovanje naslova, razkritje bele sekcije in čiščenje/ponovna vzpostavitev pina pri navigaciji. Preverjena dejanska tipkovnica za fokus na rdeči in svetli površini ter nov svetli fallback s sproženima error dogodkoma. Brez napak v konzoli pri končnih interakcijah.
- Pet predogledov v `docs/previews/red-white-*.png`, mobilni/tablični/namizni prikaz vizualno pregledan. Omejitve: emulacija namiznega Chroma, brez fizičnih naprav, drugih brskalnikov, celotne presoje WCAG ali meritev celotne zmogljivosti. To ni zaključeni končni pregled 10.
- AI: Codex je izvedel barvni preklop, kontrastne izračune, preverjanja s chrome-devtools-cli in dokumentacijo. Slikovne datoteke in animacijska logika niso spreminjane; Copilot ni bil uporabljen.

## 2026-11-04 — Smooth scroll

- Dodan Lenis 1.3.27 in zaklenjena različica v package-lock. Skupna komponenta SmoothScroll gladi wheel/trackpad z lerp 0.12; dotik ostane native. Lenis CSS je uvožen pred slogi aplikacije; CSS smooth med Lenis gibanjem ne tekmuje z njim.
- En GSAP ticker poganja Lenis; scroll dogodki osvežujejo ScrollTrigger, refresh znova izmeri dolžino dokumenta. AutoRaf ni aktiven. Obstoječi GSAP timeline, pin, paleta RED / WHITE, poti in sredstva ostanejo ohranjeni.
- Reduced motion se upošteva ob nalaganju in sproti, z uničenjem/ponovno vzpostavitvijo glajenja. Cleanup odstrani vse dodane callbacke/listenerje in instanco. Ponastavitev ob navigaciji premaknjena iz Layout v SmoothScroll, s prekinitvijo starega zagona in podporo neposrednemu URL fragmentu.
- Sidra ohranijo native URL hash, zgodovino in premik; pred njimi se prekine wheel zagon. Textarea ni prestrežena; ohranjena tipkovnica in Ctrl+wheel zoom.
- Typecheck in build uspešna. Produkcijski Chrome: osem strani pri 1440 px ter Domov/O nas/Kontakt pri 390/768 px, 14 kombinacij brez prelivanja. Sintetični wheel 600 px doseže cilj postopoma, sidra dosežejo cilj s scroll-margin, navigacija med drsenjem ostane na novem vrhu, neposreden /o-nas#organi deluje.
- Preverjeni wheel-driven GSAP prehod, trije sprotni preklopi reduced motion (brez Lenis/pina oziroma ponovna vzpostavitev ene scene), native textarea/zoom prepuščanje in dejanski PageDown. Brez napak v konzoli pri teh interakcijah. Fizična miška/trackpad, dotik, drugi brskalniki in profiliranje niso preverjeni; wheel preizkusi so sintetični.
- README, SCROLL_STORY in SUBMISSION posodobljeni. AI: Codex je izbral in integriral Lenis, preveril obnašanje s chrome-devtools-cli ter pripravil dokumentacijo. Copilot ni bil uporabljen.

## 2026-11-04 — Stalno viden header

- Header je sticky na vrhu, nad vsebino, z ohranjenim prostorom v dokumentnem toku. Brez spremembe palete, logotipa ali navigacijskih povezav.
- Scroll-padding upošteva odzivno višino headerja. GSAP pin se začne pod headerjem in uporablja preostalo višino viewporta; timeline in scrub ostajata ohranjena.
- Mobilni meni je omejen na preostalo višino zaslona in ima native overflow scroll z data-lenis-prevent med odprtjem, da ostanejo vse povezave/CTA dosegljivi tudi na nizkem zaslonu.
- Typecheck in build uspešna. V Chromu vseh osem strani pri 390×844, 768×1024, 1440×1000 in 700×360 (32 kombinacij): header na začetku/sredi/koncu, pravilen vrstni red nad vsebino, sidra in meni, brez prelivanja. Prilagojeni pin dodatno preverjen na začetku/sredi/koncu pri 1440×1000, 768×1024 in 1024×601; reduced motion in neposredno sidro pri 700×360. Brez napak v konzoli pri teh preizkusih.
- README, SCROLL_STORY in SUBMISSION posodobljeni, dva predogleda shranjena. Omejitve: emulacija namiznega Chroma, brez fizičnih naprav ali drugih brskalnikov. AI: Codex je pripravil prilagoditve, preverjanja s chrome-devtools-cli in dokumentacijo; Copilot ni bil uporabljen.

## 2026-11-04 — Diskretni glasbeni motivi

- Tri izvirne lokalne SVG ilustracije: akustična kitara, harmonika in odrski bobni/mikrofon/kitara, skupaj 4.609 B. Kodo je napisal Codex po uporabnikovi zahtevi; brez prenesenih fotografij, prevzetih ikon, zunanjih referenc ali predstavitve konkretnih izvajalcev. Izvor v ASSETS_AND_SOURCES in decor/README.
- Statične CSS podlage dopolnijo uvode podstrani, domači intro, razkritje bele scroll sekcije in zaključke sodelovanja. Rdeče linije pri 12 % opacity, na telefonu 7,5 %, manjša velikost in delni izrez ob robu. Isolation/z-index -1 in pointer-events none ohranijo vsebino in klike; brez novih animacij ali odvisnosti.
- Barve RED / WHITE, header, Lenis, GSAP, logotip, portreti in osrednji triptih ostanejo ohranjeni. Konservativna kontrastna ocena na rožnati pod 12 % linijo: temno besedilo 13,49 : 1, sekundarno 5,32 : 1, velik krepki rdeči naslov 3,47 : 1.
- Typecheck in build uspešna. Chrome: vseh osem poti pri 390/768/1440 px (24 kombinacij), dekodirane lokalne SVG podlage, pravilne plasti/opacity, brez prelivanja ali oviranih CTA. Sticky header/reduced motion ohranjena. Pri 1440 px brez zmanjšanega gibanja dodatno preverjena dekorirana pripeta scena, razkritje, naslov pod headerjem in čiščenje ob navigaciji; brez napak v konzoli.
- Sedem predogledov shranjenih, prikazi namizja in telefona vizualno pregledani. README, evidenca sredstev, BRAND_COLORS in SUBMISSION posodobljeni. Fizične naprave in drugi brskalniki niso preverjeni. AI: Codex je napisal SVG/CSS, preverjanja s chrome-devtools-cli in dokumentacijo; ni generiral ali retuširal fotografij. Copilot ni bil uporabljen.

## 2026-11-04 — Fiksni animirani števci, barvni portreti, izbris predogledov

- Nova sekcija EventStatistics neposredno pod hero in pred uvodom na domači strani, naslov »Napovednik dogodkov«. Fiksni podatki iz uporabnikovega sporočila: 45 — Števec projektov v 2023; 753 — Število članov; 29 — Število aktivistov. Centralni podatki v statistics.ts, brez API ali obljube podatkov v živo.
- GSAP šteje od 0 do cilja s snap na cela števila, ob prvem vstopu v pogled. Rezervirana širina/višina, mreža 3/1 stolpcev, statična dostopna končna vrednost. Reduced motion takoj pokaže končne številke in se upošteva tudi sredi animacije; cleanup odstrani timeline/sprožilec. Brez novih odvisnosti.
- CSS filter portretov ekipe je none; trije obstoječi JPEG/WebP ostanejo barvni in nespremenjeni. Inicialke in fotografski slogi ostalih sekcij ohranjeni.
- Na izrecno zahtevo izbrisanih vseh 45 slikovnih predogledov. Odstranjene Markdown povezave do njih; AGENTS/CODEX_STEPS beležita prepoved nadaljnjega zajema/generiranja screenshotov. Newsletter neaktiven prikaz in npm preview ukaz nista slikovna artefakta in ostajata ohranjena.
- Typecheck in build uspešna. Chrome brez screenshotov: širine 320/390/768/1440, pravilne oznake in postavitev, vmesna ter končna števila, stabilne dimenzije, brez ponavljanja ob drsenju nazaj ali prelivanja. Trije barvni WebP portreti in dve inicialki preverjeni. Reduced motion ob nalaganju in med animacijo konča pri 45/753/29. Pripeta zgodba in trije prehodi med stranmi brez podvojenih sekcij/pinov; brez napak v konzoli.
- README, barvni sistem, viri ekipe in SUBMISSION posodobljeni. Vir števil je uporabnik; neodvisno preverjanje aktualnosti ni izvedeno. Fizične naprave in drugi brskalniki niso preverjeni. AI: Codex je izvedel komponento, CSS, izbris predogledov, preverjanja s chrome-devtools-cli brez zajema slik in dokumentacijo; Copilot ni bil uporabljen.

## 2026-11-04 — Pregled uporabnikove prenove s Copilotom

- Pregledana uporabnikova prenova domače strani (13fa094, Copilot soavtor) in obstoječa rdeča podlaga. Ohranjeni so klikljiv triptih, razmiki, centriran naslov števcev, bobni ob besedilu, noga in neaktivna newsletter polja.
- Odstranjena header auto-hide logika in začetni zdrs; senca ostane. Pin start/višina znova upoštevata stalno viden header, brez spreminjanja poteka timeline. Odstranjena negativna geometrija kitare čez rob; koloni besedila/bobnov uporabljata minmax in motiv ostane v lastni širini.
- Širjenje hero stolpcev omejeno na širine nad 700 px s hoverjem in brez reduced motion; dodan prehod povečave slike. Beli gumbi vrnjeni na belo osnovo: rdeča/bela 4,57 : 1 namesto 4,20 : 1 na kremni. Geometrijski vzorec je tanjši (1,6) in manj intenziven (32 %), temnejša rdeča #D92333 ostane.
- Typecheck in build uspešna. Brez screenshotov: osem poti pri 320/390/700/701/768/1440 (48 kombinacij), brez prelivanja, vidna navigacija, ohranjena barvna ekipa in neaktivna noga. Dejanski hover 1/2/3/3 stolpci pri 390/700/701/1440 in klik hero → dogodki. Pin, razkritje, vidnost naslova in cleanup pri 701×601, 768×1024, 1024×601 in 1440×1000. Brez napak v konzoli.
- README, BRAND_COLORS, evidenca vzorca in SUBMISSION posodobljeni. Brez novih knjižnic, fotografij ali screenshotov. Fizične naprave in drugi brskalniki niso preverjeni. AI: uporabnikova prenova s Copilotom, ciljni pregled/popravki in preverjanja s Codexom.

## 2026-11-04 — Uvoz foto paketa z dovoljenjem KMŠ

- Uporabnik je izrecno potrdil dovoljenje KMŠ za prenos/uporabo slik. KMS-Foto-Paket najden v dist in prestavljen v koren, da ga gradnja ohrani. Popravljen ASCII User-Agent (prej latin-1 napaka na KMŠ), kodiranje URL-jev in projektne poti downloaderja.
- Prenesenih 150 datotek prek uradnih strani in javnega WordPress API; še pet dodatnih izvirnikov za izbor. Nabor vsebuje tudi plakate/logotipe in različne dimenzije, ne 155 različnih prizorov. Izvirniki ohranjeni v paketu; vseh 150 začetnih datotek in dodatne izbrane datoteke dekodirane ter primerjane s SHA-256.
- Osem projektnih fotografij vizualno pregledanih iz izvirnikov in povezanih z dejanskimi glavnimi galerijami/naslovnimi slikami projektov. Popravljene napačne samodejne kategorije. Hero in story uporabljata skupne Ftrgatev/ODER/Cantus vire, osem kartic dejanske fotografije, podnapise virov in konkretne alt opise. Označene so pretekle izvedbe. Portreti/logotip ter uporabnikova zadnja postavitev so ohranjeni.
- JPEG/WebP do 1280 px, brez povečave ali obreza na disku. WebP skupaj 714.114 B proti JPEG 1.273.838 B (43,9 % manj). Brez retuše ali brisanja podpisov iz izvirnikov; CSS ohrani obstoječi editorial izrez in sivinski prikaz projektov. Imena avtorjev prepisana le iz razvidnih podpisov, drugi navedeni kot vir. Priprava s scripts/prepare-kms-photos.py.
- Surova kopija public/assets/kms-imported je po izboru odstranjena, vsi izvirniki ostanejo zunaj spletne gradnje. Preverjeni TypeScript katalog nadomesti samodejne približne oznake. Manifest izbora in prenosa ter permission status dokumentirani v PHOTO_IMPORT.md, KMS_PHOTO_SELECTION.json in osveženem javnem popisu 46 rastrskih datotek.
- Typecheck in build uspešna. Produkcijski Chrome brez screenshotov: tri poti × šest širin 320/390/700/701/768/1440 (18 kombinacij), lokalno dekodiranje in WebP, deljene hero/story poti, alt, viri, prioriteta hero, osem kartic/filtri, fiksni števci, barvni portreti in sticky header, brez prelivanja. Reduced motion brez pinov, dodatno namizni pin/prehod/cleanup. Brez napak v konzoli. Fizične naprave in drugi brskalniki niso preverjeni.
- README, kontrolni seznam, viri in SUBMISSION posodobljeni. AI: Codex je izvedel prenos, preverjanje, izbor, optimizacijo s Pillow, React/CSS in preverjanja. Fotografije niso AI generirane ali retuširane; Copilot pri tem uvozu ni bil uporabljen.

## 2026-11-04 — Celovita experimental editorial prenova

- Pred izvedbo pregledani projekt, AGENTS/README/dokumentacija, poti, CSS, obstoječe slike/branding in GSAP. Uporabnikova referenca je pregledana iz priponke; ustvarjen EDITORIAL_REDESIGN_PLAN.md. Prenova je izvedena v obstoječih datotekah, brez nove aplikacije ali odvisnosti.
- Nov skupni editorial.css: Anton/DM Sans/Space Grotesk, svetla rdeče-bela podoba z globoko rdečo in omejenimi navy poudarki. Plastena naslovnica »Maribor. Mladi. Brez meja.«, izvirne SVG poteze/napisi/stickerji, fotografske razprostrte kompozicije in enaka identiteta vseh podstrani ter noge. Ohranjeni vsi podatki/poti, barvni portreti, uporabnikov logo/favicon in fiksni števci.
- Animacije razdeljene v heroAnimations/textReveals/waveMotion in useGsapContext. Trije fotografski valovi dejansko sledijo odzivni SVG Bézier poti prek MotionPathPlugin in ScrollTrigger scrub. Največ en pin pri ≥1024 × 680 px; višina začetka izmerjena pod headerjem. Manjši zasloni imajo ožjo pot in manjšo rotacijo. Reduced motion sproti vrne statično mrežo in izklopi Lenis. Popravljen vrstni red zadnje CSS media poizvedbe, da ne prepiše avtomatske višine statične galerije.
- Novi kmsImages semantični manifest in EditorialPhoto ponovno uporabita osem obstoječih lokalnih WebP/JPEG fotografij s krediti in alt opisi. Izvirniki niso izbrisani ali retuširani. Dostopni viri galerij so ločeni od premikajočih se elementov, zato ni nevidnih fokusljivih povezav. Glavna hero slika je prioritizirana, ostale lazy.
- Preoblikovane strani O nas, Dogodki, Novice, Članstvo, Priložnosti, Kontakt in Newsletter. Meni podpira Enter/Tab/Escape, zapiranje po navigaciji ter klik zunaj. Uradni membership CTA, mailto osnutek in disabled newsletter so ohranjeni. Tri novice zdaj odpirajo preverjene izvirne članke namesto naslovnice. Organi/kontakt/ure ponovno primerjani z uradnima stranema 4. 11. 2026, datum pregleda posodobljen.
- Uspešni npm install, typecheck in build ter zagon dev strežnika za razvojni Strict Mode. Chrome brez screenshotov: 36 kombinacij osmih poti in 404 pri 375/768/1024/1440 px, brez manjkajočih slik ali zaznanih prelivanj po popravku tabličnih razmikov. Preverjeni vsi filtri, tipkovniški meni, validacija kontakta brez pošiljanja, barvni portreti, štirje sprotni reduced-motion preklopi, SPA cleanup, en pin v Strict Mode ter dejanske transformacije v osmih namiznih scroll vzorcih. Podrobni rezultati in dodatni zaključni pregled v EDITORIAL_REDESIGN.md.
- README in AGENTS preurejena za veljavno stanje; dopolnjeni SUBMISSION, barve, kontrolni seznam, viri, scroll dokumentacija in resnična AI izjava. Spremembe iz predhodnih faz ostajajo ohranjene. Ta različica ni objavljena ali poslana na GitHub.
- AI: Codex je izvedel analizo, React/TS/CSS/SVG, GSAP, vključitev obstoječih fotografij, preverjanje uradnih virov, native npm in Chrome DOM/tipkovnične teste ter dokumentacijo. Copilot pri tej prenovi ni bil uporabljen; njegov prejšnji prispevek ostaja naveden. Brez imagegen/Figma, generiranja fotografij ali screenshotov. Fizične naprave, drugi brskalniki, celoviti WCAG/performance audit, newsletter backend in preverjanje nepriloženega PDF ostajajo omejitve.

Zaključni dodatek: po zadnjem CSS popravku preverjenih še 10 kombinacij 375×844 / 768×1024 / 1024×768 / 1024×600 / 1440×1000 z obema nastavitvama gibanja. Brez prelivanja dokumenta ali statične galerije; pin pri 1024×768 in 1440×1000 samo brez reduced motion, sicer nič pinov. Header v scroll vzorcih ostane na y=0. Končni build: JS 485,83 kB / gzip 163,14 kB; CSS 57,78 kB / gzip 11,62 kB. Git diff --check brez pripomb.

## 2026-11-04 — Lokacija Pisarna na kontaktu

- Dodana `src/components/editorial/LocationSection.tsx` in scoped `LocationSection.css`, vključeni samo v `src/pages/Contact.tsx` pred zaključnimi e-novicami. Druge komponente, poti in newsletter niso spreminjani.
- Interaktivni lazy Google Maps embed za Pisarno na Vetrinjski ulici 30 v Mariboru ter »Prikaži pot« z Google Maps directions (`api=1`, kodiran cilj, nov zavihek). Naslov in ikoni lokacije/ur, rdeče-beli editorial prikaz s tankim navy napisom, en stolpec do 900 px.
- Uradne ure KMŠ ponovno potrjene na klub-kms.si in prikazane iz skupnega kataloga; niso predstavljene kot urnik lokala. Obstoječi scoped GSAP reveal in reduced-motion/cleanup brez dodatnega pina ali odvisnosti.
- Typecheck/build uspešna. Osem Chrome kombinacij štirih širin z obema nastavitvama gibanja: brez prelivanja, pravilen title/lazy/directions, dejanski fade/pomik in statični reduced motion. Embed HTTP 200, dostopna regija Zemljevid, brez error sporočil pri zaključnem pregledu. Brez screenshotov, brez fizičnih naprav ali dejanskega načrtovanja poti. Podrobnosti in viri v CONTACT_AND_NEWSLETTER.md.
- README in SUBMISSION dopolnjena. Codex je napisal React/CSS, preveril uradna vira in izvedel npm ter Chrome DOM preverjanja; Copilot/imagegen nista bila uporabljena.

## 2026-11-04 — Fotografije: manj ponavljanja, manjši okvirji, preverjeni profili

- Ohranjen editorial sistem, poti in GSAP časovnice. Zmanjšani uvodni, članski, projektni in valovni foto okvirji; vodoravne fotografije podstrani v razmerju 3 : 2. Manjši portreti in 56 px spremljevalni portreti vodij.
- Štirje dodatni preverjeni prizori iz paketa: dva Cantusa, občinstvo KMŠ ODRA in široki kader Ftrgatve, v lokalnem WebP/JPEG. Razporejeni po O nas, članstvu, dogodkih in valovih; kontakt dobi vsebinsko ustrezno obstoječo Pisarno. Manj ponavljanja dobrodelnosti/Cantusa. Originali ohranjeni.
- Šest preverjenih person-photo povezav: trije obstoječi portreti in novi Enej/Eva/Zala. Urbanova uradna ilustracija je vključena z jasno oznako, vlogo in e-pošto, ne kot izmišljeni portret; Jan Kolbič ostane na inicialkah. Pravi Urbanov portret ni najden, druge nepotrjene identitete ostajajo odprte.
- Dodani centralni katalog oseb, fotografske dopolnitve, reprodukcijska skripta in evidenca izvorov/hashes; javni rastrski popis dopolnjen na 62. README/SUBMISSION in relevantni viri posodobljeni.
- Typecheck/build uspešna. 36 kombinacij poti/širin brez manjkajočih slik, prelivanja ali pregledanih prekrivanj, preverjeno povezovanje oseb/portretov in Urbanov mailto; še deset wave/reduced-motion kombinacij brez prelivanja z ustreznim pinom/cleanup postavitve. Brez screenshotov; fizične naprave in drugi brskalniki niso preverjeni.
- Codex je izvedel pregled uradnih oznak in originalov, optimizacijo s Pillow, TS/React/CSS ter npm/Chrome DOM preverjanja. Brez AI generiranja obrazov, imagegen ali Copilota. Celotna revizija in odprte potrditve v PHOTOGRAPHY_AUDIT.md.

## 2026-11-04 — Hitrejše animacije in UX

- Hero 1,31→0,67 s; tekstovni reveal 0,8–0,85→0,45 s, manjši odmik. Glavna fotografija in CTA niso zakasnjeno skriti. Poenoten tudi starejši Reveal. Števci 1,6→0,9 s, ohranijo končne vrednosti ob spremembi reduced motion.
- Glavni pin skrajšan z 2,2 na 1,15 viewporta in omejen na ≥1280 × 760 px. Kratkejši mobilni/vezni odri, scrub 0,25/0,15 s in največ približno dve hkratni fotografiji. Zadnja fotografija ostane vidna. Povezana SVG grafika, resnične fotografije in poti ohranjene.
- Skupni refreshScheduler združi font/image dogodke, odstrani preklicane zahteve in prepreči več hkratnih dragih refresh klicev. Lenis dohiteva hitreje (lerp 0,2), hover 0,3 s, indikator se po treh ciklih ustavi. Fokus se ob menjavi poti prenese na main, dekoracija ne prekriva hero črk.
- Typecheck/build uspešna, vseh osem strani + 404 pri štirih širinah brez zaznanih težav. Tipkovniški meni, šest filtrov, native validacija, štirje motion preklopi, SPA cleanup/Strict Mode in deset wave/motion kombinacij preverjeni. Izmerjeni dejanski hero 0,67 s, 1150 px pina pri 1000 px višine, vidna zadnja fotografija in en združen refresh. 20 zunanjih povezav HTTP 200, brez manjkajočih notranjih sider. Brez screenshotov; omejitve in natančne meritve v ANIMATION_UX_OPTIMIZATION.md.
- README, AGENTS, SUBMISSION in SCROLL_STORY posodobljeni. Codex je izvedel TS/React/CSS ter dejanske npm/Chrome preizkuse; brez novih knjižnic, fotografij ali uporabe Copilota. Brez trditve o Lighthouse/FPS ali fizičnih napravah.

## 2026-11-04 — Odmik opisa ODRA in večji portreti sekcij

- Po dodatnem uporabnikovem naročilu je opis KMŠ ODRA prestavljen pod fotografijo (margin-top 1,25 rem), brez negativnega prekrivanja.
- Uvodne fotografije podstrani povečane na 28 % / do 24 rem, mobilno 82 % / do 22 rem. Domači hero s to dopolnitvijo ni povečan.
- Področja in sekcije imajo pregledne vrstične profile z barvnimi 160 px portreti, mobilno 128 px, imenom in področjem; širše namizje v dveh stolpcih. Podatki/identitete so ohranjeni.

Zaključni pregled fotografske prilagoditve: 36 kombinacij poti/širin brez zaznanih težav. Opis ODRA več ne prekriva slike; izmerjen pozitivni odmik pri 375/768/1024/1440 px. Vodje področij imajo potrjenih 128/160 px prikaznih mer. Typecheck/build in git diff --check uspešni; brez screenshotov.

## 2026-11-04 — Odstranjena črta pred članstvom

Na uporabnikovo zahtevo je odstranjen ScrollConnector med glavno fotografsko galerijo in sekcijo »04 / Tvoj prostor je tukaj«, skupaj z njegovo puščico in vmesnim prostorom. Ostala ozadja, fotografije, članstvo in animacije ostanejo ohranjeni. Codex je izvedel ciljno spremembo Home.tsx; brez screenshotov. Typecheck in build uspešna.

## 2026-11-04 — Še večje uvodne fotografije podstrani

Na uporabnikovo zahtevo so fotografije ob glavnih naslovih O nas, Dogodki, Novice, Članstvo, Priložnosti, Kontakt in Newsletter povečane z 28 % / največ 24 rem na 38 % / največ 34 rem. Mobilno z 82 % / največ 22 rem na 92 % / največ 30 rem. Tablična širina besedila/CTA je omejena na 48 %, da ostane jasen razmik. Domači hero, druge fotografije in animacije niso spremenjeni.

Typecheck/build uspešna. Chrome brez screenshotov: 36 kombinacij poti/širin, brez odrezanih uvodnih fotografij, zaznanih prekrivanj odstavkov/gumbov, manjkajočih slik ali vodoravnega prelivanja. Codex je prilagodil samo obstoječi editorial CSS in dokumentacijo; brez novih fotografij ali knjižnic.

## 2026-11-04 — Mobilni prikaz in animiran hamburger

- Gumb hamburger→križec ima kratko 200 ms CSS animacijo in 48 px površino za dotik. Mobilni meni se gladko odpre/zapre z 180/220 ms prehodom, večjimi povezavami in jasno aktivno stranjo. Brez novih knjižnic ali posega v strukturo poti.
- Zaprta navigacija je inert, tudi med izhodnim prehodom. Reduced motion izklopi prehode. Ohranjeni Escape, zapiranje po navigaciji in klik zunaj; popravljeno še zapiranje po izbiri trenutne strani. Resize na namizje odstrani inert in vrne običajni nav.
- Mobilni hero CTA je polne širine, header upošteva safe-area, polja imajo 1 rem pisavo, hero sticker je na fotografski plasti. Kratki/nižji zasloni ohranijo drsljiv meni z dosegljivim uradnim membership CTA.
- Typecheck/build uspešna, 36 responsive primerov vseh poti brez zaznanih težav. Deset dodatnih menu/motion kombinacij pri 320/375/430/768 px in nizkem 700×360 zaslonu: preverjeni hamburger, panel, inert, CTA in reduced motion. Enter/Tab/Escape, trenutna stran, menjava strani in resize v namizje uspešni, brez error sporočil pri zaključnem pregledu. Brez screenshotov; fizične naprave/Safari niso preverjeni.
- README/SUBMISSION dopolnjena; podrobnosti v MOBILE_NAVIGATION.md. Codex je pripravil React/CSS, npm/Chrome DOM preizkuse in dokumentacijo. Brez novih fotografij, odvisnosti ali Copilota.

## 2026-11-04 — Nežno poudarjena ozadna grafika

Na uporabnikovo zahtevo je opacity skupne grafike domače strani povečana z 0,22 na 0,28, obris ozadnih besed z 1 na 1,15 px. Oznaka KMŠ za uvodi podstrani ima 22 % namesto 17 % opacity in 1,1 px obris. Plasti, pointer-events none, postavitev in animacije ostanejo enaki; odstranjena črta pred članstvom ni vrnjena. Codex je izvedel ciljno CSS prilagoditev. Typecheck/build uspešna; brez screenshotov ali dodatnega brskalniškega pregleda za to majhno spremembo.

## 2026-11-04 — Uskladitev projektne dokumentacije

- Glavni README je preurejen kot tehnični in projektni uvod, usklajen s trenutno implementacijo poti, animacij, barv, dostopnosti in omejitev.
- Dodani so prijavni dokument za CTRL+CREATE, pregled virov in navedb, dokument avtorstva/AI ter razvojna zgodovina.
- Izvirni PDF brief in javni demo URL nista na voljo; dokumentacija ju ne predstavlja kot potrjena.
- `SUBMISSION.md` je označen kot starejši delovni osnutek; aktualni kontrolni seznam je `CTRL_CREATE_SUBMISSION.md`.
- Dokumentacija je pripravljena brez spreminjanja aplikacijske funkcionalnosti ali ustvarjanja posnetkov zaslona.
