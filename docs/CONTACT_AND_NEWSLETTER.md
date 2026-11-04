# 08 — Kontakt in newsletter

## Preverjeni kontaktni podatki

Neposreden pregled 3. 11. 2026 je na vseh treh straneh [Domov](https://www.klub-kms.si/), [O nas](https://www.klub-kms.si/o-nas/) in [Ideje članov](https://www.klub-kms.si/ideje-clanov/) vrnil HTTP 200 ter enak kontakt v nogi:

| Podatek | Objava KMŠ |
|---|---|
| Naslov | Vetrinjska ulica 30, 2000 Maribor |
| E-pošta | info@klub-kms.si |
| Telefon | 040 985 088 (Urban Kavkler, predsednik) |
| Uradne ure ponedeljek–četrtek | 7.00–14.00 |
| Uradne ure petek | 6.00–12.00 |

Vir je javna objava ob pregledu, ne neposredna potrditev po telefonu. Nekateri prej indeksirani prikazi in pretekle projektne strani so navajali druge ure in stare kontakte; vrednosti niso združene. Uporabljen je skladen neposredno prebran aktualni kontakt s teh treh strani, ob njem sta datum in napotek za preverjanje pred obiskom.

Javne kontaktne in socialne vrednosti so centralizirane v `src/data/contact.ts`, uporabljata jih kontaktna stran in noga. `socials` ostaja združljivo izvožen tudi iz `content.ts`.

## Družbena omrežja

Povezave so prevzete iz uradnega HTML-ja domače strani, kjer so označene kot KMŠ Facebook/Instagram/YouTube:

- [Instagram](https://www.instagram.com/klubmariborskihstudentov/)
- [Facebook](https://www.facebook.com/KlubMariborskihStudentov)
- [YouTube](https://www.youtube.com/channel/UC2d1WdMgAftMEOMJWur_iBg)

Neposredni GET vseh treh je vrnil HTTP 200; YouTube je preusmeril na isti kanal s parametroma `cbrd` in `ucbcb`. To potrjuje dosegljivost javnega spletnega vmesnika ob preverjanju, ne popolnega dostopa do objav brez prijave. V aplikaciji so navadne zunanje povezave, brez vdelanih socialnih sledilnikov ali SDK-jev.

## Kontakt ostaja mailto

`Contact.tsx` pojasni že pred obrazcem, da gumb odpre e-poštni program s pripravljenim osnutkom. Ni samodejnega pošiljanja, shranjevanja na strežnik ali sporočila o uspešni dostavi. Če obiskovalec nima nastavljenega programa, je naslov viden za prenos v spletno pošto.

`buildContactMailto` v `src/utils/contact.ts` kodira zadevo in telo, ohrani prelome vrstic ter uporablja potrjeni splošni naslov. Obrazec ima zahtevana polja in native email validacijo. Ne uporablja kontaktnega API-ja.

## Trenutni newsletter prikaz

`/newsletter` izrecno pojasni, da prijava v tem prototipu ni aktivna. Polje in gumb sta onemogočena z disabled fieldset; ni obrazca, submit handlerja, privolitvenega checkboxa, backend klica ali lažnega uspeha. Naslovov ni mogoče vpisovati ali oddajati. To ne govori o razpoložljivosti newsletterja na zunanji uradni strani KMŠ.

Stran je dosegljiva iz noge na vseh poteh in s kontakta, poleg nje so navadne povezave na uradne kanale. `.env.example` pojasni, da rezervirani javni endpoint spremenljivki trenutno nista uporabljeni in ne aktivirata storitve.

## Predlog dejanske integracije — ni izveden

V uradnem HTML-ju so razred `avia-mailchimp-form` in `data-av-custom-send='mailchimp_send'`. To je dokaz javnih sledi obstoječe Mailchimp zasnove, ne potrditev delujočega računa, naročnine, seznama ali dostopa.

Predlagana prva možnost je **gostovani prijavni obrazec Mailchimp**, ko KMŠ potrdi račun in javni URL za pravilen seznam. Ponudnik [podpira povezavo na gostovani obrazec](https://mailchimp.com/help/share-your-signup-form/) in [dvojno potrditev prijave](https://mailchimp.com/help/about-double-opt-in/). Takrat bi prototip dobil pravi gumb na potrjeno prijavno stran; podatke in potrjevanje bi obdelal ponudnik. To je manjši poseg od uvajanja lastne prijavne storitve.

Če klub želi prijavo neposredno na tej strani, je alternativa strežniški endpoint, npr. **predlagani, trenutno neobstoječi** `POST /api/newsletter`. Brskalnik bi poslal samo potrjen nabor podatkov, npr. `{ email, consent: true, consentVersion }`. Strežnik bi preveril podatke in privolitev ter uporabil Mailchimp Marketing API. Pri dvojni potrditvi je predlagan `status: pending`, saj [uradni vodič](https://mailchimp.com/developer/marketing/build/quickstarts/import-and-export-contacts) pojasni, da `subscribed` obide potrditveno sporočilo. [Referenca API](https://mailchimp.com/developer/marketing/api/lists/members/create-member) določa podprta polja in avtentikacijo. Skrbniški ključ in audience ID sta samo na strežniku, nikoli v `VITE_` spremenljivkah.

Za dejansko aktivacijo obeh možnosti je treba s klubom zaključiti:

1. Račun, seznam/audience, potrjeno domeno pošiljatelja in javni URL ali pogodbo endpointa.
2. Namen obveščanja, besedilo prostovoljne privolitve, informacije za posameznika in primerno politiko zasebnosti za to izvedbo. Na uradni strani je objavljen [PDF politike zasebnosti in pravnih obvestil](https://www.klub-kms.si/wp-content/uploads/2024/12/Politika-zasebnosti-in-pravna-obvestila.pdf) (ob preverjanju HTTP 200, application/pdf); njegove ustreznosti za novo integracijo ne predpostavljamo.
3. Dvojno potrditev in delujočo odjavo; pri lastnem endpointu tudi obravnavo podvojenih prijav, napak ponudnika, omejevanje zlorab ter način hrambe evidence privolitve brez nepotrebnega zapisovanja podatkov v dnevnike.
4. Preizkus s klubskim testnim naslovom: potrditveno sporočilo, prehod iz pending v subscribed, odjava in umik privolitve. UI sme po začetnem sprejemu pozvati k potrditvi e-pošte, ne trditi, da je prijava že dokončna.

Endpointi, ključi, pošiljanje potrditvenih sporočil, pravna besedila in storitev v tem koraku niso konfigurirani. Ne uporabljamo neodobrenega internega WordPress POST obrazca kot API-ja in ne prenašamo obstoječega seznama naslovov.

## Izvedena preverjanja

- Typecheck in build uspešna, brez novih odvisnosti.
- Kontakt in newsletter pri 320, 390, 700, 701, 768, 1100, 1101, 1440 in 1920 px (18 kombinacij), brez prelivanja; preverjeni kontakt, ure, tri socialne povezave, footer povezava do e-novic in disabled newsletter.
- Kontaktni obrazec zavrne prazna polja in neveljavno e-pošto. Izoliran preizkus dejanskega React onSubmit z nadomeščenim window.location preveri preventDefault, prejemnika, šumnike, posebne znake, prelome vrstic in rezervno zadevo; program za e-pošto ni odprt in sporočilo ni poslano.
- Newsletter nima lokalnega form elementa, aktivnih kontrol ali checkboxa; klik onemogočenega gumba ne sproži fetch/XHR zahteve. Kontakt in newsletter delujeta tudi z reduced motion pri 320 px. Brez napak v konzoli pri teh preizkusih.
- Fizične naprave, drugi brskalniki, dejanski mail odjemalec, dostava in pošiljanje newsletterja niso preverjeni.

AI: Codex je pregledal uradne strani in dokumentacijo ponudnika, pripravil podatke, React/CSS izvedbo, izoliran preizkus mailto, brskalniška preverjanja s chrome-devtools-cli ter načrt integracije in dokumentacijo. Copilot ni bil uporabljen.
