/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

let NumeroKm = parseInt(prompt("Quanti km vuoi percorrere?"));

let Età = parseInt(prompt("Quanti anni hai?"));

let PrezzoalKm = 0.21;

let PrezzoPartenza = (NumeroKm * PrezzoalKm);

console.log("Prezzo di base: " + PrezzoPartenza);

let PrezzoFinale;

if (Età < 18) {
    PrezzoFinale = PrezzoPartenza - PrezzoPartenza / 100 * 20;
    console.log("Prezzo Finale: " + PrezzoFinale.toFixed(2));
}

else if (Età > 65) {
    PrezzoFinale = PrezzoPartenza - PrezzoPartenza / 100 * 40;
    console.log("Prezzo Finale: " + PrezzoFinale.toFixed(2));
}
