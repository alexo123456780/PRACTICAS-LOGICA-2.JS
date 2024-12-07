/*Suma y promedio con bucle for

const numeros = [10,20,50,70,100,20];

let suma = 0;

const calcularMedia = (numeros) =>{

    for(let parametro of numeros){

        suma+=parametro;

    }


    let media = suma/numeros.length;

    let resultado = suma;

    return `La media es de ${media} y la suma es de ${resultado}`;

};


console.log(calcularMedia(numeros));*/


//Lo mismo pero con la funcion de reduce


const numeros = [10,40,35,100,300,500];

const calcularMedia2 = (numeros) =>{

    let promedio;

    let suma = numeros.reduce((a,b) => a + b , 0);

    promedio = suma/numeros.length;

    return promedio.toFixed(2);

};

console.log(`El promedio es de: ${calcularMedia2(numeros)}`);