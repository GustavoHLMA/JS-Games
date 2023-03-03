level = 0;
let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let button = document.querySelectorAll(".btn");
document.addEventListener("keydown", nextSequence, {once : true});


for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
  userChosenColour = this.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1)
  });
}

function nextSequence() {
  userClickedPattern = []
  let randonNumber = Math.floor(Math.random()*4);
  let randomChosenColour = buttonColors[randonNumber];
  gamePattern.push(randomChosenColour);
  let chosenColour = document.querySelector("#" + randomChosenColour);
  chosenColour.style.visibility = "hidden";
  setTimeout( function() {
    chosenColour.style.visibility = "visible";
  }, 100);
  playSound(randomChosenColour);
  level++
  document.querySelector("h1").innerText = ("level " + level);

}

function playSound(button) {
  switch (button) {
    case "green":
      let greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;

    case "red":
      let redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;

    case "yellow":
      let yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;


    case "blue":
      let blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;

    default: console.log(this);
  }
}

function animatePress(currentColour) {
  currentColour = document.querySelector("#"+ currentColour);
  currentColour.classList.add("pressed");
  setTimeout(function() {
    currentColour.classList.remove("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
        }, 1000)
    }
  } else {
      let lose = new Audio ("sounds/wrong.mp3");
      lose.play();
      document.querySelector("body").classList.add("game-over");
      setTimeout(function() {
        document.querySelector("body").classList.remove("game-over")
      }, 200)
      document.querySelector("h1").innerText = "Game over, press any key to restart";
      document.addEventListener("keydown", startOver, {once : true});;
  } 
} 

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  nextSequence();
}
