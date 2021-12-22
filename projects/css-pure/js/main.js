const about = document.getElementById("about");
const comment = document.getElementById("comment");
const brand = document.getElementById("brand");
const statistic = document.getElementById("statistic");
const price = document.getElementById("price");
const nav = document.getElementById("nav");
const link = document.querySelectorAll(".navigation__link");

// change active nav btn with scroll

window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (scroll < about.offsetTop - 92) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[0].classList.add("navigation__active");
  }

  if (about.offsetTop - 92 <= scroll && scroll < comment.offsetTop - 92) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[1].classList.add("navigation__active");
  }

  if (comment.offsetTop - 92 <= scroll && scroll < brand.offsetTop - 92) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[2].classList.add("navigation__active");
  }

  if (brand.offsetTop - 92 <= scroll && scroll < statistic.offsetTop - 92) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[3].classList.add("navigation__active");
  }

  if (statistic.offsetTop - 92 <= scroll && scroll < price.offsetTop - 92) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[4].classList.add("navigation__active");
  }

  if (price.offsetTop - 92 <= scroll) {
    for (let l of link) {
      l.classList.remove("navigation__active");
    }
    link[5].classList.add("navigation__active");
  }
});

// change active nav btn with click

let link2 = document.querySelectorAll(".nav__link");
for (let i of link2) {
  i.addEventListener("click", () => {
    for (let j of link2) {
      j.classList.remove("navigation__active");
    }
    i.classList.add("navigation__active");
  });
}
