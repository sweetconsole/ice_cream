
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