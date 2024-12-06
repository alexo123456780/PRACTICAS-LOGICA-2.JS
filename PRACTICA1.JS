let valor1 = 30;
let valor2 = 100;

const numeroMayor = (valor1,valor2) =>{

    let esMayor;

    if(valor1 > valor2){

        esMayor = `${valor1} es mayor a ${valor2}`;

    }else if(valor2 > valor1){

        esMayor = `${valor2} es mayor a ${valor1}`;
    }else{

        esMayor = `${valor1} y ${valor2} son iguales`;

    }

    return esMayor;


};

console.log(numeroMayor(valor1,valor2));
