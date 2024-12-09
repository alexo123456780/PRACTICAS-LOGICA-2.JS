//Ejercicio de contar vocales;
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




