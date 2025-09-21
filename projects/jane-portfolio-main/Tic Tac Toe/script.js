// Initialize game variables
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""]; // 9 cells
let gameActive = true;

// DOM elements
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const resetButton = document.querySelector(".reset-btn");

// Check for a winner
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            status.textContent = `${currentPlayer} wins!`;
            return;
        }
    }

    if (!board.includes("")) {
        gameActive = false;
        status.textContent = "It's a draw!";
    }
}

// Handle cell click
function handleCellClick(event) {
    const cellIndex = Array.from(cells).indexOf(event.target);

    if (board[cellIndex] || !gameActive) return; // If already filled or game is over

    board[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
}

// Reset the game
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    status.textContent = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = "";
    });
}

// Add event listeners
cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

resetButton.addEventListener("click", resetGame);
