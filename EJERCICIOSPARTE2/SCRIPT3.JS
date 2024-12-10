/*let resultado;

const maximodeNumeros = (valor1,valor2) =>{

    if(valor1 === valor2){
        return `${valor1} es igual a ${valor2}`;
    }

    return resultado = valor1 > valor2 ? `${valor1} es mayor a ${valor2}` : `${valor2} es mayor a ${valor1}`;

}

console.log(maximodeNumeros(50,30));*/


const maximodeNumeros = (...valores) =>{

    let esMayor = valores[0];

    for(let i = 1 ; i < valores.length; i++){

        if(esMayor < valores[i]){

            esMayor = valores[i];

        }

    }

    console.log(`El numero mayor es: ${esMayor}`);

}


maximodeNumeros(4000,500,30,1000,1000000);

