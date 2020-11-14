var bottoneGenera = document.getElementById("genera");
bottoneGenera.addEventListener("click",
function() {

  var numeroKm =
  document.getElementById("km").value;
  console.log(numeroKm);

  var fasciaEta = document.getElementById("fascia_eta").value;
  console.log(fasciaEta);

  var nomeCognome = document.getElementById("nome_cognome").value;
  console.log(nomeCognome);


  // NOTE: PREZZO AL KM
  var prezzoAlKm = 0.21;

  // CALCOLO PREZZO INTERO
  var prezzoIntero = numeroKm * prezzoAlKm;
  console.log(prezzoIntero);

  // NOTE: ARROTONDAMENTO PREZZO
  var prezzoArrotondato = prezzoIntero.toFixed(2);

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
  console.log(prezzoFinale);

  var nomeCognome = document.getElementById("nome_cognome").value;
  document.getElementById("nomepasseggero").innerHTML = nomeCognome;

  var numeroCarrozza = Math.floor(Math.random() * 9) + 1;
  document.getElementById("carrozza").innerHTML = numeroCarrozza;

  var codiceCp = Math.floor(Math.random() * 10000) + 90000;
  document.getElementById("codicecp").innerHTML = codiceCp;

  document.getElementById("costobiglietto").innerHTML = prezzoArrotondato + " €";

  var h2Biglietto = document.getElementById('h2biglietto');
  h2Biglietto.classList.remove("hidden");
  h2Biglietto.classList.add("show");


  var ilMioBiglietto = document.getElementById('ticket');
  ilMioBiglietto.classList.remove("hidden");
  ilMioBiglietto.classList.add("show");
  }
);


var bottoneAnnulla = document.getElementById("annulla");
bottoneAnnulla.addEventListener("click",
function() {
  bottoneAnnulla = document.getElementById("ticket");
  bottoneAnnulla.classList.remove("show");
  bottoneAnnulla.classList.add("hidden");

  var h2Biglietto = document.getElementById('h2biglietto');
  h2Biglietto.classList.remove("show");
  h2Biglietto.classList.add("hidden");

  document.getElementById("km").value = "";
  document.getElementById("fascia_eta").value = "";
  document.getElementById("nome_cognome").value = "";

  document.getElementById("nomepasseggero").innerHTML = "";
  document.getElementById("offerta").innerHTML = "";
  document.getElementById("carrozza").innerHTML = "";
  document.getElementById("codicecp").innerHTML = "";
  document.getElementById("costobiglietto").innerHTML = "";


}
);
