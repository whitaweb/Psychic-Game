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
// console.log("random number: ", randomNumber);


function randomGuess() {

	computerGuess = alphabet[randomNumber];


	 console.log("computer guess: ", computerGuess);



}

randomGuess();


// Create variables  and functions to update counters.

var updateguessesLeft = function() {

	document.querySelector("#guesses-left").innerHTML = " " + guessesLeft;
}

var updateGuessesSoFar = function() {

document.querySelector("#guesses-so-far").innerHTML = " " + guessesSoFar.join(', ');
};



// Create reset function - don't refresh page
var reset = function() {
  guessesLeft = 9;
  guessesSoFar = [];
  

  updateguessesLeft();
  updateguessesSoFar();
}



// Create Variable for User guess

var userGuess = "";

// Capture key press and assign it to user guess. 

document.onkeypress = function (event) {


	var userKeyPress = String.fromCharCode(event.keyCode).toLowerCase();

	console.log("user keypress:", userKeyPress);
	// push userKeypress to guessSoFar

	guessesSoFar.push(userKeyPress);
	updateGuessesSoFar();
	updateguessesLeft();
	


// Create if/then event that compares user guess to computer guess.  

 if (guessesLeft > 0){

// If user guess is the same as the computer guess then wins increase by 1,
// and gueses left and guesses so far reset.
            if (userGuess == computerGuess){
                wins++;
                document.querySelector("#wins").innerHTML = " " + wins;
                alert("You are a winner!");
                reset();
            }
// If user guesses equal 0 then losses increase by 1 and game is reset. 
            else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = " " + losses;
            alert("Sorry, it's not your day.");
            
            reset();
        }

    }











