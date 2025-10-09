

# Trump Assistant Tools

Prosjekt er utviklet i forbindelse med **eksamen i emnet DS3103 Webutvikling (Høst 2024)** ved Høyskolen Kristiania, og løser eksamenscaset *TrumpVerse*, et ironisk case der oppgaven var å utviklet en fullstack-løsning bestående av:

* Et **.NET/C# Web API** som utfører CRUD-operasjoner mot en SQLite-database, med en docs side for APIet.
* En **React-frontend** som benytter API-et for å vise og administrere data.

**Fokusområdene i eksamen:**

1. React med Typescript
2. .NET/C# Web API med SQLite-database
3. HTTP-forespørsler mellom frontend og backend
4. CSS Framework (Bootstrap)
5. Responsivt design
6. Universell utforming

---

## Funksjonalitet

### ThoughtPage

* Viser et tilfeldig sitat fra Donald Trump hentet fra databasen (GET)
* Ment som en motivasjonsside for assistenten.

### StaffPage

* Viser alle ansatte i databasen (GET)
* Mulighet for å søke etter ansatte ved navn (GET)
* Funksjonalitet for å fjerne ansatte (DELETE)

### MerchPage

- Viser produkter (GET)
- Oppdaterer produkter (PUT)
- Legger til produkter (POST)
- Opplastning av bilder for nye produkter (POST)
  

**LocalStorage** er brukt slik at valgt underside huskes mellom navigasjon, refresh eller lukking av nettleseren.

Alle sider har **responsivt design** og fungerer på mobil, nettbrett og desktop.

---

## Teknisk oppbygning

### Service-lag

* Axios brukes til kommunikasjon mellom frontend og backend.
* Alle API-kall (GET, POST, PUT, DELETE) er samlet i egne service-filer.
* Data hentes og oppdateres dynamisk fra SQLite-databasen.
* Bildeopplasting håndteres via multipart/form-data i Axios

### Context API

* Context brukes til deling av data og funksjoner på tvers av komponenter.
* Hindrer «prop drilling» og sikrer ryddig kodestruktur.
* Context henter data fra service-laget og eksponerer det til komponentene.

### Navigasjon

* Implementert med **React Router**.
* Ruter mellom hovedsidene ThoughtPage, StaffPage og MerchPage.
* Navigasjonen håndteres via `MainNavigation`-komponenten, som er tilgjengelig globalt.

### List og Item

* Data vises med **List**- og **Item**-komponenter for strukturert presentasjon.
* List-komponentene henter arrays via Context og renderer dem som Item-komponenter.

---

## Universell utforming

Prosjektet følger prinsippene for universell utforming (WCAG 2.1):

* **Fargekontraster:** God kontrast mellom bakgrunn og tekst for synshemmede.
* **Lesbarhet:** Minimum 16px skrift og linjehøyde på 1.5.
* **Semantisk HTML:** Bruk av `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<h1>`, `<h3>`, `<p>` osv.
* **Alt-tekst:** Alle bilder har beskrivende `alt`-attributter for skjermlesere.

---

## Installasjon og kjøring

Prosjektet består av to deler:

* **Frontend:** React/Vite-applikasjonen ligger i mappen `trump`
* **Backend:** .NET Web API-prosjektet ligger i mappen `TrumpApi`

Frontend-applikasjonen (`trump`) kommuniserer med API-et (`TrumpApi`) via HTTP-forespørsler (GET, POST, PUT, DELETE).
Begge må være aktive samtidig for at CRUD-funksjonaliteten skal fungere korrekt.


#### 1. Klon prosjektet

```bash
git clone https://github.com/SigurdPJ/Eksamen-webutvikling.git
cd Eksamen-webutvikling
```


#### 2. Kjør frontend (trump)

```bash
cd trump
npm install
npm run dev
```

Dette vil starte applikasjonen og automatisk åpne den i nettleseren.


#### 3. Kjør backend (TrumpApi)

```bash
cd TrumpApi
dotnet run
```

API-et vil kjøre på: http://localhost:5177

Dokumentasjonside: Besøk http://localhost:5177/docs.html for oversikt over alle API-endepunkter, metoder og hvordan de brukes.


