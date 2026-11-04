# KMŠ / CTRL+CREATE — RED / WHITE

Konceptni odziven prototip spletne strani Kluba mariborskih študentov z izrazito festivalsko tipografijo in fotografskim triptihom. Po najnovejšem uporabnikovem navodilu je ponovno veljavna paleta RED / WHITE: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temno besedilo `#181818`. Ta zahteva nadomešča monokromatsko smer koraka 02. Podrobnosti o barvah, tipografiji, razmikih in odzivnosti so v `docs/BRAND_COLORS.md`.

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
- Pod hero je »Napovednik dogodkov« s fiksnimi uporabnikovimi vrednostmi 45 projektov v 2023, 753 članov in 29 aktivistov; ob vstopu v pogled se številke animirajo do cilja.
- 8 navigacijskih poti: Domov, O nas, Dogodki, Novice, Članstvo, Priložnosti, Kontakt, Newsletter (dosegljiv na `/newsletter`, iz noge in s kontakta).
- Stalno viden odziven header, kartice dogodkov, filtriranje dogodkov, seznam novic, prikaz ekipe.
- Diskretni glasbeni SVG motivi v ozadju: kitara, harmonika in odrska oprema; brez dodatnega gibanja.
- Gladko drsenje z Lenis, usklajeno z GSAP `ScrollTrigger`, reveal animacijami in `prefers-reduced-motion`.
- Lokalni uporabnikov logotip v navigaciji in favicon; stari `logo-placeholder.svg` ni uporabljen. Fotografije dogodkov ostajajo začasni vizuali; trije barvni portreti ekipe imajo potrjen uradni vir.
- Kontaktni obrazec je jasno označen mailto osnutek; newsletter je **neaktiven predogled** z onemogočenimi kontrolami, brez zbiranja podatkov.

## Predogledi
Po uporabnikovi zahtevi so vsi lokalni slikovni predogledi izbrisani (45 datotek). Novih screenshotov ali slikovnih predogledov ne ustvarjamo; preverjanje v brskalniku poteka brez zajema slik. Starejši zapisi o predogledih opisujejo takrat izvedene preglede, datoteke pa niso več vključene.

## Pomembno o slikah
V `public/assets` je **28 abstraktnih nadomestnih JPG vizualov**, **3 izvorni JPEG portreti ekipe s potrjenim uradnim virom** in **3 WebP izpeljanke portretov**. Evidenca portretov in še nedokumentiranih dovoljenj za javno objavo je v `docs/ABOUT_AND_SOURCES.md`. Na iste poti kasneje prekopiraj uradne fotografije z dovoljenjem KMŠ; ob zamenjavi portreta osveži tudi WebP različico in preveri alt/izrez, da ne ostane stara prednostna slika. Portreti se nalagajo prednostno kot WebP z JPEG rezervo; če slika manjka, aplikacija prikaže nadomestni okvir z oznako 'KMŠ / FOTO'. Logotip je priložil uporabnik; ločeno dokazilo o dovoljenju ni priloženo. Celoten popis v `docs/ASSET_INVENTORY.json`, izvor in status dovoljenj v `docs/ASSETS_AND_SOURCES.md`.

## Audit 01 — 3. 11. 2026
`npm install`, `npm run typecheck` in `npm run build` so uspeli z Node.js 22.15.0 in npm 10.9.2. Napak tipov ali gradnje ni bilo; izvorna koda in vizualna smer sta ohranjeni. Statično je preverjenih vseh osem poti, 404 in obstoj 18 uporabljenih lokalnih slikovnih poti; ločen preizkus potrjuje kodiranje kontaktnega `mailto`.

Odprto: ekipa v prototipu se razlikuje od uradne strani, sestava organov še manjka, novice vodijo na domačo stran, newsletter nima integracije. Podrobnosti in viri so v `docs/CHANGELOG.md`. Pregled v brskalniku, na napravah in preverjanje izvirnega PDF briefa niso bili izvedeni; PDF v projektu ni priložen.

## Design system 02 — 3. 11. 2026
`src/styles.css` je urejen v enoten sistem nevtralnih barv, prilagodljive tipografije, razmikov, mrež, obrazcev in fokusnih stanj. Temen hero in noga dopolnjujeta svetlo vsebino; uporabnikov logotip in obstoječe strani so ohranjeni. Popravljeno je tudi čiščenje GSAP pripete sekcije ob prehodu med stranmi.

V Chromu je preverjenih vseh osem poti in 404 pri širinah 320, 390, 768, 1024, 1440 in 1920 px, brez vodoravnega prelivanja. Preverjeni so meni, filtriranje, fokus, osnovne kontrastne kombinacije in reduced motion ob nalaganju. Typecheck in build uspešna. [Podrobnosti preverjanja](docs/BRAND_COLORS.md). Gre za emulacijo v namiznem Chromu; fizične naprave in drugi brskalniki še niso preverjeni.

## Hero 03 — 3. 11. 2026
Nova komponenta `Hero.tsx` združuje uvod, naslov »NE SAMO ŠTUDENTI. SKUPNOST.«, uradni gumb za včlanitev in lokalni triptih. Nad 700 px so prikazane tri slike, od 421 do 700 px dve, do 420 px pa poudarjena sredinska slika. Datoteke ostajajo začasni vizuali, kar je jasno označeno; novih fotografij ali zunanjih slikovnih povezav ni.

Sredinska slika se nalaga takoj s prednostjo `high`; preostali sliki in druge slike ohranijo lazy loading. Postavitev rezervira prostor tudi za `SmartImage` fallback. V Chromu preverjenih 11 širin od 320 do 1920 px, oba preloma, lokalne slike, povezava do uvoda, fallback, prehodi in reduced motion. Typecheck in build uspešna. Fizične naprave in drugi brskalniki še niso preverjeni.

## Povezani scroll 04 — 3. 11. 2026
`ScrollStory.tsx` ponovi lokalne uvodne slike in jih poveže z uvodom v dogodke: slike se povečajo, napis »SKUPAJ.« se zmanjša in umakne, bela ploskev razkrije »DOŽIVI MARIBOR.« ter se nadaljuje v seznam projektov. En pin se uporablja samo nad 700 px širine in 600 px višine; na telefonih in nizkih ležečih zaslonih ostane naravni tok z blagim povečanjem slik.

Reduced motion izklopi scroll in reveal animacije tudi ob spremembi nastavitve med obiskom. Preverjeni drsenje nazaj, čiščenje ob navigaciji, prelomi in stabilnost postavitve; med izmerjenim namiznim prehodom ni bilo zaznanega layout shifta. Typecheck in build uspešna. [Izvedba in preverjanja](docs/SCROLL_STORY.md).

## Dogodki 05 — 3. 11. 2026
Na `/dogodki` je vseh osem projektov z opisi, preverjenimi na neposrednih uradnih straneh KMŠ, in povezavo do vsake predstavitve. Dodani so tematske kategorije s števci, prikaz števila rezultatov in ponastavitev s povrnitvijo fokusa. Kartice se prilagodijo na dva oziroma en stolpec; uporabljajo obstoječe lokalne začasne vizuale.

Stran predstavlja projekte, ne koledarja prihodnjih izvedb; Ftrgatev izrecno povzema napoved iz leta 2025. Typecheck in build uspešna, vseh šest filtrov preverjenih pri osmih širinah od 320 do 1920 px. [Viri in omejitve](docs/EVENTS_AND_SOURCES.md).

## O nas in organi 06 — 3. 11. 2026
Stran `/o-nas` vključuje poslanstvo, petčlansko ekipo, vodje področij, razlago skupščine in poimensko sestavo Upravnega odbora, Nadzorne komisije ter Častnega razsodišča. Podatki so usklajeni z neposredno pregledano uradno stranjo KMŠ, z vidnim datumom in povezavo na vir. Trije portreti so lokalno shranjeni iz potrjenega vira; drugi dve kartici uporabljata inicialke.

Typecheck in build uspešna; podatki, sidra in mreže preverjeni pri devetih širinah, brez vodoravnega prelivanja. [Viri, fotografije in preverjanja](docs/ABOUT_AND_SOURCES.md). Dovoljenja za javno objavo portretov še niso dokumentirana; nove člane ali njihove fotografije smo vključili samo na podlagi uradnega vira.

## Članstvo in priložnosti 07 — 3. 11. 2026
Na `/clanstvo` je neposreden CTA za uradni obrazec že v uvodu, tri pojasnjene vsebinske ugodnosti, kratka navodila ter kontakt za vprašanja. `/priloznosti` vključuje aktivizem, predlaganje idej in sodelovanje pri projektu, vsako s svojim e-poštnim osnutkom. Sporočila se ne pošiljajo samodejno; lokalnih obrazcev za te poti ni.

Typecheck in build uspešna. Obe strani preverjeni pri osmih širinah od 320 do 1920 px, brez prelivanja; Enter na CTA odpre pravilen uradni obrazec. Zunanji vmesnik se prikaže, a beleži tudi napake in oddaja ni bila preizkušena. [Viri in omejitve](docs/MEMBERSHIP_AND_SOURCES.md).

## Kontakt in newsletter 08 — 3. 11. 2026
Uradni naslov, telefon, ure ter Instagram/Facebook/YouTube so preverjeni in centralizirani. Kontaktni obrazec jasno odpre e-poštni program brez samodejnega pošiljanja. Newsletter je odkrit iz noge in kontakta; neaktiven predogled ne omogoča vnosa ali oddaje podatkov in ne prikazuje lažne uspešne prijave.

Pripravljen je konkreten predlog Mailchimp integracije z dvojno potrditvijo prek gostovanega obrazca ali odobrenega strežniškega endpointa; povezava s storitvijo ni izvedena. Typecheck in build uspešna, obe strani preverjeni pri devetih širinah. [Podatki, viri, omejitve in predlog integracije](docs/CONTACT_AND_NEWSLETTER.md).

## Slike in branding 09 — 4. 11. 2026
Trije lokalni portreti so ponovno primerjani z uradnim virom in dobili WebP različice, skupaj 32,5 % manjše od JPEG. Izvirniki in kvadraten izrez 300 × 300 px so ohranjeni; `<picture>` ponuja JPEG rezervo in označen fallback. Alt opisi začasnih vizualov so usklajeni tudi na domači strani. Uporabnikov PNG logotip in favicon ostajata vključena, z eksplicitnimi dimenzijami; placeholder ni uporabljen.

Typecheck in build uspešna. Tri strani s slikami preverjene pri sedmih širinah, tudi povratek na JPEG/fallback brez spremembe višine ter ohranjena scroll scena. [Popis, viri in dovoljenja](docs/IMAGE_REVIEW.md). Avtorstvo in dovoljenja za javno objavo ostajajo odprti; hero in dogodki še uporabljajo začasne vizuale.

## Ponovna potrditev RED / WHITE — 4. 11. 2026
Rdeča nadomesti temna ozadja navigacije, hero sekcije, scroll scene, noge in gumbov. Bela in svetlo rožnata razdelita vsebinske površine; naslovi dobijo rdeče poudarke, tekoče besedilo ostane temno. Uporabnikov logotip, favicon, poti, struktura, izrezi slik in GSAP animacije ostanejo ohranjeni.

Typecheck in build uspešna. V Chromu preverjenih vseh osem poti in 404 pri šestih širinah (54 kombinacij), meni, filtri, reduced motion in scroll prehod na telefonu/namizju. [Veljavna paleta in kontrasti](docs/BRAND_COLORS.md). Objavljeni GitHub še odraža starejšo različico, ne teh lokalnih sprememb.

## Smooth scroll — 4. 11. 2026
Dodano je mehko drsenje z miško in sledilno ploščico prek Lenis, povezano z obstoječim GSAP tickerjem. Dotik, tipkovnica in sidra ohranijo brskalnikovo vedenje; glajenje se ob reduced motion sproti izklopi. Menjava strani prekine preostali zagon. Struktura in RED / WHITE ostajata ohranjeni.

Typecheck in build uspešna. Preverjene vse strani na namizju, mobilni/tablični prikaz, sidra, navigacija in sprotni reduced motion. [Izvedba in omejitve preverjanja](docs/SCROLL_STORY.md#smooth-scroll--4-11-2026).

## Stalno viden header — 4. 11. 2026
Navigacija je pripeta na vrh z `position: sticky`, brez izločanja iz toka vsebine. Sidra upoštevajo višino headerja; mobilni meni ima lasten scroll tudi na nizkih zaslonih. Pripeta GSAP scena zapolni prostor pod headerjem. Typecheck in build uspešna; vse strani preverjene pri štirih velikostih zaslona. [Podrobnosti](docs/SCROLL_STORY.md#stalno-viden-header--4-11-2026).

## Diskretni glasbeni motivi — 4. 11. 2026
Lokalne linijske ilustracije kitare, harmonike ter bobnov z mikrofonom zapolnijo praznejša ozadja uvodov in scroll zgodbe. Motivi uporabljajo 12 % rdeče, na telefonu 7,5 %, ostanejo za vsebino in ne ovirajo klikov. To niso fotografije KMŠ dogodkov. Typecheck in build uspešna; vseh osem strani preverjenih pri treh širinah. [Izvedba](docs/BRAND_COLORS.md#dekorativni-glasbeni-motivi--4-11-2026).

## Izziv CTRL+CREATE
Rok: **14. december 2026**. Ocena: UX/navigacija 25 %, vizualna podoba 25 %, vsebina 20 %, funkcionalnost 20 %, mobilna prilagoditev 10 %. Nujni elementi: predstavitev KMŠ in organov društva, dogodki/novice, članstvo, priložnosti, kontakt in družbena omrežja, newsletter. Oddaja: delujoč prototip, opis ideje 150–300 besed, orodja in deljiva povezava. Gostovanje na lastni domeni ni potrebno.

## Nadaljnji koraki
Preberi `AGENTS.md`, `docs/CODEX_STEPS.md`, `docs/CONTENT_CHECKLIST.md`, `docs/ASSETS_AND_SOURCES.md` in `docs/SUBMISSION.md`. Izvedi naloge v navedenem vrstnem redu.

## Orodja in avtorstvo
React + TypeScript + Vite + GSAP + Lenis. Struktura in načrt sta nastala s pomočjo ChatGPT. Codex je izvedel audit 01, v koraku 02 poenotil CSS, popravil čiščenje GSAP in dostopna stanja kontrol ter preveril odzivnost v Chromu z orodjem chrome-devtools-cli. V koraku 03 je pripravil samostojno hero komponento, uvodno besedilo in odziven lokalni triptih ter preveril postavitve, fallback in povezave v Chromu. V koraku 04 je povezal scroll sceno z dogodki, dodal odzivno upravljanje animacij in sprotni reduced motion ter preveril drsenje, stabilnost in čiščenje. V koraku 05 je preveril uradne projektne vire, povzel opise, uredil kategorije in kartice ter preizkusil filtre in odzivnost. V koraku 06 je preveril ekipo in organe, uredil stran O nas ter vključil tri vizualno pregledane portrete z uradnega vira. V koraku 07 je po preverjenih virih prenovil članstvo in priložnosti, dodal neposredne CTA in e-poštne predloge ter preveril postavitve in odpiranje obrazca. V koraku 08 je preveril kontaktne in socialne podatke, ohranil pošten mailto, onemogočil newsletter predogled ter pripravil načrt Mailchimp integracije in preverjanja. V koraku 09 je pregledal slike in branding, preveril izvor portretov, pripravil WebP s Pillow in rezervni prikaz ter dokumentiral popis in status dovoljenj. Po ponovni potrditvi RED / WHITE je spremenil barvne tokene in theme-color, ohranil strani/animacije ter preveril kontrast in odzivnost. Dodal je tudi Lenis smooth scroll, usklajen z GSAP, sidri, navigacijo in reduced motion, ter ga preveril v Chromu. Uredil je tudi stalno viden header, odmike sider in pripete scene ter preveril mobilni meni. Na uporabnikovo željo je napisal tri izvirne dekorativne SVG motive glasbil ter preveril berljivost, odzivnost in scroll. Dodal je uporabnikove fiksne animirane števce, omogočil barvne portrete in odstranil predoglede ter preveril spremembe brez zajema slik. Posodobil je tudi dokumentacijo. GitHub Copilot pri teh korakih ni bil uporabljen. Avtor je odgovoren za pregled, testiranje in končno oddajo.

## Zgodovina palete: KMŠ RED / WHITE in korak 02 (03. 11. 2026)
Pred korakom 02 je bila uporabljena rdeče-bela paleta, v koraku 02 nato monokromatska. Ponovno uporabnikovo navodilo 4. 11. 2026 vrača RED / WHITE; starejši zapisi in predogledi ostajajo zgodovinski. Priložen uporabnikov logotip ostaja v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Stari placeholder logotip ni uporabljen.
