var lettersGuessed = [];
var guessesRemaining = 9;
var totalWins = 0;
var totalLosses = 0;
var matchedLetter = false;

// Creates an array that lists all letter options.
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Randomly chooses a letter from the options array.
var computerChoice = letterOptions[Math.floor(Math.random() * letterOptions.length)];


function refreshStatus() {
    var html =  "<h1>The Psychic Game</h1>" +
                "<p>Guess the letter I'm thinking of</p>" +
                "<p>Wins:  " + totalWins + "</p>" +
                "<p>Losses:  " + totalLosses + "</p>" +
                "<p>Guesses Left:  " + guessesRemaining + "</p>" +
                "<p>Your guesses so far:  " + lettersGuessed  + "</p>"; 
    document.querySelector("#game").innerHTML = html;
}

refreshStatus();

// Determines which key was pressed.
    document.onkeyup = function(event) {
        var rawUserGuess = event.key
        var userGuess = rawUserGuess.toLowerCase();
        var validLetter = letterOptions.indexOf(userGuess);

        refreshStatus();

        // This validLetter comparison makes sure only letter keys are counted and pushed into the guesses list.
            if (guessesRemaining > 0) {
                matchedLetter = false;
                if (validLetter > -1) {
                    lettersGuessed.push(userGuess);

                    if (userGuess != computerChoice) {
                        guessesRemaining--;
                        matchedLetter = false;
                        refreshStatus();
                    }
                    else {
                        guessesRemaining = 0;
                        matchedLetter = true;
                        refreshStatus();
                    }
                }
            }

            if ((guessesRemaining < 1) && (matchedLetter === false)) {
                totalLosses++;
                guessesRemaining = 9;
                lettersGuessed = [];
                computerChoice = letterOptions[Math.floor(Math.random() * letterOptions.length)];
                refreshStatus();
            } 

            if ((guessesRemaining < 1) && (matchedLetter === true)) {
                totalWins++;
                guessesRemaining = 9;
                lettersGuessed = [];
                computerChoice = letterOptions[Math.floor(Math.random() * letterOptions.length)];
                refreshStatus();
            }
        }