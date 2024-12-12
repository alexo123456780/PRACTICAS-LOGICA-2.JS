// Seleccionar elementos del DOM
const inpntarea = document.getElementById('tarea');
const btnAgregarTarea = document.getElementById('agregar');
const lista = document.getElementById('mi-lista');

// Arreglo para almacenar las tareas
const tareasListas = [];

// Función para renderizar las tareas
const tareas = () => {
    lista.innerHTML = ''; // Limpiar la lista antes de renderizar
    tareasListas.forEach((elemento, indice) => {
        const crearLista = document.createElement('li');
        crearLista.textContent = `${indice + 1} : ${elemento}`;
        lista.appendChild(crearLista); // Agregar la tarea como un elemento <li>
    });
};

// Función para agregar una nueva tarea
const agregartodaslasTareas = () => {
    const tareaLimpia = inpntarea.value.trim(); // Eliminar espacios innecesarios
    if (tareaLimpia) {
        tareasListas.push(tareaLimpia); // Agregar la tarea al arreglo
        tareas(); // Renderizar las tareas nuevamente
    }
    inpntarea.value = ''; // Limpiar el campo de texto
};

// Escuchar el clic del botón
btnAgregarTarea.addEventListener('click', agregartodaslasTareas);

// Escuchar el evento Enter en el campo de texto
inpntarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregartodaslasTareas();
    }
});
