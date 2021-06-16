// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [

    {
        nome : 'Pinarello',
        peso : 2,
    },

    {
        nome : 'Cross',
        peso : 5,
    },

    {
        nome : 'Mountain',
        peso : 3,
    }
]

let {nome,peso} = bici[0];

for (var i = 0; i < bici.length; i++) {
    

    if (bici[i].peso < peso) {
        peso = bici[i].peso;
        nome = bici[i].nome;
    }
    
}

console.log(`La bici ${nome} é la piú leggera con soli ${peso}kg`);