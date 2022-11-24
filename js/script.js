/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

const dado = [1,2,3,4,5,6];

let user;

let browser;

let result;


for (let index = 0; index < 50; index++) {
    user = Math.floor(Math.random() * dado.length);
    browser = Math.floor(Math.random() * dado.length);

    if(dado[user] > dado[browser]){
        console.log(result = "L'utente ha vinto!", dado[user], dado[browser]);
    }else if(dado[user] < dado[browser]){
        console.log(result = "Il browser ha vinto!", dado[browser], dado[user]);
    }else{
        console.log(result = "Pareggio ;)", dado[browser], dado[user]);
    }
}


/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


const listaMail = [
    "mario@gmail.com",
    "simone@gmail.com",
    "stefano@gmail.com",
    "luca@gmail.com",
    "fabrizio@gmail.com",
    "giuseppe@gmail.com",
];

const mailElement = document.getElementById("mail");
const button = document.getElementById('pulsante');

button.addEventListener('click', function(){
    const mailUser = (mailElement.value);
    const result = document.querySelector('p');
    let mailFinder = false;

    for (let i = 0; i < listaMail.length; i++) {
        
        if (mailUser == (listaMail[i])){
            mailFinder= true;
        } 
    }

    if (mailFinder){
        result.innerHTML = "Ci sei!"
    } else {
        result.innerHTML = "non ci sei ;)"
    }

})


