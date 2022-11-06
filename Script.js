const collection = document.getElementsByClassName("Cnum");
const startCounter =  new Date(2007, 12, 3, 22, 34, 28);
let currentDate =  Date.now();
let firstDate = startCounter.getTime();

let dateObj = {};

function ShowDates() {
    currentDate = Date.now();
    const dateSubtracted = currentDate - firstDate;
    const date = new Date(dateSubtracted);
    dateObj = {
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
        days: date.getDate(),
        months: date.getMonth(),
        years: date.getFullYear() - 1970
    }
    
    collection[0].innerHTML = dateObj.years;
    collection[1].innerHTML = dateObj.months;
    collection[2].innerHTML = dateObj.days;
    collection[3].innerHTML = dateObj.hours;
    collection[4].innerHTML = dateObj.minutes;
    collection[5].innerHTML = dateObj.seconds;

}

ShowDates();
startTimer();         

function startTimer() {
    var timer;
    timer = setInterval(function() {
        ShowDates();
    }, 1000);
}

function redirect() {
    window.open("https://play.google.com/store/apps/dev?id=5800933701372498541", '_blank');
}