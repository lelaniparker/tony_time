let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const cocktail = document.getElementById('cocktail');
const searchForm = document.querySelector('.form');
const cocktailInfo = document.getElementById('cocktailInfo');
const alphabet = document.getElementById('alphabet');

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
    const card = document.createElement('div');
    card.className = "card";
    cocktail.appendChild(card);
    cocktail.innerHTML = "<ul>"
    for (let drink of data.drinks) {
        console.group(drink.strDrink);
        cocktail.innerHTML += "<li>" + drink.strDrink + "</li>";
    }
    cocktail.innerHTML += "</ul>"
}

// searchCocktail function
alphabet.addEventListener('change', (e) => {
    e.preventDefault();
    switch(alphabet.value) {
        case "A":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "a";
            getJSON()
            break;
        case "B":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "b";
            getJSON()
            break;
        case "C":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "c";
            getJSON()
            break;
                    case "D":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "d";
            getJSON()
            break;
                    case "E":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "e";
            getJSON()
            break;
                    case "F":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "f";
            getJSON()
            break;
                    case "G":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "g";
            getJSON()
            break;
                    case "H":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "h";
            getJSON()
            break;
                    case "I":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "i";
            getJSON()
            break;
                    case "J":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "j";
            getJSON()
            break;
                    case "K":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "k";
            getJSON()
            break;
                    case "L":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "l";
            getJSON()
            break;
                    case "M":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "m";
            getJSON()
            break;
                    case "N":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "n";
            getJSON()
            break;
                    case "O":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "o";
            getJSON()
            break;
                    case "P":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "p";
            getJSON()
            break;
                    case "Q":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "q";
            getJSON()
            break;
                    case "R":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "r";
            getJSON()
            break;
                    case "S":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "s";
            getJSON()
            break;
                    case "T":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "t";
            getJSON()
            break;
                    case "U":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "u";
            getJSON()
            break;
                    case "V":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "v";
            getJSON()
            break;
                    case "W":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "w";
            getJSON()
            break;
                    case "X":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "x";
            getJSON()
            break;
                    case "Y":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "y";
            getJSON()
            break;
                    case "Z":
            url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
            url = url + "z";
            getJSON()
            break;
        default:
            break;
    }

    // let searchValue = document.getElementById('searchText').value;
    // url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue;
    // getJSON();
});