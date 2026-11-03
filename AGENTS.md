# NAVODILA ZA CODEX / AGENTE

Ti si izkušen React/TypeScript razvijalec in oblikovalec. Projekt je namenjen izzivu CTRL+CREATE za Klub mariborskih študentov. Delo izvajaj **postopoma** in brez izmišljanja podatkov.

1. Začni z `README.md`, `docs/CODEX_STEPS.md` in `docs/CONTENT_CHECKLIST.md`.
2. Ohrani delujočo aplikacijo, mobilno odzivnost in povezave. Vsak pomemben korak testiraj z `npm run typecheck` in `npm run build`.
3. Primarne barve so SAMO črna, bela, siva in odtenki. Brez oranžne, rumene ali naključnih poudarkov.
4. Vizualni koncept: močan editorial/festival stil, fotografski triptih v hero sekciji, široki naslovi, črno-bela fotografija, mehki prehodi. Referenčni screenshot je navdih, ne vir za kopiranje.
5. GSAP ScrollTrigger: odvisnost od scrolla, povezava med sekcijami, diskretni fade in parallax, brez preveč efektov. Upoštevaj zmanjšano gibanje, mobilno zmogljivost, čiščenje `ScrollTrigger` ob unmount.
6. Pri dejanskih fotografijah uporabljaj `public/assets/` in logična imena iz `docs/ASSETS_AND_SOURCES.md`. Ne izmišljaj datotek; `SmartImage` pokaže fallback.
7. Logotip je trenutno samo placeholder. Ob prejemu uradne datoteke ga zamenjaj in posodobi `index.html`/`Layout.tsx`.
8. Ne predstavljaj demo form kot delujoče storitve. Newsletter integriraj šele po pridobitvi endpointa, soglasja in politike zasebnosti.
9. Uradni obrazec za včlanitev: https://studentski-klubi.si/public-forms/jui1g3swbxz. Mora ostati viden in delujoč.
10. Podatke ekipe/organov in uradnih ur preveri, ker lahko zastarajo. Vir preverjanja dokumentiraj.
11. Na koncu posodobi `README.md`, `docs/CHANGELOG.md`, `docs/SUBMISSION.md` in obrazloži uporabljen AI.
12. Nikoli ne spreminjaj obsega, ki krši zahteve PDF briefa.


## Posodobitev: KMŠ RED / WHITE (03. 11. 2026)
Ohrani obstoječo strukturo, vse strani in scroll animacije. Nova paleta: primarna rdeča `#E32636`, bela `#FFFFFF`, sekundarna svetlo rožnata `#FFF0F2` in temna barva besedila `#181818`. Priložen uporabnikov logotip je v `public/assets/branding/kms-logo-original.png`, za navigacijo obrezan v `kms-logo-header.png`, favicon pa je `public/favicon.png`. Ne vračaj črnega ozadja in ne uporabljaj starega placeholder logotipa.

## Korak 02 — novejše uporabnikovo navodilo (3. 11. 2026)
Uporabnik je po RED / WHITE posodobitvi izrecno naročil črno-belo-siv oblikovni sistem. Ta zahteva nadomešča zgornjo rdeče-belo paleto in prepoved črnega ozadja. Veljavni sistem je opisan v `docs/BRAND_COLORS.md` (iz mape docs: `BRAND_COLORS.md`). Uporabnikov logotip, favicon, struktura, poti in scroll animacije ostajajo ohranjeni.
