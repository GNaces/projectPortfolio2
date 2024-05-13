const modal = document.getElementById("myModal");
const cards = document.getElementById("myCards");
const buttons = document.getElementsByClassName("select")
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");


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
