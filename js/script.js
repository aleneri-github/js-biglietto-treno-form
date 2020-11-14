var bottoneGenera = document.getElementById("genera");
bottoneGenera.addEventListener("click",
function() {

  var numeroKm = document.getElementById("km").value;
  console.log(numeroKm);

  var fasciaEta = document.getElementById("fascia_eta").value;
  console.log(fasciaEta);

  var nomeCognome = document.getElementById("nome_cognome").value;
  console.log(nomeCognome);


  // NOTE: PREZZO AL KM
  var prezzoAlKm = 0.21;
  // // NOTE: KM INSERITI DALL'UTENTE
  // var richiestaKm = prompt("Inserisci i km che vuoi percorrere");
  // ETA' INSERITA DALL'UTENTE
  // var anni = prompt("Inserisci la tua età");
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
    messaggio = alert("Hai diritto al 20% di sconto!!");
  // SCONTO OVER65
} else if (fasciaEta == "Over65") {
    sconto = (prezzoIntero * 40) / 100;
    messaggio = alert("Hai diritto al 40% di sconto!!");
  }
  // PREZZO SCONTATO
  var prezzoFinale = prezzoIntero - sconto;
  console.log(prezzoFinale);

  // document.getElementById("km").innerHTML = richiestaKm + " Km";
  //
  // document.getElementById("anni").innerHTML = anni + " Anni";
  //
  // document.getElementById("totale").innerHTML = prezzoArrotondato + " €";











  }
);
