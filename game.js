// "Disclaimer: I, Mukund Madhav, have solely created all the JavaScript."

// Getting username from local storage
const getName = localStorage.getItem("username");

// Targeting HTML element with id "uname"
const uname = document.getElementById("uname");

// Changing username in HTML
uname.innerHTML = getName;

// Defining turn variable to change the player
var turn = 1;

// Defining player1sum and player2sum to add score of players
var player1sum = 0;
var player2sum = 0;

// Defining rollingSound to store the audio
const rollingSound = new Audio ("./assets/Dice-rolling.mp3");

// Targeting HTML element with id "dice-score"
const score = document.getElementById("dice-score");

// Defining Snakes and Ladders in an object
const snakesAndLadders = {
    4 : 22,
    10 : 29,
    14 : 77,
    33 : 51,
    40 : 20,
    50 : 16,
    61 : 82,
    74 : 90,
    81 : 78,
    92 : 52,
    95 : 36
};

// Defining rollDice function to roll the dice
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Defining movePawn function to move the pawn
function movePawn(chance) {
    // Defining boxId and pawnId variables to use in the code
    var boxId, pawnId;
    // Storing the dice value in a variable Total
    Total = rollDice();
    // Changing the score in HTML
    score.innerText = Total;

    // Condition if the chance is of player 1
    if (chance == "1") {
        // Adding dice value to player's score
        player1sum += Total;

        // Condition if the player lands on a snake or ladder
        if (snakesAndLadders[player1sum]) {
            player1sum = snakesAndLadders[player1sum];
        } 
        // Condition if the player reaches 100
        else if (player1sum == 100) {
            // winningSound.play();
            window.location.href = "./result.html";
        }
        // Condition if the player goes beyond 100
        else if (player1sum > 100){
            player1sum = player1sum - Total;
        }

        // Storing player 1's score in local storage
        localStorage.setItem("Player 1 Score",player1sum)
        // console.log("player1:", player1sum);
        
        // Targeting HTML elements with ids of box and pawn
        boxId = document.getElementById(`b${player1sum}`);
        pawnId = document.getElementById(`pawn-${chance}`);
    } 
    // Condition if the chance is of player 2
    else if (chance == "2") {
        // Adding dice value to player's score
        player2sum += Total;

        // Condition if the player lands on a snake or ladder
        if (snakesAndLadders[player2sum]) {
            player2sum = snakesAndLadders[player2sum];
        }
        // Condition if the player reaches 100
        else if (player2sum == 100) {
            // winningSound.play();
            window.location.href = "./result.html";
        }
        // Condition if the player goes beyond 100
        else if (player2sum > 100){
            player2sum = player2sum - Total;
        }

        // Storing player 1's score in local storage
        localStorage.setItem("Player 2 Score",player2sum)
        // console.log("player2:", player2sum);

        // Targeting HTML elements with ids of box and pawn
        boxId = document.getElementById(`b${player2sum}`);
        pawnId = document.getElementById(`pawn-${chance}`);
    }

    // Condition if boxId and pawnId are not null or undefined
    if (boxId && pawnId) {
        // Setting timeout for delaying the movement of pawns
        setTimeout(() => {
            // Removing pawn from previous position
            pawnId.parentNode.removeChild(pawnId);
            // Adding pawn to new position
            boxId.appendChild(pawnId);
        }, 1000);
    }
}

// Targeting HTML element with id "dice-btn" and adding eventlistener to it
var rollBtn = document.getElementById("dice-btn").addEventListener("click",function(){
    // Playing the rollingSound
    rollingSound.play();
    // Calling rollDice function
    rollDice();

    // Condition if turn is odd then it's player 1's turn
    if (turn % 2 !=0){
        // Changing the turn in HTML
        document.getElementById("turn").innerText = "Red's Turn";
        // Calling movePawn function
        movePawn("1")
    }
    // Condition if turn is even then it's player 2's turn
    else if (turn % 2 ==0){
        // Changing the turn in HTML
        document.getElementById("turn").innerText = "Yellow's Turn";
        // Calling movePawn function
        movePawn("2")
    }
    // Incrementing the turn
    turn++;
})