# 05 — Dogodki in uradni viri

## Kaj je prikazano

`/dogodki` je pregled osmih projektov KMŠ, ne koledar prihodnjih izvedb. Opisi so kratki uredniški povzetki uradnih projektnih strani. Kategorije so uredniška razvrstitev prototipa, ne uradna taksonomija KMŠ. Niso dodani nepotrjeni termini, cene, nove lokacije ali obljube o ponavljanju dogodkov.

Viri so bili pregledani 3. 11. 2026. Neposredni GET vseh osmih spodnjih URL-jev je vrnil HTTP 200; pregledano je bilo tudi vsebinsko besedilo strani. Del strani se prek spletnega brskalnega orodja ni odprl (robots/cache miss), zato je bilo gradivo preverjeno tudi z neposrednim HTTPS branjem. Dostopnost je ugotovitev ob preverjanju, ne jamstvo za prihodnje delovanje.

## Evidenca virov

| Projekt | Neposredni vir KMŠ | Potrjena vsebina za povzetek |
|---|---|---|
| Ftrgatev | [Uradna predstavitev](https://www.klub-kms.si/dogodek/ftrgatev/) | Napoved devete izvedbe 4. 11. 2025 na ŠTUK-u, Modrijani, MRFY in RANR; srečanje različnih glasbenih svetov. V prototipu je leto 2025 izrecno označeno, brez predstavitve kot prihodnja izvedba. |
| Cantus | [Uradna predstavitev](https://www.klub-kms.si/dogodek/cantus/) | Štiriurno tematsko druženje, tradicionalno petje in zabavni izzivi po pravilih; prva izvedba KMŠ leta 2013. Popravljena prejšnja napačna umestitev med koncerte. |
| KMŠ Kreativa | [Uradna predstavitev](https://www.klub-kms.si/dogodek/delavnice/) | Neformalno znanje in delavnice; primeri čokolade, videoiger, epoksija in gline. To niso napovedi razpisanih delavnic. |
| KMŠ ODER | [Uradna predstavitev](https://www.klub-kms.si/dogodek/kms-oder/) | Predstavljen kot prizorišče Festivala Lent za mlade in manj poznane glasbenike. Brez obljube nove izdaje ali aktualne zasedbe. |
| Jazz večeri | [Uradna predstavitev](https://www.klub-kms.si/dogodek/cantus-2/) | Jazz prek poslušanja, koncertov, izobraževanja in povezovanja z glasbeniki; kulturno in zgodovinsko ozadje. Ime URL `cantus-2` je dejanska povezava uradnega seznama za Jazz večere. |
| Dobrodelnost | [Uradna predstavitev](https://www.klub-kms.si/dogodek/dobrodelnost/) | KrofeQ podpira Zavetišče za živali Maribor; predstavljene so tudi dražbe športnih dresov in krvodajalske akcije. Brez napovedi zbiranja sredstev ali nove akcije. |
| Stand UP | [Uradna predstavitev](https://www.klub-kms.si/dogodek/stand-up/) | Komedija v Pisarni in priložnost za manj znane slovenske komike; prvi tovrstni dogodek KMŠ leta 2018. |
| Koncerti v Pisarni | [Uradna predstavitev](https://www.klub-kms.si/dogodek/koncerti-v-pisarni/) | Manjši oder za mlade perspektivne, še manj prepoznavne glasbenike. Besedilo vira omenja petke, vendar prototip ne obljublja aktualnega tedenskega programa. |

[Uradni seznam dogodkov KMŠ](https://www.klub-kms.si/dogodki/) povezuje vseh osem predstavitev. Starejši teksti na projektnih straneh niso dokaz aktualnega termina ali sestave kluba; podatki ekipe in kontakta se v tem koraku ne spreminjajo.

## Izvedba in dostopnost

- Tipizirani podatki, neposredni URL-ji in datum preverjanja so v `src/data/content.ts`; uporablja jih tudi domača stran. Obstoječa imena slik in slugi ostajajo ohranjeni.
- Ločena stran `src/pages/Events.tsx`, izvoz v `OtherPages.tsx` ohrani obstoječo pot aplikacije.
- Vsi projekti (8), Glasba (4), Druženje (1), Delavnice (1), Dobrodelnost (1), Humor (1). Števci se izračunajo iz podatkov; nabori se ne podvajajo ročno.
- Filtri so navadni tipkovniško dostopni gumbi z `aria-pressed` in povezavo na rezultate. Stanje rezultatov se sporoča prek `role=status`. Ponastavitev vrne fokus na filter vseh projektov.
- Kartice imajo lokalno sliko z rezerviranim razmerjem, opis in neposredno zunanjo povezavo. Alt besedilo in oznaka nad seznamom pojasnjujeta, da gre še za začasne vizuale. Povezave se odprejo v novem zavihku; dostopna oznaka to pove.
- Dva stolpca nad 700 px, en stolpec do 700 px. Kartice uporabljajo obstoječo monokromatsko paleto, brez novih animacij ali odvisnosti.

## Preverjanja

- `npm run typecheck` in `npm run build` uspešna.
- V Chromu preverjeni vsi filtri pri 320, 390, 700, 701, 768, 1024, 1440 in 1920 px. Pravilni nabori in števci, ena izbrana kategorija, osem različnih neposrednih povezav, delujoča ponastavitev/fokus in brez vodoravnega prelivanja dokumenta ali pregledanih besedil.
- Preizkušeni tipki Enter in Space ter prehod s Tab: kategoriji Glasba in Druženje pravilno filtrirata, fokus je viden.
- Prehod Domov → Dogodki ohrani štiri kartice na domači strani, prikaže vseh osem na podstrani in odstrani pin prejšnje scroll scene. Preizkušen slikovni error fallback brez spremembe višine okvirja. Brez napak v konzoli pri teh interakcijah.
- Vseh osem lokalnih slikovnih poti obstaja; zunanji viri so ob preverjanju vrnili HTTP 200. Nakup, prijava ali oddaja zunanjih obrazcev niso bili izvedeni.

Predogledi: [filtri na telefonu](previews/events-390.png), [namizni pregled](previews/events-1440.png), [kartice na namizju](previews/events-cards-1440.png), [kartica na telefonu](previews/events-cards-390.png).

Preverjanje je potekalo v namiznem Chromu z emulacijo širin, brez fizičnih naprav ali drugih brskalnikov. Odobrene fotografije in aktualni termini ostajajo za potrditev s klubom. AI: Codex je povzel preverjene uradne vire, pripravil podatkovni model, stran, CSS, preverjanja s chrome-devtools-cli in dokumentacijo. Copilot ni bil uporabljen.
