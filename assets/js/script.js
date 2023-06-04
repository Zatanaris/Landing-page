const OpenBtn = document.querySelector("#open--menu--btn");
const CloseBtn = document.querySelector("#close--btn");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");
const Navlinks = document.querySelectorAll(".nav--link");

Navlinks.forEach((link) => {
   link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
         navbar.classList.remove("active");
      }
   });
});

const ArrElements = [CloseBtn, OpenBtn];

const eventElements = function (elements, typeEvent, callback) {
   for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(typeEvent, callback);
   }
};

const toggleNav = function () {
   navbar.classList.toggle("active");
};

eventElements(ArrElements, "click", toggleNav);

window.addEventListener("scroll", () => {
   header.classList[window.scrollY > 80 ? "add" : "remove"]("active");
});
