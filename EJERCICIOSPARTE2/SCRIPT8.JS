class Banco {

    #saldo;

    constructor(saldoInicial){

        this.#saldo = saldoInicial;

        if(this.#saldo <= 0){
            throw new Error (`Error: No se puede poner numeros negativos`)
        }

    }


    consultarSaldo(){

        return this.#saldo;

    }

    retirarDinero(monto){

        if(monto > this.#saldo){

            throw new Error (`Error: No cuentas con el saldo suficiente`);
        }

        if(monto <= 0){
            throw new Error (`Error: Saldo negativo o nulo`);
        }

        let retiro = this.#saldo -= monto;

        return retiro;
    }


    depositarDinero(monto){

        let depositar = this.#saldo += monto;

        return depositar;

    }


}


const banco = new Banco (3500);

const movimientoBancario = (opcion,monto) =>{


    try{

        let resultado;

        switch(opcion.toLowerCase()){

        case 'consulta':
        resultado = banco.consultarSaldo();
        console.log(`El saldo es de: ${resultado} pesos`);
        break;
        
        case 'retiro':
        resultado = banco.retirarDinero(monto);
        console.log(`El saldo es de : ${resultado} pesos`);
        break;
        
        case 'deposito':
        resultado = banco.depositarDinero(monto);
        console.log(`El saldo es de ${resultado} pesos`);
        break;
        
        default:
        console.log(`Opcion no valida`);
        break;
    }

    }catch(error){
        console.log(error.message);
    }

    

}

movimientoBancario('retiro',-567);




