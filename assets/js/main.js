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

const promptMail = prompt("Inserisci la tua email", "mail00@mail.com");

for (let i = 0; i < mailList.length; i++) {

    if(mailList[i] === promptMail) {

    console.log(`${promptMail} è presente allindice ${i}`);
    break;

} 

    else {
    console.log(`${promptMail} non è presente all'indice ${i} (${mailList[i]})`);

}

}

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
mailCheckText.classList.add("text-center", "mt-2");

//inserisco nell'h1 un testo placeholder
mailCheckText.append("Enter a mail adress to check if it is in the list.");

//inserisco l'h1 nel suo div container
mailCheckContainer.append(mailCheckText);

//seleziono il bottone usando una variabile
const mailCheck = document.getElementById("mailCheck");

// aggiungo un listener al click del bottone
mailCheck.addEventListener("submit", function(e) 
{

    e.preventDefault();

    //do a userMail il valore del campo input "email"
    const userMail = document.getElementById("userMail").value;

    if (mailList.includes(`${userMail}`))
{

    // //se la mail inserita è in lista viene mostrato un messaggio di esito positivo
    mailCheckText.classList.remove("text-danger");
    mailCheckText.classList.add("text-success");
    mailCheckText.innerHTML = `The adress "${userMail}" is in the list.`;

} 

else {
    //se la mail inserita non è in lista viene mostrato un messaggio di esito negativo

    mailCheckText.classList.remove("text-success");
    mailCheckText.classList.add("text-danger");
    mailCheckText.innerHTML = `WARNING: "${userMail}" in not a valid e-mail adress.`;

}

}

)

mailCheck.addEventListener("reset", function ()
{
    mailCheckText.classList.remove("text-danger");
    mailCheckText.classList.remove("text-success");
    mailCheckText.innerHTML = "Enter a mail adress to check if it is in the list.";
}

)
