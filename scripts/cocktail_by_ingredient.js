let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
const cocktail = document.getElementById('cocktail');
const searchForm = document.querySelector('.form');
const submitButton = document.getElementById('submit');

// asynchronous function to get the JSON document from the url
function getJSON() {
    fetch(url).then(response => response.json())
        .then(data => showCocktail(data))
        .catch(e => {
            cocktail.innerHTML = "<h3>No results found</h3>";
            console.error(e);
        });
}

// function to display data in browser
// WE COULD PUT THIS REPEATED CODE IN A SEPARATE FILE
function showCocktail(data) {
    let drink = data.drinks[0];
    console.group(drink);
    cocktail.innerHTML = "";
    // // create div card to display drink:
    const drinkImg = document.createElement('div');
    drinkImg.className = "drinkImg";
    cocktail.appendChild(drinkImg);
    const card = document.createElement('div');
    card.className = "card";
    cocktail.appendChild(card);

    drinkImg.innerHTML = "<img src='" + drink.strDrinkThumb + "' style='margin: 0px;'> ";
    card.innerHTML += "<b>Name:</b> ";
    card.innerHTML += drink.strDrink + "<br /><br />";
    card.innerHTML += "<b>Ingredients:</b> <br />";
    card.innerHTML += drink.strMeasure1 + drink.strIngredient1 + "<br />";
    card.innerHTML += drink.strMeasure2 + drink.strIngredient2 + "<br />";
    card.innerHTML += drink.strMeasure3 + drink.strIngredient3 + "<br />";
    card.innerHTML += drink.strMeasure4 + drink.strIngredient4 + "<br />";
    card.innerHTML += drink.strMeasure5 + drink.strIngredient5 + "<br /><br />";
    card.innerHTML += "<b>Instructions: </b><br />" + drink.strInstructions;
}

// searchCocktail function
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let searchValue = document.getElementById('searchText').value;
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue;
    getJSON();
    clearSearchValue();
});

function clearSearchValue() {
    document.getElementById("searchText").value = "";
}