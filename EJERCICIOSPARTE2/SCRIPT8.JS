class Banco {

    #saldo;

    constructor(saldoInicial){

        this.#saldo = saldoInicial;

    }


    consultarSaldo(){

        return this.#saldo;

    }

    retirarDinero(monto){

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

}




movimientoBancario('retiro',500)
movimientoBancario('deposito',100);





