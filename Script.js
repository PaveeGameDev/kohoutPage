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
    let randomSwitcher = Math.floor(Math.random()*4);
    switch (randomSwitcher) {
        case 0:
            window.open("https://play.google.com/store/apps/dev?id=5800933701372498541", '_blank');      
            break;
    
        case 1:
            window.open("https://play.google.com/store/apps/details?id=com.Pavee.NeonRush", '_blank');
            break;

        case 2:
            window.open("https://play.google.com/store/apps/details?id=com.PaVee.AnimalTrailRun", '_blank');
            break;
        
        case 3:
            window.open("https://pavee.itch.io/", '_blank');
            break;
        
        default:
            console.log(randomSwitcher);
        break;
    }
        
}

function MenuSwitch() {
    const menu = document.getElementsByClassName("menu");
    switch (menu[0].style.display) {
        case "none":
            menu[0].style.display = "block";
            console.log("Menu is now visible");
            break;
    
        case "block":
            console.log("Menu is now hidden");
            animateMenu(menu);
            break;

        default:
            menu[0].style.display = "block";
            console.log("Menu is now visible");
            break;
        
    }
}

function animateMenu(menu){
    const animate = document.getElementsByClassName("animate");
    animate[0].classList.add("MAnimR4");
    animate[1].classList.add("MAnimR3");
    animate[2].classList.add("MAnimR2");
    animate[3].classList.add("MAnimR1");

    setTimeout(() => {
        animate[3].style.display = "none";
    }, 500);
    setTimeout(() => {
        animate[2].style.display = "none";
    }, 1000);
    setTimeout(() => {
        animate[1].style.display = "none";
    }, 1500);
    setTimeout(() => {
        animate[0].style.display = "none";
    }, 2000);
    
    setTimeout(function(){
        const menu = document.getElementsByClassName("menu");
        menu[0].style.display = "none";
        animate[0].classList.remove("MAnimR4");
        animate[1].classList.remove("MAnimR3");
        animate[2].classList.remove("MAnimR2");
        animate[3].classList.remove("MAnimR1");
        animate[0].style.display = "block";
        animate[1].style.display = "block";
        animate[2].style.display = "block";
        animate[3].style.display = "block";
    }, 2000);
}