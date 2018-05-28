var phoneBtn = document.getElementById("phone-btn");
var phoneNumbers = document.getElementById("phone-numbers");
var footerPhoneBtn = document.getElementById("footer-phone-btn");
var footerPhoneNumbers = document.getElementById("footer-phone-numbers");


var menuBtnOpen = document.getElementById("btn-open");
var menuBtnClose = document.getElementById("btn-close");
var headerInfo = document.getElementById("header-info");
var mainNav = document.getElementById("main-nav");
var order = document.getElementById("order");


footerPhoneBtn.addEventListener("click", function(event) {
  event.preventDefault();
  footerPhoneNumbers.classList.toggle("modal-content-show");
});

phoneBtn.addEventListener("click", function(event) {
  event.preventDefault();
  phoneNumbers.classList.toggle("modal-content-show");
});


menuBtnOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.add("modal-content-show");
  menuBtnClose.classList.add("modal-content-show");
  headerInfo.classList.add("modal-content-show");
  order.classList.add("modal-order");
});


menuBtnClose.addEventListener("click", function(event) {
  event.preventDefault();  
  menuBtnClose.classList.remove("modal-content-show");  
  headerInfo.classList.remove("modal-content-show");
  mainNav.classList.remove("modal-content-show");
  order.classList.remove("modal-order");
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (menuBtnClose.classList.contains("modal-content-show")) {
	  menuBtnClose.classList.remove("modal-content-show");  
      headerInfo.classList.remove("modal-content-show");
      mainNav.classList.remove("modal-content-show");
      order.classList.remove("modal-order");
	}
  }
});



var productsItem = document.querySelectorAll(".products__item");
var listWidth = 248;

for (var i = 0; i < productsItem.length; i++) {
  var productsProduct = productsItem[i].querySelectorAll(".products__product");
  
  var col = 2;
  for (var j = 0; j < productsProduct.length; j++) {
	
    var productWidth = productsProduct[j].clientWidth;//ширина ссилкі
	  if (productWidth >= listWidth * 0.46) {
		col = 1;
	  }
  }
  
  if (col == 2) {
	productsItem[i].classList.add("products__item--two-col");
  }
}