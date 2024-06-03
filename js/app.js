console.log('am i working?')

/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.

const player_x = 'x'
const player_o = 'o'

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.

let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelectorAll('#message')

console.log(squareEls)
console.log (messageEl)

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init(){
    board = ['','','','','','','','','']; //will need to be empty strings 9 in total to represent the 9 boxes/squares in the tic tac toe game
    turn = player_x;
    winner = false; //this will have to be false = beggining of the game. If the premise was true then this would mean the game was already played and there is a winner 
    tie = false; //same theory applies - if tie = false then this would be an end of a game. 

render();

}

//4) The state of the game should be rendered to the user.
function render(){
}


function updateBoard(){
}


//7) Create Reset functionality.


/*----------------------------- Event Listeners -----------------------------*/

//6) Handle a player clicking a square with a `handleClick` function.

