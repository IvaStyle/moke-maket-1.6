const feedbackBtn = document.querySelector(".button-modal-popup");
const html = document.querySelector("html");
const windowWrapper = document.querySelector(".modal-window");
const closeBtnWindow = document.querySelector(".btn-window");
const windowsTitle = document.querySelector(".window__title");
const callForm = document.querySelectorAll(".call-forms");
const feedbackForms = document.querySelectorAll(".feedback-form");
const callBtn = document.querySelectorAll(".prices__btn");
const battonCall = document.querySelector(".call_call")

battonCall.addEventListener("click", function () {
  html.style.overflowY = "hidden";
  windowWrapper.style = "display:flex; top:0;";
  windowsTitle.innerHTML = "Обратная связь";
  callForm.forEach((elem) => {
    elem.style.display = "none";
  });
  feedbackForms.forEach((elem) => {
    elem.style.display = "block";
  });
});

feedbackBtn.addEventListener("click", function () {
  html.style.overflowY = "hidden";
  windowWrapper.style = "display:flex; top:0;";
  windowsTitle.innerHTML = "Обратная связь";
  callForm.forEach((elem) => {
    elem.style.display = "none";
  });
  feedbackForms.forEach((elem) => {
    elem.style.display = "block";
  });
});

callBtn.forEach((btns) => {
  btns.addEventListener("click", function () {
    html.style.overflowY = "hidden";
    windowWrapper.style = "display:flex; top:0;";
    windowsTitle.innerHTML = "Заказать звонок";
    feedbackForms.forEach((elem) => {
      elem.style.display = "none";
    });
    callForm.forEach((elem) => {
      elem.style.display = "block";
    });
  });
});

closeBtnWindow.addEventListener("click", function () {
  windowWrapper.style.display = "none";
  html.style = "none";
});