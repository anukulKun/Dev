var one = Math.floor(Math.random()*6)+1;
var two = Math.floor(Math.random()*6)+1;
 //console.log(randomno)
 document.querySelector(".img1").setAttribute("src", "./images/dice"+ one+".png");
 document.querySelector(".img2").setAttribute("src", "./images/dice"+ two+".png");

if(one === two){
    document.querySelector("h1").innerHTML = "Refresh Me";
}
if(one < two){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
