// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



let check = Array.from(prompt("inserisci un nome e ti dirò se è palindroma o meno"))

let nome = palindroma(check)

console.log(nome)


function palindroma(nome){

    

    for(let i=0;i < parseInt(nome.length/2);i++){

        if(nome[i]==nome[nome.length-1-i]){

            console.log(nome[i])

             if(i == parseInt(nome.length/2)-1){

                 return "la parola è palindorma"
                 
             }
             
             
             
        }else{
            return "la parola non è palindroma"
        }

        
    }
}
    


