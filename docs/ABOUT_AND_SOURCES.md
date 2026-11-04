# 06 — O nas, ekipa in organi

## Vir in stanje preverjanja

Primarni vir: [KMŠ – O nas](https://www.klub-kms.si/o-nas/), neposredno pregledan 3. 11. 2026 (HTTP 200). Preverjeni so razdelki Kdo smo, Svetnik Sveta ŠOLS in Zveze ŠKIS, Vodje sekcij ter Struktura. Poslanstvo in vsebinski poudarki so povzeti tudi po [uradni domači strani](https://www.klub-kms.si/).

Vsebina odraža javno objavo ob pregledu, ne neodvisne potrditve volilnih rezultatov ali določitve mandata. [Razpis za volitve septembra 2026](https://www.klub-kms.si/vabilo-na-3-redno-skupscino-kluba-mariborskih-studentov-v-letu-2026-2-2-2/) napoveduje volitve, zato iz njega nismo sklepali o izvoljenih osebah. Neposredni pregled aktualne strani potrjuje novejšo sestavo iz audita 01; stari prototip je prikazoval prejšnjo ekipo. Ob morebitni spremembi objave je potreben ponoven pregled.

## Potrjeni podatki

| Organ | Imena in funkcije po uradni predstavitvi |
|---|---|
| Upravni odbor | Urban Kavkler — predsednik; Jan Ozvaldič — podpredsednik; Doroteja Plohl — blagajnik; Gabriela Brodnjak in Jan Kolbič — člana odbora. |
| Nadzorna komisija | Mai Štiglic, Katja Jarc, Lazar Marić. Funkcije posameznikov v viru niso navedene, zato niso dodane. |
| Častno razsodišče | Lara Bosnar — predsednica; Tilen Sotlar in Eva Polič — člana. |

Vir navaja skupščino kot najvišji organ vseh rednih članov. Opisi pristojnosti na strani so uredniško skrajšani povzetki, ne dodatne ali domnevane pristojnosti. V UI je poimenovanje blagajniške vloge slovnično prilagojeno.

Ekipa prikazuje pet članov Upravnega odbora iz istega podatkovnega seznama; imena in vloge v prikazu organov se zato ne urejajo ločeno. Jan Ozvaldič ima dodano tudi javno navedeno vlogo svetnika Sveta ŠOLS in Zveze ŠKIS.

Vodje področij po viru: Gabriela Brodnjak (marketing), Enej Polanec (kultura in izobraževanje), Eva Polič (sociala in zdravstvo), Doroteja Plohl (šport in zabava), Zala Gluk (dijaška sekcija). Zasebni kontakti in podatki o uradnih urah v tem koraku niso dodani ali spremenjeni.

## Fotografije in izvor

Identiteta povezave je preverjena prek imena osebe in alt besedila na uradni strani; vse tri spodnje datoteke so se prenesle s HTTP 200 kot JPEG in so vizualno pregledane. Lokalne datoteke ohranijo slike brez obrezovanja na disku; prikaz uporablja CSS grayscale in rezerviran kvadratni okvir. Avtor/fotograf in dovoljenje za ponovno javno objavo na viru nista navedena oziroma dokumentirana; iz potrjenega izvora ne sklepamo o licenci. Pred javno objavo to potrdi s klubom.

| Oseba | Lokalna datoteka | Izvorna datoteka KMŠ | Velikost |
|---|---|---|---|
| Jan Ozvaldič | `public/assets/team/jan-ozvaldic.jpg` | [DSC00982-2-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/DSC00982-2-300x300.jpg) | 300 × 300 px |
| Doroteja Plohl | `public/assets/team/doroteja-plohl.jpg` | [doroteja-2-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/doroteja-2-300x300.jpg) | 300 × 300 px |
| Gabriela Brodnjak | `public/assets/team/gabriela-brodnjak.jpg` | [Gabi-300x300.jpg](https://www.klub-kms.si/wp-content/uploads/2025/12/Gabi-300x300.jpg) | 300 × 300 px |

Uradna stran za Urbana povezuje [Rango_crop.jpg](https://www.klub-kms.si/wp-content/uploads/2026/10/Rango_crop.jpg), ki je risana ilustracija; za Jana Kolbiča pa [image001-10-1-240x300.jpg](https://www.klub-kms.si/wp-content/uploads/2023/11/image001-10-1-240x300.jpg), splošno silhueto. Vizualni pregled je potrdil, da to nista osebna portreta. Zato ti datoteki nista vključeni; kartici uporabljata inicialke, brez domnevne fotografije. Za ostale organe niso dodane fotografije ali izmišljene poti.

Zamenjani so trije dosedanji abstraktni vizuali; po koraku 06 je v `public/assets` 28 abstraktnih JPG vizualov in trije dejanski portreti. Stara vizuala Anje Hojsak in Eme Staklenac ostajata neuporabljena, ne predstavljata aktualne ekipe.

Korak 09 (4. 11. 2026): izvorni JPEG so bajt za bajtom primerjani z uradnim virom, ostajajo nespremenjeni in služijo tudi kot rezerva. Prikaz prednostno uporablja tri istoimenske WebP izpeljanke (300 × 300), skupaj 32,5 % manjše. Dovoljenja in avtorstvo ostajajo odprti tudi zanje. [Pregled slik, izrezov, alt opisov in brandinga](IMAGE_REVIEW.md).

## Izvedba in preverjanje

- Samostojna `src/pages/About.tsx`, podatki v `src/data/about.ts`; stara izvoza iz OtherPages in content ostajata združljiva. Pot `/o-nas` ostane enaka.
- Poslanstvo, sidrni skoki, pet kartic ekipe, vodje področij ter poimenski trije organi. Viden datum pregleda in povezave na uradni vir.
- Brez novih odvisnosti ali novih animacij. Obstoječi Reveal upošteva reduced motion; galerija ohrani mrežo 1/2/3 stolpcev.
- Typecheck in produkcijska gradnja uspešna.
- V Chromu preverjene širine 320, 390, 700, 701, 768, 1100, 1101, 1440 in 1920 px. Primerjani poimenski seznami petih članov ekipe ter organov (5/3/3), pet vodij področij, trije lokalni naloženi portreti v sivinskem prikazu in dve kartici z inicialkami. Brez starih imen vodstva ali vodoravnega prelivanja pregledanih naslovov/seznamov.
- Vse tri sidrne povezave pomaknejo na pravilen razdelek; preverjanje počaka na konec gladkega drsenja. Preverjen prehod z domače strani brez ostankov pina, slikovni error fallback brez spremembe višine okvirja ter reduced motion ob nalaganju (vidna vsebina, nič ScrollTriggerjev). Brez napak v konzoli pri teh interakcijah.
- Preverjanje je emulacija v namiznem Chromu; fizične naprave in drugi brskalniki niso preverjeni.

AI: Codex je pregledal uradne vire in slike, povzel vsebino, uredil podatke, React stran in CSS ter izvedel tehnična preverjanja z orodjem chrome-devtools-cli. Copilot ni bil uporabljen.

## Barvni portreti — najnovejše navodilo (4. 11. 2026)
Na uporabnikovo zahtevo portreti ekipe nimajo več CSS filtra grayscale. Trije obstoječi JPEG/WebP portreti se prikazujejo v izvornih barvah, brez retuširanja, ponovnega izvoza ali spremembe bajtov. Inicialke ostanejo za osebi brez portreta. Starejši zapisi zgoraj opisujejo tedanji sivinski prikaz. Slikovni predogledi so na uporabnikovo zahtevo izbrisani; novih ne ustvarjamo.

## Dovoljenje — posodobitev 4. 11. 2026
Uporabnik je v pogovoru potrdil dovoljenje KMŠ za uporabo slik z njihovih spletnih strani. Ta uporabnikova potrditev nadomesti starejši odprti status dovoljenja; ne izmišljamo pisne licence ali imen fotografov. [Evidenca in obseg uvoza](PHOTO_IMPORT.md). Barvni portreti ostajajo nespremenjeni.

## Ponovni pregled ob editorial prenovi — 4. 11. 2026

Na https://www.klub-kms.si/o-nas/ so ponovno primerjana imena vseh petih članov Upravnega odbora, treh članov Nadzorne komisije in treh članov Častnega razsodišča ter vodij področij. Ujemajo se z obstoječimi podatki; datum v about.ts je posodobljen. Novi editorial prikaz ne spreminja imen/funkcij. Trije portreti ostanejo barvni, dve inicialki ostaneta brez izmišljene fotografije. Misija je dopolnjena z obstoječo fotografijo dobrodelnosti, vir iz kmsImages/kmsPhotos.

## Pregled fotografij in profilov — 4. 11. 2026

Najnovejši pregled uradnega HTML potrjuje šest portretov: Jan Ozvaldič, Doroteja Plohl, Gabriela Brodnjak, Enej Polanec, Eva Polič in Zala Gluk. Zadnji trije so dodani ob vodjih področij; vseh pet vodij ima manjši barvni portret iz enotnega kmsPeopleImages kataloga. Ekipa ima manjše fotografije.

Urbanova uradno povezana slika Rango_crop.jpg je zdaj vključena kot **izrecno označena profilna ilustracija**, nikoli kot osebni portret; dodana je njegova uradna e-pošta. Javni media search ni našel potrjene osebne fotografije. Jan Kolbič ohrani inicialke. Preostalim nepreverjenim osebam fotografij ne pripisujemo. [Celoten pregled, viri in odprte potrditve](PHOTOGRAPHY_AUDIT.md).
