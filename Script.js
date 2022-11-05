const collection = document.getElementsByClassName("Cnum");
const startCounter =  new Date(2007, 08, 12, 15, 35, 49);
let currentDate =  Date.now();
let firstDate = startCounter.getTime();





function GetDateSubtraction(currentDate, firstDate) {
    let differenceInDates = currentDate - firstDate;
    return differenceInDates;
}

Window.onload = function ShowDates(differenceInDates) {
    let date = {
        miliseconds: differenceInDates / 1000,
        seconds: miliseconds%60,
        minutes: seconds%60,
        hours: minutes%60,
        days: hours%24,
        months: days%30,
        years: months%12
    }

    console.log(date);
}