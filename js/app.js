function seeItem() {
  document.getElementById("dropdown-fisrt-item").style.display = "none";
  document.getElementById("hide-dropdown").style.display = "block";
}
$("ul.dropdown-menu .drop-item").on("click", function (event) {
  event.stopPropagation();
});
function backToMain() {
  document.getElementById("dropdown-fisrt-item").style.display = "block";
  document.getElementById("hide-dropdown").style.display = "none";
}
function modalClick() {
  document.getElementById("modalHeader-img").style.display = "none";
  document.getElementById("slider-header").innerText = "What is your age?";
  document.getElementById("first-text").innerText = "Younger then 18";
  document.getElementById("sec-text").innerText = "18 - 29 years old";
  document.getElementById("third-text").innerText = "30 - 39 years old";
}
