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

