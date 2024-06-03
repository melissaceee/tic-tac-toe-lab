console.log('am I working?');

/*-------------------------------- Constants --------------------------------*/
// Define the required constants.
const player_x = 'x'; // Player X
const player_o = 'o'; // Player O

/*---------------------------- Variables (state) ----------------------------*/
// Define the required variables used to track the state of the game.
let board;   // the state of the squares on the board
let turn;    // track whose turn it is
let winner;  // see if anyone has won yet
let tie;     // see if the game has ended in a tie

/*------------------------ Cached Element References ------------------------*/
// Store cached element references.
const squareEls = document.querySelectorAll('.sqr'); //  square elements
const messageEl = document.querySelector('#message'); // message element

console.log(squareEls); // test
console.log(messageEl); // test

/*-------------------------------- Functions --------------------------------*/
// Upon loading, the game state should be initialized, and a function should 
// be called to render this game state.
function init() {
    board = ['', '', '', '', '', '', '', '', '']; // empty strings to represent the 9 squares
    turn = player_x; // starting player 
    winner = false; // false since there is no winner at the beginning of the game
    tie = false; // false since there is no tie at the beginning of the game

    render();
}

// The state of the game should be rendered to the user.
function render() {
    updateBoard(); // update the board elements
    updateMessage(); // update the message element
}

// Update the board based on the state of the `board` array
function updateBoard() {
    board.forEach((value, idx) => {
        squareEls[idx].textContent = value; // show text content of the square
    });
}

// Update the message element based on the state of the game
function updateMessage() {
    if (winner) { // Check if there's a winner
        messageEl.textContent = `${turn} wins! Congratulations!`; // show winning message
    } else if (tie) { //check if the game is a tie
        messageEl.textContent = `It's a tie!`; // check tie message
    } else { // ifthe game is ongoing
        messageEl.textContent = `It's ${turn}'s turn`; // check whose turn it is
    }
}

// Handle a player clicking a square
function handleClick(event) {
    const squareIndex = event.target.id; // Get the id of the clicked square

    if (board[squareIndex] !== '' || winner) { // If the square is already taken or there's a winner, do nothing
        return;
    }

    playPiece(squareIndex); // place the piece on the board
    checkForWinner(); // check if there's a winner
    checkForTie(); // check if the game is a tie
    switchPlayerTurn(); // switch the turn to the other player
    render(); // keep updating game
}

// Place the piece on the board
function playPiece(index) {
    board[index] = turn; // board is array index is position on board payer is putting piece turn = x or o 
    console.log(board); // test
}

// Check if there's a winner
function checkForWinner() {
    // Define winning combinations
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonally across
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        const index1 = combo[0];
        const index2 = combo[1];
        const index3 = combo[2];
        

        if (board[index1] && board[index1] === board[index2] && board[index1] === board[index3]) { // check if all three indices are the same and not empty
            winner = true; // Set winner to true
            console.log('winner', winner); // test
            return;
        }
    }
}

// Check if the game is a tie
function checkForTie() {
    if (winner) return; // if there's a winner, do nothing

    tie = board.every(square => square !== ''); // check if all squares are taken
    console.log('tie', tie); // test
}

// Switch the player's turn
function switchPlayerTurn() {
    if (winner) return; // if there's a winner, do nothing
    if (turn === player_x) {
        turn = player_o; // switch to Player O
    } else {
        turn = player_x; // switch to Player X
    }

    console.log('turn', turn); // test
}


// Create Reset functionality.
function reset() {
   init(); // re-initialize the game state
}

/*----------------------------- Event Listeners -----------------------------*/

// Handle a player clicking a square with a `handleClick` function.
document.addEventListener('DOMContentLoaded', init); // start game when dom is downloaded
squareEls.forEach(square => square.addEventListener('click', handleClick)); // add click event listeners to each square

// Added a button in the HTML doc and now need to add in the event listener
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', reset); // Add click event listener to the reset button
