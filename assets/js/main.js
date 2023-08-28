const mailList = ["mail00@mail.com", "mail01@mail.com", "mail02@mail.com", "mail03@mail.com", "mail04@mail.com"]

console.log(mailList);

const userMail = prompt("Inserisci la tua email");


//indexOf() -> Se mailList ha un index maggiore o uguale a zero contenente usermail da un allerta valido
/* if (mailList.indexOf(`${userMail}`) >= 0)
{
    alert("ok")
} 

else {
    alert("no")
} */

//includes() -> Se mailList include userMail...
if (mailList.includes(`${userMail}`))
{
    alert(`"${userMail}" è un indirizzo valido`)
} 

else {
    alert(`ATTENZIONE: "${userMail}" non è un indirizzo valido`)
}