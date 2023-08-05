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

// ------------------Contact Us---------------------
function send() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var massage = document.getElementById("massage").value;
  var body =
    "Name: " +
    name +
    "<br/> Email: " +
    email +
    "<br/> Phone: " +
    phone +
    "<br/> Subject" +
    subject +
    "<br/> Massage: " +
    massage;

  Email.send({
    SecureToken: "1dc5233e-ab7b-406e-a85f-ad8f7c5a6b48",
    To: "tdcalumtech@gmail.com",
    From: "dhishanc.creation@gmail.com",
    Subject: subject,
    Body: body,
  }).then(
      message => {
        if (message == "OK") {
          swal("Successfull", "Your Data Successfull Recevied", "success");
        }
        else{
          swal("Something Wrong", "Your Data is not Recevied", "error");
        }
      }
    );
}
