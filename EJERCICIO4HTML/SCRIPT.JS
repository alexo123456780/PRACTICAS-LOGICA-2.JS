const formulario = document.getElementById('formulario-contacto');

const usuario = document.getElementById('id-nombre');

const password = document.getElementById('id-password');

const correo = document.getElementById('id-correo');



const mostrarError = (mensaje) =>{

    alert(mensaje);
}


const validarNombre = (nombre) =>{

    if(nombre.trim()=== ''){

        mostrarError('Error: No dejes el campo de nombre vacio');
        return false
    }

    return true;

}


const validarCorreo = (gmail) =>{

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(gmail)){

        mostrarError('Error: correo electronico no es valido');
        return false
    }


    return true;

}


const validarPassword = (contrasena) =>{

    if(contrasena.length < 8){

        mostrarError('Error: Password maximo de 8 digitos');
        return false;


    }

    return true;

}


formulario.addEventListener('submit' ,(e) =>{

    e.preventDefault(); //Evitamos que se envie el formulario automaticamente

    const nombre = usuario.value;
    const gmail = correo.value;
    const contrasena = password.value;

    const nombrevalidado = validarNombre(nombre);
    const correoValidado = validarCorreo(gmail);
    const passwordValidado = validarPassword(contrasena);


    if(nombrevalidado && correoValidado && passwordValidado){

        alert(`Formulario enviado con exito`);
    }

})








