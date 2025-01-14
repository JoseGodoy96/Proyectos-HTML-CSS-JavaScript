window.addEventListener("load", () => {

    let btn = document.querySelector(".nav__btn"); 
    let pagesBox = document.querySelector(".layout__pages");
    let listNav = document.querySelector(".layout__list");
    let listItem = document.querySelectorAll(".list__item");
    let pagesItem = document.querySelectorAll(".pages__page");

    btn.addEventListener("click", () => {
        btn.classList.toggle("nav__btn--active");
        pagesBox.classList.toggle("layout__pages--show");
        listNav.classList.toggle("layout__list--show");
    });

    let activatePage = (i) => {
        pagesItem.forEach(page => {
            page.classList.remove("page--active");
        });

        pagesItem[i].classList.add("page--active");
    }

    listItem.forEach((item, index) => {

        item.addEventListener("click", () => {
            activatePage(index);
        });
    });

});