window.addEventListener("load", () => {

    let title = document.querySelector(".main__title");

    let text = "¡Bienvenido al curso!";
    let letterStart = 0;
    let letterEnd = 1;

    let write = () => {
        setInterval(() => {

            title.innerText = text.slice(letterStart, letterEnd);

            letterEnd++;

            if (letterEnd > text.length) {
                letterEnd = 1;
            }

        }, 200)
    };

    write();
});