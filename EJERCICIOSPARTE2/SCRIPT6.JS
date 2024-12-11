const ordenarArreglo = (...numeros) =>{

    const numerosDesendentes = numeros.sort((a,b) => a - b);

    return numerosDesendentes.join('-');

}

console.log(`Numeros descendentes: ${ordenarArreglo(10,20,40,100,500)}`);

