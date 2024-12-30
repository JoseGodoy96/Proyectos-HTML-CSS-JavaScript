window.addEventListener("load", (event) => {

    let btn = document.querySelector(".main__btn");
    let notes = document.querySelector(".main__notes");

    btn.addEventListener("click", () => {
        createNote("", "");
    });


    let createNote = (body = "", title = "") => {
        let note = document.createElement('article');
        note.classList.add("notes__note");

        note.innerHTML += `
        <header class="note__header">
            <input class="header__input" type="text" value="${title}">
            <i class="note__ico fa-solid fa-trash"></i>
        </header>

        <textarea class="note__body" name="body">${body}</textarea>
        `;

        let input = note.querySelector(".header__input");
        let textarea = note.querySelector(".note__body");
        let thrash = note.querySelector(".note__ico");

        input.addEventListener("input", () => {
            update();
        });

        textarea.addEventListener("input", () => {
            update();
        });
        
        thrash.addEventListener("click", () => {
            note.remove();
            update();
        });

        notes.appendChild(note);
    }

    let update = () => {
        notesArray = [];
        let notesDom = document.querySelectorAll(".notes__note");
        
        notesDom.forEach((noteDom) => {
            let noteInput = noteDom.querySelector(".header__input");
            let noteTextarea = noteDom.querySelector(".note__body");   

            let note = {
                title: noteInput.value,
                body: noteTextarea.value
            };

            if(note.body.trim() != "" || note.title.trim() != ""){
                notesArray.push(note);
            }
            

        });

        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    let getNotes = () => {
        let notesStorage = JSON.parse(localStorage.getItem("notes"));

        if(notesStorage){
            notesStorage.forEach((note) => {
                createNote(note.body, note.title);
            });
        }
    }

    getNotes();

});