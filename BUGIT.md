# Tiedossa olevat pienet bugit

Nämä on löydetty katselmuksessa 17.11.2026 mutta jätetty tarkoituksella korjaamatta,
koska ne ovat harvinaisia ja vaarattomia (yleisyys × vakavuus alle 5, asteikko 1–100).

| Bugi | Yleisyys | Vakavuus | Tulo |
|---|---|---|---|
| Kahdelle pelaajalle voi antaa saman nimen, jolloin heitä ei erota taulukossa. | 2 | 2 | 4 |
| Jos viimeinen kierros tallennetaan niin, että jokin aiempi kierros on jäänyt väliin, appi näyttää tilanteen kertomatta, mikä kierros puuttuu. | 2 | 2 | 4 |
| Nimi, jossa on merkki `<` tai `&`, voi näkyä Kierrokset-listassa väärin. | 1 | 3 | 3 |
| Jos puhelimen muisti on täynnä tai tallennus on estetty, tulokset eivät tallennu eikä appi varoita siitä. | 1 | 4 | 4 |
