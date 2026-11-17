# Padel Americano — 8 pelaajaa

**Avaa appi: https://padel-americano-ten.vercel.app**

Ilmainen puhelimessa toimiva appi kahdeksan pelaajan padel americano -turnauksen
pyörittämiseen. Appi kertoo joka kierroksella, kuka pelaa kenen kanssa ja millä
kentällä, kirjaa tulokset ja laskee pistetilanteen. Mitään ei tarvitse asentaa
eikä mihinkään kirjautua: avaa linkki, syötä nimet ja aloita.

- **Neljä kieltä: suomi, englanti, espanja ja ruotsi.** Appi valitsee kielen
  puhelimen kielen mukaan, ja sen voi vaihtaa 🌐-valikosta aloitusnäkymässä
  tai Tilanne-näkymän alareunassa.
- **Tulosten vienti:** Tilanne-näkymän **Kopioi tulokset** -nappi kopioi
  sijoitukset ja pelattujen kierrosten tulokset valmiiksi muotoiltuna tekstinä,
  jonka voi liittää suoraan WhatsAppiin. Toimii myös kesken turnauksen.
- Tulokset tallentuvat vain omaan puhelimeesi. Mitään ei lähetetä minnekään.
- Toimii myös ilman verkkoa, kun olet avannut appin kerran.
- Saa käyttää, kopioida ja muokata vapaasti (MIT-lisenssi, ks. `LICENSE`).

## In English

**Open the app: https://padel-americano-ten.vercel.app**

A free phone web app for running an 8-player, 2-court padel americano
tournament. It shows who plays with whom on which court each round, records
the scores and keeps the standings. Nothing to install, no sign-up.

- Available in **English, Spanish, Swedish and Finnish**. The app follows your
  phone's language; change it from the 🌐 menu on the start screen.
- Everyone partners with everyone exactly once and plays against everyone
  exactly twice (7 rounds).
- **Share results:** the **Copy results** button on the Standings screen copies
  the ranking and the scores of every round played so far as ready-formatted
  text you can paste straight into WhatsApp. Works mid-tournament too.
- Scores are stored only on your own phone. Works offline after the first visit.
- Free to use, copy and modify (MIT licence).

## Turnausmuoto

- 8 pelaajaa, 2 kenttää, 7 kierrosta, 24 pistettä per ottelu (valittavissa 16/21/24/32)
- Aikataulu on todennettu **whist-turnaus Wh(8)**:
  - jokainen pelaa jokaisen kanssa parina **täsmälleen kerran** (28 paria / 7 kierrosta)
  - jokainen kohtaa jokaisen vastustajana **täsmälleen kaksi kertaa**
- Voittaja ratkeaa henkilökohtaisilla kokonaispisteillä, tasapisteissä pistero (+/−)

## Oman version julkaisu Verceliin

Tätä tarvitset vain, jos haluat julkaista oman kopion. Appissa ei ole
rakennusvaihetta, riippuvuuksia eikä taustapalvelinta.

```bash
cd ~/padel-americano && npx vercel --prod
```

Ensimmäisellä kerralla Vercel kysyy kirjautumisen ja projektin nimen — hyväksy
oletukset. Framework: **Other** (staattinen). Lopuksi se tulostaa URLin.

Jos npx jumittaa (F-Secure DeepGuard):

```bash
npx --cache /tmp/npm-cache vercel --prod
```

## Puhelimeen

1. Avaa URL Safarissa iPhonella
2. Jaa-nappi → **Lisää Koti-valikkoon**
3. Avaa kotivalikosta — käynnistyy ilman selainpalkkeja

Appi tallentuu puhelimen välimuistiin, joten se toimii myös ilman
verkkoyhteyttä sen jälkeen kun olet avannut sen kerran.

Kun appiin tulee päivitys, se näkyy vasta toisella avauskerralla verkossa:
ensimmäinen avaus hakee uuden version taustalla, toinen näyttää sen.

## Käyttö kentällä

- Syötä 8 nimeä, valitse pistemäärä, **Aloita turnaus**
- Joka kierroksella: liu'uta tai näpäytä ± vasemman joukkueen pisteisiin,
  oikean joukkueen pisteet täydentyvät automaattisesti (summa = 24)
- **Tallenna ja seuraava kierros**
- Jos kentän pisteisiin ei ole koskettu, appi kysyy varmistuksen ennen tallennusta
- Jos jokin kierros on jäänyt tallentamatta, Tilanne-näkymä kertoo mikä ja vie
  sinne yhdellä napautuksella. Otsikoksi vaihtuu **Lopputulokset**, kun kaikki
  7 kierrosta on tallennettu
- **Tilanne** = elävä pistetilanne, **Kierrokset** = koko aikataulu, napauta muokataksesi
- **Kopioi tulokset** (Tilanne-näkymässä) = sijoitukset ja tulokset leikepöydälle
  valitulla kielellä, liitettäväksi suoraan WhatsAppiin. Kesken turnauksen mukaan
  tulevat vain pelatut kierrokset. Jos kopiointi ei onnistu, teksti näytetään
  valmiiksi valittuna käsin kopioitavaksi.
- Tilanne ja keskeneräinen pistesyöttö tallentuvat automaattisesti puhelimen
  muistiin — puhelimen voi lukita tai Safarin sulkea kesken turnauksen
- **Nollaa turnaus** löytyy Tilanne-näkymän alareunasta

## Tiedostot

- `index.html` — koko appi (HTML + CSS + JS)
- `sw.js` — offline-tuki (service worker)
- `BUGIT.md` — tiedossa olevat pienet, korjaamatta jätetyt bugit
