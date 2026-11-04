# Viri gradiv in navedbe

Ta dokument opisuje gradiva, vključena v prototip. Navedba vira sama po sebi ne pomeni prenosa avtorskih pravic ali lastništva.

## Fotografije KMŠ in dovoljenje

Večina projektnih fotografij je bila pridobljena z javnih uradnih strani KMŠ in je shranjena lokalno v `public/assets/`. Uporabnik je 4. 11. 2026 sporočil, da je KMŠ dovolil uporabo fotografij s svojih strani. To je **uporabnikovo poročilo o dovoljenju**, zabeleženo v [PHOTO_IMPORT.md](PHOTO_IMPORT.md); ni neodvisno preverjena pisna licenca ali pogodba.

Osem izbranih projektnih sklopov: Ftrgatev, Cantus, KMŠ ODER, KMŠ Kreativa, Jazz večeri, Dobrodelnost, Stand UP in koncerti v Pisarni. Dodatni prizori skupnosti in galerije izvirajo iz pregledanega foto paketa. Vmesnik prikazuje navedbe ob fotografijah oziroma povezave do virov. Natančni izvorni URL-ji, prikazani podpisi, mere in kontrolne vsote so v [KMS_PHOTO_SELECTION.json](KMS_PHOTO_SELECTION.json), [PHOTO_REBALANCE_ASSETS.json](PHOTO_REBALANCE_ASSETS.json) ter v TypeScript katalogih.

Navedbe ohranijo zapis, ki je bil viden na uradni strani ali fotografiji; neznani fotografi niso ugibani. Med vidnimi navedbami so Andraž Kramberger, Dostop.si, Isidora Veličković, Janin Vezonik, Rok Hlade Weis in »Vir: KMŠ«. Konkretno sliko vedno preverite v manifestu, saj se navedba razlikuje po fotografiji.

Izvirni arhiv je v lokalni mapi `KMS-Foto-Paket/`, izven `public/` in produkcijskega `dist/`. Javne izpeljanke so JPEG/WebP. Priprava WebP/JPEG za splet ne spreminja lastništva in ne nadomešča dovoljenja.

## Osebe, portreti in logotip

Portreti ekipe in vodij področij so povezani z imeni v `src/data/kmsPeopleImages.ts` in uporabljajo dokumentirane KMŠ vire. Urbanov prikaz je uradna profilna ilustracija, ne osebni portret; tako je označen tudi v uporabniškem vmesniku. Vire in datume preverjanja osebnih podatkov vsebuje [ABOUT_AND_SOURCES.md](ABOUT_AND_SOURCES.md) in [PHOTOGRAPHY_AUDIT.md](PHOTOGRAPHY_AUDIT.md).

Logotip KMŠ je uporabniku priloženo gradivo: izvirnik `public/assets/branding/kms-logo-original.png`, različica za navigacijo `kms-logo-header.png`. Favicon in Apple touch icon uporabljata znak KMŠ. Uporabnikovo posredovanje logotipa ni dokaz prenosa lastništva ali neomejene pravice za ponovno objavo; ločeno pisno dovoljenje v repozitoriju ni priloženo. `logo-placeholder.svg`, čeprav je v mapi, ni trenutni logotip aplikacije.

## Izvirna dekorativna grafika

`guitar.svg`, `accordion.svg`, `stage.svg` in `facet-pattern.svg` so lokalne dekorativne ilustracije, dokumentirane kot izvirna SVG-koda, pripravljena z AI-podprto pomočjo. `Graphics.tsx` in valovna grafika vsebujejo dodatne SVG-poteze, napisane za ta projekt. Niso uradne znamke KMŠ ali fotografije. Ne vsebujejo zunanjih slikovnih datotek. Dekoracija je označena kot ne-vsebinska in ne prestreza interakcij.

## Pisave, knjižnice in zunanji viri

| Gradivo/storitev | Uporaba | Navedba oziroma opomba |
|---|---|---|
| Google Fonts | Anton, DM Sans in Space Grotesk | Naložene prek zunanjega CSS vira; pisave niso vendorizirane v repozitoriju. Licenčne pogoje družin preverite pri Google Fonts pred lokalno distribucijo. |
| React, React Router, Vite, TypeScript | Aplikacijsko ogrodje in gradnja | Odvisnosti so v `package.json`; licenčni podatki so v paketih. |
| GSAP, ScrollTrigger, MotionPathPlugin | Animacije | GSAP vtičniki so del GSAP integracije; preverite aktualne licenčne pogoje za predvideno objavo. |
| Lenis | Gladko drsenje | Zunanji paket; licenca je navedena v njegovi distribuciji. |
| Lucide React | Ikone | Ikone so vključene kot odvisnost in izrisane v aplikaciji. |
| Google Maps | Vdelan zemljevid na `/kontakt` | Zemljevid se naloži iz Googlove storitve in je odvisen od omrežja/pogojev ponudnika. |
| KMŠ, Instagram, Facebook, YouTube in obrazec članstva | Zunanje povezave | Odpirajo uradne oziroma navedene strani; njihova vsebina ni del repozitorija. |

Projekt ne vsebuje datoteke `LICENSE`. Zato ta repozitorij ne določa splošne odprtokodne licence za izvorno kodo, logotip, fotografije ali druge vsebine. Pred javno objavo in nadaljnjo uporabo preverite pogoje posameznih imetnikov pravic. Več o avtorstvu je v [AUTHORSHIP.md](AUTHORSHIP.md).
