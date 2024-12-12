window.addEventListener("DOMContentLoaded", event => {

    let card = document.querySelectorAll(".layout__card");

    card.forEach(c => {

        let header = c.querySelector(".card__header");
        let description = c.querySelector(".content__description");
        let btn = c.querySelector(".content__btn");

        btn.addEventListener("click", () => {
            
            c.style.boxShadow = "0px 0px 14px black";
            header.style.backgroundColor = "#1B62CA";
            description.style.opacity = 0.8;
            btn.style.backgroundColor = "white";
            btn.style.color = "#1B62CA";
        });
    
    });

});