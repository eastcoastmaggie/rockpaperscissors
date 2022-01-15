
const gameOptions = ['rock', 'paper', 'scissors'];
const outcome = document.querySelector('.outcome');
const computer = document.querySelector('.plays');
const buttons = document.querySelectorAll('.option');
const scoreDisplay = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}
function endGame(winner){
    const gameOverDiv = document.createElement('div');
    if (winner == 'computer'){ 
        gameOverDiv.textContent = "Game Over!";
    } else {
        gameOverDiv.textContent = "You Win!";
    }
    setTimeout(function(){document.body.removeChild(gameOverDiv);}, 3000);
    resetGame();
    document.body.appendChild(gameOverDiv);
}
function updateScore(){
    scoreDisplay.textContent = "Score: " + playerScore + " : " + computerScore;
}
// Randomly select a play for computer
function computerPlay(){
    let selection = Math.floor(Math.random() * gameOptions.length);
    computer.textContent = "Computer plays: " + gameOptions[selection];
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
function playRound(userSelection){
    let computerSelection = computerPlay();
    if (userSelection == computerSelection){
        outcome.textContent = "Tie Game.";
    } else {
        switch (userSelection){
        case 'rock':
            if (computerSelection == 'paper'){
                outcome.textContent = "Computer wins. Paper covers Rock"; 
                computerScore++;
            } else {
                outcome.textContent = "You win. Rock smashes Scissors!";
                playerScore++;
            }
            break;
        case 'paper':
            if (computerSelection == 'scissors'){
                outcome.textContent = "Computer wins. Scissors cut Paper!";
                computerScore++;
            } else {
                outcome.textContent = "You win. Paper covers Rock!";
                playerScore++;
            }
            break;
        case 'scissors':
            if (computerSelection == 'rock'){
                outcome.textContent = "Computer wins. Rock smashes Scissors!";
                computerScore++;
            } else {
                outcome.textContent = "You win. Scissors cuts Paper!";
                playerScore++;
            }
            break;
        default:
            console.log("Error.");
        }
        document.body.appendChild(computer);
        document.body.appendChild(outcome);
    }
}
updateScore();
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        button.classList.add("selected");
        setTimeout(function() {button.classList.remove("selected");}, 500);
        playRound(e.target.id);
        updateScore();
        if (computerScore == 5){
           endGame('computer'); 
        } else if (playerScore == 5){
            endGame('player');
        }
      });
});
