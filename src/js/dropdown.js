const html = document.querySelector("html");
const popupWrapper = document.querySelector(".left_menu");
const shadowWrapper = document.querySelector(".wrapper-shadow-popup")
const btnAside = document.querySelector(".header_button_left");
const headerButtonPopUp = document.querySelector(".burger")

btnAside.addEventListener("click", function () {
  html.style = "";
  popupWrapper.style =
  "display: none;";
  shadowWrapper.style = ""
});

headerButtonPopUp.addEventListener("click", function () {
  html.style.overflowY = "hidden";
  popupWrapper.style =
    "display: block;";
  shadowWrapper.style = "display: block; top:0; left:0; width: 100%; background: rgba(255, 255, 255, 0.9); z-index:1; height: 100%; position: absolute;";
});
