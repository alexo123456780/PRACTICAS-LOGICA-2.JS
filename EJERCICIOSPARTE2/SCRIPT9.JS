class Estudiantes{

    static lista = [];


    constructor(alumno,matricula){

        this.alumno = alumno;
        this.matricula = matricula;

    }


    registrar = () =>{

        Estudiantes.lista.push(
            {alumno: this.alumno,matricula: this.matricula}
        );

        console.log(`Estudiante ${this.alumno} con Matricula ${this.matricula} ha sido registrado exitosamente`);

    }

    static mostrarEstudiantes = () =>{

        Estudiantes.lista.forEach((elemento) =>{

            console.log(`Alumno: ${elemento.alumno} Matricula: ${elemento.matricula}`)

        });

    }

}

class Calificaciones extends Estudiantes{

    static lista = [];

    constructor(alumno,matricula,...calificaciones){

        super(alumno,matricula);
        this.calificaciones = calificaciones;
    
    }


    agregarCalificaciones = () =>{

        Estudiantes.lista.push({alumno: this.alumno , matricula: this.matricula , calificaciones: this.calificaciones});

        console.log(`Calificaciones agregadas correctamente`);
    }

    sacarPromedio = () =>{

       const suma = this.calificaciones.reduce((a,b) => a + b , 0);

       let promedioFinal = suma/this.calificaciones.length;

       return promedioFinal.toFixed(1);

    }

}




const registrado = (alumno,matricula) =>{

    const escuela = new Estudiantes(alumno,matricula);

    const registrarAlumnoA = escuela.registrar();


    return registrarAlumnoA;

}

const generarPromedio = (alumno,matricula,...calificaciones) =>{

    const calificado = new Calificaciones(alumno,matricula,...calificaciones);

    calificado.agregarCalificaciones();

   const calificacionParcial = calificado.sacarPromedio();

  console.log(`El promedio es de: ${calificacionParcial}`);

    

}


generarPromedio('Alejandro',23090646,10,10,10,10);















