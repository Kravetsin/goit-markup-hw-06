const menu = document.querySelector(".btn-menu");
const closeMenu = document.querySelector(".btn-close");
const nav = document.querySelector(".box-nav");

menu.addEventListener("click", () => {
  nav.classList.add("is-open");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("is-open");
});
