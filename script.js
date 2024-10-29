let currentPlayer = 1;
let maxRoll = 100;

function rollDice() {
    let roll = Math.floor(Math.random() * maxRoll) + 1; // Generates a number between 1 and maxRoll
    document.getElementById("dice").innerText = roll;

    // Update the game state
    if (roll === 1) {
        document.getElementById("status").innerText = `Player ${currentPlayer} loses!`;
        document.getElementById("rollBtn").disabled = true; // Disable button
        document.getElementById("result").innerText = "Game Over!";
    } else {
        maxRoll = roll; // Update the new max roll
        currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch player
        document.getElementById("status").innerText = `Player ${currentPlayer}, it's your turn! Roll a number between 1 and ${maxRoll}.`;
    }
}
