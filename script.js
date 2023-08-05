// ------Navigation + hamburger------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link, .nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ------ Services Slider ------
var swiper = new Swiper(".slide-content-s", {
  slidesPerView: 4,
  spaceBetween: 30,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination .swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    451: {
      slidesPerView: 2,
    },
    651: {
      slidesPerView: 3,
    },
    851: {
      slidesPerView: 4,
    },
  },
});

// ------ Project Slider ------
var swiper = new Swiper(".slide-content-p", {
  slidesPerView: 3,
  spaceBetween: 30,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination .swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
    },
    851: {
      slidesPerView: 3,
    },
  },
});