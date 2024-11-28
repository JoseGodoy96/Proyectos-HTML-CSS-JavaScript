let nombre = "Jose";
let apellidos = "Godoy";
let edad = 28;
let pais = "España";
let conocimientos = ["HTML", "CSS", "JavaScript", "React"];

/* Peuede ponerse de esta forma
console.log (
    "Hola soy " + nombre
);
*/
console.log (
`Hola soy ${nombre} ${apellidos} tengo ${edad} años, vivo en ${pais} y tengo los siguientes conocimientos: ${conocimientos[0]}, ${conocimientos[1]}, ${conocimientos[2]}, ${conocimientos[3]} `);

edad = 67;
conocimientos.push("PHP");

console.log("Ahora tengo "+ edad + " años y he aprendido " + conocimientos[4]);