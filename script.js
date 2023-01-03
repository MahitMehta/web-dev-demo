const proButton = document.querySelector(".pro_class");
const menu = document.querySelector(".menu");

proButton.addEventListener("click", () => {
    menu.classList.toggle("menu-hidden");
    menu.classList.toggle("menu-visible");
})