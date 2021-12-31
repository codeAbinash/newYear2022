var firstScreen = document.getElementById("welcome");
const names = window.location.search.substr(1).split("-");
const wishTo = names[0];
const wishFrom = names[1];


document.body.onload = function(){
    firstScreen.querySelector("h2").innerText = `Hello ${wishTo}`;
    firstScreen.querySelector("p").innerHTML = "Happy New Year <br> Click Start to Continue";

    if(names[0]){
      document.querySelector(".friendName").innerText = `Hello ${names[0]}`;
      document.querySelector(".wishFrom").innerText = `From ${names[1]}`;
      localStorage.newYearYou = names[0];
    }else{
      document.querySelector(".friendName").innerText = `Hello Friend`;
      document.querySelector(".wishFrom").innerText = `From Abinash`;
    }
}



function start(){
    tickMusic.play();
    bgMusic.play();
    firstScreen.style.top = "-100vh";
    openFullscreen();
    st(()=>{firstScreen.remove()});
}


function st(fun,time=1){
    setTimeout(() => {fun()}, time*1000);
}


var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
}