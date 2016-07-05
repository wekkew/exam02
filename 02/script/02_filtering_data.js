/**
 * Name: Arrays and objects
 * Completion time: max 2 hours
 * Date: 2016-06-30
 *
 * Note
 *
 * Load the supplied recipe_db.js file to your page.
 * All your solutions should work using the data accessible from that file.
 * Please use array methods if possible for the solutions in this exam!
 *
 *
 * Task 1
 *
 * List every recipe name that contains egg(s).
 *
 *
 * Task 2
 *
 * List every recipe name that does not contain flour and milk (none of them).
 *
 *
 * Task 3
 *
 * List top 5 recipe names based on sum weight of ingredients (where quantity is
 * expressed in weight and can be accumulated)
 *
 *
 * Task 4
 *
 * List the name of the five quickest to make recipes.
 *
 *
 * Task 5
 *
 * Generate all possible ingredient triplets (three element combinations) and display
 * the top three based on the number of recipes containing all three of them, also
 * display the recipes containing these combinations.
 *
 */

console.log('------------------------');
console.log('Task 1: List every recipe name that contains egg(s).');
console.log('------------------------');

recipes.forEach(function (currentRecipe) {
    currentRecipe.ingredients.forEach(function (currentIngredient) {
        if (currentIngredient.name === 'tojás') {
            console.log(`${currentRecipe.name}`);
        }
    })
});


console.log('------------------------');
console.log('Task 2: List every recipe name that does not contain flour and milk (none of them).');
console.log('------------------------');

var recipeIngredients = [];
recipes.forEach(function (currentRecipe, index) {
    recipeIngredients.push({name: currentRecipe.name, ingredientList: []});
    currentRecipe.ingredients.forEach(function (currentIngredient) {
        recipeIngredients[index].ingredientList.push(currentIngredient.name);
    })
});

recipeIngredients.forEach(function (currentRecipe) {
    if (currentRecipe.ingredientList.every(function (currentIngredient) {
        if (currentIngredient !== 'tej' && currentIngredient !== 'finomliszt') {
            return true;
        }
        else {
            return false;
        }
    })) {
        console.log(currentRecipe.name);
    }
})

console.log('------------------------');
console.log('Task 3: List top 5 recipe names based on sum weight of ingredients (where quantity is expressed in weight and can be accumulated)');
console.log('------------------------');

var recipeWeigth = [];
recipes.forEach(function (currentRecipe, index) {
    recipeWeigth.push({name: currentRecipe.name, weight: [], sumWeight: []});
    currentRecipe.ingredients.forEach(function (currentIngredient) {
        if (currentIngredient.quantitySuffix === 'g') {
            recipeWeigth[index].weight.push(currentIngredient.quantity * 1);
        }
        if (currentIngredient.quantitySuffix === 'dkg') {
            recipeWeigth[index].weight.push(currentIngredient.quantity * 100);
        }
    })
});
recipeWeigth.forEach(function (currentRecipe) {
    currentRecipe.sumWeight = currentRecipe.weight.reduce(function (a, b) {
        return a + b;
    })
});
recipeWeigth.sort(function (a, b) {
    if (a.sumWeight > b.sumWeight) {
        return -1;
    }
    if (a.sumWeight < b.sumWeight) {
        return 1;
    }
    return 0;
});
for (var i = 0; i < (Math.min(recipeWeigth.length, 5)); i += 1) {
    console.log(recipeWeigth[i].name);
};

console.log('------------------------');
console.log('Task 4: List the name of the five quickest to make recipes.');
console.log('------------------------');

recipeTime = [];
recipes.forEach(function (currentRecipe, index) {
    recipeTime.push({name: currentRecipe.name, time: currentRecipe.timeRequired, reqtime: []});
});
recipeTime.forEach(function (currentRecipe) {
    currentRecipe.reqtime = currentRecipe.time.split(' ');
});
recipeTime.forEach(function (currentRecipe, index) {
    if (currentRecipe.reqtime[1] === 'óra') {
        currentRecipe.time = currentRecipe.reqtime[0] * 60;
    }
    else {
        currentRecipe.time = currentRecipe.reqtime[0] * 1;
    }
});
recipeTime.sort(function (a, b) {
    if (a.time > b. time) {
        return 1;
    }
    if (a.time < b.time) {
        return -1;
    }
    return 0;
});
for (var i = 0; i < (Math.min(recipeTime.length, 5)); i += 1) {
    console.log(recipeTime[i].name);
};

console.log('------------------------');
console.log('Task 5: Generate all possible ingredient triplets (three element combinations) and display the top three based on the number of recipes containing all three of them, also display the recipes containing these combinations.');
console.log('------------------------');

var ingredientList = [];
recipes.forEach(function (currentRecipe) {
    currentRecipe.ingredients.forEach(function (currentIngredient) {
        if (ingredientList.indexOf(currentIngredient.name) !== -1) {
            return;
        }
        else {
            ingredientList.push(currentIngredient.name);
        }
    })
})
var ingredientTriplets = [];
for (var firstIndex = 0; firstIndex < ingredientList.length - 2; firstIndex += 1) {
    var firstIngredient = ingredientList[firstIndex];
    for (var secondIndex = firstIndex + 1; secondIndex < ingredientList.length - 1; secondIndex += 1) {
        var secondIngredient = ingredientList[secondIndex];
        for (var thirdIndex = secondIndex + 1; thirdIndex < ingredientList.length; thirdIndex += 1) {
            var thirdIngredient = ingredientList[thirdIndex];
            ingredientTriplets.push([firstIngredient, secondIngredient, thirdIngredient]);
        }
    }
}

var task5 = [];

ingredientTriplets.forEach(function (currentTriplet) {
    var currentTripletString = currentTriplet.join('');

    recipeIngredients.forEach(function (currentRecipe) {
        if (currentRecipe.ingredientList.some(function (actualIngredient) {return actualIngredient === currentTriplet[0];})
            && currentRecipe.ingredientList.some(function (actualIngredient) {return actualIngredient === currentTriplet[1];})
            && currentRecipe.ingredientList.some(function (actualIngredient) {return actualIngredient === currentTriplet[2];}))
        {
            task5.forEach(function (current5) {
                if (current5.triplet === currentTripletString) {
                    current5.recipe += 1;
                }
                else {
                    task5.push({triplet: currentTripletString, recipe: 1});
                }
            })
        }
    })
})
console.log(task5);
