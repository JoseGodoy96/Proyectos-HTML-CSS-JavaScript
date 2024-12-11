let concesionario = [
    {
        marca: "ferrary",
        modelos: ["clase a", "clase b", "clase c"]
    },
    {
        marca: "bmw",
        modelos: ["clase a", "clase b", "clase c"]
    },
    {
        marca: "ford",
        modelos: ["clase a", "clase b", "clase c"]
    },
];

function mostrar(datos) {

    let cajaConcesionario = document.querySelector("#concesionario");

    datos.forEach(coches => {
        cajaConcesionario.innerHTML += `<h1>${coches.marca}</h1>`;

        
        cajaConcesionario.innerHTML += `<ul>`;

        coches.modelos.forEach(modelo => {
            cajaConcesionario.innerHTML += `<li>${modelo}</li>`;
        });

        cajaConcesionario.innerHTML += `</ul>`;

    });
};

mostrar(concesionario);