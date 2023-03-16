const body = document.querySelector("body");
const navbar = document.querySelector(".menu");
const menu = document.querySelector(".menu__list");
const barBtn = document.querySelector(".menu__btn-bar");
const cancelBtn = document.querySelector(".menu__btn-cancel");
barBtn.onclick = () => {
    menu.classList.add("active");
    barBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = () => {
    menu.classList.remove("active");
    barBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}