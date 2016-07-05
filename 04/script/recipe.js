var searchElement = document.getElementById('form');

var recipeSection = document.getElementById('recipes');

function detailedRecipe () {
    var currentIndex = event.target.id.substr(3)
    var currentRecipe = recipes[currentIndex]

    var blank = document.createElement('div');
        blank.setAttribute('id', 'blank');
        blank.setAttribute('class', 'blankdiv');
        blank.addEventListener('click', function () {
            document.getElementById('blank').remove();
        })
        document.body.appendChild(blank);

    var detRec = document.createElement('div');
        detRec.setAttribute('id', `${event.target.id}`);
        detRec.setAttribute('class', 'detailedRecipe');
        for (var key in currentRecipe) {

            if (key !== 'ingredients' && key !== 'nutritionInfo') {
                var recipElement = document.createElement('p');
                    recipElement.setAttribute('id', key)
                    recipElement.textContent = `${key} : ${currentRecipe[key]}`;
                detRec.appendChild(recipElement);
            }
            else {
                var recipElement = document.createElement('div');
                if (key === 'ingredients') {
                    recipElement.textContent = `${key}`;
                    currentRecipe.ingredients.forEach(function (currentIngredient, ingredientIndex) {
                        var ingredient = document.createElement('p');
                            ingredient.textContent = `${currentRecipe.ingredients[ingredientIndex].name} : ${currentRecipe.ingredients[ingredientIndex].quantity}${currentRecipe.ingredients[ingredientIndex].quantitySuffix}`;
                        recipElement.appendChild(ingredient);
                    })
                }
                if (key === 'nutritionInfo') {
                    recipElement.textContent = `${key}`;
                    for (var nutriKey in currentRecipe.nutritionInfo) {
                        var nutri = document.createElement('p');
                            nutri.textContent = `${nutriKey} : ${currentRecipe.nutritionInfo[nutriKey]}`
                        recipElement.appendChild(nutri);
                    }
                }
                detRec.appendChild(recipElement);
            }
        }
    blank.appendChild(detRec);
}


function search () {
    var searchPhrase = document.getElementById('search').value.trim();

    if (searchPhrase.length === 0) {
        document.getElementById('answere').remove();
        return;
    }
    if (searchPhrase.length >= 1) {
        while (document.getElementById('answere') !== null) {
            document.getElementById('answere').remove();
        }
    }

    var answere = document.createElement('div');
        answere.setAttribute('id', 'answere');
    document.body.appendChild(answere);

    console.log(searchPhrase);
    var onTheList = false;
    if (searchPhrase.length > 0) {
        recipes.forEach(function (currentRecipe, index) {
            var database = currentRecipe.name.toLowerCase();
            if (database.indexOf(searchPhrase) !== -1) {
                var result = document.createElement('p');
                    result.textContent = recipes[index].name;
                    result.setAttribute('id', `div${index}`);
                    result.setAttribute('class', 'result');
                    result.addEventListener('click', detailedRecipe);
                document.getElementById('answere').appendChild(result);
                onTheList = true;
            }

        })
    }
    if (!onTheList) {
        var noResult = document.createElement('p');
            noResult.textContent = "No result has found.";
            noResult.setAttribute('class', 'result');
        document.getElementById('answere').appendChild(noResult);
    }
}


recipes.forEach(function (currentRecipe, index) {
    var recipe = document.createElement('div');
        recipe.setAttribute('class', 'simpleRecipe');
        recipe.setAttribute('id', `div${index}`);
        recipe.textContent = `${currentRecipe.name}`;
        recipe.addEventListener('click', detailedRecipe);
        recipeSection.appendChild(recipe);
})

searchElement.addEventListener('input', search);
