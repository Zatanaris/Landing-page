const OpenBtn = document.querySelector("#open--menu--btn");
const CloseBtn = document.querySelector("#close--btn");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

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
