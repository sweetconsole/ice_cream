const header = document.getElementById("header")
const menu = document.getElementById("menu")

window.onscroll = function (event) {
    const verticalScroll = window.scrollY;

    if (verticalScroll === 0) {
        header.classList = "header"
    } else {
        header.classList = "header header__background"
    }
}

function viewMenu() {
    menu.classList.toggle("menu-active")
}

