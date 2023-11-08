// "Disclaimer: I, Mukund Madhav, have solely created all the JavaScript."

// Getting username from local storage
const getName = localStorage.getItem("username");

// Targeting HTML element with id "uname"
const uname = document.getElementById("uname");

// Changing username in HTML
uname.innerHTML = getName;

// Defining winningSound to store the audio
const winningSound = new Audio ("./assets/WinningSound.mp3");
// Playing the winningSound
winningSound.play();


// Targeting HTML elements with ids "stats-1" and "stats-2"
var stats1 = document.getElementById("stats-1");
var stats2 = document.getElementById("stats-2");


// Getting player 1 and player 2 scores from local storage and converting it from string to integer
var result1 = parseInt(localStorage.getItem("Player 1 Score"));
var result2 = parseInt(localStorage.getItem("Player 2 Score"));

//Storing winnerPhrases and LooserPhrases in array
const winnerPhrases = ["You are the Champion!", "Victory is yours!", "Flawless Victory!", "First Place."];
const LooserPhrases = ["Defeat.", "Game Over.", "Better Luck Next Time.", "Second Place."];

// Generating random number to select random winningPhrases and LooserPhrases
index = Math.floor(Math.random()*3);


// Condition if Player-1 score is greater than Player-2
if (result1 > result2){
    stats1.innerHTML = winnerPhrases[index];
    stats2.innerHTML = LooserPhrases[index];
}

// Condition if Player-2 score is greater than Player-1
else if (result1 < result2){
    stats1.innerHTML = LooserPhrases[index];
    stats2.innerHTML = winnerPhrases[index];
}

// Targeting HTML element with id play-btn
const playBtn = document.getElementById("play-btn");

// Adding eventlistener to playBtn
playBtn.addEventListener("click", ()=>{
    // Referring to index.html
    window.location.href = "./index.html";
})