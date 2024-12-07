//Ejercicio de Calcular Factorial

let numero = 5;

const calcularFactorial = (numero) =>{
    let factorial = 1;
    try{

        if(numero < 0){
            throw new Error ('Error: No se puede calcular factoriales negativos, verifique numero');
        }


    }catch(error){

        console.log(error.message);
        return;

    }

    for(let i = 2 ; i <= numero; i++){

        factorial*= i;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);

}

calcularFactorial(numero);