window.addEventListener("load", () => {

    let numberAccount = document.querySelector(".header__number");
    let money = document.querySelector(".header__money");
    let containersIco = document.querySelectorAll(".item__ico");
    let titles = document.querySelectorAll(".item__title");
    let dates = document.querySelectorAll(".item__date");
    let bills = document.querySelectorAll(".item__bill");
    let totals = document.querySelectorAll(".item__total");
    let bgLoads = document.querySelectorAll(".bg-load");
    let bgLoadsTexts = document.querySelectorAll(".bdload-text");

    function setInfo() {
        numberAccount.innerText = "CU99 3232 3232 32322 32323 3333";
        money.innerText = "5.000€";


        containersIco.forEach(ico => {
            ico.innerHTML = `<i class="fa-regular fa-credit-card"></i>`
        });

        titles.forEach(title => {
            title.innerText = "Empresa"
        });

        dates.forEach(date => {
            date.innerText = "20/10/2020"
        });

        bills.forEach(bill => {
            bill.innerText = "-400€"
        });

        totals.forEach(total => {
            total.innerText = "5.000€"
        });

        bgLoads.forEach(bgLoad => {
            bgLoad.classList.remove("bg-load");
        });

        bgLoadsTexts.forEach(bgLoadsText => {
            bgLoadsText.classList.remove("bdload-text");
        });
    }

    setTimeout(setInfo, 3000)
});