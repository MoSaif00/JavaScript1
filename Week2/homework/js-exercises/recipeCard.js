'use strict';

// create a recipe list to know how to make certain meal

/*
- Declare a variable that holds an empty object literal (your meal recipe).
- Give the object 3 properties: a title (string), a servings (number) and 
an ingredients (array of strings) property.
- Log each property out separately, using a loop (for, while or do/while)
*/

// declare empty object 
const myMealRecipe = {};

// decalare 3 properties for the object with their values initialized 
myMealRecipe.title = "Nasi";
myMealRecipe.servings = 5;
myMealRecipe.ingredients = [
    "400g of mixed salad",
    "700g of chopped chicken",
    "800g of rice",
    "2 tsp sambal",
    "2 tsp salt/peper/curry"
];

// log each property out sparteley and using loops 
for ( let property in myMealRecipe ){
    console.log( property + " : " + myMealRecipe[property]);
}



