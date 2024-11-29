
const actualYear = new Date().getFullYear();

let year = 1990;
let result = 0;


do {
    year = parseInt(prompt("En que año naciste?", year));

} while(year < 1910 || year > actualYear)

result = actualYear - year;

alert("Tiener "+result+" años");