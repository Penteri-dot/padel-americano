# Padel Americano — 8 pelaajaa

Staattinen web-appi americano-turnauksen pyörittämiseen puhelimessa.
Ei build-vaihetta, ei riippuvuuksia, ei backendiä. Kaksi tiedostoa.

## Turnausmuoto

- 8 pelaajaa, 2 kenttää, 7 kierrosta, 24 pistettä per ottelu (valittavissa 16/21/24/32)
- Aikataulu on todennettu **whist-turnaus Wh(8)**:
  - jokainen pelaa jokaisen kanssa parina **täsmälleen kerran** (28 paria / 7 kierrosta)
  - jokainen kohtaa jokaisen vastustajana **täsmälleen kaksi kertaa**
- Voittaja ratkeaa henkilökohtaisilla kokonaispisteillä, tasapisteissä pistero (+/−)

## Deploy Verceliin

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

Service worker tallentaa appin välimuistiin, joten se toimii myös ilman
verkkoyhteyttä sen jälkeen kun olet avannut sen kerran.

## Käyttö kentällä

- Syötä 8 nimeä, valitse pistemäärä, **Aloita turnaus**
- Joka kierroksella: liu'uta tai näpäytä ± vasemman joukkueen pisteisiin,
  oikean joukkueen pisteet täydentyvät automaattisesti (summa = 24)
- **Tallenna ja seuraava kierros**
- **Tilanne** = elävä pistetilanne, **Kierrokset** = koko aikataulu, napauta muokataksesi
- **Kopioi tulokset** (Tilanne-näkymässä) = sijoitukset ja tulokset leikepöydälle valmiiksi
  muotoiltuna, liitettäväksi suoraan WhatsAppiin. Toimii myös kesken turnauksen — mukaan
  tulevat vain pelatut kierrokset.
- Tilanne tallentuu automaattisesti puhelimen muistiin — puhelimen voi lukita
  tai Safarin sulkea kesken turnauksen

## Tiedostot

- `index.html` — koko appi (HTML + CSS + JS)
- `sw.js` — service worker offline-tukea varten
