// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



let check = Array.from(prompt("inserisci un nome e ti dirò se è palindroma o meno"))

let nome2 = palindroma(check)

console.log(nome2)


function palindroma(nome){

    let b = nome.length-1;

    for(let i=0;i < nome.length;i++){
        if(nome[i]==nome[b]){
             if((nome[i]==nome[b]) && ((i==nome.length-1) && (b==0))){
                 return "la parola è palindorma"
             }
            b--
        }else{
            return "la parola non è palindroma"
        }

        
    }
}
    



