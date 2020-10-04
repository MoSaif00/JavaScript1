'use strict ';

// App when you have more than 3 items in your shopping cart the first item gets taken out.
/*
1 - Create an array called shoppingCart that holds the following strings: "bananas" and "milk"
2 - Write a function named addToShoppingCart
- It takes 1 argument: a grocery item (string)
- Add grocery item to shoppingCart. If the amount of items is more than 3 remove the first one in the array
- Loops through the array in order to list out the items
- Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
3 - Call the function 3 times, each time with a different string as the argument
*/

const shoppingCart = [
    'bananas',
    'milk'
]; // declared array with name of items 

function addToShoppingCart(item){
    shoppingCart.push(item); // to push the new item to the list

    if(shoppingCart.length > 3){  
        shoppingCart.shift();
    } // check if the the list more than 3 items  remove one from the beggining 

    console.log(` You bought ${shoppingCart.join(', ')}.`);
    
}

addToShoppingCart('chocolate'); // returns bananas , milk, chocolate 
addToShoppingCart('Waffles'); //returns milk, chocolate , Waffles
addToShoppingCart('tea'); // returns chocolate, Waffles, tea

