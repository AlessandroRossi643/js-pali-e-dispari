// Inserimento parola dall'utente
var parola = prompt("Inserisci parola:");

// Si divide la parola in tante lettere con SPLIT
var divlettere = parola.split("");

// Utilizzando il REVERSE, si analizza la parola partendo dal fondo
var contrario = divlettere.reverse();

// Si riunisce nuovamente le lettere in unica stringa con JOIN
var palindroma = contrario.join("");

// Verifica della parola: Palindroma o no?!
if (parola === palindroma) {
  document.writeln("La parola da te inserita è palindroma: " + parola);
} else {
  document.writeln("La parola da te inserita non è palindroma: " + parola)
}
