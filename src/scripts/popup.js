const body = document.getElementById("home")
const popUpBackground = document.getElementById("popUpBackground")

const popUpLocations = document.getElementById("popUpLocations")
const popUpFranchise = document.getElementById("popUpFranchise")
const popUpHow = document.getElementById("popUpHow")
const popUpBuyNow = document.getElementById("popUpBuyNow")
const popUpProduct = document.getElementById("popUpProduct");

const popUpHowVideo = document.getElementById("popUpHowVideo")

function viewBackground() {
    popUpBackground.classList.toggle("popup__background-active");
    body.classList.toggle("body__popup-active");
}

function viewPopUp(name) {
    if (name === "locations") {
        popUpLocations.classList.toggle("popup-active");
    } else if (name === "franchise") {
        popUpFranchise.classList.toggle("popup-active");
    } else if (name === "how") {
        popUpHow.classList.toggle("popup-active");
        popUpHowVideo.pause()
    } else if (name === "buyNow") {
        popUpBuyNow.classList.toggle("popup-active");
    } else if (name === "buyProduct") {
        popUpProduct.classList.toggle("popup-active");
    }
    viewBackground()
}

function selectProduct(color, element) {
    element.classList.toggle(`popup__buy_now_product_block-${color}-active`);
}