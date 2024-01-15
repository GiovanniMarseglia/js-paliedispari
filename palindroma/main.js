// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



let check = Array.from(prompt("inserisci un nome e ti dirò se è palindroma o meno"))

let nome2 = palindroma(check)

console.log(nome2)


function palindroma(nome){

    for(let i=0;i < nome.length;i++){
        if(nome[i]==nome[nome.length-1-i]){
            
             if((nome[i]==nome[nome.length-1-i]) && ((i==nome.length-1) && (nome.length-1-i==0))){
                 return "la parola è palindorma"
                 
             }
             
        }else{
            return "la parola non è palindroma"
        }

        
    }
}
    



