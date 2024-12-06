let inicio = 10;
let fin = 40;

const mostrarConsecutivos = (inicio,fin) =>{

    let resultado = [];

    for(let i = inicio; i <= fin; i++){

        resultado.push(i);

    };

    return resultado.join('-');

}

console.log(mostrarConsecutivos(inicio,fin));