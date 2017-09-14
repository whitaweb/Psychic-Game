// Create Variable that defines letters to choose from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables for wins, losses, guesses left, guesses so far

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// Create variable for Computer guess that chooses random letters in alphabet array
// Create function that picks random letter
var computerGuess;

var randomNumber = Math.floor(Math.random() * alphabet.length);
console.log("random number: ", randomNumber);


function randomGuess() {

	computerGuess = alphabet[randomNumber];


	console.log("computer guess: ", computerGuess);

}

randomGuess();


// Creat Variable for User guess

var userGuess = "";

console.log

// Capture key press and assign it to user guess. 

// Create function that logs computer guess

// Create key event that logs user guess
// Create if/then event that compares user guess to computer guess. If user guess equals computer guess, add to win counter. Reset computer guess.
// If user guess does not equal computer guess, decrease guessleft by 1, increaase guesssofar by 1. If user guesses equal 9, increase loss by 1. 
// Create counter that countsdown guesses left
// Create counter for guesses so far