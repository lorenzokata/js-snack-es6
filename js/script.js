// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [

    {
        nome : 'pinarello',
        peso : 2,
    },

    {
        nome : 'cross',
        peso : 5,
    },

    {
        nome : 'mountain',
        peso : 3,
    }
]

let {peso} = bici[0];

for (var i = 0; i < bici.length; i++) {
    

    if (bici[i].peso < minimo) {
        peso = bici[i].peso;
    }
    
}

console.log(peso);