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
            url = url + "a";
            getJSON()
            break;
        case "B":
            url = url + "b";
            getJSON()
            break;
        case "B":
            url = url + "b";
            getJSON()
            break;
        case "C":
            url = url + "c";
            getJSON()
            break;
                    case "D":
            url = url + "d";
            getJSON()
            break;
                    case "E":
            url = url + "e";
            getJSON()
            break;
                    case "F":
            url = url + "f";
            getJSON()
            break;
                    case "G":
            url = url + "g";
            getJSON()
            break;
                    case "H":
            url = url + "h";
            getJSON()
            break;
                    case "I":
            url = url + "i";
            getJSON()
            break;
                    case "J":
            url = url + "j";
            getJSON()
            break;
                    case "K":
            url = url + "k";
            getJSON()
            break;
                    case "L":
            url = url + "l";
            getJSON()
            break;
                    case "M":
            url = url + "m";
            getJSON()
            break;
                    case "N":
            url = url + "n";
            getJSON()
            break;
                    case "O":
            url = url + "o";
            getJSON()
            break;
                    case "P":
            url = url + "p";
            getJSON()
            break;
                    case "Q":
            url = url + "q";
            getJSON()
            break;
                    case "R":
            url = url + "r";
            getJSON()
            break;
                    case "S":
            url = url + "s";
            getJSON()
            break;
                    case "T":
            url = url + "t";
            getJSON()
            break;
                    case "U":
            url = url + "u";
            getJSON()
            break;
                    case "V":
            url = url + "v";
            getJSON()
            break;
                    case "W":
            url = url + "w";
            getJSON()
            break;
                    case "X":
            url = url + "x";
            getJSON()
            break;
                    case "Y":
            url = url + "y";
            getJSON()
            break;
                    case "Z":
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