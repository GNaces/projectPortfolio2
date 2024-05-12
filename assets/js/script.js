const modal = document.getElementById("myModal");

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