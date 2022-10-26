//función para desplegar el menú hamburguesa//
const MENUBTN = document.querySelector('.menu-btn');
const NAVMENU = document.querySelector('.nav-menu')
MENUBTN.addEventListener('click', () => {
    NAVMENU.classList.toggle('nav-menu_visible')
    MENUBTN.classList.toggle('open')
});

//función para cambiar el tamaño de la navbar//
window.onscroll = scrollShowNav;

function scrollShowNav() {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".nav-bar").style.height = "6rem";
    document.querySelector(".logo img").style.width = "80px";
} else {
    document.querySelector(".nav-bar").style.height = "10rem";
    document.querySelector(".logo img").style.width = "150px";
}
}