// Funkcijai ir jāveic viens uzdevums, jo tad tā spēs
// uzdevumu paveikt labi.
// 1. Refaktorē kodu - no zemāk redzamā koda izveido 4 funkcijas.
// 2. Tā kā refaktorēšana nedrīkst mainīt rezultātu,
// neaizmirsti izsaukt funkcijas.
// 3. Dokumentē katru no tām, izmantojot JSDoc
// 4. Izveido dokumentāciju!






/**
 * saskaitīšanas funkcija
 * @param {int} pirmaisSkaitlis - skaitlis kuru funkcija saskaitīs ar otru skaitli.
 * @param {int} otraisSkaitlis - skaitlis kuru funkcija saskaitīs ar otro skaitli.
 * @param {int} summa - skaitlis kur saglabās abu skaitļu summu.
 */

function summa(pirmaisSkaitlis,otraisSkaitlis){
    const summa = pirmaisSkaitlis + otraisSkaitlis;
    console.log(pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
}

/**
 * starpība funkcija
 * @param {int} pirmaisSkaitlis - atņemamais.
 * @param {int} otraisSkaitlis - atņēmējs
 * @param {int} starpība - skaitlis kur saglabās abu skaitļu starpību.
 */

function starpiba(pirmaisSkaitlis,otraisSkaitlis){
    const starpiba = pirmaisSkaitlis - otraisSkaitlis;
    console.log(pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
}

/**
 * reizināšanas funkcija
 * @param {int} pirmaisSkaitlis reizināmais.
 * @param {int} otraisSkaitlis - reizinātājs.
 * @param {int} reizinajums - skaitlis kur saglabās abu skaitļu reizinājumu.
 */

function reizinajums(pirmaisSkaitlis,otraisSkaitlis) {
    const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
    console.log(pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
}

/**
 * dalīšanas funkcija
 * @param {int} pirmaisSkaitlis - dalāmais.
 * @param {int} otraisSkaitlis - dalītājs.
 * @param {int} dalijums - skaitlis kur saglabās abu skaitļu dalijumu.
 */

function dalijums(pirmaisSkaitlis,otraisSkaitlis){
    const dalijums = pirmaisSkaitlis / otraisSkaitlis;
    console.log(pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
}


summa(6,2);
starpiba(6,2);
reizinajums(6,2);
dalijums(6,2);
