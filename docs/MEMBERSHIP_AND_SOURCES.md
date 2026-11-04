# 07 — Članstvo in priložnosti

## Viri in obseg trditev

Pregledano 3. 11. 2026:

- [KMŠ – Člani](https://www.klub-kms.si/clani/): članstvo za študente in dijake, dogodki/predavanja, povezovanje, neformalno znanje in ustvarjalnost. Razdelek Aktivist opisuje delo pri organizaciji, fotografiji, videu, marketingu, spletnih vsebinah in PR. Ti podatki podpirajo uredniške povzetke ugodnosti in možnosti sodelovanja.
- [KMŠ – Ideje članov](https://www.klub-kms.si/ideje-clanov/): vabilo k predlaganju dogodkov; ne jamstvo, da bo vsaka ideja izvedena. Navodila za prvi stik so uredniški predlog prototipa.
- [Uradni obrazec](https://studentski-klubi.si/public-forms/jui1g3swbxz): uporabnikov izrecno določen cilj vseh povezav za včlanitev. Neposredni GET je vrnil HTTP 200 z začetnim Loading; po zagonu JavaScripta je brskalnik prikazal Registration in javni obrazec. Preverjena je bila tudi aktivacija glavnega CTA s tipko Enter, ki je odprla isti URL v novem zavihku.

Vsi trije URL-ji so ob neposrednem preverjanju vrnili HTTP 200. Stran Člani opisuje tudi papirno pristopno izjavo; po uporabnikovem izrecnem navodilu prototip vodi neposredno na zgornji spletni obrazec. Ne sklepamo o dodatnih pogojih ali tem, katera pot je obvezna.

Konkretne članarine, številčni popusti, brezplačne vstopnice, zahtevane priloge, roki, plačilo za sodelovanje in zagotovljena mesta niso potrjeni, zato niso dodani. Vsebinske ugodnosti niso predstavljene kot obljuba izključnega ali brezplačnega dostopa. Aktualne pogoje obiskovalec preveri pri KMŠ.

Za vprašanja in osnutke je uporabljen `info@klub-kms.si`, ki je objavljen na obeh uradnih straneh. Osebnega kontakta iz razdelka Aktivist nismo prenesli; uporabljena je splošna klubska e-pošta. Podatki ekipe, uradnih ur in telefona se v tem koraku ne spreminjajo.

## Izvedba

- Samostojni strani `Membership.tsx` in `Opportunities.tsx` z ohranjenima izvozoma v OtherPages ter potema `/clanstvo` in `/priloznosti`.
- `MembershipLink.tsx` uporablja nespremenjeno centralno `membershipUrl`, varen novi zavihek ter dostopno oznako. Na obeh straneh je neposredni CTA v uvodu in ponovljen ob ustrezni vsebini; navigacija, hero in noga ohranijo obstoječe neposredne povezave.
- Članstvo: tri razložene vsebinske ugodnosti, povezave na dogodke/ekipo/priložnosti, trije kratki koraki do prijave, kontakt za pomoč in jasna pot do aktivnega sodelovanja.
- Priložnosti: aktivizem, predlog ideje in sodelovanje pri projektu; za vsako področje opis, vprašanja za prvi stik in svoj mailto z različno zadevo ter predlogo besedila. Predloge odprejo lokalni e-poštni program; uporabnik jih uredi in pošlje sam. Izvedba ideje ali dogovor o sodelovanju nista avtomatsko potrjena.
- Brez lokalnega zbiranja osebnih podatkov, novih obrazcev, endpointov, knjižnic ali animacij. Ohranjen monokromatski sistem in odzivna postavitev.

## Preverjanja in omejitve

- Typecheck in build uspešna.
- Obe strani pri 320, 390, 700, 701, 768, 1024, 1440 in 1920 px (16 kombinacij): glavni CTA, dve vsebinski povezavi na nespremenjeni uradni URL, pravilni atributi novega zavihka, ugodnosti/navodila oziroma trije načini sodelovanja, sidrni skoki in odsotnost vodoravnega prelivanja.
- Preverjeni prejemnik ter različne zadeve in prelomi vrstic v vseh treh e-poštnih predlogah. Nobena e-pošta ni bila odpravljena ali poslana.
- Enter na fokusiranem primarnem CTA dejansko odpre Registration na pravilnem zunanjem URL-ju; fokus ima viden obris. Ni bilo vnosov osebnih podatkov, potrjevanja soglasij ali oddaje obrazca.
- Zunanja aplikacija je med pregledom izpisala tudi napake 401 in napake pri branju `$env`; zato uspešna obdelava prijave ni potrjena. To niso napake lokalnega prototipa. Dostopnost javnega vmesnika ni jamstvo o delovanju celotne zunanje storitve.
- Prehodi Domov → Članstvo → Priložnosti brez ostankov pina; reduced motion pri 390 px ohrani vsebino, CTA in sidra. Na lokalnih straneh ni obrazcev ali napak v konzoli pri teh preizkusih.
- Fizične naprave, drugi brskalniki, pošiljanje po lokalnem e-poštnem programu in končni postopek včlanitve niso preverjeni.

AI: Codex je preveril vire, pripravil uredniške povzetke, CTA, e-poštne predloge, React/CSS izvedbo ter preverjanja s chrome-devtools-cli in dokumentacijo. Copilot ni bil uporabljen.
