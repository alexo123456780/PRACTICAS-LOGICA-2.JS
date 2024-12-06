const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const esPrimo = (numeros) =>{

    const numeroPrimo = (numero) =>{

        if(numero < 2){
            return false;
        }

        for(let i = 2 ; i <= Math.sqrt(numero); i++){

            if(numero % i === 0){

                return false;
            }

        }

        return true;


    }


    const losPrimos = numeros.filter((numero) => numeroPrimo(numero));

    return losPrimos.join('/');


};


console.log(`Los numeros Primos son: ${esPrimo(numeros)}`);