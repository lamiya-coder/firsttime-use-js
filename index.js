const title = document.getElementById("title");
const desc = document.getElementById("desc");
const changeBtn = document.getElementById("change-button");
const changeTheme = document.getElementById("theam-button");
changeBtn.addEventListener("click", function () {
  title.textContent = " Ami parsi ";
  desc.textContent = " i'm doing great";
});
changeTheme.addEventListener("click", function () {
  document.body.classList.toggle("black");
});
