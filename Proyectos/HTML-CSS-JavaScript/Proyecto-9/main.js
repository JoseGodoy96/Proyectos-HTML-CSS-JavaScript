let result = 0;

function sumAll(...numbers) {

    let resultBox = document.querySelector("#result");
    let numbersBox = document.querySelector("#numbers");

    numbersBox.innerHTML = "Los numeros que se han utilizado para el resultado son estos: "

    for(let count = 0; count < numbers.length; count++){
        result += numbers[count];

        numbersBox.innerHTML = numbers[count];

        if(count !== numbers.length - 1) numbersBox.innerHTML += ", ";
    }

    
    resultBox.innerHTML = "El resultado es: " + result;

}

sumAll(3,4,5,6,7,8,12);