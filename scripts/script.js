const buttonHigh = document.querySelector(".button.high");
const buttonCorrect = document.querySelector(".button.correct");
const buttonLow = document.querySelector(".button.low");
const buttonPlayAgain = document.querySelector(".button.play-again");
let guessInfo = document.querySelector(".guess");
let computerGuess = 50;
let guessArray = [0, 100];
let attempts = 0;

document.querySelector(
  ".guess"
).textContent = `Er det tal du tænker på: ${computerGuess}?`;

buttonHigh.addEventListener("click", function () {
  guessArray[1] = computerGuess;
  computerGuess = Math.floor((guessArray[0] + guessArray[1]) / 2);
  attempts++;
  guessInfo.textContent = `Er det tal du tænker på: ${computerGuess}?`;
});

buttonLow.addEventListener("click", function () {
  guessArray[0] = computerGuess;
  computerGuess = Math.floor((guessArray[0] + guessArray[1]) / 2);
  attempts++;
  guessInfo.textContent = `Er det tal du tænker på: ${computerGuess}?`;
});

buttonCorrect.addEventListener("click", function () {
  guessInfo.textContent = `Jeg fik gættet det rigtigt på ${attempts} forsøg!`;
  buttonPlayAgain.style.display = "block";
});

buttonPlayAgain.addEventListener("click", function () {
  computerGuess = 50;
  guessArray = [0, 100];
  attempts = 0;
  guessInfo.textContent = `Er det tal du tænker på: ${computerGuess}?`;
  buttonPlayAgain.style.display = "none";
});
