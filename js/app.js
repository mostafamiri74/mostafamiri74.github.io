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
    strings: ["توسعه دهنده وبسایت هستم.", "برنامه نویس انگیولار هستم."],
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

// send email
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      alert("پیام شما با موفقیت ارسال گردید.");
      form.reset();
    })
    .catch((error) => {
      alert("پیام شما به دلایلی ارسال نگردید.لطفا مجددا امتحان کنید..");
    });
}
form.addEventListener("submit", handleSubmit);
