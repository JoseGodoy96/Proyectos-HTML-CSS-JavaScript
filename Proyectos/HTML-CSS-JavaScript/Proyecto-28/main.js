window.addEventListener("load", () => {

    // Seleccionar elementos del DOM

    let number = document.querySelector(".load__number");
    let btn = document.querySelector(".load__btn");
    let complete = document.querySelector(".load__complete");
    let background = document.querySelector(".main__background");

    // Variables contadoras

    let percent = 1;
    let blur = 30;

    btn.addEventListener("click", () => {
        btn.style.display = "none";

        let time = setInterval(() => {
            percent++;
            blur -= 30/100;

            if (percent > 100) {
                complete.style.display = "block";
            } else {
                number.innerHTML = percent+"%"
                background.style.filter = `blur(${blur}px)`
                
            }
            
        }, 20);
    });
});