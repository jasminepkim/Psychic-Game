// Creates an array of the letters from the alphabet.
// The ".split" will split every character.
var compChoices = ["abcdefghijklmnopqrstuvwxyz".split("")];

// Created variables to hold the number of wins, losses, guesses left, and the user's guesses so far.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

// Functions
var updateGuessesLeft = function () {
    document.querySelector("#guessesleft").innerHTML = "Guesses left: " + guessesLeft;
}
var updateGuessesSoFar = function () {
    document.querySelector("#guessessofar").innerHTML = "Your guesses so far: " + guessesSoFar.join; 
}
// Computer generates a random letter
var updateToGuess = function () {
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
}

var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessesdLetters = [];
}

// This function is run whenever the user presses a key.
document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    // This logic determines the outcome of the game (win/losses)
    if (userGuess === compGuess) {
        wins++; //wins = wins + 1;
    } else {
        guessesleft--;
        var userGuess = String.fromCharCode(event.key).toLowerCase();
        reset();
    }

    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
}