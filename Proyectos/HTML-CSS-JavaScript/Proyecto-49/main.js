window.addEventListener("load", () => {

    let input = document.querySelector(".form__input"); 
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");

    let loadList = () => {

        let tasks = JSON.parse(localStorage.getItem("tasks"));

        if (tasks) {
            tasks.forEach(task => {
                add(task.text, task.completed);
            });
        }
    }

    let saveAndUpdate = () => {

        let allTask = document.querySelectorAll(".list__task");
        let newTasks = [];

        allTask.forEach(item => {

            let task = item.querySelector(".task__text");
            let check = item.querySelector(".task__check"); 

            let taskObj = [
            {
                text: task.innerText,
                completed: check.checked
            }
            ];

            newTasks.push(taskObj);      
        });

        localStorage.setItem("task", JSON.stringify(newTasks));
    };

    let deleteTask = (task) => {
        task.remove();
    };

    let add = (task, completed = false) => {
        console.log(task);

        if (task.trim() != "") {
            let item = document.createElement("li");
            item.classList.add("list__item");

            item.innerHTML += `
                <div class="list__task">
                    <input class="task__check" type="checkbox" ${completed ? "checked" : ""}>
                    <p class="task__test">${task}</p>
                </div>
                <i class="fa-solid fa-trash list__delete"></i>
            `;

            list.appendChild(item);

            saveAndUpdate();

            input.value = "";

            let btnDelete = item.querySelector(".list__delete");

            btnDelete.addEventListener("click", () => {
                deleteTask(item);
                saveAndUpdate();
            });

            let checkbox = item.querySelector(".task__check");

            checkbox.addEventListener("change", () => {
                item.classList.toggle("list__item--completed");
                saveAndUpdate();
                console.log(checkbox.checked)
            });
        };
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let task = input.value;

        add(task);

    });

    loadList();
});