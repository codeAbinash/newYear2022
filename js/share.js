var you = localStorage.newYearYou;
var friend = "";
var link = "";



let from = document.getElementById("from");
let to = document.getElementById("to");
if(you){
    from.value = you;
}



from.oninput = function(){
    setName(from.value);
}

to.oninput = function(){
    setFriendName(to.value);
}



function setName(n){
    you = n;
    makeLink();
}
function setFriendName(n){
    friend = n;
    makeLink();
}
function makeLink(){
    var host = window.location.href.substr(0,window.location.href.indexOf("?"));
    if(host.length==0)
        host=window.location.href;
    let link =host + "?"+friend+"-"+you;

    // document.getElementById("share").innerHTML = `Share Link to ${friend} <br><br>Click to Copy Link`;
    document.getElementById("hiddenText").value = link;
    if(friend.length>0&&you.length>0){
        document.getElementById("shareWhatsapp").href ="whatsapp://send?text=" + link;
    }
}
function copyLink(){
    if(friend.length>0&&you.length>0){
        let copyText = document.getElementById("hiddenText");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Link Copied, now paste it to " + friend);
    }else
        alert("Enter Your Friend's name & your name");
    
}

