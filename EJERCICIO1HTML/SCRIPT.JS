let valor1 = document.getElementById('input1');
let valor2 = document.getElementById('input2');

let seleccionarOperacion = document.getElementById('selector');

let botonEnviar = document.getElementById('calcular');

const container = document.getElementById('resultado');


const resolver = () =>{

    let value1 = parseFloat(valor1.value);
    let value2 = parseFloat(valor2.value);

    let resultado;

    switch(seleccionarOperacion.value){

        case 'suma':
        resultado = value1 + value2;
        break;
        
        case 'resta':
        resultado = value1 - value2;
        break;
        
        case 'multiplicar':
        resultado = value1 * value2;
        break;
        
        case 'dividir':
        resultado = value1 / value2;
        break;
        
        default:
        alert('Opcion no valida');
        break;    
    }

    container.innerHTML = `El resultado es: ${resultado}`;

}


botonEnviar.addEventListener('click',resolver);



