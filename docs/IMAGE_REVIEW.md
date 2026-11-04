# 09 — Slike in branding (4. 11. 2026)

Zapis in predogledi tega koraka prikazujejo tedanjo monokromatsko paleto. Poznejše ponovno navodilo RED / WHITE spreminja barve prikaza, ne slikovnih datotek ali njihovega izvora; veljavno stanje in novi predogledi so v [BRAND_COLORS.md](BRAND_COLORS.md).

## Popis in izvor

[ASSET_INVENTORY.json](ASSET_INVENTORY.json) vsebuje vseh 37 lokalnih rastrskih datotek: pot, dimenzije, bajte, SHA-256, vrsto, uporabo, vir in stanje dovoljenja. Gre za 28 abstraktnih JPG vizualov, tri izvorne JPEG portrete, tri WebP izpeljanke in tri PNG datoteke znamke. Stari `branding/logo-placeholder.svg` je neuporabljen zgodovinski scaffold, ni del rastrskega popisa. Nobena stran ga ne uporablja.

V tem koraku niso dodane nove fotografije. Izvor treh obstoječih portretov je ponovno preverjen na [uradni strani O nas](https://www.klub-kms.si/o-nas/): ime v alt atributu uradne slike se ujema z osebo v kartici. Neposreden GET strani in vseh treh JPEG URL-jev je vrnil HTTP 200; preneseni bajti so enaki lokalnim JPEG izvirnikom. Podrobni izvorni URL-ji so tudi v [ABOUT_AND_SOURCES.md](ABOUT_AND_SOURCES.md).

| Oseba in lokalno ime | Izvorna datoteka KMŠ | JPEG → WebP (bajti) |
|---|---|---|
| Jan Ozvaldič / `jan-ozvaldic` | [DSC00982-2-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/DSC00982-2-300x300.jpg) | 13.963 → 10.426 |
| Doroteja Plohl / `doroteja-plohl` | [doroteja-2-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/doroteja-2-300x300.jpg) | 13.725 → 9.006 |
| Gabriela Brodnjak / `gabriela-brodnjak` | [Gabi-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/Gabi-300x300.jpg) | 10.624 → 6.434 |

## Imena, izrezi in alt opisi

- Imena uporabljajo male črke in vezaje; WebP ima enako osnovno ime kot izvorni JPEG, v `public/assets/team/`. Poti so izrecno navedene v `about.ts`; komponenta ne ugiba, ali obstaja WebP za druge slike.
- Portreti ostanejo 300 × 300 px. Na disku ni novega obrezovanja, povečevanja ali retuše; ohranjen je že objavljen kvadraten izrez. CSS uporablja kvadraten okvir, `object-fit: cover` in obstoječi `object-position: center 25%`. Pri kvadratnem izvirniku in okvirju ni dodatnega izreza. Obrazi na vseh treh izvirnikih so vidni.
- Večje kartice in zasloni z veliko gostoto pik lahko pokažejo omejeno ostrino vira 300 × 300; za izboljšavo naj KMŠ priskrbi večje odobrene izvirnike. Iz njih ne ustvarjamo navideznih podrobnosti s povečevanjem.
- Alt opisi portretov so `Portret: Jan Ozvaldič`, `Portret: Doroteja Plohl` in `Portret: Gabriela Brodnjak`. Za Urbana in Jana Kolbiča ostanejo inicialke; fotografij zanju ni.
- Hero, povezana scroll scena in kartice dogodkov uporabljajo označene začasne vizuale. Popravljeni so tudi štirje alt opisi na domači strani: `Začasni vizual za projekt …`. Začasna slika ne nastopa več samo pod imenom dogodka, kot da bi bila njegova fotografija.
- Galerijskih 15 vizualov in dva stara vizuala ekipe ostajajo neuporabljeni. Njihov fotograf, izvor oziroma zgodovina nastanka niso dokumentirani; ne označujemo jih kot uradne fotografije.

## WebP in nalaganje

Tri WebP slike (quality 85, method 6) skupaj zavzamejo **25.866 B namesto 38.312 B**, torej **32,5 % manj** od treh JPEG datotek. To je primerjava slikovnih datotek, ne meritev celotnega prenosa ali hitrosti strani. Izvorni JPEG ostane nespremenjen. Preostali začasni JPG niso pretvorjeni; pred njihovo končno optimizacijo se zamenjajo z odobrenimi fotografijami.

`SmartImage` dobi neobvezni `webpSrc` in uporablja `<picture><source type="image/webp">` z izvirnim JPEG v `<img>`. Če WebP ni podprt, je na voljo JPEG; če pride do napake WebP nalaganja, komponenta odstrani source in poskusi JPEG. Napaka tudi te datoteke pokaže obstoječi označeni fallback z enakim dostopnim opisom. Dimenzije 300 × 300 in obstoječi CSS okvir rezervirajo prostor. Lazy loading, async decoding, prioriteta sredinske hero slike in GSAP animacije ostanejo ohranjeni.

Izpeljanke je mogoče ponovno ustvariti z `python3 scripts/optimize-portraits.py`. Orodje zahteva Python 3 in Pillow s podporo WebP (v tem pregledu Pillow 11.3.0); ni izvajalna odvisnost spletne aplikacije. Preveri 300 × 300 px, ohrani JPEG in zavrne izvoz, ki ni manjši od izvirnika. Različice encoderja lahko povzročijo drugačne bajte; po novem izvozu osveži popis in opravi vizualni pregled.

## Logotip in favicon

Uporabnikov logotip je že nadomestil placeholder in ostaja ohranjen:

| Datoteka | Dimenzije | Uporaba in izrez |
|---|---|---|
| `public/assets/branding/kms-logo-original.png` | 705 × 467 | Priložen izvirnik z besedilnim podnapisom, referenca za izpeljanke. |
| `public/assets/branding/kms-logo-header.png` | 565 × 292 | Obstoječi izrez znaka brez podnapisa v navigaciji; celoten znak je viden z `object-fit: contain`. |
| `public/favicon.png` | 512 × 512 | Obstoječa kvadratna PNG ikona z znakom in transparentnim prostorom. |

Datoteke ostajajo PNG s prosojnostjo in nespremenjenimi bajti; logotip ni prerisovan ali ponovno obrezan. `Layout.tsx` zdaj navaja tudi izvorni width/height in async decoding; `index.html` eksplicitni MIME `image/png` in sizes `512x512`. Navigacijska povezava ima dostopno ime »KMŠ domov«, slika pa »Logotip Kluba mariborskih študentov«. Ni vračanja na star placeholder ali spremembe monokromatskega sistema.

Izvor je uporabnikova lokalna datoteka. Zunanja povezava, avtor, priročnik znamke in ločeno dovoljenje za javno uporabo niso priloženi; ne trdimo, da smo pridobili novo potrditev kluba.

## Dovoljenja in avtorstvo

**Potrjen javni vir ni licenca za ponovno objavo.** Za tri portrete in njihove WebP izpeljanke avtor/fotograf, imetnik pravic, besedilo dovoljenja in morebitna zahtevana navedba avtorja še niso dokumentirani. Izpeljanka ima enak odprt status kot izvirnik. Tudi dovoljenje za javno uporabo uporabnikovega logotipa in pravice do začasnih vizualov niso dokazani.

Pred javno oddajo v evidenco dodaj dejansko dokazilo ali povezavo na dovoljenje, imetnika pravic, obseg uporabe (spletni prototip/javna stran), zahtevano navedbo avtorja in datum potrditve. Če dovoljenja ni, uporabi nadomestni prikaz oziroma gradivo z dokumentiranim dovoljenjem. V tem koraku dovoljenja niso izmišljena, zahtevana po e-pošti ali pridobljena; kontrolni seznam odobrenih fotografij ostaja odprt.

## Preverjanje

- `npm run typecheck` in `npm run build` uspešna; brez novih npm odvisnosti.
- Produkcijski predogled v namiznem Chromu: `/`, `/o-nas` in `/dogodki` pri 320, 390, 700, 701, 768, 1440 in 1920 px (21 kombinacij) z reduced motion. Preverjeni lokalno dekodiranje vseh slik, izbor WebP, alt opisi, kvadratni portreti, dve inicialki, logotip/favicon in odsotnost vodoravnega prelivanja.
- Pri 390 in 1440 px s sproženima slikovnima error dogodkoma preverjen povratek WebP → JPEG → označen fallback z enakim dostopnim imenom, brez spremembe višine okvirja. Test ne predstavlja dejanske okvare omrežja. Izbira JPEG pri nepodprtem source tipu preverjena s spremembo type na nepodprt MIME; star brskalnik fizično ni testiran.
- Pri 1440 px brez reduced motion preverjene tri vidne/dekodirane slike v scroll sceni, polnjenje okvirjev, en pin in odstranitev pina po prehodu na O nas. Brez napak v konzoli pri končnih interakcijah.
- Po novem nalaganju produkcijske strani O nas je pregled resource timing pokazal samo tri WebP zahteve za portrete, brez hkratnih zahtev za JPEG. Vsi podatki v rastrskem popisu se ujemajo z lokalnimi velikostmi in SHA-256; vse datoteke so dekodirane, trije PNG so enaki Git izvirnikom.
- Vizualno pregledani izvirniki, vse tri WebP izpeljanke, uporabnikov logo/favicon ter shranjeni mobilni in namizni predogledi. Pregled v emulaciji namiznega Chroma, brez fizičnih naprav in drugih brskalnikov; ne gre za celotno meritev zmogljivosti ali CLS.

AI: Codex je pregledal lokalne slike in uradne vire, pripravil WebP izpeljanke s Pillow, spremembe React/HTML/CSS, popis, preverjanja s chrome-devtools-cli in dokumentacijo. Pri tem koraku ni generiral ali retuširal fotografij in logotipa. GitHub Copilot ni bil uporabljen.
