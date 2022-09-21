function seeItem() {
  document.getElementById("dropdown-fisrt-item").style.display = "none";
  document.getElementById("hide-dropdown").style.display = "block";
}
$("ul.dropdown-menu .drop-item").on("click", function (event) {
  event.stopPropagation();
});
function backToMain(){
  document.getElementById("dropdown-fisrt-item").style.display = "block";
  document.getElementById("hide-dropdown").style.display = "none";

}