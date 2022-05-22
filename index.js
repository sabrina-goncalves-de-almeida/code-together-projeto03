//Menu responsivo
let show = true;

const menu = document.querySelector(".menu")
const menuResponsivo = menu.querySelector(".menu-responsivo")


menuResponsivo.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menu.classList.toggle("on", show)
    show = !show;

})
