const menuCheckbox = document.getElementById("checkbox");
let profile = document.getElementsByClassName("profile");
const hamburgerBtn = document.getElementsByClassName("hamburger-btn");

////////////open menu with checkbox

menuCheckbox.onchange = function (event) {
  if (event.target.checked) {
    console.log(event.target.checked);
    profile[0].classList.add("profile-active");
    hamburgerBtn[0].classList.add("hamburger-active");
    menuCheckbox.classList.add("hamburger-active");
  } else {
    profile[0].classList.remove("profile-active");
    hamburgerBtn[0].classList.remove("hamburger-active");
    menuCheckbox.classList.remove("hamburger-active");
  }
};

////////////change menubutton & menu with resize

window.addEventListener("resize", (event) => {
  const vw = document.documentElement.clientWidth;
  if (vw > 1100) {
    profile[0].classList.remove("profile-active");
    hamburgerBtn[0].classList.remove("hamburger-active");
    menuCheckbox.classList.remove("hamburger-active");
    menuCheckbox.checked = false;
  }
});

//////////////// typed.js

window.addEventListener("DOMContentLoaded", (event) => {
  var options = {
    strings: ["طراح وبسایت هستم.", "برنامه نویس انگولار هستم."],
    typeSpeed: 130,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    showCursor: false,
  };

  var typed = new Typed("#Typed", options);
});
