const inpntarea = document.getElementById('tarea');

const btnAgregarTarea = document.getElementById('agregar');

const lista = document.getElementById('mi-lista');

const contenedor = document.getElementById('conteiner');


const tareasListas = [];

const crearTitulo =document.createElement('h3');

crearTitulo.textContent = `Lista de tareas`;

contenedor.prepend(crearTitulo);




const tareas = () =>{

    lista.innerHTML = '';

    tareasListas.forEach((elemento,indice) =>{

    let crearLista = document.createElement('li');

    crearLista.textContent = `${indice+1} : ${elemento}`;

    lista.appendChild(crearLista);

    contenedor.appendChild(crearTitulo);

    });

}

const agregartodaslasTareas = () =>{

    let tareaLimpia = inpntarea.value.trim();

    if(tareaLimpia){

        tareasListas.push(tareaLimpia);
        tareas();

    }

    inpntarea.value = '';

}


btnAgregarTarea.addEventListener('click',agregartodaslasTareas);














