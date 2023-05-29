const OpenBtn = document.querySelector("#open--menu--btn");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
   header.classList[window.scrollY > 80 ? "add" : "remove"]("active");
});

OpenBtn.addEventListener("click", () => {
   OpenBtn.classList.toggle("bx-x");
   navbar.classList.toggle("active");
});
