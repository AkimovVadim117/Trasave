const burger = document.querySelector(".burger-header");
const burgerOpenButton = document.querySelector(".burger-button-open");
const burgerCloseButton = document.querySelector(".burger-button-close");

burgerOpenButton.addEventListener("click", () => {
   burgerOpenButton.style.display = "none";
   burger.style.display = "block";
   document.querySelector("body").style.overflow = "hidden";
});
burgerCloseButton.addEventListener("click", () => {
   burger.style.display = "none";
   burgerOpenButton.style.display = "block";
   document.querySelector("body").style.overflow = "";
})