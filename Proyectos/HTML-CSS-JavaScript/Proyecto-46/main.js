window.addEventListener("load", (event) => {

    let pages = document.querySelectorAll(".main__page");
    let navItems = document.querySelectorAll(".nav__item");

    let desactive = () => {
        pages.forEach(page => {
            page.classList.remove("main__page--active");
        });

        navItems.forEach(navItem => {
            navItem.classList.remove("nav__item--active");
        });
    };



    let navigation = () => {
        navItems.forEach((navItem, index) => {

            navItem.addEventListener("click", () => {
                desactive();

                pages[index].classList.add("main__page--active")
                navItem.classList.add("nav__item--active");
            });
        });
    };

    navigation();
});