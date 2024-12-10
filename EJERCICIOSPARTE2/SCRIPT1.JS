/*Ejercicio de contar vocales;
const contarVocales = (texto) =>{

    const vocales  = ['a','e','i','o','u'];

    let textoNuevo = texto.toLowerCase().trim();

    let contador = 0;

    for(let elemento of textoNuevo){

        if(vocales.includes(elemento)){
            contador++
        }
    }

    console.log(`${texto} tiene ${contador} vocales`);

}

contarVocales('Alejandro');

*/


/*const contarVocales = (texto) =>{

    const vocales = ['a','e','i','o','u'];

    let contador = 0;


    let textoLimpio = texto.toLowerCase().trim();

    for(let elemento of textoLimpio){

        if(vocales.includes(elemento)){

            contador++;
        }
    }

    console.log(`${texto} tiene ${contador} vocales`);
}

contarVocales('Alex');*/




const contadordeVocales = (texto) =>{

    const vocales = ['a','e','i','o','u'];

    let textoValidado = texto.toLowerCase().trim();

    let resultado = 0;

    for(let i = 0 ; i <= textoValidado.length; i++){

        if(vocales.includes(textoValidado[i])){

            resultado++;
   
        }

    }

    console.log(`${texto} tiene ${resultado} vocales`);

}

contadordeVocales('Ofelia');









