//Suma y promedio con bucle for

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


console.log(calcularMedia(numeros));