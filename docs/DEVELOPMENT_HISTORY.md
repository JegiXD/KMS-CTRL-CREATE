# Razvojna zgodovina

Ta povzetek združuje Git zapise in obstoječe projektne dnevnike. Datumi commitov so preverljivi v lokalni Git zgodovini; podrobnejši razvojni koraki izhajajo iz projektnih dokumentov in niso vsi predstavljeni z ločenim commitom. Izvirni PDF natečajnega briefa ni priložen.

## Git zgodovina

| Commit | Datum | Sporočilo | Kaj potrjuje zapis |
|---|---|---|---|
| `b47acbc` | 3. 11. 2026 | Initial commit: KMS CTRL+CREATE prototype | Začetni prototip projekta |
| `8b81c40` | 3. 11. 2026 | Complete hero, connected scroll story and verified event projects | Uvodni hero, scroll zgodba in projekti |
| `79c03a9` | 4. 11. 2026 | RED/WHITE update: darker facet pattern, footer newsletter preview, docs and asset updates | Posodobitev palete, noge in dokumentacije |
| `13fa094` | 4. 11. 2026 | Refine homepage interactions and visual spacing | Nadaljnje izboljšave domače strani |

V zgodovini sta pri commitih `79c03a9` in `13fa094` navedena soavtorska trailerja GitHub Copilot. Git sam ne razkrije, katere posamezne vrstice je predlagal posamezni avtor oziroma orodje; kontekst je povzet v [AUTHORSHIP.md](AUTHORSHIP.md).

## Faze po projektnih zapiskih

### Začetni prototip in osnovna vsebina

Projektni dnevniki opisujejo začetno različico kot React/TypeScript/Vite prototip z osmimi potmi, navigacijo, osnovno vsebino KMŠ, kontaktno potjo in zgodnjo GSAP zgodbo. Na tej stopnji so se izmenjale oblikovne smeri. Zgodovinska monokromatska in zgodnejša RED/WHITE navodila niso končna specifikacija.

### Utrditev poti in vsebinskih funkcij

Projektni dokumenti beležijo preverjanje opisov osmih projektov, kategorijskih filtrov, vsebine strani O nas in organov, članstva, priložnosti, kontaktnih podatkov, socialnih povezav ter neaktivnega newsletter predogleda. Kontakt je oblikovan kot `mailto` osnutek; e-novice niso priključene na zaledni sistem.

### Uvoz in organizacija fotografij

`PHOTO_IMPORT.md` opisuje prenos arhiva javno dostopnih gradiv KMŠ, pregled izbranih fotografij in pripravo lokalnih JPEG/WebP izpeljank. Uporabnik je 4. 11. 2026 sporočil, da je KMŠ dovolil uporabo fotografij s svojih strani. Dokumentacija to označuje kot uporabnikovo poročilo, ne kot neodvisno pregledano pisno licenco. Viri in podpisi so evidentirani v manifestih. Izvirni paket je ločen od javnih datotek.

### Celovita editorial prenova

Projektna dokumentacija datira prenovo na 4. 11. 2026. Uveljavljena je svetla editorial smer z Anton, DM Sans in Space Grotesk, rdečo identiteto, toplimi svetlimi površinami, omejenimi navy poudarki, asimetrično fotografijo in lastno SVG-grafiko. Prenova ohranja osem poti, vsebinske podatke, filtre, članstvo in kontakt.

V `src/animations/` so nastali ločeni gradniki za hero, besedilna razkritja, valovno gibanje in združevanje ScrollTrigger osvežitev. `useGsapContext` upravlja kontekst, `matchMedia`, nalaganje medijev in čiščenje. Domača stran uporablja tri fotografske galerije; glavni val se pripne le pri dovolj velikem in visokem zaslonu, manjše postavitve pa ostanejo v naravnem toku. Lenis je povezan z GSAP tickerjem in se izklopi pri reduced motion.

### Dostopnost, zmogljivost in nadaljnje prilagoditve

Zapisniki dokumentirajo `prefers-reduced-motion`, tipkovniški mobilni meni, vidni fokus, vsebino brez hoverja, statično različico galerij, optimizacijo trajanja animacij in osveževanje meritev. V kontakt je dodan interaktivni Google Maps zemljevid. Projekti ostajajo pregled projektov, ne prihodnji koledar; novice so arhivske. Newsletter ostaja izrecno neaktiven.

Projektni dokumenti opisujejo emulirane Chrome preglede poti, odzivnih mer, filtrov, menija, animacij in reduced motion. To ni enakovredno testiranju fizičnih telefonov, drugih brskalnikov ali celoviti presoji WCAG. Aktualni rezultati in omejitve so v [EDITORIAL_REDESIGN.md](EDITORIAL_REDESIGN.md), [ANIMATION_UX_OPTIMIZATION.md](ANIMATION_UX_OPTIMIZATION.md) in [MOBILE_NAVIGATION.md](MOBILE_NAVIGATION.md).

## Trenutno stanje različic

Ob pripravi te dokumentacije je lokalna veja `main` na commitu `13fa094`, enakem kot prikazani `origin/main`. Delovni imenik vsebuje dodatne lokalne spremembe aplikacije, sredstev in dokumentacije, ki niso vsebovane v tem commitu. Zato stanje lokalnega prototipa in stanje na GitHubu nista nujno enaka. Pred oddajo ali javno predstavitvijo je treba izbrano končno različico pregledati, testirati in po potrebi objaviti.

V repozitoriju ni potrjene produkcijske URL-povezave. GitHub repozitorij je zaseben. Datuma oziroma pogojev natečaja ni mogoče primerjati z izvirnim PDF briefom, ker ga projektni arhiv ne vsebuje.
