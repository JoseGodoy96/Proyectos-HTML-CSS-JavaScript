window.addEventListener("load", () => {

    let input = document.querySelector(".form__input"); 
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");
    let allTask = document.querySelectorAll(".list__task");

    let saveAndUpdate = () => {
        let newTasks = [];

        allTask.forEach(item => {
            let task = item.querySelector(".task__text");
            let check = item.querySelector(".task__check");

            let taskObj = {
                text: task.innerText,
                completed: check.checked
            };



            newTasks.push(taskObj)
        });

        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    let add = (task) => {
        console.log(task)

        if(task.trim() != "") {

            list.innerHTML +=`
            <li class="list__item">
                <div class="list__task">
                    <input class="task__check" type="checkbox"
                    <p class="task__test">${task}</p>
                </div
                <i class="fa-solid fa-trash list__delete"></i>
            </li>
            `;

            saveAndUpdate();

            input.value = "";
        };
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let task = input.value;

        add(task);
    });
});