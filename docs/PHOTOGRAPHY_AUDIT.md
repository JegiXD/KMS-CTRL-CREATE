# Pregled in uravnoteženje fotografij — 4. 11. 2026

Obseg: fotografije, prikazna velikost in preverjena povezava oseb s slikami; brez nove zasnove strani, poti ali animacijskih časovnic. Pregledani so katalogi, vsa mesta uporabe v komponentah, javni rastrski popis in uvoženi paket. Izbrani izvirniki so neposredno vizualno pregledani. Brez ustvarjanja screenshotov ali novih slikovnih predogledov.

## Ugotovitve in izvedeni popravki

- Isti prizor dobrodelnosti je predstavljal domači uvod, val, About, Membership in Contact; Cantus iz istega kadra se je ponovil v heru, prvem valu, članstvu in O nas. Za toliko različnih vsebin je bil izbor preveč enoličen.
- Fotografije podstrani so bile prisiljene v razmerje 0,85, čeprav so originali pretežno vodoravni. Zdaj uporabljajo 3 : 2, manjšo širino (24 %, največ 20 rem; mobilno 68 %, največ 18 rem), zato je vidnega več izvirnega prizora in več prostora ostane besedilu.
- Glavni hero ohranja fotografijo Ftrgatve in kolaž, vendar je širina zmanjšana s 57 % na 54 %, razmerje z 1,24 na 1,36. Primarna slika ostaja prednostno naložena.
- Intro uporablja širši in manjši okvir (največ 30 rem, razmerje 1,3); članstvo največ 26 rem in razmerje 1,3. About misija ima največ 28 rem. Velika projektna fotografija ima razmerje 1,4, kartice dogodkov 3 : 2.
- Veliki portreti iz 300-pikslovnih virov so se preveč povečevali. Mreža zdaj omogoča manjše stolpce, okvir je omejen na 16 rem; pri 1440 px je izmerjena širina 235 px. Vodje področij imajo le 56-pikslovne spremljevalne portrete. Imena in vloge ostajajo berljivi.
- Animirani foto okvirji so zmanjšani z največ 26 na 22 rem (mobilno največ 19 rem). Pot, scrub, rotacije in pripenjanje niso spreminjani; MotionPath pri refresh upošteva nove mere. Reduced motion še vedno uporabi polno širino statične celice.
- Branding, originali, portreti in red/white jezik so ohranjeni. Nobena oseba v fotografiji dogodka ni poimensko identificirana na podlagi videza.

## Dodane fotografije in razporeditev

Štiri že prenesene, pregledane fotografije iz `KMS-Foto-Paket` so pripravljene kot lokalni JPEG/WebP; izvirniki ostanejo nespremenjeni.

| Ključ v manifestu | Prizor / pripis | Nova uporaba |
|---|---|---|
| `cantusStage` | Voditelja in dvorana Cantusa / vir Dostop.si | Uvod članstva in prvi val; nadomesti ponavljanje dobrodelnosti oziroma istega Cantus kadra |
| `cantusTogether` | Udeleženci in ekipa ob odrski mizi / vir Dostop.si | O nas in domači poziv za članstvo |
| `oderAudience` | Pogled iz občinstva KMŠ ODRA / podpis Jure Bauman | Glavni val namesto ponovno iste ustvarjalne delavnice |
| `ftrgatevCrowd` | Širši pogled na občinstvo Ftrgatve / podpis Andraž Kramberger | Uvod dogodkov in glavni val, namesto istega hero nastopajočega |

Kontaktni uvod zdaj prikazuje obstoječo fotografijo koncerta v Pisarni, ki se vsebinsko naveže na lokacijo. Prvi domači val združi novi Cantus in prej manj uporabljeni Stand UP. Dobrodelnost ostane ob poslanstvu in skupnosti, ne ob vsakem pozivu. Kreativa ostaja ob delavnici/priložnostih, jazz ob glasbenem delu. Novice in newsletter že imata primeren spremljevalni izbor; zmanjšanje skupnih uvodnih okvirjev velja tudi zanju. Osem projektnih kartic še naprej uporablja potrjene projektne fotografije.

Natančni izvorni URL-ji, lokalni originali, njihove SHA-256, mere in velikosti so v [PHOTO_REBALANCE_ASSETS.json](PHOTO_REBALANCE_ASSETS.json). Ohranjeni so izvirni podpisi; krediti neznanih fotografov niso izmišljeni. Uporabnikovo že dano dovoljenje je evidentirano v [PHOTO_IMPORT.md](PHOTO_IMPORT.md).

## Preverjene osebe

Vir: [uradna KMŠ stran O nas](https://www.klub-kms.si/o-nas/), neposredni HTML pregled 4. 11. 2026. Uporabljena je izrecna povezava med `img alt`, sliko in imenom ob njej. To ni prepoznavanje obraza ali sklepanje iz imen datotek.

| Oseba | Rezultat |
|---|---|
| Jan Ozvaldič | Potrjen obstoječi portret `DSC00982-2-300x300.jpg` |
| Doroteja Plohl | Potrjen obstoječi portret `doroteja-2-300x300.jpg` |
| Gabriela Brodnjak | Potrjen obstoječi portret `Gabi-300x300.jpg` |
| Enej Polanec | Dodan uradni portret `Enej01-2-300x300.jpg` ob vodji področja |
| Eva Polič | Dodan uradni portret `Eva02-300x300.jpg` ob vodji področja |
| Zala Gluk | Dodan uradni portret `zala-2-300x300.jpg` ob vodji področja |
| Urban Kavkler | Uradna stran uporablja `Rango_crop.jpg`, risano ilustracijo. Vključena kot **profilna ilustracija**, ne kot portret ali dokaz videza osebe. Vidni so ime, predsedniška vloga in uradni `urban.kavkler@klub-kms.si`. |
| Jan Kolbič | Uradni vir uporablja splošno silhueto; ostanejo inicialke brez izmišljene fotografije. |

Javni WordPress media search za »urban« in »kavkler« ni vrnil potrjenega portreta. Prvi je vrnil dokument, drugi nobene slike. Urbanova ilustracija je neposredno pregledana iz obstoječega paketa. Ne predstavljamo je kot njegovo osebno fotografijo; izvora ilustracije/licence tretjega avtorja ne izmišljamo. Za javno uporabo ilustracije naj klub posebej potrdi ustreznost; uporabnikovo dovoljenje KMŠ ni dokaz pravic prvotnega avtorja ilustracije.

Za Urbana in Jana Kolbiča je za pravi portret še potrebna potrditev/prispevek kluba. Preverjenih fotografij za Mai Štiglic, Katjo Jarc, Lazarja Marića, Laro Bosnar in Tilna Sotlarja ni; organi ostanejo pregledni poimenski seznami. Eva je preverjena prek iste uradne strani kot vodja področja; njenega portreta ni treba podvajati v organih. Stare fotografije prejšnjih članov (npr. Anja/Ema) se ne pripisujejo aktualnim članom. Samodejni kategoriji »team« ali »hero« v starem paketu nista dokaz identitete.

## Organizacija in zamenjava

- `public/assets/branding/`, `team/`, `events/` ostanejo združljive z obstoječimi potmi. Novi spremljevalni prizori so v `community/` in `gallery/`.
- `kmsImages.ts` je editorial manifest in uvozi `kmsPhotoAdditions.ts`; nove slike imajo kategorijo, namen, alt, mere, vir in kredit.
- `kmsPeopleImages.ts` je izrecni katalog povezav oseb s portreti/ilustracijo. `about.ts` uporablja te zapise tudi za vodje področij.
- `scripts/prepare-photo-review.py` pripravi samo nove pregledane izpeljanke in njihova manifesta; ne spreminja prvotnega `kmsPhotos.ts` ali originalov. Zahteva Pillow. Obnovitev: `python3 scripts/prepare-photo-review.py` iz korena projekta.
- Javni popis je dopolnjen na 62 rastrskih datotek. Starejše neuporabljene izvirne podobe niso izbrisane. Dimenzije WebP/JPEG in lazy loading ostanejo stabilne.

## Dejanski preizkusi

`npm run typecheck` in `npm run build` uspešna. V Chromu prek chrome-devtools-cli brez screenshotov preverjenih 36 kombinacij: vseh osem poti in 404 pri 375/768/1024/1440 px. Vse uporabljene slike se dekodirajo, brez fallbackov, zaznanega vodoravnega overflowa ali pregledanih uvodnih prekrivanj; pravilne membership povezave in neaktiven newsletter.

Dodatno neposredno preverjeni ime/slika v ekipi, Urbanov opis ilustracije in mailto, barvni prikaz vseh portretov, širine 235 px v ekipi in 56 px pri vodjih na namizju. Deset dodatnih kombinacij velikosti/gibanja (375×844, 768×1024, 1024×768, 1024×600, 1440×1000 × obe nastavitvi) potrdi premikanje manjših slik, pravilne pine 0/1, viden header in statično reduced-motion mrežo brez prelivanja. Fizične naprave/drugi brskalniki niso preverjeni. Izvorna fotografija Urbana ni najdena; to ni zaključeno z izmišljeno sliko.

AI: Codex je pregledal originalne datoteke, uradne oznake in uporabo, pripravil manjše WebP/JPEG s Pillow, uredil kataloge/povezave/CSS in izvedel npm ter DOM preverjanja. Brez generiranja ali retuširanja obrazov, brez imagegen, Copilota ali screenshotov.

## Naknadna uporabnikova prilagoditev

Po pregledu uporabnik želi nekoliko večje uvodne slike podstrani: zdaj 28 % / do 24 rem, na telefonu 82 % / do 22 rem. Vodje področij imajo namesto 56 px sličic večje 160 px portrete (mobilno 128 px) z imenom in področjem ob fotografiji. Opis ODRA je prestavljen pod sliko. Identitete in datoteke ostajajo enake. Prejšnje mere zgoraj opisujejo prvo iteracijo; [najnovejša izvedba in testi](ANIMATION_UX_OPTIMIZATION.md).
