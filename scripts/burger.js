const burger = document.querySelector(".burger-header");
const burgerOpenButton = document.querySelector(".burger-button-open");
const burgerCloseButton = document.querySelector(".burger-button-close");

burgerOpenButton.addEventListener("click", () => {
   burgerOpenButton.style.display = "none";
   burger.style.display = "block";
});
burgerCloseButton.addEventListener("click", () => {
   burger.style.display = "none";
   burgerOpenButton.style.display = "block";
})