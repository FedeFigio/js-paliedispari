// PALINDROMO

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




// PARI E DISPARI

// utente sceglie se pari o dispari
var inserisciPariDispariEl = document.getElementById("inserisciPariDispari")
var inserisciPariDispari = prompt("scegli tra pari / dispari")

// utente sceglie un numero
var inserisciNumeroEl = parseInt(prompt("inserisci un numero"))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
var randomUnoCinque = parseInt(numeroRandom(1, 5))

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

switch (inserisciPariDispari) {
    case "pari":
        inserisciPariDispariEl.innerHTML = "il numero che hai scelto è il: " + inserisciNumeroEl + " io ho scelto il " + randomUnoCinque + funcSommaNumeri(randomUnoCinque, inserisciNumeroEl)

        break;
    case "dispari":
        inserisciPariDispariEl.innerHTML = "il numero che hai scelto è il: " + inserisciNumeroEl + " io ho scelto il " + randomUnoCinque + funcSommaNumeri(randomUnoCinque, inserisciNumeroEl)

        break;
    default:

        break;
}

// FUNCTIONS
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function funcSommaNumeri(num1, num2) {

    var somma = num1 + num2

    if ((inserisciPariDispari == "pari") && (somma % 2 == 0)) {

        return " la somma è pari: hai vinto "
    } else if ((inserisciPariDispari == "dispari") && (somma % 2 == 1)) {

        return " la somma è dispari: hai vinto "
    }
}