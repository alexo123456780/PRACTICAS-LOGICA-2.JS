let contador = document.getElementById('contador');

const botonIncrementar = document.getElementById('incrementar');
const resetearCuenta = document.getElementById('borrar');

let cuenta = 0;

botonIncrementar.addEventListener('click',() =>{

    cuenta++;

    contador.textContent = cuenta;

});

resetearCuenta.addEventListener('click',() =>{

    cuenta = 0;

    contador.textContent = cuenta;

});

