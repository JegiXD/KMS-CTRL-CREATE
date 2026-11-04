# 04 — Povezani scroll

## Izvedba

`ScrollStory.tsx` po uvodu ponovno uporabi tri lokalne slike iz hero sekcije. Naslov dogodkov je del iste scene, seznam projektov v `Home.tsx` pa se na njenem belem ozadju nadaljuje brez podvojenega naslova. Seznam uporablja `aria-labelledby="story-next-title"`; dekorativni napis »SKUPAJ.« je skrit pred bralniki zaslona. V animirano skriti ploskvi ni interaktivnih elementov.

Na večjih zaslonih en ScrollTrigger timeline poveže:

1. Povečanje slik s faktorja 0,90 na 1,16.
2. Zmanjšanje napisa na 0,72, premik navzgor in umik.
3. Dvig bele ploskve ter razkritje naslova »DOŽIVI MARIBOR.« na mestu.
4. Kratek miren zaključek pred nadaljevanjem v kartice dogodkov.

Pin velja nad 700 px širine in 600 px višine, z `scrub: 0.6` in razdaljo 1,5 višine scene. Uporablja transformacijo in rezerviran pin spacing. Premik kompenzira notranja ploskev z naslovom, da se naslov razkrije na mestu. Animirajo se transformacije in opacity; dimenzije okvirjev in položaj naslednje sekcije ostajajo rezervirani. Meritve se osvežijo po nalaganju pisav in ob spremembi velikosti.

Na telefonih in nizkih ležečih zaslonih ni pina; sliki ostaneta v običajnem toku, z največ 4 % povečavo ob drsenju. GSAP matchMedia ob prelomih odstrani prejšnjo animacijo in postavi ustrezno novo. Stranska tretja slika je do 700 px skrita; hero postavitev iz koraka 03 ostaja nespremenjena.

Reduced motion odstrani vse animacije scene in pokaže naslov dogodkov v običajnem toku. Tudi `Reveal` je posodobljen na matchMedia, zato nastavitev velja ob nalaganju in ob spremembi med obiskom. `useLayoutEffect` ter `media.revert()` odstranita pripenjanje pred Reactovo odstranitvijo DOM in preprečujeta puščanje sprožilcev ob menjavi poti/StrictMode.

Slike so obstoječi lokalni začasni vizuali, jasno označeni. Novih fotografij, zunanjih slikovnih povezav ali odvisnosti ni.

## Preverjanje (Chrome, 3. 11. 2026)

- Brez zmanjšanega gibanja: 320×780, 390×844, 700×900, 701×900, 768×1024, 1024×600, 1024×601, 1440×1000 in 1920×1080. Pravilen način animacije in število pinov, brez vodoravnega prelivanja ali podvojenih naslovov dogodkov. Preverjeno tudi spreminjanje velikosti med obiskom.
- Z zmanjšanim gibanjem: 390×844 in 1440×1000, sprotna sprememba ter novo nalaganje. Ni pinov ali aktivnih ScrollTriggerjev, vsebine ostanejo vidne. Povratek na običajno gibanje vzpostavi natanko eno sceno.
- Pri 1440×1000 vzorci na 0 / 35 / 75 / 100 % poti potrjujejo povečanje slik, spremembo napisa in razkritje ploskve. Povratek na začetek obnovi prvotni prikaz. Absolutni položaj dogodkov ostane isti.
- PerformanceObserver med merjenim namiznim drsenjem ni zaznal layout shifta (vsota 0). To ne predstavlja CLS ocene celotnega nalaganja strani, preverjanja vseh naprav ali Lighthouse meritve.
- Trije zaporedni prehodi Domov → O nas → Domov, tudi odhod med pripetim prehodom: brez preostalih sprožilcev zgodbe, brez podvojenih pinov in brez napak v konzoli.
- `npm run typecheck` in `npm run build` uspešna.

Fizične naprave, Safari/Firefox, profiliranje na šibkejših telefonih in celotna presoja dostopnosti ostajajo za končni pregled. AI: Codex je pripravil izvedbo, uvodno besedilo, preverjanja s chrome-devtools-cli in dokumentacijo; Copilot ni bil uporabljen.

## Smooth scroll — 4. 11. 2026

Dodana sta Lenis 1.3.27 in `SmoothScroll.tsx`, en upravljalnik za vse strani v Layout. Miška in sledilna ploščica uporabljata `lerp: 0.12`, dotik pa ohrani naravno drsenje (`syncTouch: false`). Dokument ostane pravi scroll vsebnik, brez transformiranega ovoja strani. Paleta RED / WHITE in obstoječi GSAP timeline sta ohranjena.

Povezava uporablja [uradno integracijo Lenis/GSAP](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger): scroll dogodki kličejo `ScrollTrigger.update`, en GSAP ticker pa poganja Lenis v milisekundah. Dodatni `autoRaf` je izklopljen; globalne nastavitve tickerja niso spremenjene. Refresh ScrollTrigger ponovno izmeri dimenzije.

Sidra ostanejo brskalnikova, s hashom, zgodovino in CSS smooth premikom. Pred klikom se prekine morebitni Lenis zagon. Med glajenjem wheel je CSS animacija izklopljena. Navigacija prekine stari zagon in ponastavi položaj na vrh oziroma na cilj neposrednega URL fragmenta. Textarea ohrani svoj native scroll; tipkovnica in zoom geste ostanejo na voljo.

Reduced motion prepreči ustvarjanje Lenis oziroma ga sproti uniči. Cleanup odstrani ticker, Lenis dogodke, refresh listener, capture listener sider in media-query listener. Ponovna vzpostavitev ne podvaja instanc. `Layout` sedaj samo zapira meni, ponastavitev scrolla je centralizirana.

Preverjanja:

- `npm install lenis`, `npm run typecheck` in `npm run build` uspešni. Točna različica je v package-lock.
- Produkcijski Chrome: osem strani pri 1440 px ter Domov/O nas/Kontakt pri 390 in 768 px (14 kombinacij). Sintetični wheel 600 px pokaže postopni vmesni premik in končni položaj 600 px, brez prelivanja.
- Klik sidra med zagonom doseže cilj s scroll-margin in ohrani hash; neposreden `/o-nas#organi` prav tako. Menjava strani med drsenjem ostane na vrhu nove strani brez starega zagona/pina. Wheel nad textarea in Ctrl+wheel nista preprečena.
- Wheel poganja tudi GSAP zgodbo, z umikom napisa in razkritjem bele sekcije. Trikratni sprotni preklop reduced motion odstrani Lenis, prestrezanje wheel in pin ter ponovno vzpostavi eno sceno. Dejanski PageDown premakne dokument. Brez napak v konzoli pri teh interakcijah.
- Brez fizične miške/trackpada, dotika na napravi, Safari/Firefox ali profiliranja zmogljivosti; wheel in zoom preverjanja uporabljajo sintetične dogodke. Mobilni pregled je emulacija v namiznem Chromu.

AI: Codex je povezal Lenis z GSAP, uredil življenjski cikel in navigacijo, izvedel preverjanja s chrome-devtools-cli ter dokumentacijo. Slike in GSAP timeline niso spreminjani; Copilot ni bil uporabljen.

## Stalno viden header — 4. 11. 2026

Header uporablja `position: sticky; top: 0` in obstoječi z-index nad vsebino. Ostane v toku dokumenta. `scroll-padding-top` na korenu uporablja odzivno višino headerja, zato so native sidra, neposredni fragmenti in Lenis cilji pod njim; obstoječi scroll-margin doda še razmik.

Namizni pin se začne pri spodnjem robu headerja, višina scene pa je `100svh - višina headerja`, zato tudi njen zgornji opis in razkriti naslov ostaneta vidna. Potek timeline, scrub, slike in paleta so ohranjeni. Mobilni meni ima omejeno višino glede na viewport, native overflow scroll in `data-lenis-prevent` samo med odprtjem.

Preverjanje v produkcijskem Chromu: vseh osem strani pri 390×844, 768×1024, 1440×1000 in 700×360 (32 kombinacij), header na začetku/sredi/koncu strani, nad vsebino in brez prelivanja. Sidra so pod headerjem, meni zapre navigacija, zadnji CTA je dosegljiv tudi na nizkem zaslonu. Po prilagoditvi pina dodatno preverjeni začetek/sredina/konec scene pri 1440×1000, 768×1024 in 1024×601: vsa scena in razkriti naslov sta pod headerjem. Reduced motion in neposredni `/o-nas#organi` preverjena pri 700×360. Typecheck in build uspešna; brez napak v konzoli pri teh preizkusih. Gre za emulacijo, brez fizičnih naprav in drugih brskalnikov.

AI: Codex je uredil sticky CSS, odmike in prostor za pin, označil native scroll menija ter izvedel preverjanja s chrome-devtools-cli in dokumentacijo. Copilot ni bil uporabljen.

## Veljavna izvedba po celoviti editorial prenovi — 4. 11. 2026

Stara ločena scena SKUPAJ/bele zavese je zamenjana s skupnim WaveGallery sistemom. ScrollStory.tsx zdaj vključi glavno galerijo petih uradnih fotografij; še dve nepinned sekvenci povezujeta druge dele domače strani. SVG kubične Bézier poti se izračunajo iz kontejnerja, MotionPathPlugin jih uporabi s scrub timeline. Samo glavna galerija ima pin, pri najmanj 1024 px širine in 680 px višine; začetna višina headerja je izmerjena. Starejši pragi/opisi zgoraj so zgodovina.

useGsapContext upravlja lokalni kontekst, media poizvedbe, refresh po slikah/pisavah in cleanup. Mobilni odmik in rotacija sta manjša, nad fotografijami je rezerviran naslovni pas. Pri reduced motion so slike statične v avtomatsko visoki mreži, brez pina/Lenis. Lenis in sidra ohranijo obstoječe obnašanje. Podrobna arhitektura, scroll vzorci in dejanski preizkusi so v [EDITORIAL_REDESIGN.md](EDITORIAL_REDESIGN.md). Brez novih slikovnih predogledov.

## Veljavna optimizacija animacij in UX — 4. 11. 2026

Hero je skrajšan na izmerjenih 0,67 s, reveal na 0,45 s, števci na 0,9 s z 0,07 s zamika. CTA in glavna hero fotografija so takoj vidni. Interaktivni reveal blok ne izgine z opacity 0. Osvežitve meritev se združujejo prek refreshScheduler.

Edini pin zdaj zahteva najmanj **1280 × 760 px** in ima dodatno dolžino **1,15 viewporta**, prej 2,2. Scrub 0,25/0,15 s, bolj razmaknjeni začetki fotografij in vidna zadnja fotografija preprečijo lag ter prazen zaključek. Kompaktni odri so krajši, pot in rdeča grafika ohranjeni. Lenis lerp je 0,2. Starejši pragi/časi zgoraj so zgodovinski. [Izvedba, meritve in dejanski testi](ANIMATION_UX_OPTIMIZATION.md).
