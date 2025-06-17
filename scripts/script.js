// !MENU
const menu = document.querySelector(".btn-menu");
const closeMenu = document.querySelector(".btn-close");
const nav = document.querySelector(".box-nav");

menu.addEventListener("click", () => {
  nav.classList.add("is-open");
  document.body.classList.add("no-scroll");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
});

// !MODAL WINDOW
const orderButton = document.querySelector(".btn-order");
const modalWindow = document.querySelector(".box-modal-bg");
const closeModal = document.querySelector(".btn-modal");

orderButton.addEventListener("click", () => {
  modalWindow.classList.add("is-open");
});

closeModal.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
});

// alert("Всi кнопки функцiональнi");
