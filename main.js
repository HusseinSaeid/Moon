let btn = document.querySelector(".fa-circle-up");
let bar = document.querySelector(".bar");
let icon = document.querySelector(".header-icon");
let ui = document.querySelector(".uii");
let c = 0;

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
icon.onclick = function () {
  if (c === 0) {
    ui.style.display = "block";
    bar.style.width = "100%";

    c++;
  } else {
    ui.style.display = "none";
    bar.style.width = "60%";
    c--;
  }
};
