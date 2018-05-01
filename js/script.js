var phoneBtn = document.getElementById("phone-btn");
var phoneNumbers = document.getElementById("phone-numbers");

phoneBtn.addEventListener("click", function(event) {
  event.preventDefault();
  phoneNumbers.classList.toggle("modal-content-show");
});