const modal = document.getElementById("myModal");
const cards = document.getElementById("myCards");

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
 * Activate class when question mark button clicked
 */
function styleCards() {
    cards.classList.toggle("shoot");
}