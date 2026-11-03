# DNEVNIK SPREMEMB

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
