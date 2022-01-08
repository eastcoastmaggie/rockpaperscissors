

// Start Game, play five rounds
function startGame(){
    let gameOptions = ['rock', 'paper', 'scissors'];
    for(let i = 0; i<5; i++){
        console.log("Rock, Paper, Scissors!");
        let userSelection = userPlay();
        let computerSelection = computerPlay();
        let outcome = playRound(userSelection, computerSelection);
        console.log(outcome);
    }
}

// Randomly select a play for computer
function computerPlay(){
    let selection = Math.floor(Math.random() * gameOptions.length);
    console.log("Computer plays: " + gameOptions[selection]);
    return gameOptions[selection];
}

// User Selection
function userPlay(){
    let selection = prompt("What's your move? 'rock', 'paper', 'scissors': ").toLowerCase();
    if (!gameOptions.includes(selection)){
        console.log("That is not an option. Please try again.");
        selection = userPlay();
    }
    console.log("You play: " + selection);
    return selection;
}

// Compare the two plays to determine the outcome. 
// Rock beats Scissors, Scissors cuts Paper, Paper covers Rock.
// Return winner text
function playRound(userSelection, computerSelection){
    let winner = '';
    if (userSelection == computerSelection){
        return "Tie Game.";
    } else {
        switch (userSelection){
        case 'rock':
            if (computerSelection == 'paper'){
                winner = "Computer wins. Paper covers Rock"; 
                break;
            } else {
                winner = "You win. Rock smashes Scissors!";
            }
            break;
        case 'paper':
            if (computerSelection == 'scissors'){
                winner = "Computer wins. Scissors cut Paper!";
                break;
            } else {
                winner = "You win. Paper covers Rock!";
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock'){
                winner = "Computer wins. Rock smashes Scissors!";
                break;

            } else {
                winner = "You win. Scissors cuts Paper!";
            }
            break;
        default:
            console.log("Error.");
        }
        
        return winner;
    }
}
