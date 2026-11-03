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

Predogledi: [začetek](previews/scroll-start.png), [prehod](previews/scroll-transition.png), [nadaljevanje v dogodke](previews/scroll-events.png), [telefon brez pripenjanja](previews/scroll-mobile.png).

Fizične naprave, Safari/Firefox, profiliranje na šibkejših telefonih in celotna presoja dostopnosti ostajajo za končni pregled. AI: Codex je pripravil izvedbo, uvodno besedilo, preverjanja s chrome-devtools-cli in dokumentacijo; Copilot ni bil uporabljen.
