window.addEventListener("load", () => {

    let audios = document.querySelectorAll(".audios__item");
    let btn = document.querySelectorAll(".sounds__btn");

    let start = () => {
        
        btn.forEach(btn => {
            btn.addEventListener("click", () => {
                let id = btn.getAttribute("data-audio");
                let audio = document.querySelector("#"+id);

                stop();
                audio.play();
                audio.volumen = 0.1;
            });
        })
    };

    let stop = () => {
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    };

    start();

});