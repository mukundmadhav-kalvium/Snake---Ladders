// "Disclaimer: I, Mukund Madhav, have solely created all the JavaScript."

// Getting username from local storage
const getName=localStorage.getItem("username");

// Targeting HTML element with id "uname"
const uname = document.getElementById('uname');

// Changing username in HTML
uname.innerText= getName;

// Targeting HTML element with id "continue-btn"
const continueBtn = document.getElementById("continue-btn");

// Adding eventlistener to continueBtn
continueBtn.addEventListener("click",()=>{
    // Referring to game.html
    window.location.href = "./game.html";
})
