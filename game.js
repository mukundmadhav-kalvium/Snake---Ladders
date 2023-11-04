const getName=localStorage.getItem("username");

const uname = document.getElementById('uname');

uname.innerText= getName;


const rollBtn = document.getElementById("roll-dice");
rollBtn.addEventListener("click",(e)=>{
    window.location.href = "./result.html";
})
