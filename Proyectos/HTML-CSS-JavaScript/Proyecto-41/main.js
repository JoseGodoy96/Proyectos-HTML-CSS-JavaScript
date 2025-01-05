window.addEventListener("load", (event) => {

    let articles = document.querySelectorAll(".articles__article");

    let show = () => {
        const windowHeight = window.innerHeight;

        articles.forEach(article => {

            let articleHeigh = article.getBoundingClientRect().top;

            if (articleHeigh < windowHeight) {
                article.classList.add("articles__article--show");
            } else {
                article.classList.remove("articles__article--show");
            }
        });
    }

    show();

    window.addEventListener("scroll", show);

});