
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; 
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*26)]; 
        guessesSoFar.push(userGuess); //pushing user guess to guesses so far

        if (userGuess == computerGuess) {
            wins++;
            alert('You are Psychic');
            guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
        }
        if (guessesLeft === 0 ){
            losses++;
            alert('Lost, Try again');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left
        }  
        // This is what appears when you start game    
        var html = "<u><h1>The Psychic Game</h1></u>" + 
        "<h3>***Game in Progress***</h3>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins" +  wins + 
        "</p>" +
        "<p>Losses: " + losses + 
        "</p>" +
        "<p>Guesses Left: " + guessesLeft + 
        "</p>" +
        "<p>Your Guesses: " + guessesSoFar +
        "</p>"
        ;
        // Placing the html into the game ID
        document.querySelector('#psychic').innerHTML = html;
    }
