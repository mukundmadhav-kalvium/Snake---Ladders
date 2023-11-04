const getName = localStorage.getItem("username");

const uname = document.getElementById("uname");

uname.innerHTML = getName;

const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", (e)=>{
    window.location.href = "./index.html";
})