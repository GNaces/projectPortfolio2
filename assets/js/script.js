const modal = document.getElementById("myModal");
const cards = document.getElementById("myCards");
const playerScore = document.getElementById("play-score");
const computerScore = document.getElementById("comp-score");
const buttons = document.getElementsByClassName("select");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["2", "3", "4", "5", "6", "7", "8", "9",];
const text = document.querySelector(".text");
const restart = document.getElementById("restart");

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Add event listener to restart button
 */
restart.addEventListener("click", restartGame);

/**
 * Activate class when question mark button clicked
 */
function styleModal() {
    modal.classList.toggle("active");
}

/**
 * Activate class when arrow up button clicked
 */
function styleCards() {
    cards.classList.toggle("shoot");
}
/**
 * Dramatically hide button after being clicked.
 */
function hideButton(x) {
    x.style.display = 'none';
}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    //Get a random value for the computer
    let computerChoice = Math.floor(Math.random() * 8);

    //Getting string results for the player and computers from the integer choice"
    const computerChoiceString = choices[computerChoice];
    const playerChoiceString = choices[playerChoice];

    //Set the player image to the players choice
    playerImage.src = `assets/image/${choices[playerChoice]}-card.png`;
    playerImage.alt = choices[playerChoice];

    //Set the computer image to the computers choice
    computerImage.src = `assets/image/${choices[computerChoice]}-card.png`;
    computerImage.alt = choices[computerChoice];

    //Determine if its a draw and display "DRAW"
    if (playerChoiceString == computerChoiceString) {
        text.innerText = "DRAW";
        return;
    }

    //Calculate if the player won
    const didPlayerWin = (playerChoiceString > computerChoiceString);

    //Increment the scores based on if the player won
    incrementPlayerScore(didPlayerWin);
}

function incrementPlayerScore(didPlayerWin) {

    //Get computer or player html tag, and get the number value of the tag and increment by 1
    if (didPlayerWin) {
        const newScore = Number(playerScore.innerText) + 1;
        playerScore.innerText = newScore;
        text.innerText = "GREAT CHOICE";
    }
    else {
        const newScore = Number(computerScore.innerText) +1;
        computerScore.innerText = newScore;
        text.innerText = "COMPUTER WIN";
    }
}

/**
 * Restarts the game and scores back to 0
 */
function restartGame() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    text.innerText = "";
    playerImage.src = `assets/image/start.png`;
    playerImage.alt = "Joker image";
    computerImage.src = `assets/image/start.png`;
    computerImage.alt = "Joker image";
    alert("Game is Restart");
    // reload code learned from https://www.youtube.com/watch?v=ZJUhKP9PbHs Coder Gauam page
    location.reload();
}
