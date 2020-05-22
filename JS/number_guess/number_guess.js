var secretNumber = 4;

var stringGuess = prompt("Try to guess the number.");
var userGuess = Number(stringGuess);

if (secretNumber === userGuess) {
  alert("You got it right.");
}
else if (secretNumber > userGuess) {
  alert("Too low. Try again.");
}
else {
  alert("Too high. Try again.");
}
