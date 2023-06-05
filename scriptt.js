// Funkcijai ir jāveic viens uzdevums, jo tad tā spēs
// uzdevumu paveikt labi.
// 1. Refaktorē kodu - no zemāk redzamā koda izveido 4 funkcijas.
// 2. Tā kā refaktorēšana nedrīkst mainīt rezultātu,
// neaizmirsti izsaukt funkcijas.
// 3. Dokumentē katru no tām, izmantojot JSDoc
// 4. Izveido dokumentāciju!


saskaiti(4, 2);
atnemt(4, 2);
sareizinat(4, 4);
sadalit(4, 2);

const pirmaisSkaitlis = 5;
const otraisSkaitlis = 4;

const summa = pirmaisSkaitlis + otraisSkaitlis;
const starpiba = pirmaisSkaitlis - otraisSkaitlis;
const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
const dalijums = pirmaisSkaitlis / otraisSkaitlis;


/**
 * 
 * @param {Saskaita pirmo skaitli ar otru.} pirmaisSkaitlis 
 * @param {Saskaita pirmo skaitli ar otru.} otraisSkaitlis 
 */
function saskaiti (pirmaisSkaitlis , otraisSkaitlis){
    const summa = parseInt(pirmaisSkaitlis) + parseInt(otraisSkaitlis);
    console.log (pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
};

/**
 * 
 * @param {Nonem otrā skaitā summu no pirmā.} pirmaisSkaitlis 
 * @param {Nonem otrā skaitā summu no pirmā.} otraisSkaitlis 
 */
function atnemt (pirmaisSkaitlis , otraisSkaitlis){
    const starpiba = pirmaisSkaitlis - otraisSkaitlis;
    console.log (pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
};


/**
 * 
 * @param {Sareizina otro skaitli ar pirmā skaitļa summu.} pirmaisSkaitlis 
 * @param {Sareizina otro skaitli ar pirmā skaitļa summu.} otraisSkaitlis 
 */
function sareizinat (pirmaisSkaitlis , otraisSkaitlis){
    const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
    console.log (pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
};

/**
 * 
 * @param {Sadala pirmo skaitli ar otru.} pirmaisSkaitlis 
 * @param {Sadala pirmo skaitli ar otru.} otraisSkaitlis 
 */
function sadalit (pirmaisSkaitlis , otraisSkaitlis){
    const dalijums = pirmaisSkaitlis / otraisSkaitlis;
    console.log (pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
};




console.log(pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
console.log(pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
console.log(pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
console.log(pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
