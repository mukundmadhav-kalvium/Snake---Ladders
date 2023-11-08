// "Disclaimer: I, Mukund Madhav, have solely created all the JavaScript."

// Targeting HTML elements with ids "uname" and "entered-name"
const uname = document.getElementById('uname');
const enteredName = document.getElementById('entered-name');

// Targeting HTML element with id "start-btn"
const startBtn = document.getElementById("start-btn");
// Adding eventlistener to startBtn
startBtn.addEventListener("click",()=>{
    // Referring to instruction.html
    window.location.href = "./instruction.html";
    // Setting username in local storage
    localStorage.setItem("username", enteredName.value);
    
})

// Getting username from local storage
const user = localStorage.getItem("username");
// Changing username in HTML
uname.innerText= user;