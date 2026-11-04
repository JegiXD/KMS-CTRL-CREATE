# Uvoz fotografij KMŠ — 4. 11. 2026

## Dovoljenje in obseg

Uporabnik je v pogovoru izrecno sporočil, da ima dovoljenje KMŠ za prenos in uporabo slik z njihovih strani. To dovoljenje je evidentirano kot uporabnikova potrditev, ne kot neodvisno pridobljena pisna licenca. Uporabljeni so javni viri klub-kms.si; prijave v družbena omrežja, zasebni albumi in obhajanje zaščit niso uporabljeni. Fotografov, ki niso navedeni na sliki ali viru, ne izmišljamo.

## Prenos in arhiv

Paket je bil v dist/KMS-Foto-Paket. Pred gradnjo je prestavljen v KMS-Foto-Paket v korenu, da ga Vite ne izbriše. V priloženi skripti je popravljen Unicode User-Agent, zaradi katerega prej nobena zahteva ni uspela, dodano kodiranje URL-jev in usklajene projektne poti.

Uspešen začetni prenos: **150 datotek** prek desetih javnih strani in javnega WordPress Media API (95 zapisov v odzivu API). Nabor vsebuje fotografije, plakate, logotipe ter več dimenzij istega motiva; 150 zato ni število različnih fotografskih prizorov. Za osem izbranih projektnih slik je dodatno prenesenih **5 manjkajočih večjih izvirnikov**, skupaj 155 uspešno prenesenih slikovnih datotek. Vseh 150 začetnih datotek in dodatni izvirniki so dekodirani s Pillow ter preverjeni s SHA-256. Začetni dnevnik napak je prazen.

- Začetna evidenca: [fotografije.json](../KMS-Foto-Paket/docs/fotografije.json) in [CSV](../KMS-Foto-Paket/docs/fotografije.csv). Samodejne kategorije/alt niso potrjena uredniška klasifikacija.
- Izvirniki ostajajo v KMS-Foto-Paket/assets; niso del public in se ne kopirajo v spletno gradnjo.
- Preverjeni izbor z neposrednimi URL-ji, stranmi, podpisi, hashi in dimenzijami: [KMS_PHOTO_SELECTION.json](KMS_PHOTO_SELECTION.json).
- Javni rastrski popis: [ASSET_INVENTORY.json](ASSET_INVENTORY.json).

## Preverjeni izbor

| Projekt | Lokalna JPEG / WebP osnova | Uradna stran | Navedba iz podpisa / vira |
|---|---|---|---|
| ftrgatev | `ftrgatev-01` | [KMŠ](https://www.klub-kms.si/dogodek/ftrgatev/) | Andraž Kramberger |
| cantus | `cantus-01` | [KMŠ](https://www.klub-kms.si/dogodek/cantus/) | Dostop.si |
| oder | `kms-oder-01` | [KMŠ](https://www.klub-kms.si/dogodek/kms-oder/) | Vir: KMŠ |
| kreativa | `kreativa-01` | [KMŠ](https://www.klub-kms.si/dogodek/delavnice/) | Isidora Veličković |
| jazz | `jazz-veceri-01` | [KMŠ](https://www.klub-kms.si/dogodek/cantus-2/) | Janin Vezonik |
| dobrodelnost | `dobrodelnost-01` | [KMŠ](https://www.klub-kms.si/dogodek/dobrodelnost/) | Rok Hlade Weis |
| standup | `standup-01` | [KMŠ](https://www.klub-kms.si/dogodek/stand-up/) | Vezonik (podpis na fotografiji) |
| pisarna | `pisarna-koncert-01` | [KMŠ](https://www.klub-kms.si/dogodek/koncerti-v-pisarni/) | Andraž Kramberger |

Fotografije so pregledane neposredno iz izvornih datotek, brez ustvarjanja kontaktnih listov ali predogledov. Izbor je povezan z glavno galerijo oziroma naslovno sliko posamezne uradne predstavitve; podob iz povezanih objav nismo samodejno pripisali odprtemu projektu. Primer napake samodejne klasifikacije: fotografija koncerta v Pisarni je bila označena tudi kot Kreativa, stran Ftrgatev pa vsebuje povezavo na Brkovanje. Popravljeno v uredniškem izboru.

Dostop.si je vidna oznaka vira, ne domnevno ime fotografa. Pri KMŠ ODER je naveden vir KMŠ, individualni fotograf ni naveden. Pri Stand UP je ohranjen samo vidni podpis Vezonik; imena ne sklepamo iz druge fotografije. Pri ostalih so podpisi prepisani z vidnih oznak na fotografijah. V aplikaciji so dodane navedbe in neposredne povezave na uradne vire. Fotografije so označene kot pretekle izvedbe, ne kot prizori novega dogodka ali napovedi 2025.

## Priprava za splet

Osem fotografij je izvoženih kot WebP in JPEG z največ 1280 px na daljši stranici, brez povečevanja, obrezovanja na disku ali retuširanja. Izvirniki in njihovi podpisi ostanejo ohranjeni. JPEG kopije skupaj merijo 1.273.838 B, WebP 714.114 B (43,9 % manj od JPEG kopij); to ni meritev celotnega prenosa strani.

`python3 scripts/prepare-kms-photos.py` iz korena projekta ponovno pripravi javne datoteke, manifest in src/data/kmsPhotos.ts. Potrebuje Pillow. Ne zaganjaj paketnega --projekt čez uredniški katalog, ker ta izvaža samodejni nepreverjeni nabor; najprej preglej paketni README.

Hero in ScrollStory uporabljata iste tri slike iz projektov Ftrgatev, KMŠ ODER in Cantus; na disku nista dodatno podvojeni. Kartice vseh osmih projektov uporabljajo isti preverjeni katalog, WebP in JPEG rezervo ter konkretne alt opise. Portreti ekipe ostanejo obstoječi barvni portreti. Arhivski hero/galerijski abstraktni vizuali so neuporabljeni, ne predstavljajo dejanskih fotografij.

## Preverjanje

- npm run typecheck in npm run build uspešna, brez novih npm odvisnosti.
- Domov, Dogodki in O nas pri 320/390/700/701/768/1440 px (18 kombinacij) v produkcijskem Chromu brez screenshotov: vse slike lokalne/dekodirane, pravi WebP, deljena hero/story pot, smiselni alt, navedbe virov, osem kartic, filter Glasba, prednost sredinske hero slike, fiksni števci in barvna ekipa; brez prelivanja.
- Reduced motion matrika brez pinov, nato pri 1440 px običajen pin/prehod in čiščenje ob navigaciji. Brez napak v konzoli pri teh preizkusih.
- Fizične naprave in drugi brskalniki niso preverjeni. Slikovni predogledi niso ustvarjeni.

AI: Codex je popravil priloženi downloader, prenesel datoteke, preveril izvore in izvirnike, uredniško izbral fotografije, pripravil optimizacijo s Pillow, vključitev in preverjanja ter dokumentacijo. Fotografije niso AI ustvarjene ali retuširane. Copilot pri tem uvozu ni bil uporabljen; prejšnja uporabnikova prenova ostaja ohranjena.
