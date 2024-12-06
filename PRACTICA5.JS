let numero = 10;

const mostrarDivisores = (numero) =>{

    let resultado = [];

    for(let i = 1 ; i<= numero ; i++){

        if(numero % i === 0){

            resultado.push(i);
        }
    }

    return resultado.join('/')

}

console.log(`Los divisores de ${numero} son: ${mostrarDivisores(numero)}`);