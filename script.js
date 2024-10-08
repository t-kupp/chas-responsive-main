const openBtn = document.querySelector("#open");
const closeHamburgerBtn = document.querySelector("#closeHamburger");
const navLinks = document.querySelectorAll(".navlink");
const memberBtn = document.querySelector("#member");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");
const closeFormBtn = document.querySelector("#closeForm");

openBtn.addEventListener("click", () => {
  toggleClasses();
});

closeHamburgerBtn.addEventListener("click", () => {
  toggleClasses();
});

function toggleClasses() {
  openBtn.classList.toggle("hide");
  closeHamburgerBtn.classList.toggle("show");
  navLinks.forEach((e) => {
    e.classList.toggle("show");
  });
}

memberBtn.addEventListener("click", () => {
  form.classList.remove("hide");
});

closeFormBtn.addEventListener("click", () => {
  form.classList.toggle("hide");
});
