let text = prompt("Introduce una palabra"); // Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones

function countLetters(word) {
    let upper = word.toUpperCase(); // .toUpperCase() transformara la palabra en mayusculas 
    let counter = word.length; // .length cuenta lo larga que es una palabra

    return "La palabra ha sido: "+upper+" y tiene "+counter+" letras";
};

alert(countLetters(text)); // alert lo que hace es mostrar el mensaje