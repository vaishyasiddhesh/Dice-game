

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var view="./Dicee Challenge - Starting Files/images/"+ randomDiceImage;
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src", view);
var count1=0;



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice" + randomNumber2 + ".png";
var view2="./Dicee Challenge - Starting Files/images/"+ randomDiceImage2;
var images1=document.querySelectorAll("img")[1];
images1.setAttribute("src", view2);
var count2=0;
for (let count = 1; count <=3; count++) {
   
    

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1") .innerHTML="player 1 win match";
    count1++;
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 win match";
    count2++;
}
else{
    document.querySelector("h1").innerHTML="Draw match";
}
}
if(count1>count2){
    document.write("player1 is all over winner"+count1);
}
else if(count1<count2){
    document.write("player2 is all over winner"+count2);
}
else{
    document.write("equall point");
}
