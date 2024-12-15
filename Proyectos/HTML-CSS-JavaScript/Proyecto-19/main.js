window.addEventListener("DOMContentLoaded", (event) => {

    // Definir variables seleccionando elementos del dom
    let articles = document.querySelector(".layout__articles");
    let title = document.querySelector("#title");
    let subtitle = document.querySelector("#subtitle");
    let description = document.querySelector("#description");
    let form = document.querySelector(".form__create");


    let newArticles = [];

    function createArticle () {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if(title.value && subtitle.value && description.value) {
                let article = {
                    title: title.value,
                    subtitle: subtitle.value,
                    description: description.value
                };

                newArticles.push(article);
                localStorage.setItem("articles", JSON.stringify(newArticles));
                showArticles();
            } else {
                alert("Faltan datos por rellenar en el formulario");
            }
        })
    }
    
        function layoutArticle(article) {
        let layout = `
            <article class="layout__card">
                <header class="card__header">
                    <p class="header__autor">${article.title}</p>
                </header>
    
                <div class="card__content">
                    <h2 class="content__title">${article.subtitle}</h2>
    
                    <p class="content__description">${article.description}</p>
    
                    <button class="content__btn">Cambiar estilos</button>
                </div>
            </article>
        `;

        return layout;
    };

    function showArticles() {
        articles.innerHTML = "";
        newArticles = JSON.parse(localStorage.getItem("articles"));

        if(newArticles.length > 0) {
        
            newArticles.forEach(article => {

                articles.innerHTML += layoutArticle(article);
            })
        }
    };
    


    createArticle();
    showArticles();
});