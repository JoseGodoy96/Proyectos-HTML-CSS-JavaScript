window.addEventListener("DOMContentLoaded", Event => {

    let num = 0;
    let result = false;

    do {
        num = parseInt(prompt("Introduce un numero, para ver si es par", 0));
    } while (num <= 0);

    function isPair(x) {
        if(x%2 == 0) {
            return true;
    } else {
        return false;
    }};

    result = isPair(num);

    let resultBox = document.querySelector("#result");
    let message = "El numero "+num+" es impar";

    if (result == true) {

        message = "El numero "+num+ " es par";

    }

    console.log(message);
    alert(message);
    resultBox.innerHTML = `<h1> ${message} </h1>`;

});