var phoneBtn = document.getElementById("phone-btn");
var phoneNumbers = document.getElementById("phone-numbers");


var menuBtnOpen = document.getElementById("btn-open");
var menuBtnClose = document.getElementById("btn-close");
var headerInfo = document.getElementById("header-info");
var mainNav = document.getElementById("main-nav");


phoneBtn.addEventListener("click", function(event) {
  event.preventDefault();
  phoneNumbers.classList.toggle("modal-content-show");
});


menuBtnOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.add("modal-content-show");
  menuBtnClose.classList.add("modal-content-show");
  headerInfo.classList.add("modal-content-show");
});


menuBtnClose.addEventListener("click", function(event) {
  event.preventDefault();  
  menuBtnClose.classList.remove("modal-content-show");  
  headerInfo.classList.remove("modal-content-show");
  mainNav.classList.remove("modal-content-show");
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (menuBtnClose.classList.contains("modal-content-show")) {
	  menuBtnClose.classList.remove("modal-content-show");  
      headerInfo.classList.remove("modal-content-show");
      mainNav.classList.remove("modal-content-show");
	}
  }
});