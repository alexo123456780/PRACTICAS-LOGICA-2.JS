let inicio = 20;
let fin = 40;

const numerosImpares = (inicio,fin) =>{

    let resultadoImpar = [];

    for(let i = inicio; i<= fin ; i++){

        if(i % 2 !== 0){

            resultadoImpar.push(i);

        }
    }


    return resultadoImpar.join('-')

}

console.log(`Los numeros impares son: ${numerosImpares(inicio,fin)}`);

