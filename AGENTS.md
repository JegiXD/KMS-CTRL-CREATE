# NAVODILA ZA CODEX / AGENTE

Ti si izkušen React/TypeScript razvijalec in oblikovalec. Projekt je namenjen izzivu CTRL+CREATE za Klub mariborskih študentov. Delo izvajaj **postopoma** in brez izmišljanja podatkov.

1. Začni z `README.md`, `docs/CODEX_STEPS.md` in `docs/CONTENT_CHECKLIST.md`.
2. Ohrani delujočo aplikacijo, mobilno odzivnost in povezave. Vsak pomemben korak testiraj z `npm run typecheck` in `npm run build`.
3. Veljavna paleta je RED / WHITE: rdeča `#E32636`, bela `#FFFFFF`, svetlo rožnata `#FFF0F2`, temno besedilo `#181818`. Brez črnih UI ozadij, oranžne, rumene ali naključnih poudarkov; podrobnosti v `docs/BRAND_COLORS.md`.
4. Vizualni koncept: močan editorial/festival stil, fotografski triptih v hero sekciji, široki naslovi, črno-bela fotografija, mehki prehodi. Referenčni screenshot je navdih, ne vir za kopiranje.
5. GSAP ScrollTrigger: odvisnost od scrolla, povezava med sekcijami, diskretni fade in parallax, brez preveč efektov. Upoštevaj zmanjšano gibanje, mobilno zmogljivost, čiščenje `ScrollTrigger` ob unmount.
6. Pri dejanskih fotografijah uporabljaj `public/assets/` in logična imena iz `docs/ASSETS_AND_SOURCES.md`. Ne izmišljaj datotek; `SmartImage` pokaže fallback.
7. Uporabnikov logotip je že vključen: `public/assets/branding/kms-logo-header.png`, izvirnik `kms-logo-original.png`, favicon `public/favicon.png`. Ne uporabljaj starega `logo-placeholder.svg`.
8. Ne predstavljaj demo form kot delujoče storitve. Newsletter integriraj šele po pridobitvi endpointa, soglasja in politike zasebnosti.
9. Uradni obrazec za včlanitev: https://studentski-klubi.si/public-forms/jui1g3swbxz. Mora ostati viden in delujoč.
10. Podatke ekipe/organov in uradnih ur preveri, ker lahko zastarajo. Vir preverjanja dokumentiraj.
11. Na koncu posodobi `README.md`, `docs/CHANGELOG.md`, `docs/SUBMISSION.md` in obrazloži uporabljen AI.
12. Nikoli ne spreminjaj obsega, ki krši zahteve PDF briefa.


## Posodobitev: KMŠ RED / WHITE (03. 11. 2026)
Ohrani obstoječo strukturo, vse strani in scroll animacije. Nova paleta: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temna barva besedila `#181818`. Priložen uporabnikov logotip je v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Ne vračaj črnega ozadja in ne uporabljaj starega placeholder logotipa.

## Zgodovinsko: korak 02 — monokromatska smer (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Takrat je ta zahteva nadomestila zgornjo rdeče-belo paleto in prepoved črnega ozadja; ponovno navodilo RED / WHITE spodaj jo sedaj nadomešča. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.

## Veljavno navodilo — KMŠ RED / WHITE (ponovno potrjeno 4. 11. 2026)
Najnovejše uporabnikovo navodilo ponovno določa primarno rdečo `#E32636`, belo `#FFFFFF`, sekundarno svetlo rožnato `#FFF0F2` in temno besedilo `#181818`. Nadomešča monokromatsko zahtevo koraka 02. Ne vračaj črnih UI ozadij; ohrani vse strani, strukturo, scroll animacije, uporabnikov `kms-logo-header.png` in `public/favicon.png`. Veljavni sistem je v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Zgodovinski zapisi in predogledi pred to potrditvijo opisujejo prejšnjo paleto.

## Najnovejše uporabnikove dopolnitve (4. 11. 2026)
- Ne ustvarjaj, zajemaj ali shranjuj slikovnih predogledov/screenshotov. Mapa docs/previews je na uporabnikovo zahtevo odstranjena. Brskalnik uporabljaj za preverjanje brez posnetkov.
- Portreti članov ekipe se prikazujejo barvno; drugih fotografskih slogov to ne spreminja.
- Na domači strani pod hero so fiksni uporabnikovi števci 45 / 753 / 29 z animacijo do cilja; ne predstavljaj jih kot podatke v živo.
