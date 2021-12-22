const nav = document.getElementById("nav");
const logoImg = document.querySelector(".logo-img");
const navItem = document.querySelectorAll(".nav__item");

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const services = document.getElementById("services");
const achievements = document.getElementById("achievements");
const portfolio = document.getElementById("portfolio");
const advantages = document.getElementById("advantages");
const team = document.getElementById("team");
const comments = document.getElementById("comments");
const blog = document.getElementById("blog");
const information = document.getElementById("information");
const connection = document.getElementById("connection");
const menuCheckbox = document.getElementById("checkbox");
let navList = document.querySelector(".nav__list");
const hamburgerBtn = document.getElementsByClassName("hamburger-btn");

window.addEventListener("scroll", navControl);

function navControl(e) {
  const scroll =
    (document.documentElement.scrollTop || document.body.scrollTop) + 100;
  if (scroll && scroll >= 200) {
    nav.classList.add("nav-scrolled");
    logoImg.src = "img/logo-dark.png";
  } else {
    nav.classList.remove("nav-scrolled");
    logoImg.src = "img/logo-light.png";
  }

  if (scroll < about.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[0].classList.add("text-primaryColor");
  } else if (about.offsetTop < scroll && scroll <= skills.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[1].classList.add("text-primaryColor");
  } else if (skills.offsetTop < scroll && scroll <= services.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[2].classList.add("text-primaryColor");
  } else if (services.offsetTop < scroll && scroll <= achievements.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[3].classList.add("text-primaryColor");
  } else if (achievements.offsetTop < scroll && scroll <= portfolio.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[4].classList.add("text-primaryColor");
  } else if (portfolio.offsetTop < scroll && scroll <= advantages.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[5].classList.add("text-primaryColor");
  } else if (advantages.offsetTop < scroll && scroll <= team.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[6].classList.add("text-primaryColor");
  } else if (team.offsetTop < scroll && scroll <= comments.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[7].classList.add("text-primaryColor");
  } else if (comments.offsetTop < scroll && scroll <= blog.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[8].classList.add("text-primaryColor");
  } else if (blog.offsetTop < scroll && scroll <= information.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[9].classList.add("text-primaryColor");
  } else if (information.offsetTop < scroll && scroll <= connection.offsetTop) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[10].classList.add("text-primaryColor");
  } else if (connection.offsetTop < scroll && scroll) {
    navItem.forEach((item) => item.classList.remove("text-primaryColor"));
    navItem[11].classList.add("text-primaryColor");
  }
}

navControl();

// corousel

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 300,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var map = L.map("map").setView([35.730428, 51.3383063], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map).openPopup();

////////////open menu with checkbox

menuCheckbox.onchange = function (event) {
  if (event.target.checked) {
    navList.classList.remove("hidden");
    navList.classList.add("flex");
  } else {
    navList.classList.remove("flex");
    navList.classList.add("hidden");
  }
};

////////////change menubutton & menu with resize

window.addEventListener("resize", (event) => {
  const vw = document.documentElement.clientWidth;
  if (vw > 1030) {
    menuCheckbox.checked = false;
    navList.classList.add("hidden");
  }
});

navItem.forEach((item) => item.addEventListener("click", closeNav));

function closeNav() {
  const vw = document.documentElement.clientWidth;
  if (vw < 1030) {
    navList.classList.remove("flex");
    navList.classList.add("hidden");
    menuCheckbox.checked = false;
  }
}
