const generarFibonazzi = (valor) =>{

    if(valor < 1){

        return ['Hijole mano no pongas numeros asi'].join('')
    }

    const fibonazzi = [0,1];

    while(true){

        const siguienteNumero = fibonazzi[fibonazzi.length -1] + fibonazzi[fibonazzi.length - 2];

        if(siguienteNumero > valor){
            break;
        }


        fibonazzi.push(siguienteNumero);

    }

    return fibonazzi.join('-');

}


console.log(generarFibonazzi(1000010101010101010101010101010100101010101010100101010101010101));