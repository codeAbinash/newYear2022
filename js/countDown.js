let countDown = document.getElementById("countDown");


let then = new Date("2022 jan 01 00:00");

function showCountDown(){
    let now = new Date();
    let ms = then.getTime() - now.getTime();

    if(ms<0){
        countDown.innerHTML = "I said that 365 days ago, but a happy new year.";
        document.getElementById("adv").remove();
    }else{
        countDown.innerHTML = getDateFromMs(ms);
    }
}


function getDateFromMs(ms){
    const diff = Math.floor(ms/1000);
    const days = diff / (60*60*24);
    const hours = (days - Math.floor(days)) * 24;
    const minutes = (hours - Math.floor(hours)) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;
    return $f(hours) + " Hours " + $f(minutes) + " Minutes " + $f(seconds) + " Seconds";
}
let $f = f => Math.floor(f);

setInterval(() => {
    showCountDown();
}, 1000);