////////////         DOM Elements       ////////////////
const triggerBtn = document.querySelector(".master");
const closeBtn = document.querySelector(".close");
const wrapper = document.querySelector(".modal_wrapper");
const container = document.querySelector(".modal_container");

triggerBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  wrapper.style.display = "flex";
  container.classList.add("swipeIn");
}
function closeModal() {
  wrapper.style.display = "none";
  container.classList.add("swipeOut");
}
