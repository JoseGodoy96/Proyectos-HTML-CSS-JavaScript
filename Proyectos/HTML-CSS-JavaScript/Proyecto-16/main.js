window.addEventListener("DOMContentLoaded", () => {

    console.log(window.innerWidth, window.innerHeight, window.location.href);
    let data = document.querySelector("#data");
    data.innerHTML += "<h2>Anchura: "+window.innerWidth+"</h2>";
    data.innerHTML += "<h2>Altura: "+window.innerHeight+"</h2>";
    data.innerHTML += "<h2>Pagina Web: "+window.location.href+"</h2>";

    window.open("https://www.youtube.com/watch?v=YmjQVRtxS4E&list=RDE2Rj2gQAyPA&index=16", "blank");
});