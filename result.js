const getName = localStorage.getItem("username");

const uname = document.getElementById("uname");

uname.innerHTML = getName;

const winningSound = new Audio ("./assets/WinningSound.mp3");
winningSound.play();

var stats1 = document.getElementById("stats-1");
var stats2 = document.getElementById("stats-2");

var result1 = parseInt(localStorage.getItem("Player 1 Score"));
var result2 = parseInt(localStorage.getItem("Player 2 Score"));

const winnerPhrases = ["You are the Champion!", "Victory is yours!", "Flawless Victory!", "First Place."];
const LooserPhrases = ["Defeat.", "Game Over.", "Better Luck Next Time.", "Second Place."];

index = Math.floor(Math.random()*3);

if (result1 > result2){
    stats1.innerHTML = winnerPhrases[index];
    stats2.innerHTML = LooserPhrases[index];
}
else if (result1 < result2){
    stats1.innerHTML = LooserPhrases[index];
    stats2.innerHTML = winnerPhrases[index];
}

const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", ()=>{
    window.location.href = "./index.html";
})