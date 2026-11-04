# KMŠ / CTRL+CREATE — osnutek oddaje

> Aktualni opis projekta, pregled orodij in kontrolni seznam so v [CTRL_CREATE_SUBMISSION.md](CTRL_CREATE_SUBMISSION.md). Ta daljši dokument je zgodovinski delovni osnutek in vsebuje zapise prejšnjih faz.

Stanje: celovita editorial prenova, 4. 11. 2026. Prejšnje faze so zabeležene v [CHANGELOG.md](CHANGELOG.md); veljavno izvedbo, seznam datotek in dejanske teste opisuje [EDITORIAL_REDESIGN.md](EDITORIAL_REDESIGN.md).

## Izvorna koda in dostop

[GitHub — JegiXD/KMS-CTRL-CREATE](https://github.com/JegiXD/KMS-CTRL-CREATE), dosedanji repozitorij projekta. Ta prenova je izvedena lokalno; v tem koraku ni novega commita, pusha ali javne objave. GitHub povezava sama ni javno gostujoč prototip. Za deljivo povezavo objavi `dist/` na statičnem gostovanju s SPA fallbackom.

## Ideja — osnutek za oddajo

Spletno stran Kluba mariborskih študentov sem zasnoval kot interaktivno digitalno revijo o mladih, glasbi in skupnosti. Sporočilo »Maribor. Mladi. Brez meja.« obiskovalca povabi v prostor, kjer ideje postanejo skupna doživetja. Velika kondenzirana tipografija, papirnate fotografske plasti in izvirne ročne SVG poteze ustvarjajo izrazito uredniško podobo. Rdeča in bela ohranjata identiteto KMŠ, nežne rožnate površine ter majhni mornarsko modri poudarki pa ji dodajo igrivost.

Domača stran je povezana zgodba. Od uvodnega kolaža obiskovalec skozi predstavitev skupnosti in projekte prispe do fotografske galerije, članstva ter možnosti sodelovanja. Fotografije resničnih dogodkov sledijo valoviti poti, njihov položaj pa določa napredek drsenja. Tako glasba, ustvarjanje in dobrodelnost postanejo del iste pripovedi. Na telefonu je gibanje poenostavljeno; nastavitev zmanjšanega gibanja vključi statično fotografsko postavitev.

Izrazita podoba ohranja jasne uporabniške poti. Navigacija ostaja vidna, projekti imajo uporabne filtre, organi društva poimenske sezname, članstvo pa neposredno povezavo na uradni obrazec. Fotografije so lokalne, z viri in dovoljenjem, ki ga je potrdil naročnik. Novice vodijo na izvirne uradne članke. Kontakt pripravi e-poštni osnutek, vmesnik e-novic pa je jasno označena neaktivna demonstracija. Cilj je ustvarjalna in uporabna spletna izkušnja, ki pokaže, da KMŠ ni samo klub, temveč prostor za naslednjo skupno zgodbo.

## Dejanska orodja in AI prispevek

- React 19, TypeScript, Vite, React Router, GSAP ScrollTrigger/MotionPathPlugin, Lenis, Lucide in CSS. Brez novih odvisnosti pri tej prenovi.
- Codex: analiza projekta in uporabnikove reference, celoten editorial CSS, hero in domača zgodba, sekundarne strani, izvirni SVG, odzivne GSAP poti, slikovni manifest, preverjanje javnih virov, native npm preizkusi, Chrome DOM/tipkovnične interakcije prek veščine `chrome-devtools-cli` in dokumentacija.
- ChatGPT: načrt in začetna struktura v prejšnjih fazah.
- GitHub Copilot: uporabnikova predhodna prenova (commit `13fa094`); pri sedanji celoviti prenovi ni bil uporabljen.
- Uradne KMŠ fotografije in uporabnikov logotip so obstoječi viri. Pri sedanji prenovi niso AI generirani ali retuširani. Izvorne datoteke so ohranjene. Figma in imagegen nista bila uporabljena.

## Izvedeno preverjanje

`npm install`, `npm run typecheck`, `npm run build` in zagon `npm run dev` so uspeli. 36 kombinacij poti/širin v lokalnem Chromu: osem strani in 404 pri 375, 768, 1024 ter 1440 px. Po popravku tabličnih razmikov brez zaznanega vodoravnega prelivanja, manjkajočih slik ali pregledanih uvodnih prekrivanj.

Preverjeni so šest filtrov, mobilni meni z Enter/Tab/Escape, native validacija kontakta brez pošiljanja, lokalni barvni portreti, štirje sprotni preklopi reduced motion, stanje Lenis/pina, SPA cleanup in razvojni Strict Mode. Glavna galerija je preverjena z osmimi scroll vzorci, kjer se transformacije fotografij spreminjajo vzdolž Bézier poti, header pa ostane na vrhu. Po zadnjem CSS popravku preverjenih še deset kombinacij velikosti zaslona in reduced motion, vključno z nizkim zaslonom brez pina in avtomatsko višino statičnih galerij. Podroben zapis in omejitve so v [EDITORIAL_REDESIGN.md](EDITORIAL_REDESIGN.md). Brez screenshotov.

## Pred končno oddajo

- [x] Zahtevane strani, organi, dogodki, novice, članstvo, priložnosti, kontakt, družbena omrežja in vmesnik e-novic.
- [x] Lokalni uradni slikovni viri in optimizirani WebP/JPEG; uporabnikovo dovoljenje je evidentirano v [PHOTO_IMPORT.md](PHOTO_IMPORT.md).
- [x] Opis ideje v obsegu 150–300 besed in transparentna AI izjava.
- [x] Lokalni typecheck/build in opisani Chrome preizkusi.
- [ ] Deljiva javno gostujoča različica in dostop do oddane kode.
- [ ] Fizične mobilne naprave, Safari/Firefox, celovit pregled dostopnosti in profiliranje na šibkejših napravah.
- [ ] Ponovna potrditev aktualnosti podatkov pred oddajo; zapisi se opirajo na javne vire, pregledane 4. 11. 2026.
- [ ] Morebitna newsletter integracija po potrjenem endpointu, privolitvi in politiki zasebnosti; trenutno ni vključena.
- [ ] Primerjava z izvirnim PDF briefom in njegovim rokom; PDF v projektu ni priložen. Dosedanja dokumentacija navaja rok 14. 12. 2026, ki v tej prenovi ni neodvisno potrjen.

Oddaja, dejansko pošiljanje kontaktnih sporočil in oddaja članstva na zunanji storitvi niso bili izvedeni. Avtor projekta pregleda končno oddajo in objavo.

## Dopolnitev: lokacija Pisarna

Na kontaktni strani je interaktivni Google Maps embed, naslov Pisarna / Vetrinjska ulica 30 / Maribor in neposreden gumb »Prikaži pot«. Responsive editorial sekcija uporablja skupno GSAP animacijsko arhitekturo in upošteva reduced motion. Objavljene ure so preverjene uradne ure KMŠ, ne nepreverjen urnik lokala. Typecheck/build in osem Chrome responsive/motion kombinacij so uspešni; zemljevid se je naložil z HTTP 200. Codex je pripravil komponento, scoped CSS, integracijo, preverjanje uradnih virov in DOM teste brez screenshotov. [Podrobnosti](CONTACT_AND_NEWSLETTER.md#lokacija-pisarna--4-11-2026).

## Dopolnitev: fotografije in profili

Izbor je razširjen na 12 različnih dejanskih prizorov, z manjšimi okvirji in manj ponavljanja. Uradno je preverjenih šest portretov (Jan Ozvaldič, Doroteja Plohl, Gabriela Brodnjak, Enej Polanec, Eva Polič, Zala Gluk). Urbanov profil uporablja jasno označeno uradno ilustracijo; prave osebne fotografije ni bilo mogoče potrditi. Jan Kolbič in drugi nepreverjeni člani nimajo izmišljenih slik. Ohranjene zasnova, poti in časovnice. Typecheck/build, 36 responsive ter deset dodatnih wave/motion primerov uspešnih. Codex je opravil izvorni pregled, optimizacijo in integracijo; brez generiranja obrazov ali screenshotov. [Viri in odprte potrditve](PHOTOGRAPHY_AUDIT.md).

## Dopolnitev: hitrost animacij in UX

Hero je izmerjeno skrajšan na 0,67 s, reveal na 0,45 s, dodatni fotografski pin skoraj prepolovljen na 1,15 viewporta in omejen na velike zaslone. CTA in glavna fotografija so takoj vidni, zadnja fotografija galerije ostane vidna. Skupne meritve GSAP se združujejo; navigacija prenese fokus na vsebino in reduced motion se sproti upošteva. Vseh osem poti/404, filtri, tipkovnica, cleanup in zunanje povezave preverjeni brez screenshotov. Dodatna uporabnikova prilagoditev premakne opis ODRA pod sliko, poveča uvodne slike podstrani in portrete vodij področij. Typecheck/build uspešna. Izvedel Codex brez novih odvisnosti; [dejanski testi in omejitve](ANIMATION_UX_OPTIMIZATION.md).

Dopolnitev: Codex je na uporabnikovo zahtevo odstranil dekorativno črto/povezovalnik pred domačo sekcijo članstva. Vsebina in animacije ostanejo ohranjene; typecheck/build preverjena, brez screenshotov.

Zadnja fotografska dopolnitev: Codex je po uporabnikovem naročilu še povečal uvodne fotografije vseh podstrani (38 % / do 34 rem, mobilno 92 % / do 30 rem) in ohranil razmik do besedila. Domači hero je nespremenjen. Typecheck/build in 36 Chrome responsive primerov uspešni, brez screenshotov.

## Dopolnitev: mobilna navigacija

Na telefonu je dodan animiran hamburger→križec in kratek prehod navigacije, večje povezave/CTA ter jasen prikaz aktivne strani. Zaprt meni je inert, podprti tipkovnica, reduced motion in prehod nazaj na namizje. Manjše mobilne prilagoditve izboljšajo CTA, robove in branje obrazcev. Typecheck/build, 36 responsive primerov ter deset dodatnih menu/motion primerov so uspešni; brez screenshotov. Codex je izvedel React/CSS in Chrome DOM preverjanja; fizične naprave/Safari niso neposredno preizkušeni. [Podrobnosti](MOBILE_NAVIGATION.md).

Dopolnitev ozadne grafike: Codex je rahlo povečal vidnost rdečih potez in obrisanih oznak KMŠ, ob nespremenjeni postavitvi, dekorativnih plasteh in animacijah. Typecheck/build uspešna; brez screenshotov.
