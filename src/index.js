
let b = document.querySelector(".button");
function clickButton (){
    let x = document.querySelector(".text");
    x.innerHTML = "Привет"
};

b.addEventListener("click", clickButton)
