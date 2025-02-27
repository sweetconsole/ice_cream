const commentsCounter = document.getElementById("commentsCounter").children;
const commentPhoto = document.getElementById("commentPhoto");
const commentText = document.getElementById("commentText");
const commentAuthor = document.getElementById("commentAuthor");

const commentsImage = document.getElementById("commentsImage");
const timeUpdateCommentsImage = 15
let commentsImageId = 1

const comments = [
    {
        photo: "comments_author_1.webp",
        text: "Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!",
        author: "Bryan, New-York",
    },
    {
        photo: "comments_author_2.webp",
        text: "Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!",
        author: "Diana, Chicago",
    },{
        photo: "comments_author_3.webp",
        text: "I love eating popsicles on a hot day. Yours is always delicious. I recommend your cafe to everyone I know.",
        author: "Sam, Los Angeles",
    },
]

function changeComment(id, element) {
    for (let count = 0; count < commentsCounter.length; count++) {
        if (count === id) {
            element.classList.add("comments__count_circle-active");
        } else {
            commentsCounter[count].classList = "comments__count_circle"
        }
    }

    commentPhoto.src = `./image/${comments[id].photo}`
    commentText.innerText = comments[id].text
    commentAuthor.innerText = comments[id].author
}

function changeCommentImage() {
    if (commentsImageId === 3) {
        commentsImageId = 1

    } else {
        commentsImageId += 1
    }

    if (commentsImageId === 1) {
        commentsImage.classList.remove(`comments__image-3`)
    } else {
        commentsImage.classList.remove(`comments__image${commentsImageId-1}`)
    }

    commentsImage.classList.add(`comments__image-${commentsImageId}`)
}

window.onload = function() {
    setInterval(changeCommentImage, timeUpdateCommentsImage*1000)
}
const header = document.getElementById("header")

window.onscroll = function (event) {
    const verticalScroll = window.scrollY;

    if (verticalScroll === 0) {
        header.classList = "header"
    } else {
        header.classList = "header header__background"
    }
}


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


const popUpProductName = document.getElementById("popUpProductName");
const popUpProductImage = document.getElementById("popUpProductImage");
const popUpImageBackground = document.getElementById("popUpImageBackground");
const popUpProductNutritionalValues = document.getElementById("popUpProductNutritionalValues").children;
const popUpProductKCal = document.getElementById("popUpProductKCal");
const popUpProductProtein = document.getElementById("popUpProductProtein");
const popUpProductFats = document.getElementById("popUpProductFats");
const popUpProductCarbs = document.getElementById("popUpProductCarbs");
const popUpProductIngredients = document.getElementById("popUpProductIngredients");

const products = [
    {
        name: "Ice Cream", calories: "320", protein: "4g", fats: "8,2g", carbs: "40,4g", color: "green",
        ingredients: [
            {name: "Milk", quantity: "100ml",},
            {name: "Belgian chocolate", quantity: "20g",},
            {name: "Cream", quantity: "150ml",},
            {name: "Cocoa powder", quantity: "30g",},
            {name: "Sugar", quantity: "40g",},
            {name: "Vanilla sugar",  quantity: "10g",},
        ]
    },
    {
        name: "Ice Coffee", calories: "250", protein: "4g", fats: "9g", carbs: "32,7g", color: "yellow",
        ingredients: [
            {name: "Milk", quantity: "100ml",},
            {name: "Coffee", quantity: "100ml",},
            {name: "Chocolate syrup", quantity: "2tbsp",},
            {name: "Ice cubes", quantity: "4pcs",},
            {name: "Caramel sauce", quantity: "3tbsp",},
            {name: "Sugar",  quantity: "5g",},
        ]
    },
    {
        name: "Milkshake", calories: "620", protein: "20g", fats: "19g", carbs: "10,4g", color: "pink",
        ingredients: [
            {name: "Milk", quantity: "520ml",},
            {name: "Vanilla ice cream", quantity: "100g",},
            {name: "Vanilla extract", quantity: "2tsp",},
            {name: "Whipped cream", quantity: "30g",},
            {name: "White chocolate", quantity: "20g",},
            {name: "Mini cookies",  quantity: "15g",},
        ]
    },
]

function selectProductPopUp(id) {
    popUpProductName.innerText = products[id].name;
    popUpProductImage.src = `./image/product_icon_${id+1}.webp`
    popUpProductKCal.innerText = products[id].calories;
    popUpProductProtein.innerText = products[id].protein;
    popUpProductFats.innerText = products[id].fats;
    popUpProductCarbs.innerText = products[id].carbs;

    const ingredients = products[id].ingredients.map((item) => `<li class="popup__products_ingredient"><p class="popup__products_ingredient_text">${item.name}</p><p class="popup__products_ingredient_text">${item.quantity}</p></li>`).join("");

    popUpProductIngredients.innerHTML = ingredients;

    for (let element = 0; element < popUpProductNutritionalValues.length; element++) {
        popUpProductNutritionalValues[element].classList = `popup__product_nutritional_value popup__product_nutritional_value-${products[id].color}`
    }

    popUpImageBackground.classList = `popup__products_image_background popup__products_background-${products[id].color}`
    popUpProductKCal.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
    popUpProductProtein.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
    popUpProductFats.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
    popUpProductCarbs.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
}

selectProductPopUp(1)