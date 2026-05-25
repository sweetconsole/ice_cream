document.addEventListener("DOMContentLoaded", function () {
	const photoSwiper = document.getElementById("photoSwiper")
	const commentsSwiper = document.getElementById("commentsSwiper")

	if (photoSwiper) {
		new Swiper(photoSwiper, {
			loop: true,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false
			},
			allowTouchMove: false,
			simulateTouch: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			}
		})
	} else {
		console.log("ERROR commentsSwiper not loading!")
	}

	if (commentsSwiper) {
		new Swiper(commentsSwiper, {
			loop: true,
			pagination: {
				el: "commentsSwiperPagination"
			},
			autoplay: {
				delay: 15000,
				disableOnInteraction: false
			},
			allowTouchMove: true,
			simulateTouch: true
		})
	} else {
		console.log("ERROR commentsSwiper not loading!")
	}
})

const menu = document.getElementById("menu")

function viewMenu() {
	menu.classList.toggle("menu-active")
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

const popUpProductName = document.getElementById("popUpProductName")
const popUpProductImage = document.getElementById("popUpProductImage")
const popUpImageBackground = document.getElementById("popUpImageBackground")
const popUpProductNutritionalValues = document.getElementById(
	"popUpProductNutritionalValues"
).children
const popUpProductKCal = document.getElementById("popUpProductKCal")
const popUpProductProtein = document.getElementById("popUpProductProtein")
const popUpProductFats = document.getElementById("popUpProductFats")
const popUpProductCarbs = document.getElementById("popUpProductCarbs")
const popUpProductIngredients = document.getElementById(
	"popUpProductIngredients"
)

const products = [
	{
		name: "Мороженое",
		calories: "320",
		protein: "4 г",
		fats: "8,2 г",
		carbs: "40,4 г",
		color: "green",
		ingredients: [
			{ name: "Молоко", quantity: "100 мл" },
			{ name: "Шоколад", quantity: "20 г" },
			{ name: "Сливки ", quantity: "150 мл" },
			{ name: "Какао порошок", quantity: "30 г" },
			{ name: "Сахар", quantity: "40 г" },
			{ name: "Ванильный сахар", quantity: "10 г" }
		]
	},
	{
		name: "Кофе со льдом",
		calories: "250",
		protein: "4 г",
		fats: "9 г",
		carbs: "32,7 г",
		color: "yellow",
		ingredients: [
			{ name: "Молоко", quantity: "100 мл" },
			{ name: "Кофе", quantity: "100 мл" },
			{ name: "Шоколадный сироп", quantity: "30 мл" },
			{ name: "Кубики льда", quantity: "4 шт" },
			{ name: "Карамель", quantity: "45 мл" },
			{ name: "Сахар", quantity: "5 г" }
		]
	},
	{
		name: "Молочный коктейль",
		calories: "620",
		protein: "20 г",
		fats: "19 г",
		carbs: "10,4 г",
		color: "pink",
		ingredients: [
			{ name: "Молоко ", quantity: "520 мл" },
			{ name: "Ванильное мороженое", quantity: "100 г" },
			{ name: "Ванильный экстракт", quantity: "30 мл" },
			{ name: "Взбитые сливки", quantity: "30 г" },
			{ name: "Белый шоколад", quantity: "20г " },
			{ name: "Мини-печенье", quantity: "15 г" }
		]
	}
]

function selectProductPopUp(id) {
	popUpProductName.innerText = products[id].name
	popUpProductImage.src = `./image/product_icon_${id + 1}.webp`
	popUpProductKCal.innerText = products[id].calories
	popUpProductProtein.innerText = products[id].protein
	popUpProductFats.innerText = products[id].fats
	popUpProductCarbs.innerText = products[id].carbs

	const ingredients = products[id].ingredients
		.map(
			item =>
				`<li class="popup__products_ingredient"><p class="popup__products_ingredient_text">${item.name}</p><p class="popup__products_ingredient_text">${item.quantity}</p></li>`
		)
		.join("")

	popUpProductIngredients.innerHTML = ingredients

	for (
		let element = 0;
		element < popUpProductNutritionalValues.length;
		element++
	) {
		popUpProductNutritionalValues[element].classList =
			`popup__product_nutritional_value popup__product_nutritional_value-${products[id].color}`
	}

	popUpImageBackground.classList = `popup__products_image_background popup__products_background-${products[id].color}`
	popUpProductKCal.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
	popUpProductProtein.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
	popUpProductFats.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
	popUpProductCarbs.classList = `popup__product_nutritional_value_count popup__products_background-${products[id].color}`
}

selectProductPopUp(1)
