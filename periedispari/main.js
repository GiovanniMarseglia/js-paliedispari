// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let numero=0
let scelta
for(let i=0;numero == 0 || numero > 5;i++){
 numero = +prompt("inserisci un numero da 1 a 5")
 scelta = prompt("scegli pari o dispari")
}


function randomnum(){
    let random = Math.floor(Math.random()*(6-1)+1)
    return random
}


let computer = randomnum()
console.log(computer)


let somma = numero + computer
console.log(somma)



let risultato = pariodispari(somma)
if(scelta==risultato){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}
console.log(risultato)


function pariodispari(numero){

    if((numero % 2) == 0){
        return "pari"
    }else{
        return "dispari"
    }
}



