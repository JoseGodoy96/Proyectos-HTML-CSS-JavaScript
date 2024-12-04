let frase = "Este curso tiene muchos proyectos web";

let palabra = prompt(`En esta frase: ${frase} ¿que palabra querrias reemplazar`);
let reemplazo = prompt(`Has elegido reemplazar la palabra ${palabra} ¿por que palabra la quieres reemplazar?`);

function reemplazar(palabraOriginal, palabraReemplazo) {

    let busqueda = frase.search(palabraOriginal);
    let fraseFinal = frase;

    if (busqueda && busqueda != -1) {

        fraseFinal = frase.replace(palabraOriginal, palabraReemplazo);

    } else {

        fraseFinal = "Esa palabra no existe";

    }

    return fraseFinal;
}

alert(reemplazar(palabra, reemplazo));