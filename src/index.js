const b = document.querySelector(".button");
function clickButton() {
  const x = document.querySelector(".text");
  x.innerHTML = "Привет";
}

b.addEventListener("click", clickButton);
