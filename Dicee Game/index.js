let frstDice = Math.floor((Math.random()*6))+1;
let scndDice = Math.floor((Math.random()*6))+1;


let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


img1.setAttribute("src", "images/dice"+frstDice+".png");
img2.setAttribute("src", "images/dice"+scndDice+".png");

if (frstDice === scndDice) {
  document.querySelector("h1").textContent = ("Draw!");
} else if (frstDice > scndDice) {
  document.querySelector("h1").textContent = ("🚩Player 1 Wins!")
} else if (scndDice > frstDice) {
  document.querySelector("h1").textContent = ("Player 2 Wins!🚩")
}