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
    messaggio = ("SCONTO UNDER 18");
    document.getElementById("offerta").innerHTML = messaggio;

  // SCONTO OVER65
} else if (fasciaEta == "Over65") {
    sconto = (prezzoIntero * 40) / 100;
    messaggio = ("SCONTO OVER 65");
    document.getElementById("offerta").innerHTML = messaggio;
  } else {
    messaggio = ("TARIFFA INTERA")
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














  }
);
