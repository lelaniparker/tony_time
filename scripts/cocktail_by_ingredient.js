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
    let drink = data.drinks;

    console.group(drink);
    cocktail.innerHTML = "";
    //create div card to display drink:
    const drinkImg = document.createElement('div');
    drinkImg.className = "drinkImg";
    cocktail.appendChild(drinkImg);
    const card = document.createElement('div');
    card.className = "card";
    cocktail.appendChild(card);

    // add loop to itterate through array to display cocktail names
    for (i = 0; i < drink.length; i++)
        document.getElementById("cocktailName").innerHTML += " <br />" + "<b>Name:</b> " + drink[i].strDrink + " <br />" + "<img src='" + drink[i].strDrinkThumb + "' style='height: 270px;'> " + " <br />" + " <br />";
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