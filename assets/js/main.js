/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* ----------METODO 1 ---------- */

/* const userDice = Math.floor((Math.random() * 6) + 1);
console.log(`TIRO UTENTE = ${userDice}`);

const computerDice = Math.floor((Math.random() * 6) + 1);
console.log(`TIRO DELLA MACCHINA = ${computerDice}`);

if (userDice > computerDice) {
    console.log("User wins");
} 

else if (userDice < computerDice) {
    console.log("Machine wins");
} 

else {
    console.log("Tie");
} */

/* ----------METODO 2 ---------- */

// I numeri vengono recuperati randomicamente da un array

const diceNumbers = [1, 2, 3, 4, 5, 6];

const userDice = diceNumbers[Math.floor((Math.random() * diceNumbers.length))];
console.log(`TIRO UTENTE = ${userDice}`);

const computerDice = diceNumbers[Math.floor((Math.random() * diceNumbers.length))];
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

// const userMail = prompt("Inserisci la tua email");

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
/* if (mailList.includes(`${userMail}`))
{
    alert(`"${userMail}" è un indirizzo valido`)
} 

else {
    alert(`ATTENZIONE: "${userMail}" non è un indirizzo valido`)
} */


/* Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */

//Seleziono il div che conterrà il testo del check
const mailCheckContainer = document.querySelector(".mailCheckContainer");

//Creo l'h1 che diverrà il testo del check
const mailCheckText = document.createElement("h1");

//inserisco nell'h1 un testo placeholder
mailCheckText.append("Enter a mail adress to check if it is in the list.");

//inserisco l'h1 nel suo div container
mailCheckContainer.append(mailCheckText);

//seleziono il bottone usando una variabile
const mailCheckBtn = document.getElementById("mailCheck");

// aggiungo un listener al click del bottone
mailCheckBtn.addEventListener("click", function() 
{
    //do a userMail il valore del campo input "email"
    userMail = document.getElementById("userMail").value;
    console.log(userMail);

    if (mailList.includes(`${userMail}`))
{

    // //se la mail inserita è in lista viene mostrato un messaggio di esito positivo

    mailCheckText.innerHTML = `The adress "${userMail}" in on the list.`;

} 

else {
    //se la mail inserita non è in lista viene mostrato un messaggio di esito negativo

    mailCheckText.innerHTML = `WARNING: "${userMail}" in not a valid e-mail adress.`;

}
})




