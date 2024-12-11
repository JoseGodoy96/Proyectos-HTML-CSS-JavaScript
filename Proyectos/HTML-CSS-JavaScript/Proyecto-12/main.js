let animales = ["perro", "gato", "tigre", "mapache", "delfin"];

const recorrerMostrar = () => {
    document.write("<h1>Proyecto 12 JA - JOSE MARIA</h1>");
    /* 
    for es una estructura de control en programación en la que se puede indicar de antemano el número máximo de iteraciones basicamente lo que ocurre en este buble es que i vale 0 por lo tanto se posiciona en perro < que animales.length que lo que hace es recorrer el array; i++ lo que hace es sumar de uno en uno por lo tanto creara la impresion

    for(let i = 0; i < animales.length; i++){ 
        let parrafo = `<p>Este animal es ${animales[i]}</p>`;

        document.write(parrafo);
    }
    */

    animales.forEach((animal) => {
        let parrafo = `<p>Este animal es ${animal}</p>`;

        document.write(parrafo);
    })
}

recorrerMostrar();