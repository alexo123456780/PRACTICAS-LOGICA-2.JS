class Tienda{

    static listaProductos = 
    [
        {producto:'Lapiz', precio: 30},
        {producto:'Borrador', precio: 10},
        {producto:'Tajador', precio: 5},
        {producto:'Libreta', precio: 45},
    ];

     mostrarProductos = () =>{ 
        console.log(`Articulos de la tienda`);
        console.log(`-------------`)

        Tienda.listaProductos.forEach((elemento,indice) =>{

            console.log(`Producto: ${elemento.producto} / Precio: ${elemento.precio} pesos`);

        });
     }

     comprarProductos = (opcion,monto) =>{

        const lapiz = Tienda.listaProductos.find((elemento) => elemento.producto === 'Lapiz');
        const borrador = Tienda.listaProductos.find((elemento1) =>elemento1.producto === 'Borrador')
        const tajador = Tienda.listaProductos.find((elemento2) => elemento2.producto === 'Tajador');
        const libreta = Tienda.listaProductos.find((elemento3) => elemento3.producto === 'Libreta');


        switch(opcion.toLowerCase()){

            case 'lapiz':
            
            console.log(`Lapiz`);
            console.log(`-------`)
            
            if(monto === lapiz.precio){

                console.log(`Compra realizada con exito de ${lapiz.precio} pesos`);
            }

            else if(monto < lapiz.precio){
                console.log(`Fondos Insuficientes costo de ${lapiz.precio} pesos`);
            }else{

                let compra = monto - lapiz.precio;
                console.log(`Compra realizada de ${lapiz.producto} cambio de ${compra} pesos`);
            }

            
            break;

            case 'borrador':

            console.log(`Borrador`);
            console.log(`-------`)
            
            if(monto === borrador.precio){
                console.log(`Compra realizada con exito de ${borrador.precio} pesos`);
            }

            else if(monto < borrador.precio){
                console.log(`Fondos Insuficientes costo de ${borrador.precio} pesos`);
            }

            else{

                let compra2 = monto - borrador.precio;

                console.log(`Compra realizada con exito cambio de ${compra2} pesos`);
            }
            break;

            case 'tajador':
    
            console.log(`Tajador`);
            console.log(`------`);    
            
            if(monto === tajador.precio){
                console.log(`Compra realizada con exito`);
            }else if(monto < tajador.precio){
                console.log(`Fondos Insuficientes`);
            }else{
                let compra3 = monto - tajador.precio;
                console.log(`Compra realizada con exito cambio de ${compra3} pesos`);
            }

            break;

            case 'libreta':

            console.log(`Libreta`);
            console.log(`---------`);
            
            if(monto === libreta.precio){
                console.log(`Compra realizada con exito`);
            }else if(monto < libreta.precio){
                console.log(`Fondos Insuficientes`);
            }else{
                let compra4 = monto - libreta.precio;
                console.log(`Compra realizada con exito cambio ${compra4} pesos`);
            }

            break;

            default:
            console.log(`Error: Articulo no disponible en el inventario`);
            break;    

        }
        }
     }








const tienda = new Tienda();

const comprarProductos = (opcion,monto) =>{

    let comprado = tienda.comprarProductos(opcion,monto);

    return comprado;

}

const mostrarProductos = () =>{

    let devolverArticulos = tienda.mostrarProductos();

    return devolverArticulos;

}

mostrarProductos();

comprarProductos('Borrador',100)