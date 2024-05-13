const modal = document.getElementById("myModal");
const cards = document.getElementById("myCards");
const buttons = document.getElementsByClassName("select");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// const card_value = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A"}

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

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
    let computerChoice = Math.floor(Math.random() * 13);

    //Getting string results for the player and computers from the integer choice"
    const computerChoiceString = choices[computerChoice];
    const playerChoiceString = choices[playerChoice];

    //Set the player image to the players choice
    playerImage.src = `assets/image/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    //Set the computer image to the computers choice
    computerImage.src = `assets/image/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

}
