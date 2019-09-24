let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v";
const cocktail = document.getElementById('cocktail');
const searchForm = document.querySelector('.form');
const cocktailInfo = document.getElementById('cocktailInfo');

// asynchronous function to get the JSON document from the url
function getJSON() {
    fetch(url).then(response => response.json())
        .then(data => showCocktail(data))
        .catch(e => {
            cocktail.innerHTML = "<h3>No results found</h3>";
            console.error(e);
        });
}
getJSON();
// function to display data in browser
// WE COULD PUT THIS REPEATED CODE IN A SEPARATE FILE
function showCocktail(data) {
    const card = document.createElement('div');
    card.className = "card";
    cocktail.appendChild(card);
    cocktail.innerHTML += "<ul>"
    for (let drink of data.drinks) {
        console.group(drink.strDrink);
        // we can add in an image - the url is drink.strDrinkThumb
        cocktail.innerHTML += "<li><a href='#'>" + drink.strDrink + "</a></li>";
    }
    cocktail.innerHTML += "</ul>"
}

// searchCocktail function
cocktailInfo.addEventListener('click', (e) => {
    e.preventDefault();
    let searchValue = document.getElementById('searchText').value;
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue;
    getJSON();
});
