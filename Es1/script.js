// Inserimento parola dall'utente
var parola = prompt("Inserisci parola:");

//Verifica della parola: Palindroma o no?!
var divlettere = parola.split("");
var contrario = divlettere.reverse();
var palindroma = contrario.join("");

if (parola === palindroma) {
  document.writeln("La parola da te inserita è palindroma: " + parola);
} else {
  document.writeln("La parola da te inserita non è palindroma: " + parola)
}
