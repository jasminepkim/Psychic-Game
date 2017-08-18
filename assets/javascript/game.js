// Creates an array of the letters from the alphabet.
// The .split() will split every character.
// Do not add [ ] outside the .split(), otherwise it'll be an array within an array
var compChoices = "abcdefghijklmnopqrstuvwxyz".split("");

// Created variables to hold the number of wins, losses, guesses left, the user's guesses so far, and the computer's guesses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
console.log("init comp guess", compGuess);

// Functions

// The reset function will reset the game once the user wins or loses, without having to refresh the browser
function reset() {
    guessesLeft = 10;
    guessesSoFar = [];
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log("new comp guess", compGuess);
}

// This function is run whenever the user presses a key.
onkeyup = function (event) {

    // Determines which key the user pressed.
    var userGuess = event.key;
    console.log(userGuess, compGuess);

    // This logic determines what will happen if the user wins
    if (userGuess === compGuess) {
        wins++; //wins = wins + 1;
        reset(); // The game will then reset

    // This logic determines what will happen while the user is not guessing correctly
    } else {
        guessesLeft--;
        guessesSoFar.push(userGuess);

    // This logic determines what will happen when the user loses    
        if (guessesLeft === 0) {
            losses++;
            reset();
        }
    }

    // the .querySelector links up to the ID's identified to the HTML page
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    //The .join() method will join all letters guessed from the guessesSoFar array to a string
    document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(", ");
}