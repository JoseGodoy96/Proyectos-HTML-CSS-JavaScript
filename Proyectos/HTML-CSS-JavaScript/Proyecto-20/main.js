window.addEventListener("DOMContentLoaded", (event) => {
    let dateDOM = document.querySelector(".main__date");
    let hourDOM = document.querySelector(".main__hour");

    let myDate = () => {
        let date = newDOM();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let mins = date.getMinutes();

        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;

        if (hour < 10) hour = `0${hour}`;
        if (mins < 10) mins = `0${mins}`;

        dateDOM.innerHTML = `${day}/${month}/${year}`;
        hourDOM.innerHTML = `${hour}:${mins}`
    }

    myDate();

    setInterval(() => {
        myDate();
    }, 1000);
})