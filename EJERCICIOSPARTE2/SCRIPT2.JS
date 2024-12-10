const multiplodeTres = (...valores) =>{

    try{

        if(valores.some((elemento) => typeof elemento !== 'number' || elemento === " ")){

            throw new Error ('Error: Ingrese datos numericos, revise los datos porfavor');
        }

        if(valores.length === 0){

            throw new Error ('Error: Ingrese datos numericos');
        }


    }catch(error){
        console.log(error.message);
        return
    }

    const resultado = valores.filter((elemento) => elemento % 3 === 0);

    console.log(`Multiplos de 3: ${resultado.join('-')}`);

}

multiplodeTres(10,10,8,9,7);