const sumadeDigitos = (valor) =>{

    let suma = 0;

    const digitos = valor.toString();

    for(let i = 0 ; i < digitos.length; i++){

        suma+= parseInt(digitos[i]);

    }

    console.log(`El resultado de la suma es: ${suma}`);

}


sumadeDigitos(12345678910);