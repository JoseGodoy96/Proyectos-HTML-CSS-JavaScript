window.addEventListener("load", () => {
    let input = document.querySelector(".search__input");
    let btn = document.querySelector(".search__btn");
    let container = document.querySelector(".main__users");

    const USERS_URL = "https://reqres.in/api/users?page=2"

    let getUsers = () => {
        fetch(USERS_URL)
        .then(response => response.json())
        .then(response => {

            let users = response.data;

            users.forEach(user => {
                container.innerHTML += `
                <article class="users__user">
                    <div class="user__container-img">
                        <img class="user__img" src="${user.avatar}" alt="">
                    </div>

                    <div class="user__content">
                        <p class="user__name">${user.first_name} ${user.last_name}</p>
                        <p class="user__email">${user.email}</p>
                    </div>
                </article>
                `
            });
        })

        .catch(error => console.log(error));
    };

    let searchUsers = (search) => {
        let users = document.querySelectorAll(".users__user");

        users.forEach(user => {

            let userInfo = user.innerText.toLowerCase();
            
            if (userInfo.includes(search.toLowerCase()) || search.trim() == "") {
                user.style.display = "flex";
            } else {
                user.style.display = "none";
            }
            
        });
    }

    getUsers();

    input.addEventListener("input", () => {
        searchUsers(input.value);
    });

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        searchUsers(input.value);
    });

    
});




