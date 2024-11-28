let marca = "Audi",
    velocidad = 200,
    stock = true,
    modelos = ["R8", "A3", "A7"];

let frase = `Tenemos coches de la marca ${marca} van a una velocidad maxima de ${velocidad}km/h,

Dispones de estos modelos en stock ${stock}:<br/>`;

modelos.forEach(modelo => {
    frase += `- ${modelo} <br/>`;
});

let caja = document.querySelector("#caja");
caja.innerHTML = frase;