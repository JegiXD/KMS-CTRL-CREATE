# Optimizacija animacij in UX — 4. 11. 2026

Obseg: ohranjen editorial sistem, vse strani, barve, fotografije in povezovalna SVG grafika. Spremembe ciljajo trajanje, odzivnost, prazen scroll prostor in dostopnost. Brez novih knjižnic ali sprememb uradnih vsebin.

## Pregled in izvedene spremembe

| Element | Prej | Zdaj |
|---|---|---|
| Hero timeline | Približno 1,31 s | 0,67 s, približno 49 % krajše |
| Tekstovni reveal | 0,8–0,85 s, odmik 34–38 px | 0,45 s, 20 px; približno 44–47 % krajše |
| Reveal z interaktivno vsebino | Celoten blok je lahko začel neviden | Vedno opacity 1, samo 12 px pomika; gumbi, povezave in zemljevid so takoj vidni |
| Števci | 1,6 s + 0,24 s stagger | 0,9 s + 0,14 s stagger, približno 43 % krajše |
| Dodatna dolžina glavnega pina | 2,2 višine viewporta | 1,15 višine, približno 48 % manj |
| Pogoji za edini pin | ≥1024 px / ≥680 px višine | ≥1280 px / ≥760 px višine; telefoni in večina tablic brez pina |
| Scrub dohitevanje | 0,65 / 0,5 s | 0,25 / 0,15 s; manj zaostajanja za scrollom |
| Glavni mobilni fotografski oder | 63 rem | 42 rem, tretjino krajši |
| Mali mobilni fotografski oder | 34 rem | 24 rem |
| Foto hover prehod | 0,6 s | 0,3 s |
| Scroll indikator | Neskončen 1,8-sekundni cikel | Trije 1,2-sekundni cikli |
| Lenis lerp | 0,12 | 0,2, hitrejše dohitevanje vnosa |

Hero ne animira vidnosti glavne slike: kritična fotografija se izriše takoj in se samo rahlo umiri iz povečave 1,06. CTA ter scroll povezava nista v zakasnjeni časovnici; navigacija ostane dostopna. Glavne vrstice so razkrite v približno 0,61 s.

Reveal je poenoten prek `textReveals.ts` in `useGsapContext`, tudi za starejši `Reveal`. Majhen dvig ostaja, besedilo vstopa hitreje, interaktivnih delov ne skrivamo z opacity 0. Prag `top 94%` začne razkritje prej. Reduced motion preskoči časovnice in pokaže vsebino takoj. Števci po preklopu na reduce ohranijo končne vrednosti tudi ob ponovnem vklopu animacij.

## Podpisni val in povezava sekcij

Bézier pot in MotionPathPlugin ostajata. Večji razmik začetkov fotografij pomeni približno dve sočasno vidni fotografiji namesto prejšnjih treh ali štirih. Vhodna povečava je manjša (0,92→1). Zadnja fotografija ostane vidna ob koncu, zato galerija ne konča s praznim pripetim zaslonom. Dodatna dolžina pina je skoraj prepolovljena, hkrati pa je odstranjen s tabličnih/nizkih zaslonov.

Krajši odri ohranijo prostor za naslov: kompaktna pot rezervira zgornji bralni pas, povezovalna naslova sta zmernejša. Hero doodle je pod plastjo naslova in ne prekriva črk. Izvirna rdeča povezovalna grafika ostane. Na napravah brez hoverja ni vztrajnega povečanja fotografije po dotiku.

## Osvežitve, slike in navigacija

`refreshScheduler.ts` združi klice `ScrollTrigger.refresh()` iz starševskih in podrejenih kontekstov v en klic po 80 ms zbiranju. `useGsapContext` posluša le še nepopolno naložene slike, enkrat na sliko; odprte zahteve odstrani ob unmount. Pisave še vedno sprožijo meritev, responsive refresh ostane v ScrollTrigger. Ne uvaja React stanja za posamezne scroll frame.

Ob prehodu na drugo pot se fokus prenese na `main` z `preventScroll`, kar pomaga uporabnikom tipkovnice/bralnikov zaslona; začetni obisk ne ukrade fokusa. Naslov dokumenta, stalni header, Escape/Tab meni, native sidra in pravilni membership CTA ostajajo. Lokalni WebP/JPEG, prioriteta glavne slike, lazy loading drugih slik in rezervirane mere so ohranjeni. Novih slikovnih datotek ni.

## Datoteke

Nova: `src/animations/refreshScheduler.ts`.

Spremenjene: `heroAnimations.ts`, `textReveals.ts`, `waveMotion.ts`, `useGsapContext.ts`, `Reveal.tsx`, `SmoothScroll.tsx`, `EventStatistics.tsx`, `Layout.tsx`, `editorial.css`. Dokumentacija: ta zapis, README, AGENTS, CHANGELOG, SUBMISSION in SCROLL_STORY. Prejšnje navedbe časov in pin pragov so zgodovinske.

## Preverjanje in omejitve

`npm run typecheck` in `npm run build` uspešna. V produkcijskem Chromu preverjenih vseh osem strani in 404 pri 375/768/1024/1440 px, 36 kombinacij brez manjkajočih slik, fallbackov, zaznanega prelivanja ali pregledanih uvodnih prekrivanj. Fotografije, uradne povezave članstva in disabled newsletter ostanejo pravilni.

Dodatni rezultati interakcij, meritev hero časovnice, pin razdalje in reduced motion so zapisani po zaključnem preizkusu spodaj. Pregled v Chromu uporablja veščino chrome-devtools-cli brez screenshotov. Fizične naprave, Safari/Firefox in celovito FPS/Lighthouse profiliranje niso del izvedenega preverjanja. Navedene izboljšave časov so nastavitve/meritve časovnic in razdalj, ne izmišljena ocena hitrostnega rezultata.

AI: Codex je analiziral obstoječo kodo, skrajšal in poenotil GSAP/CSS prehode, uredil batching in fokus ter izvedel native npm in Chrome DOM/tipkovnične teste. Brez generiranja fotografij, novih predogledov ali uporabe Copilota.

### Zaključni rezultati

- Razvojni Chrome je dejansko izmeril `heroAnimations(...).totalDuration()` = **0,67 s**. Časovnica ne vsebuje povezav/gumbov med animiranimi tarčami.
- Tri sočasne zahteve za refresh (ena preklicana) povzročijo en klic; samostojna preklicana zahteva ne doda klica. Preverjen dejanski modul `refreshScheduler`, ne le nastavitve v kodi.
- Pri viewportu 1440×1000 je izmerjen dodaten pin **1150 px**. Zadnja fotografija ima ob koncu opacity 1, header ostane na y=0. V enem začetnem vzorcu v že uporabljanem Chromu je opazovalnik layout-shift vrnil CLS 0; to ni meritev vseh strani, hladnega omrežja ali fizične naprave.
- Šest filtrov vrne 8/4/1/1/1/1 projektov; Enter/Tab/Escape meni deluje. SPA navigacija zapre meni in prenese fokus na `main-content`. Kontaktna validacija in mailto ostaneta; sporočila niso bila poslana.
- Štirje sprotni preklopi reduced motion izklopijo/vklopijo Lenis in edini namizni pin. Števci ostanejo 45/753/29, statične fotografije so vidne. Ob odhodu z Domov je pin odstranjen, ob povratku en sam; en pin tudi v razvojnem React Strict Mode.
- Deset dodatnih velikosti/motion primerov potrjuje odsotnost pinov pri 375, 768 in 1024 px ter na nizkem zaslonu. Pri 1440×1000 je pin le brez reduced motion. Brez prelivanja statične mreže.
- Pregledane povezave vseh osmih poti: brez manjkajočih lokalnih sider; vseh **20 različnih zunanjih URL-jev** je na HTTP HEAD vrnilo 200, vključno s članstvom, uradnimi novicami/projekti, družbenimi povezavami in Maps directions. To preverja dosegljivost, ne oddaje obrazcev ali prijav v zunanje storitve.
- Konzola pri končnih interakcijah brez error sporočil. Typecheck in build uspešna; skript lint/test ni. Nove odvisnosti niso dodane.

### Naknadna uporabnikova prilagoditev fotografij

Opis KMŠ ODER je prestavljen pod fotografijo z zgornjim razmikom 1,25 rem, namesto prejšnjega negativnega odmika. Uvodne fotografije **podstrani** so povečane s 24 na 28 % širine, do 24 rem; na telefonu z 68 na 82 %, do 22 rem. Fotografije v heru domače strani s to dopolnitvijo niso povečane.

Področja in sekcije na `/o-nas` uporabljajo nov semantični prikaz z večjimi portreti, imenom in področjem: 160×160 px na večjih zaslonih, 128×128 px na telefonu, namesto 56×56 px. Dva stolpca na širokem namizju, en na manjših zaslonih. Portreti ostanejo barvni in povezave oseb nespremenjene. Spremenjeni sta `About.tsx` in ustrezna pravila `editorial.css`; kratke animacije ostanejo veljavne.

Po zadnji fotografski prilagoditvi je ponovno preverjenih vseh 36 kombinacij poti/širin. Brez manjkajočih slik, zaznanega vodoravnega prelivanja ali pregledanih uvodnih prekrivanj. Izmerjena razdalja med fotografijo ODRA in obrnjenim opisnim oknom je pozitivna pri vseh štirih širinah (približno 3,6–11,9 px). Vseh pet portretov vodij meri 128 px pri 375 px in 160 px pri 768/1024/1440 px. Končna typecheck/build uspešna; git diff --check brez pripomb. Brez screenshotov.
