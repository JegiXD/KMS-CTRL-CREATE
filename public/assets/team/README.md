# Fotografije ekipe

`jan-ozvaldic.jpg`, `doroteja-plohl.jpg` in `gabriela-brodnjak.jpg` so portreti z uradne strani KMŠ, pregledani 3. 11. 2026. Izvorni URL-ji, velikosti ter status avtorstva in dovoljenj so v `docs/ABOUT_AND_SOURCES.md`. Dovoljenje za javno objavo še ni dokumentirano.

Za Urbana Kavklerja in Jana Kolbiča ni vključene portretne datoteke; prikazana sta z inicialkami. Preostala `anja-hojsak.jpg` in `ema-staklenac.jpg` sta neuporabljena stara abstraktna vizuala.

Korak 09 (4. 11. 2026): trije JPEG so ponovno primerjani z uradnimi URL-ji in ostajajo nespremenjeni. Istoimenski `.webp` (300 × 300, quality 85, method 6) so prednostne različice v `<picture>`, JPEG ostaja rezerva. Skupaj so 32,5 % manjši; dovoljenje ostaja odprto tudi za WebP. Izvoz: `python3 scripts/optimize-portraits.py` (Pillow s podporo WebP). Podrobnosti v `docs/IMAGE_REVIEW.md`.

Najnovejše navodilo 4. 11. 2026: portreti so prikazani v izvornih barvah (`filter: none` v karticah ekipe). JPEG in WebP ostajajo nespremenjeni. Slikovnih predogledov ne ustvarjamo več.
