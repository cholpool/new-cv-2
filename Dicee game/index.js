var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "1 score to Player 1!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "1 score to Player 2!";
}
else {
  document.querySelector("h1").innerHTML = "DRAW !";
}