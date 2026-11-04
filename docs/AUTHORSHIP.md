# Avtorstvo in razvoj projekta

## Avtorstvo projekta

**Avtor: Tilen Jäger.**

Tilen Jäger je vodil projektno usmeritev za spletno podobo KMŠ, opredelil cilje in uporabniške poti, izbiral oziroma potrjeval vizualno smer ter skozi povratne informacije usmerjal iterativne spremembe. Projektna dokumentacija in zgodovina pogovorov podpirata njegovo vlogo pri zasnovi, odločanju, pregledu rezultatov in potrditvah. Ne trdimo, da je osebno napisal vsako komponento ali vsako vrstico izvorne kode.

Izvedba je bila podprta z AI-orodji. Prispevek AI pri generiranju in urejanju kode ne nadomešča avtorjevega vodenja projekta ali pregleda rezultatov. Končni opis avtorstva in oddaje mora avtor pred prijavo pregledati ter po potrebi dopolniti skladno s pravili natečaja.

## Uporaba umetne inteligence pri razvoju

| Orodje / sodelujoči | Vloga | Podprti oziroma preverljivi prispevki |
|---|---|---|
| **Tilen Jäger** | Avtor in projektni vodja | Določanje zahtev in ustvarjalne smeri, izbira in potrjevanje oblikovnih odločitev, iterativna povratna informacija, pregled funkcionalnosti in prijava dovoljenja KMŠ za fotografije. Vloga avtorja je podana v naročilu; faze so opisane tudi v projektnih zapiskih. |
| **ChatGPT (OpenAI)** | Zgodnja idejna in načrtovalna pomoč | Predhodni projektni zapiski in oddajni osnutek navajajo pomoč pri brainstormingu, strukturi, vsebinskih predlogih, začetnem scaffoldingu in dokumentaciji. Natančen obseg posameznih zgodnjih generiranih izsekov ni mogoče določiti samo iz trenutnega Git diff-a. |
| **OpenAI Codex** | AI-podprta implementacija in preverjanje | Projektne beležke Codexu pripisujejo večino dokumentiranih React/TypeScript/CSS faz, komponente in animacije GSAP, pomoč pri fotografskem katalogu, popravke, preverjanje virov ter opisane typecheck/build in brskalniške preizkuse. Obseg po fazah je v [CHANGELOG.md](CHANGELOG.md), [EDITORIAL_REDESIGN.md](EDITORIAL_REDESIGN.md) in pripadajočih evidencah. |
| **GitHub Copilot** | AI-podpora pri predhodnih spremembah | Commiti `79c03a9` in `13fa094` vsebujejo `Co-authored-by: Copilot`; zgodovinski projektni zapiski določene predhodne spremembe izrecno opisujejo kot uporabnikovo delo s Copilotom. Commit trailer potrjuje navedbo soavtorstva, ne omogoča pa izolacije natančno predlaganih vrstic. |
| **KMŠ in drugi navedeni viri** | Vsebinski in slikovni viri | Uradne strani KMŠ so vir vsebin, fotografij in podatkov. Navedeni fotografi in mediji so pripisani samo tam, kjer jih podpira evidenca. To niso AI-prispevki. |

### Človekov pregled in odločanje

Avtor je AI-orodjem podal zahteve, izbral med predlogi, potrjeval smer, zahteval popravke, odločal o uporabniških funkcijah in pregledoval rezultate. Fotografije niso bile ustvarjene z generatorjem slik; projektna evidenca opisuje izbor in pripravo lokalnih obstoječih gradiv. Prav tako AI ne potrjuje pravic do gradiv ali pravilnosti uradnih podatkov; ti so vezani na zabeležene vire in uporabnikovo poročilo o dovoljenju.

### Meje navedb o AI

- Ne trdimo, da je GitHub Copilot sodeloval pri vseh fazah ali pri sedanji celoviti editorial prenovi.
- Ne pripisujemo ChatGPT-ju ali Codexu uporabe orodij, ki jih projektni zapiski ne potrjujejo.
- Zgodovinski zapisi omenjajo uporabo Chrome orodij za DOM, tipkovnico in odzivnost; posnetkov zaslona se po navodilu projekta ne ustvarja.
- Figma in generator slik v zapisih o celoviti editorial prenovi nista navedena kot uporabljena.
- Prispevke AI za posamezne starejše vrstice ni mogoče zanesljivo rekonstruirati brez popolnih pogovorov oziroma podrobnejših zapisov.

## Gradiva tretjih oseb in licence

Fotografije, logotip, profili oseb, pisave, ikone, knjižnice in zemljevid imajo ločene vire ter pogoje. Podrobnosti in previdnostne opombe so v [ASSETS_AND_CREDITS.md](ASSETS_AND_CREDITS.md). Repozitorij trenutno nima datoteke `LICENSE`; odprtokodna licenca ni izbrana in se je ne sme domnevati.

Projektni zapiski povzemajo natečajni brief tako, da avtorstvo oddane rešitve ostane avtorju oziroma avtorjem, nadaljnja uporaba pri KMŠ pa je predmet ločenega dogovora. Izvirni PDF brief ni v repozitoriju, zato je to **povzetek po posredovanem navodilu**, ne neodvisno preverjen pravni citat. Pred oddajo je treba pogoje preveriti v izvirniku.
