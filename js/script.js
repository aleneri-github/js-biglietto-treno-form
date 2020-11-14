// NOTE: PREZZO AL KM
var prezzoAlKm = 0.21;
// NOTE: KM INSERITI DALL'UTENTE
var richiestaKm = prompt("Inserisci i km che vuoi percorrere");
// ETA' INSERITA DALL'UTENTE
var anni = prompt("Inserisci la tua età");
// CALCOLO PREZZO INTERO
var prezzoIntero = richiestaKm * prezzoAlKm;
console.log(prezzoIntero);
// NOTE: ARROTONDAMENTO PREZZO
var prezzoArrotondato = prezzoIntero.toFixed(2);
// VARIABILE SCONTO
var sconto = 0;
// SCONTO UNDER18
if (anni < 18) {
  sconto = (prezzoIntero * 20 ) / 100;
// SCONTO OVER65
} else if (anni > 65) {
  sconto = (prezzoIntero * 40) / 100;
}
// PREZZO SCONTATO
var prezzoFinale = prezzoIntero - sconto;
console.log(prezzoFinale);

document.getElementById("km").innerHTML = richiestaKm + " Km";

document.getElementById("anni").innerHTML = anni + " Anni";

document.getElementById("totale").innerHTML = prezzoArrotondato + " €";
