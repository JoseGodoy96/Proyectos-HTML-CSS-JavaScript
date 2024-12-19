window.addEventListener("DOMContentLoaded", () => {

    let Left = document.querySelector(".main__article--left");
    let Right = document.querySelector(".main__article--right");

    Left.addEventListener("mouseenter", () => {
        Left.classList.add("active");
        Right.classList.add("inactive");
    });

    Left.addEventListener("mouseleave", () => {
        Left.classList.remove("active");
        Right.classList.remove("inactive");
    });

    Right.addEventListener("mouseenter", () => {
        Right.classList.add("active");
        Left.classList.add("inactive");
    });

    Right.addEventListener("mouseleave", () => {
        Right.classList.remove("active");
        Left.classList.remove("inactive");
    });

});