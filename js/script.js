// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bici = [

//     {
//         nome : 'Pinarello',
//         peso : 10,
//     },

//     {
//         nome : 'Cross',
//         peso : 5,
//     },

//     {
//         nome : 'Mountain',
//         peso : 3,
//     }
// ]

// let {nome,peso} = bici[0];

// for (var i = 0; i < bici.length; i++) {

//     if (bici[i].peso < peso) {
//         peso = bici[i].peso;
//         nome = bici[i].nome;
//     }
    
// }

// console.log(`La bici ${nome} é la piú leggera con soli ${peso}kg`);


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.


let squadre = [
    {
        nome : 'Lakers',
        puntiFatti : 0,
        puntiSubiti : 0,
    },
    {
        nome : 'Brooklyn',
        puntiFatti : 0,
        puntiSubiti : 0,
    },
    {
        nome : 'Suns',
        puntiFatti : 0,
        puntiSubiti : 0,
    }
];

let random = () => Math.floor(Math.random() * 101);
const newSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    
    squadre[i].puntiFatti, squadre[i].puntiSubiti = random();

    let {nome,puntiSubiti} = squadre[i];
    
    newSquadre.push({nome : nome, puntiSubiti : puntiSubiti});
    
};

console.log(newSquadre);