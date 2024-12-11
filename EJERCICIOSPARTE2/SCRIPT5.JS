//Ejercicio de cadena alreves

const cadenaAlreves = (texto) =>{

    let textoLimpio;
    let caracteres;
    let invertir;

    textoLimpio = texto.toLowerCase().trim();

    caracteres = textoLimpio.split('');

    invertir = caracteres.reverse();

    return invertir.join('');

   

};


console.log(cadenaAlreves('Pedro'));