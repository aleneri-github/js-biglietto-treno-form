var bottoneGenera = document.getElementById("genera");
bottoneGenera.addEventListener("click",
function() {

  // NOTE: RICHIESTA KM
  var numeroKm =
  document.getElementById("km").value;
  console.log(numeroKm);

  // NOTE: RICHIESTA ETA'
  var fasciaEta = document.getElementById("fascia_eta").value;
  console.log(fasciaEta);

  // NOTE: RICHIESTA NOME E COGNOME
  var nomeCognome = document.getElementById("nome_cognome").value;
  console.log(nomeCognome);


  // NOTE: PREZZO AL KM
  var prezzoAlKm = 0.21;

  // CALCOLO PREZZO INTERO
  var prezzoIntero = numeroKm * prezzoAlKm;
  console.log(prezzoIntero);

  // VARIABILE SCONTO
  var sconto = 0;

  // NOTE: MESSAGGIO
  var messaggio = "";

  // SCONTO UNDER18
  if (fasciaEta == "Minorenne") {
    sconto = (prezzoIntero * 20 ) / 100;
    messaggio = ("SCONTO<br>UNDER 18");
    document.getElementById("offerta").innerHTML = messaggio;

  // SCONTO OVER65
} else if (fasciaEta == "Over65") {
    sconto = (prezzoIntero * 40) / 100;
    messaggio = ("SCONTO<br>OVER 65");
    document.getElementById("offerta").innerHTML = messaggio;
  } else {
    messaggio = ("TARIFFA<br>INTERA")
    document.getElementById("offerta").innerHTML = messaggio;
  }

  // PREZZO SCONTATO
  var prezzoFinale = prezzoIntero - sconto;
  prezzoFinale = prezzoFinale.toFixed(2);

  // NOTE: STAMPA SU TICKET DI NOME E COGNOME
  var nomeCognome = document.getElementById("nome_cognome").value;
  document.getElementById("nomepasseggero").innerHTML = nomeCognome;

  // NOTE: STAMPA SU TICKET NUMERO CARROZZA
  var numeroCarrozza = Math.floor(Math.random() * 9) + 1;
  document.getElementById("carrozza").innerHTML = numeroCarrozza;

  // NOTE: STAMPA SU TICKET CODICE CP
  var codiceCp = Math.floor(Math.random() * 10000) + 90000;
  document.getElementById("codicecp").innerHTML = codiceCp;

  // NOTE: STAMPA DU TICKET COSTO BIGLIETTO
  document.getElementById("costobiglietto").innerHTML = prezzoFinale + " €";

  // NOTE: TITOLO "IL TUO BIGLIETTO"
  var h2Biglietto = document.getElementById('h2biglietto');
  h2Biglietto.classList.remove("hidden");
  h2Biglietto.classList.add("show");

  // NOTE: TICKET
  var ilMioBiglietto = document.getElementById('ticket');
  ilMioBiglietto.classList.remove("hidden");
  ilMioBiglietto.classList.add("show");
  }
);

// NOTE: PULSANTE ANNULLA
var bottoneAnnulla = document.getElementById("annulla");
bottoneAnnulla.addEventListener("click",
function() {
  // NOTE: NASCONDI TICKET
  bottoneAnnulla = document.getElementById("ticket");
  bottoneAnnulla.classList.remove("show");
  bottoneAnnulla.classList.add("hidden");

  // NOTE: NASCONDI TITOLO "IL TUO BIGLIETTO"
  var h2Biglietto = document.getElementById('h2biglietto');
  h2Biglietto.classList.remove("show");
  h2Biglietto.classList.add("hidden");

// NOTE: SVUOTA CAMPI KM/ETA'/NOME-COGNOME
  document.getElementById("km").value = "";
  document.getElementById("fascia_eta").value = "";
  document.getElementById("nome_cognome").value = "";

  // NOTE: SVUOTA CAMPI TICKET
  document.getElementById("nomepasseggero").innerHTML = "";
  document.getElementById("offerta").innerHTML = "";
  document.getElementById("carrozza").innerHTML = "";
  document.getElementById("codicecp").innerHTML = "";
  document.getElementById("costobiglietto").innerHTML = "";
}
);
