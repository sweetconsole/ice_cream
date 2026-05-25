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
