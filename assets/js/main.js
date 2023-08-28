/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

userDice = Math.floor((Math.random() * 6) + 1);
console.log(`TIRO UTENTE = ${userDice}`);

computerDice = Math.floor((Math.random() * 6) + 1);
console.log(`TIRO DELLA MACCHINA = ${computerDice}`);

if (userDice > computerDice) {
    console.log("User wins");
} 

else if (userDice < computerDice) {
    console.log("Machine wins");
} 

else {
    console.log("Tie");
}

/* Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */

const mailList = ["mail00@mail.com", "mail01@mail.com", "mail02@mail.com", "mail03@mail.com", "mail04@mail.com"]

const userMail = prompt("Inserisci la tua email");

/* ----------METODO 1 ---------- */

//indexOf() -> Se mailList ha un index maggiore o uguale a zero contenente usermail da un allerta valido
/* if (mailList.indexOf(`${userMail}`) >= 0)
{
    alert("ok")
} 

else {
    alert("no")
} */

/* ----------METODO 2 ---------- */

//includes() -> Se mailList include userMail...
if (mailList.includes(`${userMail}`))
{
    alert(`"${userMail}" è un indirizzo valido`)
} 

else {
    alert(`ATTENZIONE: "${userMail}" non è un indirizzo valido`)
}
