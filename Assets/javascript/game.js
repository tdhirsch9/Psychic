// Creates an array that lists all of the options (a through z).
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold wins and losses. Starts at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesLetters = [];
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// Variables that have references to the text in html.
function display() {
    var winsCount = document.getElementById("wins");
    var lossesCount = document.getElementById("losses");
    var remaining = document.getElementById("remaining");
    var letterGuesses = document.getElementById("guesses");
// Displays the variables as text on the browser.
    winsCount.textContent = wins;
    lossesCount.textContent = losses;
    remaining.textContent = guessesLeft;
    letterGuesses.textContent = guessesLetters;
  }
// A function that adds 1 to wins and uses the restartGame function to reset the remaining guesses and wrong guesses.
  function correct() {
    wins++;
    restartGame();
  }
//A function that adds 1 to losses and uses the restartGame function to reset the remaining guesses and wrong guesses.  
  function wrong() {
    losses++;
    restartGame();
  }
//A function that subtracts 1 from remaining guesses and adds a wrong guess letter.
  function wrongLetter(letter) {
    guessesLeft--;
    guessesLetters.push(letter);
  }
//Uses the display function to display the variables.
display();

// function that tracks if a key has been pressed, and applies the correct, wrong or wrongLetter functions based on which letter key was pressed.
document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === computerChoice) {
    correct();
  } else if (guessesLeft - 1 === 0) {
    wrong();
  } else {
    wrongLetter(guess);
  }
//displays the updated numbers after onkeyup function has run
  display();
}


//function that resets the remaining guesses and incorrect guesses. Also shows what letter the computer has chosen in the console.
function restartGame() {
  guessesLeft = 9;
  guessesLetters = [];
  computerChoice = letters[Math.floor(Math.random() * letters.length)];
  console.log("The letter is: " + computerChoice);
}