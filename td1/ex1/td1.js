// exercice 8 :
let random = Math.floor(Math.random() * 10) + 1;
let randToDisplay = document.getElementById("random");
// console.log(random);
function guessClick() {
  let guess = prompt("Guess the number : ");
  let guessToDisplay = document.getElementById("guess");
  guessToDisplay.innerHTML = guess;
  randToDisplay.innerHTML = random;

  if (Number(guess) === random) {
    alert("Good Work !!");
  } else {
    alert("Not matched ...");
  }
}
