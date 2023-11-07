const uname = document.getElementById('uname');
const enteredName = document.getElementById('entered-name');

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click",()=>{
    window.location.href = "./instruction.html";
    localStorage.setItem("username", enteredName.value);
    
})

const user = localStorage.getItem("username");
uname.innerText= user;