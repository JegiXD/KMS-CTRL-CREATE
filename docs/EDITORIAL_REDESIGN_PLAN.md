# KMŠ editorial redesign — izvedbeni načrt

## Analiza (4. 11. 2026)
Obstoječi React 19 / TypeScript / Vite projekt ima osem poti in 404: /, /o-nas, /dogodki, /novice, /clanstvo, /priloznosti, /kontakt, /newsletter. Layout, SmartImage, Reveal, EventStatistics, podatki o organih, kategorije, mailto, uradna včlanitev in neaktivni newsletter so ponovno uporabni. Lenis poganja en GSAP ticker; ScrollStory ima en odziven pin in matchMedia cleanup. Fotografije: osem preverjenih projektov (JPEG/WebP), trije barvni portreti; 155 prenesenih izvirnikov ostaja v KMS-Foto-Paket, samodejne kategorije niso zanesljive. Logo/favikoni so lokalni, ohranjeni.

Referenca: velik črn tipografski blok, velika fotografija za naslovom, manjši nagnjeni posnetki, ročne poteze in uredniške nalepke. Prevzamemo razmerja in energijo, ne znamke, fotografij ali natančne kompozicije. Nova uporabnikova paleta dovoljuje zmeren #172D4D navy poudarek in svetle/warm površine. Prejšnja prepoved ustvarjanja screenshotov ostane veljavna.

## Vrstni red izvedbe
1. Nova svetla editorial tipografija/barve, skupni SVG doodli in foto manifest.
2. Plastena naslovnica »MARIBOR. MLADI. BREZ MEJA.« z lastno GSAP vstopno sekvenco.
3. Skupna povezovalna črta, valovni prehodi ter ločene hero/text/wave animacijske funkcije.
4. Pravi SVG Bezier ~ foto tok, scrub in največ en glavni desktop pin; druge povezane sekvence brez pinov. Na mobilnih krajše gibanje, pri reduced motion statične fotografije.
5. Povezana domača zgodba: hero, ohranjeni števci, klub, projekti, dogodki, galerija, članstvo, priložnosti, novice, e-novice, footer.
6. Enaka editorial identiteta vseh podstrani; ohranjeni podatki/filtri/povezave/obrazci. Izboljšan tipkovniški mobilni meni.
7. Responsive pregled 375/768/1024/1440, reduced motion, src/alt, kliki, konzola, čiščenje pinov in poti; brez posnetkov.
8. README, AGENTS, EDITORIAL_REDESIGN, CHANGELOG in SUBMISSION: resnični rezultati, viri in omejitve. Brez izmišljanja podatkov, oseb, cen ali terminov; PDF v projektu ni priložen.

Izvedba se nadaljuje neposredno po načrtu. Nove odvisnosti za animacijo niso potrebne; GSAP vključuje MotionPathPlugin. Fotografije/izvirniki se ne brišejo.

## Zaključek izvedbe
Vse navedene razvojne faze so implementirane. Dokument EDITORIAL_REDESIGN.md vsebuje dejansko izvedbo, seznam datotek, preverjanja, rezultate in omejitve; javna objava, fizične naprave in newsletter backend niso del opravljenih dejanj.
