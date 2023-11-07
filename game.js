// "Disclaimer: I, Mukund Madhav, have solely created all the JavaScript."

const getName = localStorage.getItem("username");

const uname = document.getElementById("uname");

uname.innerHTML = getName;

var turn = 1;
var player1sum = 0;
var player2sum = 0;

const rollingSound = new Audio ("./assets/Dice-rolling.mp3");

const score = document.getElementById("dice-score");

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

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function movePawn(chance) {
    var boxId, pawnId;
    Total = rollDice();
    score.innerText = Total;

    if (chance == "1") {
        player1sum += Total;
        if (snakesAndLadders[player1sum]) {
            player1sum = snakesAndLadders[player1sum];
        } else if (player1sum == 100) {
            // winningSound.play();
            window.location.href = "./result.html";
        }else if (player1sum > 100){
            player1sum = player1sum - Total;
        }
        localStorage.setItem("Player 1 Score",player1sum)
        // console.log("player1:", player1sum);
        
        boxId = document.getElementById(`b${player1sum}`);
        pawnId = document.getElementById(`pawn-${chance}`);
    } else if (chance == "2") {
        player2sum += Total;
        if (snakesAndLadders[player2sum]) {
            player2sum = snakesAndLadders[player2sum];
        } else if (player2sum == 100) {
            // winningSound.play();
            window.location.href = "./result.html";
        }else if (player2sum > 100){
            player2sum = player2sum - Total;
        }
        localStorage.setItem("Player 2 Score",player2sum)
        // console.log("player2:", player2sum);

        boxId = document.getElementById(`b${player2sum}`);
        pawnId = document.getElementById(`pawn-${chance}`);
    }

    if (boxId && pawnId) {
        setTimeout(() => {
            pawnId.parentNode.removeChild(pawnId);
            boxId.appendChild(pawnId);
        }, 1000);
    }
}

var rollBtn = document.getElementById("dice-btn").addEventListener("click",function(){
    rollingSound.play();
    rollDice();
    if (turn % 2 !=0){
        document.getElementById("turn").innerText = "Red's Turn";
        movePawn("1")
    }
    
    else if (turn % 2 ==0){
        document.getElementById("turn").innerText = "Yellow's Turn";
        movePawn("2")
    }
    turn++;
})