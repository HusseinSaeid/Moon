let Btn = document.querySelector(".fa-circle-up");
let Bar = document.querySelector(".bar");
let Icon = document.querySelector(".header-icon");
let Ui = document.querySelector(".ui");
let isUiVisible = false;

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    Btn.style.visibility = "visible";
  } else {
    Btn.style.visibility = "hidden";
  }
};
Btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
Icon.onclick = function () {
  if (isUiVisible === false) {
    Ui.style.display = "block";
    Bar.style.width = "100%";

    isUiVisible = true;
  } else {
    Ui.style.display = "none";
    Bar.style.width = "60%";
    isUiVisible = false;
  }
};
