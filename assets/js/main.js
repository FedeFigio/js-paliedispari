var parolaInseritaEl = document.getElementById("parolaInseritaEl")
var palindromoEl = document.getElementById("palindromoEl")

var inserisciParola = prompt("inserisci una parola ed io controllero se e palindroma")

parolaInseritaEl.innerHTML = "La parola che hai inserito è: " + inserisciParola

if (inserisciParola == invertiParola(inserisciParola)) {
    palindromoEl.innerHTML = "la parola che hai inserito è palindroma"
} else {
    palindromoEl.innerHTML = "la parola che hai inserito non è palindroma"
}

// FUNCTIONS
function invertiParola(parola) {
    var parolaInvertita = parola.split("").reverse().join("")
    return parolaInvertita;
}