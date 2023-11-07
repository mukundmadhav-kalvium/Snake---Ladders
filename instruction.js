const getName=localStorage.getItem("username");

const uname = document.getElementById('uname');

uname.innerText= getName;


const continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click",()=>{
    window.location.href = "./game.html";
})
