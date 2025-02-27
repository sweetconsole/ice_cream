const header = document.getElementById("header")

window.onscroll = function (event) {
    const verticalScroll = window.scrollY;

    if (verticalScroll === 0) {
        header.classList = "header"
    } else {
        header.classList = "header header__background"
    }
}

