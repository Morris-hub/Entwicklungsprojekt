class Parkplatz {

    constructor(id, belegt, parkhaus) {
        this.id = id;
        this.belegt = belegt;
        this.parkhaus = parkhaus;
    }

    parken() {
        this.belegt = true;
        console.log(`Parkplatz ${this.id} wurde belegt.`);
        this.parkhaus.anzahlBegegterParkplaetze++;
    }

    verlassen() {
        this.belegt = false;
        console.log(`Parkplatz ${this.id} wurde freigegeben.`);
        this.parkhaus.anzahlBegegterParkplaetze--;
    }

    sendeNachricht(message) {
        console.log(`Nachricht von Parkplatz ${this.id}: ${message}`);
    }
}


class Parkhaus {

    constructor(id, name, adresse) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.parkplaetze = [];
        this.anzahlBegegterParkplaetze = 0;
    }

    einfahren() {
        // Implementierung des Einfahrens
        const aktuelleZeit = new Date();
        console.log(`Ein Fahrzeug ist ${aktuelleZeit} eingefahren.`);
    }

    ausfahren() {
        // Implementierung des Ausfahrens
        const aktuelleZeit = new Date();
        console.log(`Ein Fahrzeug ist am ${aktuelleZeit} ausgefahren.`);
    }
}

class Ticket {
    constructor(id, kostenPer30Min) {
        this.id = id;
        this.kostenPer30Min = kostenPer30Min;
        this.zeitEinfahren = null;
        this.zeitAusstempeln = null;
    }

    einfahren() {
        this.zeitEinfahren = new Date();
        console.log(`Kunde mit Ticket ${this.id} ist eingefahren um ${this.zeitEinfahren}`);
    }

    ausstempeln() {
        this.zeitAusstempeln = new Date();
        console.log(`Kunde mit Ticket ${this.id} hat sich um ${this.zeitAusstempeln} ausgesptempelt `);
    }

    ZietHinzufügenInStunden(zeitInStunden) {
        this.zeitAusstempeln.setHours(zeitInStunden);
    }

}

class Reservierung {
    constructor(id, parkhaus, parkpaltz, laengeReserviereungInMin) {
        this.id = id;
        this.parkhaus = parkhaus;
        this.parkplatz = parkpaltz;
        this.laengeReservierungInMin = laengeReserviereungInMin;
    }

    reservieren() {
        this.parkplatz.parken();
    }
}

class Kunde {
    constructor(id, parkhaus, ticket, reservierung) {
        this.id = id;
        this.parkhaus = parkhaus;
        this.ticket = ticket;
        this.reservierung = reservierung;
    }
}

class ParkplatzWeb {
    constructor(parkhaus) {
        this.parkhaus = parkhaus;
    }

    zeigeParkplatzStatus() {
        console.log(`Es sind ${this.parkhaus.anzahlBegegterParkplaetze} Parkplätze von ${this.parkhaus.parkplaetze.length} belegt`);
    }


    zeigeParkhausInfo() {
        console.log(`Parkhausinformationen: ${this.parkhaus.name}, ${this.parkhaus.adresse}`);
    }

    bezahleMitPayPal(betrag) {
        console.log(`Zahlung von ${betrag} Euro mit PayPal.`);
        return true; // Erfolgreiche Zahlung
    }
}

// Beispielanwendung
const parkhaus = new Parkhaus(1, 'Test Parkhaus', 'Musterstraße 123');
const parkplatz1 = new Parkplatz(1, false, parkhaus);
const parkplatz2 = new Parkplatz(2, true, parkhaus);

const ticket1 = new Ticket(1, 2);

parkhaus.parkplaetze.push(parkplatz1, parkplatz2);

const webInterface = new ParkplatzWeb(parkhaus);

// Beispielaufrufe
parkhaus.einfahren();
parkplatz1.parken();
parkhaus.einfahren();
parkplatz2.parken();
parkplatz2.verlassen();
parkhaus.ausfahren();
webInterface.zeigeParkplatzStatus();
webInterface.bezahleMitPayPal(5.0);

ticket1.einfahren();
ticket1.ausstempeln();
ticket1.ZietHinzufügenInStunden(22);
console.log(ticket1.zeitAusstempeln);
