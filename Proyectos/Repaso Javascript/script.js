// Alertas
alert('Hola soy jose maria');

//variables
let nombre = 'jose maria';

//mostrar en consola
console.log(nombre)

//constantes
const altura = 187;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenacion
let concatenacion = nombre + " " + altura;

// Seleccionar elementos de la pagina
let datos = document.querySelector('#datos');
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es : ${concatenacion}</h2>
`;

//Condiciones

if(altura >= 185) {
    datos.innerHTML += '<h1>Eres una persona alta</h1>'
} else {
    datos.innerHTML += '<h1>Eres una persona bajita</h1>'
}

//Bucles
for(let year = 200; year <= 2023; year++) {
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

//Arrays
let nombres = ['Victor', 'Francisco', 'Pepe'];

let divNombres = document.querySelector('#nombres');

divNombres.innerHTML = nombres[2];

// Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es : ${concatenacion}</h2>
`;
    return misDatos
};

const imprimir = () => {
    let datos = document.querySelector('#datos');
    datos.innerHTML = miInformacion('Jose maria', 187);
}