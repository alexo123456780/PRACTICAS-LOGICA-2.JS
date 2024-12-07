//Calculadora Basica Falta mas modificaciones

const calculateNumber = (option,value1,value2) =>{

    let resultado;

    try{

        if(typeof option !== 'string'){

            throw new Error ('Error: Solo puedes Ingresar texto');
        }

        if(option.trim() === ''){
            throw new Error ('Error: No dejes espacios vacios en la opcion');
        }

        

    }catch(error){
        console.log(error.message);
        return;
    }

    switch(option.toLowerCase()){

    case 'suma':
    resultado = value1 + value2;
    console.log(`${option}  ${value1} + ${value2} = ${resultado}`);
    break;
    
    case 'resta':
    resultado = value1 - value2;
    console.log(`${option} ${value1} - ${value2} = ${resultado}`);
    break;

    case 'multiplicar':
    resultado = value1 * value2;
    console.log(`${option} ${value1} * ${value2} = ${resultado}`);
    break;

    case 'dividir':
    resultado = value1 / value2;

    try{

        if(value1 === 0 || value2 === 0){

            throw new Error('Error: No se puede dividir entre 0 verifique los numeros');
        }

    }catch(error){
        console.log(error.message);
        return;
    }


    console.log(`${option} ${value1} / ${value2} = ${resultado}`);
    break;

    default:
    console.log('Opcion no valida');
    break;    

    }

}


calculateNumber(10023,100,100);